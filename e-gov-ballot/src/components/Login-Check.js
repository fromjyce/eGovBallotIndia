import "../styles/Login-Check.css";
import logo from "../assets/ec-logo-center.png";
import Language from "./Language.js";

function LoginCheck() {
    return (
      <div className="LoginCheck" id="LoginCheck">
        <div className="LoginCheck-container">
          <img
            src={logo}
            className="login-center-logo"
            height={100}
            width={150}
            alt="logo"
          />
          <Language />
        </div>
      </div>
    );
}

export default LoginCheck;
