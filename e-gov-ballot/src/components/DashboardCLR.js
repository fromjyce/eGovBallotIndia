import "../styles/DashboardCLR.css";
import HeaderLogo from "./Header-Logo.js";
import React, { useEffect } from "react";
//import Left from "./Left.js";
import Language from "./Language.js";
import result from "../assets/results.png";

function DashboardCLR() {
  useEffect(() => {
    return () => {
      document.title = "Login";
    };
  }, []);
  return (
    <div className="DashboardCLR" id="DashboardCLR">
        <HeaderLogo className="header-js"/>
      <div className="dashboard-check-live-results">
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
            <img src={result} className="result-image" alt="result" width={787} height={437}/>
          </div>
      </div>
  );
}

export default DashboardCLR;
