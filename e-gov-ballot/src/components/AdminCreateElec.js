import "../styles/AdminCreateElec.css";
import HeaderLogo from "./Header-Logo.js";
import React, { useEffect } from "react";
//import Left from "./Left.js";
import Language from "./Language.js";
import result from "../assets/addCandidate.png";

function AdminCreateElec() {
  useEffect(() => {
    return () => {
      document.title = "Check Live Results";
    };
  }, []);
  return (
    <div className="AdminCreateElec" id="AdminCreateElec">
        <HeaderLogo className="header-js"/>
      <div className="admin-create-election">
        <div className="left-side-dashboard">
            <div className="menu-list">
                <div className="menu-list-item one">
                    Home
                </div>
                <div className="menu-list-item two">
                    Profile
                </div>
                <div className="menu-list-item three">
                    Logout
                </div>
                <Language />
            </div>
        </div>
        
            <img src={result} className="result-image" alt="result" width={787} height={340}/>
          </div>
      </div>
  );
}

export default AdminCreateElec;