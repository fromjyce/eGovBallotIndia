import "../styles/Header.css";
import logo from "../assets/elecComm.jpg";

function Header() {
  return (
    <>
      <div className="header-part">
        <ul className="upper-logo">
          <li className="HorizUpper">
            <img src={logo} height={65} width={74} alt="logo" />
          </li>
          <li className="HorizUpper">
            <ul className="InnerHoriz">
              <li>
                <h3>भारत निर्वाचन आयोग</h3>
              </li>
              <li>
                <h3>Election Commision of India</h3>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;