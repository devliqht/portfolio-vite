import { Link } from "react-router-dom";
import './../css/nav.css';

export default function Navbar() {
  return (
    <div className="navbar"> 
        <div className="nav-logo">
            <img src="assets/logo.png" alt="logo" />
        </div>
        <div className="nav-links ibm-plex-mono-regular">
            <Link to="/">Portfolios</Link>
            <Link to="/about">About</Link>
            <Link to="/download">Downloads</Link>
        </div>
        <div className="nav-site-name league-spartan">
            Turing
        </div>
    </div>
  );
}
