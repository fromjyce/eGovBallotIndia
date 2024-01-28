import "../styles/DashboardInit.css";
import HeaderLogo from "./Header-Logo.js";
import React, { useEffect } from "react";
//import Left from "./Left.js";
import Language from "./Language.js";
import ongoing from "../assets/ongoingelec.png";

function DashboardInit() {
  useEffect(() => {
    return () => {
      document.title = "Dashboard";
    };
  }, []);
  return (
    <div className="DashboardInit" id="DashboardInit">
        <HeaderLogo className="header-js"/>
      <div className="dashboard-initial">
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
            <img src={ongoing} className="result-image" alt="result" width={787} height={330}/>
          </div>
      </div>
  );
}

export default DashboardInit;