import React, { useState } from "react";
import SearchBar from "../SearchBar";
import UserContainer from "../UsersContainer";
import data from "../images/data.js";

export default function MainSearchPage() {
  const [myData, setMyData] = useState(data);
  const [searchCriteria, setSearchCriteria] = useState({});
  return (
    <div>
      <SearchBar setSearchCriteria={setSearchCriteria} />
      <UserContainer myData={myData} searchCriteria={searchCriteria} />
    </div>
  );
}
