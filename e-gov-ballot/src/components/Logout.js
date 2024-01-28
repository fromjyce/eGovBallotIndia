// import "../styles/Login.css";
import "../styles/Logout.css";
import Header from "./Header-Logo.js";
import tick from "../assets/tick.png";
import React, { useEffect } from "react";

function Logout() {
  useEffect(() => {
    return () => {
      document.title = "Logout";
    };
  }, []);

  const electionname = "Insert Election Name";
  const constname = "Insert Constituency Name";

  return (
    <>
      <div className="logout" id="logout">
        <div className="logout-container">
          <Header />
          <h2>{electionname}</h2>
          <h3>{constname}</h3>
          <p className="message">Your vote has been recorded successfully</p>
          <img
            className="image"
            src={tick}
            alt="tick"
            height={250}
            width={1450}
          />
          <p className="message">You have been logged out succesfully</p>
          <p className="thank-you">Thank you</p>
        </div>
      </div>
    </>
  );
}

export default Logout;
