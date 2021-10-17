import React from "react";
import "./Contact.css";
import axios from "axios";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function Contact() {
  const lib = ["places"];
  const id = ["9efe2f9aff21c394"];
  const key = process.env.REACT_APP_API_KEY_GOOGLEMAP;
  const MalagaLocation = { lat: 36.7212, lng: -4.4217 };

  return (
    <div className="main-content_contact">
      <div className="main-content_right">
        <p>Test ...</p>
      </div>
      <div className="main-content_left"></div>
      <div className="main-content_map ">
        <LoadScript googleMapsApiKey={key} libraries={lib} mapIds={id}>
          <GoogleMap
            center={MalagaLocation}
            zoom={7}
            options={{ mapId: "9efe2f9aff21c394" }}
            mapContainerStyle={{
              height: "100%",
              width: "100%",
              position: "absolute",
              top: "0px",
              left: "0px",
              backgroundColor: "#000",
            }}
          >
            <Marker position={MalagaLocation} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}

export default Contact;
