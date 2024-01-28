import React, { useState } from "react";
import "../styles/CandidateChoose.css";

function App() {
  const [selectedOption, setSelectedOption] = useState("Male");
  function onValueChange(event) {
    setSelectedOption(event.target.value);
  }

  function formSubmit(event) {
    event.preventDefault();
    //   console.log(selectedOption)
    //   alert("Your gender is " + selectedOption)
  }

  return (
    <form onSubmit={formSubmit}>
      <br />
      <br />
      <ul className="unList">
        <li className="Label">
          <label>
            <input
              type="radio"
              value="Candidate A"
              checked={selectedOption === "Candidate A"}
              onChange={onValueChange}
            />
            <ul className="candidates">
              <li className="CanName">Candidate A</li>
              <li className="CanName">
                <div className="symbol"></div>
              </li>
            </ul>
          </label>
        </li>

        <li className="Label">
          <label>
            <input
              type="radio"
              value="Candidate B"
              checked={selectedOption === "Candidate B"}
              onChange={onValueChange}
            />
            <ul className="candidates">
              <li className="CanName">Candidate B</li>
              <li className="CanName">
                <div className="symbol"></div>
              </li>
            </ul>
          </label>
        </li>

        <li className="Label">
          <label>
            <input
              type="radio"
              value="Candidate C"
              checked={selectedOption === "Candidate C"}
              onChange={onValueChange}
            />
            <ul className="candidates">
              <li className="CanName">Candidate C</li>
              <li className="CanName">
                <div className="symbol"></div>
              </li>
            </ul>
          </label>
        </li>
      </ul>

      <button className="btn btn-default" type="submit">
        CAST YOUR VOTE
      </button>
      <br />
    </form>
  );
}

export default App;
