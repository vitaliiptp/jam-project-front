import React, { useEffect, useState } from "react";
import NotFound from "./NotFound";
import SingleUser from "./SingleUser";
import "./usersContainer.css";

export default function UserContainer({ myData, searchCriteria }) {
  const [newData, setNewData] = useState([]);
  useEffect(() => {
    if (searchCriteria.isSearching) {
      setNewData(
        myData.filter((user) => {
          return (
            user.skill_level === searchCriteria.skill_level &&
            user.genre === searchCriteria.genre &&
            user.instrument === searchCriteria.instrument
          );
        })
      );
    } else {
      setNewData(myData);
    }
  }, [searchCriteria, myData]);

  return (
    <div className="main-users-container">
      {searchCriteria.isSearching && newData.length === 0 ? (
        <NotFound />
      ) : (
        newData.map((user, id) => {
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
        })
      )}
    </div>
  );
}
