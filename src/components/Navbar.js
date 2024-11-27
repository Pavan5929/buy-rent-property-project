
import '../assets/styles/Navbar.css'
import frame from '../assets/images/Frame.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
            <span className="logo-icon">
                <img src={frame} alt="icon" />
            </span>
        <span className="logo-text">Estatery</span>
        <li><a href="#rent">Rent</a></li>
        <li><a href="#buy">Buy</a></li>
        <li><a href="#sell">Sell</a></li>
        <li className="dropdown">
          <a href="#manage-property">Manage Property  <span className="dropdown-arrow"></span></a>
          <div className="dropdown-content">
            <a href="#option1">Option 1</a>
            <a href="#option2">Option 2</a>
          </div>
        </li>
        <li className="dropdown">
          <a href="#resources">Resources  <span className="dropdown-arrow"></span></a>
          <div className="dropdown-content">
            <a href="#resource1">Resource 1</a>
            <a href="#resource2">Resource 2</a>
          </div>
        </li>
      </ul>
      <div className="navbar-buttons">
        <button className="login-button">Login</button>
        <button className="signup-button">Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
