import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";
import UserModalMap from "../UserModalMap/UserModalMap";
import dummyImg from "../../assets/profile-dummy-700x700.png";
import './index.css'

const GoogleMapsStatic = () => {
    const [openUserModal, setOpenUserModal] = useState(false);
  const [location, setLocation] = useState({
    center: {
      lat: 52.52,
      lng: 13.405,
    },
    zoom: 11,
  });
  const [showUser, setShowUser] = useState(false);
  const [showOtherUsers, setShowOtherUsers] = useState(false);
    const [userId, setUserId] = useState(false);

    const [otherUsersLocation, setOtherUsersLocation] = useState([]);
  // const [radius, setRadius] = useState(10_000); // Show radius on the map (WIP)
  // const [mapReference, setMapReference] = useState(null); // Show radius on the map (WIP)
  // const [mapsReference, setMapsReference] = useState(null); // Show radius on the map (WIP)


    const handleCloseUserModal = () => {
        setOpenUserModal(false);
    };


    const handleModal = (id) => {
        handleShowUserModal();
        setUserId(id);
    }

    const handleShowUserModal = (id) => {
        setOpenUserModal(true);
    };



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

  const showOthers = () => {
    setShowOtherUsers(true);
  };

  // useEffect(() => {
  //   axios.post(`/api/users/${userId}`, {
  //     userId: userId,
  //     userLocation: location,
  //   })
  //       .then((response) => {
  //         console.log(response.data);
  //       })
  //       .catch((err) => {
  //         console.log("Error logging in please try again");
  //       });
  // }, [showUser]);

  useEffect(() => {
      axios
        .get("/users/location")
        .then((response) => {
          setOtherUsersLocation(response.data);
          console.log(response.data);
        })
        .catch((err) => {
          console.log("Error logging in please try again");
        });
  }, [showOtherUsers]);

  // Show radius on the map (WIP)
  // useEffect(() => {
  //   if (mapReference && mapsReference) {
  //     // if not null
  //     const myCircle = new mapsReference.Circle({
  //       strokeColor: "#FF0000",
  //       strokeOpacity: 0.8,
  //       strokeWeight: 2,
  //       fillColor: "#FF0000",
  //       fillOpacity: 0.3,
  //       mapReference,
  //       center: { lat: 22.704892, lng: 75.909964 },
  //       radius: 800,
  //     });
  //   }
  // }, [mapReference, mapsReference]);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <button className="search-user-btn"
          onClick={locateMe}
        >
          Locate Me
        </button>
        <button className="search-user-btn"
          onClick={showOthers}
        >
          Show Other User
        </button>

        {/*Show radius on the map (WIP) */}
        {/*<form>*/}
        {/*  <input type="number" id="radius" name="radius" placeholder="radius in km" style={{width: "7rem"}} onChange={radiusHandler} />*/}
        {/*  <br />*/}
        {/*  <button style={{width: "7.5rem"}} onClick={changeRadius}>Change Radius</button>*/}
        {/*</form>*/}
      </div>

      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.GOOGLE_MAP_KEY,
        }}
        defaultCenter={location.center}
        defaultZoom={location.zoom}
        center={location.center}
        yesIWantToUseGoogleMapApiInternals={true}

        // // Show radius on the map (WIP)
        // onGoogleApiLoaded={({ map, maps }) => {
        //   setMapReference(map);
        //   setMapsReference(maps);
        // }}
      >
        {showUser && (
          <img
            src={dummyImg}
            alt="Profile picture"
            style={{ width: "40px", height: "auto", borderRadius: "30%" }}
            lat={location.center.lat}
            lng={location.center.lng}
          />
        )}
        {showOtherUsers &&
          otherUsersLocation.map((userData) => (
            <img
              src={userData.picture}
              alt="Profile picture"
              style={{ width: "40px", height: "auto", borderRadius: "30%", cursor: "pointer" }}
              lat={userData.latitude}
              lng={userData.longitude}
              onClick={() => {handleModal(userData.user_id)}}
            />
          ))}
      </GoogleMapReact>
        <UserModalMap userId={userId} otherUsersLocation={otherUsersLocation} openUserModal={openUserModal} setOpenUserModal={setOpenUserModal} handleCloseUserModal={handleCloseUserModal} />
    </div>
  );
};

export default GoogleMapsStatic;
