import '../css/App.css';
import Navbar from '../components/Navbar';

export default function DownloadPage() {
    return (
        <div className="main-wrapper">
        <div className="hero">
            <Navbar></Navbar>
            <div className="landing">
                <div className="landing-text">
                    <h1>Download</h1>
                </div>
                <div className="download-wrapper">
                    <a href="../assets/portfolios/portfolio1.pdf" download>                  
                        <div className="download">
                            <img className="download-img" src="../assets/cs.png" alt="Computer Science" />
                            <div className="download-text">
                                <h1 className="league-spartan">Computer Science</h1>
                                <p className="ibm-plex-mono-regular">Portfolio 1</p>
                            </div>
                            <i className="fa-solid fa-download fa-2xl"></i>
                        </div>
                    </a>
                    <a href="../assets/portfolios/portfolio2.pdf" download>
                        <div className="download">
                            <img className="download-img" src="../assets/is.png" alt="Information Systems" />
                            <div className="download-text">
                                <h1 className="league-spartan">Information Systems</h1>
                                <p className="ibm-plex-mono-regular">Portfolio 2</p>
                            </div>
                            <i className="fa-solid fa-download fa-2xl"></i>
                        </div>
                    </a>   
                    <a href="../assets/portfolios/portfolio3.pdf">
                        <div className="download">
                            <img className="download-img" src="../assets/number.png" alt="Number Systems" />
                            <div className="download-text">
                                <h1 className="league-spartan">Number Systems</h1>
                                <p className="ibm-plex-mono-regular">Portfolio 3</p>
                            </div>
                            <i className="fa-solid fa-download fa-2xl"></i>
                        </div>
                    </a>
                    <a href="../assets/portfolios/portfolio4.pdf">
                        <div className="download">
                            <img className="download-img" src="../assets/hardware.png" alt="Computer Hardware" />
                            <div className="download-text">
                                <h1 className="league-spartan">Computer Hardware</h1>
                                <p className="ibm-plex-mono-regular">Portfolio 4</p>
                            </div>
                            <i className="fa-solid fa-download fa-2xl"></i>
                        </div>
                    </a>
                    <a href="../assets/portfolios/portfolio5.pdf">
                        <div className="download">
                            <img className="download-img" src="../assets/motherboard.png" alt="Motherboards" />
                            <div className="download-text">
                                <h1 className="league-spartan">Motherboards</h1>
                                <p className="ibm-plex-mono-regular">Portfolio 5</p>
                            </div>
                            <i className="fa-solid fa-download fa-2xl"></i>
                        </div>
                    </a>
                    <a href="../assets/portfolios/portfolio6.pdf">
                        <div className="download">
                            <img className="download-img" src="../assets/computers.png" alt="Computers" />   
                            <div className="download-text">
                                <h1 className="league-spartan">Computers</h1>
                                <p className="ibm-plex-mono-regular">Portfolio 6</p>
                            </div>
                            <i className="fa-solid fa-download fa-2xl"></i>
                        </div>
                    </a>
                    </div>
                </div>
            </div>
        </div>  
    );
}