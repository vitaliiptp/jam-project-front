import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import UserContainer from "../UsersContainer";
import data from "../images/data.js";
import axios from "axios";

export default function MainSearchPage() {
//   useEffect(() => {
//     axios.get("http://192.168.178.184:5000/users").then((res) => {
//       setMyData(res.data);
//     });
//   });
  const [myData, setMyData] = useState(data);
  const [searchCriteria, setSearchCriteria] = useState({});
  return (
    <div>
      <SearchBar setSearchCriteria={setSearchCriteria} />
      <UserContainer myData={myData} searchCriteria={searchCriteria} />
    </div>
  );
}
