import '../../css/portfolios/Portfolios.css';
import { Link } from 'react-router-dom';

export default function ComputerScience() {
    return (
        <>
            <div className="container">
                <aside className="sidebar">
                    <div className="grouped-nav">
                        <div className="logo league-spartan">Turing</div>
                        <span id="counter" className="ibm-plex-mono-regular">Matches: 0</span>
                        <ul className="sidebar-links ibm-plex-mono-regular">
                            <li>
                                <a href="#computer-science">Computer Science</a>    
                                <ul>
                                    <li><a href="#cs-intro">Introduction to CS</a></li>
                                    <li><a href="#three-process">The Three Process of CS</a></li>
                                    <ul>
                                        <li><a href="#three-process">Process of Theory</a></li>
                                        <li><a href="#three-process">Process of Abstraction</a></li>
                                        <li><a href="#three-process">Process of Design</a></li>
                                    </ul>
                                </ul>
                            </li>
                            <div className="nav-spacer"></div>
                            <li>    
                                <a href="#cs-disciplines">5 Computing Disciplines</a>    
                                <ul>
                                    <li><a href="#acm">ACM Computing Curricula 2005</a></li>
                                    <li><a href="#cs-intro">Computer Science</a></li>
                                    <li><a href="#cpe">Computer Engineering</a></li>
                                    <li><a href="#se">Software Engineering</a></li>
                                    <li><a href="#is">Information Systems</a></li>
                                    <li><a href="#it">Information Technology</a></li>
                                </ul>
                            </li>
                            <div className="nav-spacer"></div>
                        </ul>
                    </div>
                    <footer style={{bottom: '20px', color: '#b3b3b3', fontSize: '0.8rem'}}>
                        <p>&copy; 2024 The Turing Site. Developed by Matt Cabarrubias</p>
                    </footer>
                </aside>
                <main className="main-content">
                    <nav className="navbar" style={{justifyContent: 'right', gap: '2rem'}}>
                        <div className="search-container">
                            <input type="text" id="search-bar" className="search-bar" placeholder="Search..." />
                            <button className="search-button">🔍</button>
                        </div>
                        <ul className="nav-links ibm-plex-mono-regular">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                        <div className="nav-logo">
                            <img src="/assets/logo.png" alt="logo" />
                        </div>      
                    </nav>
                    <section className="content" style={{margin: '1rem', overflowY: 'scroll'}}>
                        <h1 id="cs-intro" style={{marginTop: '0', color: 'var(--site-green)', textAlign: 'center'}} >Computer Science as a Discipline</h1>
                        <div className="enclosed">
                            <ul>
                                <li>The computing profession is the people and institutions that have been created to take care of other people's concerns in information processing and coordination through worldwide communication systems.</li>
                                <li>The profession contains various specialties such as computer science, computer engineering, software engineering, information systems, and information technology.</li>
                            </ul>
                        </div>

                        <div className="spacer"></div>
                
                        <h2 id="three-process">The Three Processes of Computer Science</h2>
                        <div className="enclosed">
                            <ul>
                                <li><span style={{fontWeight: 'bold', color: 'rgb(253, 253, 253)'}}>Process of Theory</span></li>
                                    <ul>
                                        <li>The approach of making formal definitions, conjecturing theorems, and creating proofs occurs at all levels in verifying correctness of hardware and software, analyzing performance of particular designs, and establishing the theoretical limitations of computation.</li>                    
                                    </ul>
                                <li><span style={{fontWeight: 'bold', color: 'rgb(253, 253, 253)'}}>Process of Abstraction</span></li>
                                    <ul>
                                        <li>Recognizing patterns in comparable situations and distilling models that express common characteristics, while discarding attributes that differ from case to case.</li>
                                    </ul>
                                <li><span style={{fontWeight: 'bold', color: 'rgb(253, 253, 253)'}}>Process of Design</span></li>
                                    <ul>
                                        <li>One designs to understand the principles and possibilities of computing; designs of systems and programs employ theoretical results and apply abstract notions, frameworks, and methods. In Computer Science, design aims more for better comprehension of the nature of computing than for production of a particular product.</li>
                                    </ul>
                            </ul>       
                        </div>
                        <div className="spacer"></div>

                        <div className="info-modal">
                            <div className="info-modal-title">
                                <i className="fa-solid fa-circle-info fa-2x"></i>
                                <h3 style={{paddingLeft: '1rem', paddingTop: '0', paddingBottom: '0'}}>Something to note</h3>
                            </div>
                            <ul>
                                <li>
                                    Many activities in computing are not programming-for example, hardware design, system architecture, operating system structure, designing a database application, and validating models-therefore the notion that “computer science equals programming” is misleading. 
                                </li>
                            </ul>
                        </div>
        
                        <div className="spacer"></div>

                        <h1 id="cs-disciplines" style={{textAlign: 'center'}}>The 5 Computing Disciplines and Majors</h1>
                        <h2 id="acm">ACM Computing Curricula 2005</h2>
                        <div className="enclosed">
                            <img className="content-img" src="/assets/disciplines/acm.png" alt="ACM Computing Curricula 2005" />
                            <p>
                                The ACM Computing Curricula 2005 (CC2005) is a set of guidelines developed by the Association for Computing Machinery (ACM) to provide a framework for undergraduate computing education. It outlines a comprehensive set of recommendations for what should be included in computing degree programs to ensure they are up-to-date and relevant to the field (Shackelford et al., 2006).
                            </p>
                        </div>
                        
                        <div className="spacer"></div>

                        <h1 id="cpe">Computer Engineering</h1>
                        <div className="enclosed no-shadow">
                            <img className="content-img" src="/assets/disciplines/cpe.png" alt="Computer Engineering" />
                            <p>Computer engineering is defined as the discipline that embodies the science and technology of design, construction, implementation, and maintenance of software and hardware components of modern computing systems and computer-controlled equipment.</p>
                        </div>

                        <div className="spacer"></div>

                        <h1 id="se">Software Engineering</h1>
                        <div className="enclosed no-shadow">
                            <img className="content-img" src="/assets/disciplines/se.png" alt="Computer Engineering" />
                            <p>Software Engineering is "a systematic approach to analysis, design, assessment,
                                implementation, test, maintenance and reengineering of software, that is, the
                                application of engineering to software. In the software engineering approach,
                                several models for the software life cycle are defined, and many methodologies for
                                the definition and assessment of the different phases of a life-cycle model." </p>
                        </div>

                        <div className="spacer"></div>

                        <h1 id="is">Information Systems</h1>
                        <div className="enclosed no-shadow">
                            <img className="content-img" src="/assets/disciplines/is.png" alt="Computer Engineering" />
                            <p>Information Systems
                                Information systems is an academic discipline of the complementary networks of
                                hardware, software, users and business processes that organizations use to collect,
                                filter, process, create and distribute data. Any specific information system aims to
                                support planning, operations, management and decision making.</p>
                        </div>

                        <div className="spacer"></div>

                        <h1 id="it">Information Technology</h1>
                        <div className="enclosed no-shadow">
                            <img className="content-img" src="/assets/disciplines/it.png" alt="Computer Engineering" />
                            <p>
                                Information Technology is the application of technology to solve business or
                                organizational problems on a broad scale. In businesses, the IT department serves
                                to ensure that the computer network, computer hardware, computing devices, and
                                other physical devices all function properly.</p>
                        </div>
                        
                    </section>
                </main>
            </div>
        </>
    )
}