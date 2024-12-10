import '../css/App.css';
import Navbar from "../components/Navbar"

export default function AboutPage() {
    return (
        <>
            <div className="main-wrapper">
                <div className="hero">
                    <Navbar></Navbar>
                    <div className="landing">
                        <div className="landing-text" style={{marginBottom: '1rem'}}>
                            <h1>About</h1>
                        </div>
                        <div className="about-info">
                            <img className="about-img" src="../assets/matt.jpg" alt="Matt Profile" />  
                            <div className="about-info-text">
                                <h1 className="league-spartan">Matt Erron G. Cabarrubias</h1>   
                                <p className="ibm-plex-mono-regular">22103604@usc.edu.ph</p>
                                <p className="ibm-plex-mono-regular">matt.cabarrubias@gmail.com</p>
                                <hr />
                                <h2 className="league-spartan">High School Education</h2>
                                <p className="ibm-plex-mono-regular">Don Bosco Technical College</p>
                                <div className="spacer"></div>
                                <h2 className="league-spartan">Senior High School Education</h2>
                                <p className="ibm-plex-mono-regular">University of San Carlos</p>
                                <div className="spacer"></div>
                                <h2 className="league-spartan">Expertise</h2>
                                <p className="ibm-plex-mono-regular">Web Development, Game Hacking</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}