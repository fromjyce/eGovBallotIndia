import "../styles/Login-Admin.css";
import Language from "./Language.js";
import Logo from "../assets/ec-logo-center.png";
import React, { useEffect } from "react";

function LoginCheck() {
  useEffect(() => {
    return () => {
      document.title = "Login";
    };
  }, []);

  return (
    <>
      <div className="Login" id="Login">
        <div className="login-container">
        <img src={Logo} alt="logo" height={150} width={750}/>
          <h2>ADMIN LOGIN</h2>
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

export default LoginCheck;