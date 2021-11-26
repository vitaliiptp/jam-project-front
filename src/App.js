import Navbar from './components/Navbar';
import Register from './components/Navbar/Register';
import Login from './components/Navbar/Login';
import About from './components/Navbar/About';
import Welcome from './components/Welcome';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <div className="AppContainer">
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Welcome />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
