import "../styles/Login.css";
import Language from "./Language.js";
import LogoUpper from "./Logo-upper.js";
import React, { useEffect } from "react";

function Login() {
  useEffect(() => {
    return () => {
      document.title = "Login";
    };
  }, []);

  const electionname = "LOL";
  const constname = "lol";

  return (
    <>
      <div className="Login" id="Login">
        <div className="login-container">
        <LogoUpper />
          <h3>{electionname}</h3>
          <h3>{constname}</h3>
          <Language />
          <div className="container">
            <p className="heading">SIGN IN</p>
            {/* {% if error_message %}
      <p class="errormessage">{{ error_message }}</p>
      {% endif %} */}
            <form method="post">
              <input
                type="text"
                name="username"
                placeholder="Username"
                required=""
              />
              <br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required=""
              />
              <br />
              <button className="login" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
