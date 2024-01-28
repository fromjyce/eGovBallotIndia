import "../styles/AdminDashboard.css";
import HeaderLogo from "./Header-Logo.js";
import React, { useEffect } from "react";
//import Left from "./Left.js";
import Language from "./Language.js";
import result from "../assets/createElec.png";

function AdminDashboard() {
  useEffect(() => {
    return () => {
      document.title = "Check Live Results";
    };
  }, []);
  return (
    <div className="AdminDashboard" id="AdminDashboard">
        <HeaderLogo className="header-js"/>
      <div className="admin-dashboard">
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
        
            <img src={result} className="result-image" alt="result" width={200} height={200}/>
          </div>
      </div>
  );
}

export default AdminDashboard;
