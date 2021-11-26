import React from "react";
import SingleUser from "./SingleUser";
import "./usersContainer.css";
// import axios from "axios";

export default function UserContainer({ myData, searchCriteria }) {
  let newData = myData.filter((user) => {
    return (
      user.skill_level === searchCriteria.skill_level &&
      user.genre === searchCriteria.genre &&
      user.instrument === searchCriteria.instrument
    );
  });

  return (
    <div className="main-users-container">
      {
      (newData.length>0 ? newData : myData).map((user, id) => {
        return (
          <SingleUser
            key={`usersMapping${id}`}
            userId={user.user_id}
            userName={user.user_name}
            city={user.city}
            contactMail={user.contact_mail}
            skillLevel={user.skill_level}
            instrument={user.instrument}
            genre={user.genre}
            contactPhone={user.contact_phone}
            // picture={picture}
          />
        );
      })}
    </div>
  );
}
