// import "../styles/Login.css";
import Header from "./Header-Logo.js";
import "../styles/CastVote.css";
import CanChoose from "../components/CandidateChoose.js";
import React, { useEffect } from "react";

function CastVote() {
  useEffect(() => {
    return () => {
      document.title = "Cast Vote";
    };
  }, []);

  const electionname = "LOL";
  const constname = "lol";

  return (
    <>
      <Header />
      <ul>
      <li className="HorizUpper">
        <div className="Details">
          <p>Name: </p>
          <p>Voter ID: </p>
          <p>Balance Tokens: 1</p>
        </div>
      </li>
    </ul>
      <div className="CastVote" id="CastVote">
        <div className="CastVote-container">
          <h2>{electionname}</h2>
          <h2>{constname}</h2>
          <h2>CANDIDATES</h2>
          {/* <div> */}
          {/* <ul className="party-details">
            <li className="innerList">
              <ul className="party-words">
                <li className="Candidate-Party">
                  <p>Candidate A</p>
                </li>
                <li className="Candidate-Party">
                  <p>Party KN</p>
                </li>
              </ul>
            </li>
            <li className="innerList">
              <div className="symbol"></div>
            </li>
          </ul> */}
          {/* </div> */}
          < CanChoose/>
        </div>
      </div>
    </>
  );
}

export default CastVote;
