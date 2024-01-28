// import React, { useState } from 'react';
import logo from "../assets/elecComm.jpg";

function LanguageDropdown() {
  return (
    <div className="upper-upper">
      <ul className="upper">
        <li className="HoriUpper">
          <img src={logo} height={100} width={140} alt="logo" />
        </li>
        <li className="HoriUpper">
          <ul className="InnerHori">
            <li>
              <h2>भारत निर्वाचन आयोग</h2>
            </li>
            <li>
              <h2>Election Commision of India</h2>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default LanguageDropdown;
