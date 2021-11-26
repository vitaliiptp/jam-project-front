import './style.css';
import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { MainContext } from '../../App';

export default function Profile() {
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [level, setLevel] = useState('beginner');
  const [genre, setGenre] = useState('rock');
  const [instrument, setInstrument] = useState('singing');
  const [bio, setBio] = useState('');
  const { userId } = useContext(MainContext);

  const submitProfile = (e) => {
    e.preventDefault();
    axios
      .post('/users', {
        userId: userId,
        city: city,
        email: email,
        phone: phone,
        level: level,
        genre: genre,
        instrument: instrument,
        bio: bio,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className='Profile'>
      <h2>Create your Profile</h2>
      <form onSubmit={submitProfile}>
        <label>City:</label>
        <input
          type='text'
          name='city'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label>Email:</label>
        <input
          type='text'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Phone:</label>
        <input
          type='text'
          name='phone'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label for='selectLevel' className='select'>
          Your Level:
        </label>
        <select
          className='selectLevel'
          name='level'
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value='beginner'>beginner</option>
          <option value='intermediate'>intermediate</option>
          <option value='advanced'>advanced</option>
          <option value='professional'>professional</option>
        </select>
        <label for='selectLevel' className='selectLabel'>
          Your genres:
        </label>
        <select
          name='genre'
          className='selectMultiple'
          name='level'
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value='rock'>rock</option>
          <option value='indie'>indie</option>
          <option value='jazz'>jazz</option>
          <option value='classic'>classic</option>
          <option value='blues'>blues</option>
        </select>
        <label for='selectLevel' className='selectLabel'>
          Your instruments:
        </label>
        <select
          name='instrument'
          className='selectMultiple'
          name='level'
          onChange={(e) => setInstrument(e.target.value)}
        >
          <option value='singing'>singing</option>
          <option value='giutar'>giutar</option>
          <option value='drums'>drums</option>
          <option value='bass'>bass</option>
          <option value='keyboards'>keyboards</option>
          <option value='synthesizer'>synthesizer</option>
          <option value='triangel'>triangle</option>
        </select>
        <label for='text'>write sth about you..</label>
        <textarea
          name='bio'
          onChange={(e) => setBio(e.target.value)}
        ></textarea>

        <input type='submit' value='Submit' className='submitButton' />
      </form>
    </div>
  );
}
