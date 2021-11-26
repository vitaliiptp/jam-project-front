import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import './App.css';
import Profile from '../src/components/Profile';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/Navbar/About';
import Welcome from './components/Welcome';
import MainSearchPage from './components/MainSearchPage';
import Map from './components/Map';

export const MainContext = createContext();

function App() {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [inputName, setInputName] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [message, setMessage] = useState('');
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = () => {
    axios
      .get('/login')
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          setUserName(response.data.userName);
          setUserId(response.data.userId);
          setRegisterModal(false);
          setLoginModal(false);
          setMessage('');
          setInputName('');
          setInputPassword('');
        }
      })
      .catch((err) => console.log(err));
  };

  const login = () => {
    axios
      .post('/login', { name: inputName, password: inputPassword })
      .then((response) => {
        if (response.status === 200) {
          setMessage(response.data.message);
          if (response.data.loggedIn) {
            checkLogin();
          }
        }
        if (response.status === 400 || 401) {
          setMessage(response.data.message);
          console.log(response.data?.error);
        }
      })
      .catch((err) => {
        setMessage('Sorry, something went wrong');
        console.log(err);
      });
  };

  const register = () => {
    axios
      .post('/register', { name: inputName, password: inputPassword })
      .then((response) => {
        if (response.status === 200) {
          setMessage(response.data.message);
          login();
        }
        if ((response.status === 400) | 401) {
          setMessage(response.data.message);
          console.log(response.data.error);
        }
      })
      .catch((err) => {
        setMessage('Sorry, something went wrong');
        console.log(err);
      });
  };

  const logout = () => {
    axios
      .get('/logout')
      .then((response) => {
        if (response.status === 200) {
          console.log('logout', response.data);
          setUserName('');
          setUserId('');
          setInputName('');
          setInputPassword('');
          checkLogin();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <MainContext.Provider value={{ userName, userId }}>
      <BrowserRouter>
        <div className='App'>
          <Navbar
            setLoginModal={setLoginModal}
            setRegisterModal={setRegisterModal}
            logout={logout}
          />
          <RegisterModal
            show={registerModal}
            setShow={setRegisterModal}
            name={inputName}
            password={inputPassword}
            setName={setInputName}
            setPassword={setInputPassword}
            register={register}
            message={message}
            setMessage={setMessage}
          />
          <LoginModal
            show={loginModal}
            setShow={setLoginModal}
            name={inputName}
            password={inputPassword}
            setName={setInputName}
            setPassword={setInputPassword}
            login={login}
            message={message}
            setMessage={setMessage}
          />
          <Switch>
            <Route path='/' exact>
              <Welcome />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/profile'>
              <Profile />
            </Route>
            <Route path='/search'>
              <MainSearchPage />
            </Route>
            <Route path='/map'>
              <Map />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </MainContext.Provider>
  );
}

export default App;
