import React, { useState } from "react";
import "./SearchBar.css";
export default function SearchBar(props) {
  const [skillLevel, setSkillLevel] = useState([
    "Beginner",
    "Intermediate",
    "Advanced",
  ]);
  const [instrument, setInstrument] = useState([
    "Banjo",
    "Bass",
    "Drums",
    "Guitar",
    "Harmonica",
    "Piano",
    "Violin",
    "Vocal",
  ]);
  const [city, setCity] = useState(["Berlin", "Dortmund", "Hannover"]);
  const [genre, setGenre] = useState(["Classical", "Country", "Blues", "Rock"]);
  const [searchGenres, setSearchGenres] = useState();
  const [searchInstrument, setSearchInstrument] = useState();
  const [searchSkillLevel, setSearchSkillLevel] = useState();
  const [searchCity, setSearchCity] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setSearchCriteria({
      genre: searchGenres,
      instrument: searchInstrument,
      skill_level: searchSkillLevel,
      city: searchCity,
      isSearching: true,
    });
  };
  const handleReset = (e) => {
    props.setSearchCriteria({ isSearch: false });
  };

  return (
    <div className="UserSearchBar">
      <h1>SEARCH FOR JAMMERS TO JAM!</h1>
      <form className="formUserSearchBar" onSubmit={handleSubmit}>
        <div className="formSelect">
          <select
            className="selectTheOption"
            onChange={(e) => {
              setSearchCity(e.target.value);
            }}
          >
            <option value="">City</option>
            {city.map((city, index) => {
              return (
                <option key={`cityID${index}`} value={city}>
                  {city}
                </option>
              );
            })}
          </select>
          <select
            className="selectTheOption"
            onChange={(e) => {
              setSearchSkillLevel(e.target.value);
            }}
          >
            <option value="">Skill Level</option>
            {skillLevel.map((skill, index) => {
              return (
                <option key={`skillID${index}`} value={skill}>
                  {skill}
                </option>
              );
            })}
          </select>
          <select
            className="selectTheOption"
            onChange={(e) => {
              setSearchInstrument(e.target.value);
            }}
          >
            <option value="">Instrument</option>
            {instrument.map((item, index) => {
              return (
                <option key={`InstrumentID${index}`} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
          <select
            className="selectTheOption"
            onChange={(e) => {
              setSearchGenres(e.target.value);
            }}
          >
            <option value="">Genre</option>
            {genre.map((genre, index) => {
              return (
                <option key={`genreID${index}`} value={genre}>
                  {genre}
                </option>
              );
            })}
          </select>
        </div>
        <button className="search-user-btn" type="submit">
          SEARCH
        </button>
        <button type="reset" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
}
