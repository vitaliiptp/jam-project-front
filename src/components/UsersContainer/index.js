import React from 'react'
import SingleUser from './SingleUser'
import './usersContainer.css'

export default function UserContainer() {

   const myData= [
    {
        user_id: "1",
        user_name: "Marta",
        city:'Berlin',
        contact_mail:"marta@gmail.com",
        skill_level: "beginner",
        instrument: "piano",
        genre: "classical",
        contact_phone: "+123123123",
        // picture: "picture"
    },
    {
        user_id: "2",
        user_name: "Anna",
        city:'Berlin',
        contact_mail:"anna@gmail.com",
        skill_level: "beginner",
        instrument: "guitar",
        genre: "rock",
        contact_phone: "+123123123",
                // picture: "picture"

    },
    {
        user_id: "3",
        user_name: "Eike",
        city:'Berlin',
        contact_mail:"eike@gmail.com",
        skill_level: "intermediate",
        instrument: "harmonica",
        genre: "blues",
        contact_phone: "+123123123",
                // picture: "picture"

    },
    {
        user_id: "4",
        user_name: "Claudia",
        city:'Berlin',
        contact_mail:"claudia@gmail.com",
        skill_level: "advanced",
        instrument: "banjo",
        genre: "country",
        contact_phone: "+123123123",
                // picture: "picture"

    },
    {
        user_id: "5",
        user_name: "Vitalii",
        city:'Berlin',
        contact_mail:"vitalii@gmail.com",
        skill_level: "beginner",
        instrument: "bas",
        genre: "rock",
        contact_phone: "+123123123",        contact_phone: "+123123123",

                // picture: "picture"

    },
    {
        user_id: "6",
        user_name: "Berd",
        city:'Berlin',
        contact_mail:"berd@gmail.com",
        skill_level: "intermediate",
        instrument: "violin",
        genre: "classical",
        contact_phone: "+123123123",
                // picture: "picture"

    },
    {
        user_id: "7",
        user_name: "Lena",
        city:'Berlin',
        contact_mail:"lena@gmail.com",
        skill_level: "advanced",
        instrument: "electric guitar",
        genre: "rock",
        contact_phone: "+123123123",
                // picture: "picture"

    },
    {
        user_id: "8",
        user_name: "Pilar",
        city:'Berlin',
        contact_mail:"pilar@gmail.com",
        skill_level: "advanced",
        instrument: "drums",
        genre: "rock",
        contact_phone: "+123123123",
                // picture: "picture"

    },
    {
        user_id: "9",
        user_name: "Ugo",
        city:'Berlin',
        contact_mail:"ugo@gmail.com",
        skill_level: "intermediate",
        instrument: "vocal",
        genre: "rock",
        contact_phone: "+123123123",
                // picture: "picture"

    }
]

    return (
        <div className="main-users-container">
        {myData.map((user)=>{
            return <SingleUser
            userId = {user.user_id}
            userName = {user.user_name}
            city={user.city}
            contactMail= {user.contact_mail}
            skillLevel={user.skill_level}
            instrument= {user.instrument}
            genre={user.genre}
            contactPhone={user.contact_phone}
            // picture={picture}
            />
        })}    
        </div>
    )
}
