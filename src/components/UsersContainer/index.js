import React from 'react'
import SingleUser from './SingleUser'
import './usersContainer.css'

export default function UserContainer() {
    return (
        <div className="main-users-container">
            <SingleUser/>
            <SingleUser/>
            <SingleUser/>
            <SingleUser/>
            <SingleUser/>
            <SingleUser/>
            <SingleUser/>

            {/* we will have to pass props from db here and map the SingleUser component (+maybe filter) with the info from db*/}
        </div>
    )
}
