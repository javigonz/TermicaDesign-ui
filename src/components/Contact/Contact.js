import React, { useState } from "react";
import "./Contact.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import iconGoogle from "../../images/googleIcon.png";

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const lib = ["places"];
  const id = ["9efe2f9aff21c394"];
  const key = process.env.REACT_APP_API_KEY_GOOGLEMAP;
  const MalagaLocation = { lat: 36.7212, lng: -4.4217 };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="main-content_contact">
      <div className="main-content_right">
        <h1>
          Contact <a className="highlight">me</a>
        </h1>
        <div className="main-content_contactdescription">
          <p>
            If you want more info about me or my work, please send me a message
            by form or directly by mail. Or if you would prefer visit my{" "}
            <a href="https://www.linkedin.com/in/javier-gonz%C3%A1lez-19634710/">
              Linkedin page.
            </a>
          </p>
        </div>
        <form onSubmit={onSubmit}>
          <div className="input-fields">
            <input
              placeholder="Name"
              className="input-line full-width"
              value={name}
              onChange={(event) => setName(event.target.value)}
            ></input>
            <input
              placeholder="Email"
              className="input-line full-width"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            ></input>
            <textarea
              placeholder="Message"
              className="input-line full-width"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>
          </div>
          <div className="center">
            <button type="submit" className="ghost-round middle-width">
              Send me!
            </button>
          </div>
        </form>
      </div>
      <div className="main-content_info">
        Javier González Páez
        <br />
        Málaga, Spain
        <br />
        <br />
        javier.gonzalez@gmail.com
      </div>
      <div className="main-content_map ">
        <LoadScript
          googleMapsApiKey={key}
          libraries={lib}
          mapIds={id}
          language="en"
        >
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
            <Marker position={MalagaLocation} icon={iconGoogle} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}

export default Contact;
