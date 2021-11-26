import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import UserContainer from "../UsersContainer";
import data from "../images/data.js";
import axios from "axios";

export default function MainSearchPage() {
  // useEffect(() => {
  //   axios.get("/users").then((res) => {
  //     setMyData(res.data);
  //     console.log(res.data)
  //   });
  // }, []);
  const [myData, setMyData] = useState(data);
  const [searchCriteria, setSearchCriteria] = useState({});
  return (
    <div>
      <SearchBar setSearchCriteria={setSearchCriteria} />
      <UserContainer myData={myData} searchCriteria={searchCriteria} />
    </div>
  );
}
