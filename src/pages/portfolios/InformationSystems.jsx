import '../../css/portfolios/Portfolios.css';
import { Link } from 'react-router-dom';

export default function InformationSystems() {
    return (
        <>
            <div className="container">
                <aside className="sidebar">
                    <div className="grouped-nav">
                        <div className="logo league-spartan">Turing</div>
                        <span id="counter" className="ibm-plex-mono-regular">Matches: 0</span>
                        <ul className="sidebar-links ibm-plex-mono-regular">
                            <li>
                                <a href="#is-intro">Information Systems</a>    
                                <ul>
                                    <li><a href="#info">Data and Information</a></li>
                                    <li><a href="#def-info">Definitions of Information</a></li>
                                    <ul>
                                        <li><a href="#asprocess">Information as process</a></li>
                                        <li><a href="#asknowledge">Information as knowledge</a></li>
                                        <li><a href="#asthing">Information as thing</a></li>
                                    </ul>
                                </ul>
                            </li>
                            <div className="nav-spacer"></div>
                            <li>    
                                <a href="#is-components">Components of Information Systems</a>    
                                <ul>
                                    <li><a href="#technology">Technology</a></li>
                                    <li><a href="#people">People</a></li>
                                    <li><a href="#process">Process</a></li>
                                    <li><a href="#data">Data</a></li>
                                </ul>
                            </li>
                            <div className="nav-spacer"></div>
                            <li>
                                <a href="#support-systems">Different types of support systems</a>
                                <ul>
                                    <li><a href="#tps">Transaction Processing System</a></li>
                                    <li><a href="#oss">Operations Support System</a></li>
                                    <li><a href="#mss">Management Support Systems</a></li>
                                    <ul>
                                        <li><a href="#dss">Decision Support System</a></li>
                                        <li><a href="#eis">Executive Information System</a></li>
                                        <li><a href="#mis">Management Information System</a></li>
                                    </ul>
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
                        <h1 id="is-intro" style={{marginTop: '0', color: 'var(--site-light-blue)', textAlign: 'center'}}>Information Systems</h1>
                        <div className="enclosed blue">
                            <p><span className="ibm-plex-mono-regular" style={{color: 'var(--site-light-blue)', fontSize: '1.7rem'}}>Information Systems</span> are a coordinated set of components and resources that collect, process, store, and distribute information. These systems typically include hardware, software, data, people, and procedures. They are designed to support decision-making, coordination, control, analysis, and visualization in an organization or enterprise. A book defines Information Systems (IS) as systems that collects, processes, stores, analyzes and disseminates information for a specific purpose.</p>
                        </div>
                        <div className="spacer"></div>
                        <h1 id="info" style={{marginTop: '0'}}>Data and Information</h1>
                        <div className="enclosed">
                        <p>The term “information” is ambiguous.  At its core, "information" can be seen as a collection of data that has been processed, structured, or presented in a way that makes it meaningful to a recipient.</p>
                        <div className="spacer"></div>
                        <p>There are three principal uses of the word information, as according to Buckland's book about Information and Information Systems:</p>
                        <ul>
                                <li><span style={{color: 'white'}}>Information-as-process</span>, what someone knows is changed when he or she is informed.</li>
                                <li><span style={{color: 'white'}}>Information-as-knowledge</span>, information is also used to denote that which is imparted in information-as-process.</li>
                                <li><span style={{color: 'white'}}>Information-as-thing</span>, information is also used attributively for objects, such as data and documents, that are referred to as information because they are regarded as being informative.</li>
                        </ul>
                        </div>
                        <h1 id="def-info">Definitions of Information</h1>
                        <div className="enclosed">
                            <ul>
                                <li><h3 style={{color: 'white'}} id="asprocess">Information as Process</h3></li>
                                    <ul>
                                        <li>Information transforms an individual’s understanding or knowledge. It involves the act of becoming informed, where what a person knows is altered. Essentially, information represents the act of conveying knowledge—either through telling or being told. This process is about the exchange and communication of information.</li>                    
                                    </ul>
                                <li><h3 style={{color: 'white'}} id="asknowledge">Information as Knowledge</h3></li>
                                    <ul>
                                        <li>Information is the understanding or insights that individuals gain from processing and interpreting information. It highlights that information is not just raw data or facts but becomes valuable when it is comprehended and integrated into one's existing framework of understanding.</li>
                                    </ul>
                                <li><h3 style={{color: 'white'}} id="asthing">Information as Thing</h3></li>
                                    <ul>
                                        <li>Information is considered as a tangible or concrete entity. In this context, information is viewed as a physical or digital object that can be stored, retrieved, and transferred. This could include documents, files, books, databases, or any material form where information is recorded.</li>
                                    </ul>
                            </ul>       
                        </div>
                        <div className="spacer double"></div>
                        <h1 id="is-components" style={{textAlign: 'center'}}>Components of Information Systems</h1>
                        <div className="enclosed">
                            <h2 id="technology">Technology</h2>
                            <h3>Hardware</h3>
                            <p>Hardware represents the physical components of an information system. Some can be seen or touched easily, while others reside inside a device that can only be seen by opening up the device's case. Keyboards, mice, pens, disk drives, iPads, printers, and flash drives are all visible examples. Computer chips, motherboards, and internal memory chips are the hardware that resides inside a computer case and not usually visible from the outside.</p>
                            <div className="spacer"></div>
                            <h3>Software</h3>
                            <p>Software is a set of instructions that tell the hardware what to do. Software is not tangible –
                                it cannot be touched. Programmers create software programs by following a specific
                                process to enter a list of instructions that tell the hardware what to do. There are several
                                categories of software, with the two main categories being operating-system and
                                application software.</p>
                        </div>
                        <div className="spacer"></div>
                        <div className="enclosed">
                            <h2 id="people">People</h2>
                            <p>
                                The users who interact with the information system, including those who design, develop,
        manage, and use the system. This group encompasses IT professionals, end-users, and anyone
        involved in the information system’s operation.
                            </p>
                            <ul>
                                <li>System Designers and Developers</li>
                                <li>IT Administrators and Support Staff</li>
                                <li>End-Users</li>
                                <li>Managers and Decision-Makers</li>
                                <li>Data Analysts and Scientists</li>
                                <li>Stakeholders</li>
                            </ul>
                        </div>
                        <div className="spacer"></div>
                        <div className="enclosed">
                            <h2 id="process">Process</h2>
                            <p>The procedures and rules that govern how data is collected, processed, and utilized. This
                                includes workflows, methodologies, and protocols that ensure the effective functioning of the
                                information system.</p>
                            <ul>
                                <li>Data Collection</li>
                                <li>Data Processing</li>
                                <li>Data Storage</li>
                                <li>Data Retrieval</li>
                                <li>Data Analysis</li>
                                <li>Information Dissemination</li>
                                <li>Feedback and Improvement</li>
                                <li>Security and Compliance</li>
                            </ul>
                        </div>
                        <div className="spacer"></div>
                        <div className="enclosed">
                            <h2 id="data">Data</h2>
                            <p>Data in an information system refers to raw facts and figures collected from various
                                sources, which are then processed to generate meaningful information. It can be structured
                                (organized in a predefined format), unstructured (lacking a specific format), or semi-
                                structured (partially organized). Data management involves methods for collection, storage,
                                retrieval, and ensuring data quality, such as accuracy and completeness. Security measures,
                                including encryption and access controls, protect data from unauthorized access and
                                breaches. Effective data analysis helps in understanding trends, predicting future outcomes,
                                and making informed decisions.</p>
                        </div>
                        <div className="spacer double"></div>
                        <h1 id="support-systems" style={{textAlign: 'center'}}>Different Types of Support Systems in Information
                            Systems</h1>
                        <div className="enclosed">
                            <h2 id="tps">Transaction Processing System</h2>
                            <p>A Transaction Processing System (TPS) is a type of information system designed to handle
                                and manage the routine transactions of an organization. These systems are crucial for day-to-
                                day operations, ensuring that transactions are processed efficiently, accurately, and in real-time
                                or near-real-time. TPS are foundational to business operations, supporting tasks such as order
                                processing, payroll, and inventory management.</p>
                        </div>
                        <div className="spacer"></div>
                        <div className="enclosed">
                            <h2 id="oss">Operational Support System</h2>
                            <p>An Operational Support System (OSS) is a type of software used by telecommunications and IT
                                service providers to manage and support their network operations. OSS systems handle tasks
                                such as network inventory management, fault management, configuration management, and
                                performance monitoring. Essentially, they help ensure that networks run smoothly by tracking
                                and managing the various components and services within the network infrastructure. OSS is
                                crucial for maintaining service quality and efficiency, as it provides the tools needed for
                                monitoring, troubleshooting, and optimizing network performance.</p>
                        </div>
                        <div className="spacer"></div>
                        <div className="enclosed">
                            <h2 id="mss">Management Support System</h2>
                            <p>
                                A Management Support System (MSS) refers to a category of information systems designed to
                                assist managers in decision-making, planning, and control within an organization. These
                                systems provide relevant data, tools, and analytical capabilities to support effective
                                management and strategic decision-making.
                            </p>
                        </div>
                        <div className="spacer"></div>
                        <div className="enclosed">
                            <ul>
                                <li><h2 id="dss" style={{color: 'white'}}>Decision Support System</h2></li>
                                <ul>
                                    <li>These systems help managers make decisions by
                                        providing access to relevant data, models, and analytical tools. DSS often include data
                                        analysis capabilities and scenario modeling to support complex decision-making processes.</li>
                                </ul>
                                <li><h2 id="eis" style={{color: 'white'}}>Executive Information Systems</h2></li>
                                <ul>
                                    <li>
                                        EIS provide top executives with easy access to key
                                        performance indicators (KPIs) and other critical data, often through dashboards and
                                        visualization tools. They are designed to offer high-level summaries and insights to support
                                        strategic decisions.
                                    </li>
                                </ul>
                                <li><h2 id="mis" style={{color: 'white'}}>Management Information Systems</h2></li>
                                <ul>
                                    <li>
                                        MIS focus on providing routine reports and
                                        information to managers to support operational and tactical decision-making. These systems
                                        often handle day-to-day data and reporting needs.
                                    </li>
                                </ul>
                            </ul>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}