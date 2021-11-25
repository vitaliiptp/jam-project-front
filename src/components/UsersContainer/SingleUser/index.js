import React from 'react';
import Follow from '../Follow';
import './singleUser.css';
import { FaSpotify } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import TestImage from '../../images/people/test-img.jpg'

export default function SingleUser(props) {
    const {userId, userName, city, contactMail, skillLevel, instrument, genre, contactPhone, picture} = props;

    return (
        <div className="single-user-main-wrapper">
            <div className="single-user-top-part">
                <div className="single-user-follow-feature">
                    <Follow/>
                </div>
                <div className="single-user-top-details">
                    <h4 className="single-user-top-details-big-heading">{userName}, {city}</h4>
                    <img src={TestImage} className="userImage"/>
                </div>
                <div className="single-user-middle-ikons">
                    <AiFillLinkedin className="ikon linkedin" />
                    <FaSpotify className="ikon spotify"/> 
                    <BsYoutube className="ikon youtube"/>
                    <AiFillTwitterCircle className="ikon twitter" /> 
 
                </div>
            </div>
        <div className="single-user-bottom-part">
            <div className="single-user-bottom-part-musician-details">
                    <p>Skills level: <b> {skillLevel} </b></p>
                    <p>Genre: <b> {genre} </b> </p>
                    <p><b>{instrument}</b></p>
                </div>
                <div className="single-user-jam-button-wrapper">
                    {/* <button className="single-user-jam-button">Let's Jam!</button> */}
                    <span onClick={()=>{
                        alert(`Please contact me on the following email: ${contactMail} or phone number: ${contactPhone}`)
                    }}><a href="#"></a></span>

                </div>
            </div>
        </div>
    )
}
