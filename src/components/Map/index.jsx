import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import dummyImg from "../../assets/profile-dummy-700x700.png";

const GoogleMapsStatic = () => {
  const [location, setLocation] = useState({
    center: {
      lat: 52.52,
      lng: 13.405,
    },
    zoom: 11,
  });
  const [showUser, setShowUser] = useState(false);
  const [radius, setRadius] = useState(10_000);

  const locateMe = () => {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
    } else {
      console.log("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            zoom: 11,
          });
          setShowUser(true);
          console.log(location);
        },
        () => {
          console.log("Unable to retrieve your location");
        }
      );
    }
  };


  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <button
          onClick={locateMe}
          style={{ width: "5rem", marginRight: "1rem" }}
        >
          Locate Me
        </button>
      </div>
      {showUser && (
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.GOOGLE_MAP_KEY,
          }}
          defaultCenter={location.center}
          defaultZoom={location.zoom}
          center={location.center}
          yesIWantToUseGoogleMapApiInternals={true}
          onGoogleApiLoaded={({ map, maps }) => {
            new maps.Circle({
              strokeColor: "#FF0000",
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: "#FF0000",
              fillOpacity: 0.3,
              map,
              center: { lat: location.center.lat, lng: location.center.lng },
              radius: radius,
            });
          }}
        >
          <img
            src={dummyImg}
            alt="Profile picture"
            style={{ width: "40px", height: "auto", borderRadius: "30%" }}
            lat={location.center.lat}
            lng={location.center.lng}
          />

          <img
            src={dummyImg}
            alt="Profile picture"
            style={{ width: "40px", height: "auto", borderRadius: "30%" }}
            lat="52.52"
            lng="13.405"
          />
        </GoogleMapReact>
      )}
      {!showUser && (
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.GOOGLE_MAP_KEY,
          }}
          defaultCenter={location.center}
          defaultZoom={location.zoom}
          center={location.center}
        >
            <img
                src={dummyImg}
                alt="Profile picture"
                style={{ width: "40px", height: "auto", borderRadius: "30%" }}
                lat="52.52"
                lng="13.405"
            />
        </GoogleMapReact>
      )}
    </div>
  );
};

export default GoogleMapsStatic;
