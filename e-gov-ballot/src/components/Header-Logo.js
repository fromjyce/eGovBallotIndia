import "../styles/Header-Logo.css";
import logo from "../assets/ec-logo-navbar.png";

function HeaderLogo() {
    return (
      <div className="HeaderLogo" id="HeaderLogo">
        <div className="header-logo-container">
          <div className="grey-navbar-rectangle">
            <img
              src={logo}
              height={110}
              width={450}
            alt="election-commission-logo"
            />
          </div>
        </div>
      </div>
    );
}

export default HeaderLogo;

