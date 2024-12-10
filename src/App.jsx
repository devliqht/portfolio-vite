import './css/App.css';
import { Link } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
      <>
        <div className="main-wrapper">
        <div className="hero">
            <Navbar></Navbar>
            <div className="landing">
                <div className="landing-text">
                    <h1>The Turing Site</h1>
                </div>
                <div className="portfolio-containers">
                    <Link to="/portfolio/1">
                        <div className="portfolio-container">
                            <img className="portfolio-container-img" src="assets/cs.png" />
                            <h1 className="league-spartan">Computer Science</h1>
                            <p className="ibm-plex-mono-regular">And the 5 major computing disciplines</p>
                        </div>
                    </Link>
                    <Link to="/portfolio/2">
                        <div className="portfolio-container">
                            <img className="portfolio-container-img" src="assets/is.png" />
                            <h1 className="league-spartan">Information Systems</h1>
                            <p className="ibm-plex-mono-regular">And Different Types of Support Systems</p>
                        </div>
                    </Link>
                    <Link to="/portfolio/3">
                        <div className="portfolio-container">
                            <img className="portfolio-container-img" src="assets/number.png" />
                            <h1 className="league-spartan">Number Systems</h1>
                            <p className="ibm-plex-mono-regular">and their types, uses and significance</p>
                        </div>
                    </Link>         
                </div>
                <div className="portfolio-containers">
                    <Link to="/portfolio/4">
                        <div className="portfolio-container">
                            <img className="portfolio-container-img" src="assets/hardware.png" />
                            <h1 className="league-spartan">Hardware</h1>
                            <p className="ibm-plex-mono-regular">and their Implementations</p>
                        </div>
                    </Link>
                    <Link to="/portfolio/5">
                        <div className="portfolio-container">
                            <img className="portfolio-container-img" src="assets/motherboard.png" />
                            <h1 className="league-spartan">Motherboards</h1>
                            <p className="ibm-plex-mono-regular">Comparative Study</p>
                        </div>
                    </Link>
                    <Link to="/portfolio/6">
                        <div className="portfolio-container">
                            <img className="portfolio-container-img" src="assets/computers.png" />
                            <h1 className="league-spartan">Computers</h1>
                            <p className="ibm-plex-mono-regular">Comparative Study</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default App
