import React, { useState } from "react";
import "./style.css";
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
      city: searchCity
    });
  };

  return (
    <div className="SearchBar">
      <form onSubmit={handleSubmit}>
        <select
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
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
