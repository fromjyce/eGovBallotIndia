import "../styles/DashboardFinal.css";
import HeaderLogo from "./Header-Logo.js";
import React, { useEffect } from "react";
//import Left from "./Left.js";
import Language from "./Language.js";
import result from "../assets/finalResults.png";

function DashboardFinal() {
  useEffect(() => {
    return () => {
      document.title = "Check Final Results";
    };
  }, []);
  return (
    <div className="DashboardFinal" id="DashboardFinal">
        <HeaderLogo className="header-js"/>
      <div className="dashboard-check-final-results">
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
            <img src={result} className="result-image" alt="result" width={700} height={490}/>
          </div>
      </div>
  );
}

export default DashboardFinal;