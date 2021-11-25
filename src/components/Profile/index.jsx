import './style.css'
import axios from 'axios';
import React, {useEffect, useState,useContext} from 'react';
import {MainContext} from '../../App';

export default function Profile() {
    const [name,setName] = useState("");
    const [city,setCity] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [level,setLevel] = useState("beginner");
    const [genre,setGenre] = useState([]);
    const [instrument,setInstrument] = useState([]);
    const [message,setMessage]= useState([]);
    const {userId}= useContext(MainContext);
    
    const submitProfil=()=>{
        axios.post('/user', {
            userId:userId,
            name: name,
            city: city,
            email:email,
            phone:phone,
            level:level,
            genre:genre,
            instrument:instrument,
            message:message
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });};


   return (
        <div className="Profile">
            <form onSubmit={submitProfil}> 
                <label>
                    Name:
                    <input type="text" name="name" value={name}
                    onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    City:
                    <input type="text" name="city" value={city}
                    onChange={(e) => setCity(e.target.value)}/>
                </label>
                <label>
                    Email:
                    <input type="text" name="email" value={email} 
                    onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label>
                    Phone:<input type="text" name="phone" value={phone}
                    onChange={(e) => setPhone(e.target.value)}/>
                </label>
                <label for="selectLevel" className="select">Your Level:</label>
                <select className="selectLevel" name="level" onChange={(e) => setLevel(e.target.value)}>
                    <option value="beginner">beginner</option>
                    <option value ="intermediate">intermediate</option>
                    <option value="advanced">advanced</option>
                    <option value="professional">professional</option>
                </select>
                <label for="selectLevel" className="selectLabel">Your genres:</label>
                <select name="genre" multiple="multiple"
                className="selectMultiple" name="level" onChange={(e) => setGenre(e.target.value)}>
                    <option value="rock">rock</option>
                    <option value="indie">indie</option>
                    <option value="jazz">jazz</option>
                    <option value="classic">classic</option>
                    <option value="blues">blues</option>
                </select>
                <label for="selectLevel" className="selectLabel">Your instruments:</label>
                <select name="instrument" multiple="multiple"
                 className="selectMultiple" name="level" onChange={(e) => setInstrument(e.target.value)}>
                    <option value="singing">singing</option>
                    <option value="giutar">giutar</option>
                    <option value="drums">drums</option>
                    <option value="bass">bass</option>
                    <option value="keyboards">keyboards</option>
                    <option value="synthesizer">synthesizer</option>
                    <option value="triangel">triangle</option>
                </select>
                <textarea name="message" onChange={(e) => setMessage(e.target.value)}>write sth about you...</textarea>

                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}