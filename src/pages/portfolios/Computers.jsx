import '../../css/portfolios/Portfolios.css';
import { Link } from 'react-router-dom';

export default function Computers() {
    return (
        <>
            <div className="container">
                <aside className="sidebar">
                    <div className="grouped-nav">
                        <div className="logo league-spartan">Turing</div>
                        <span id="counter" className="ibm-plex-mono-regular">Matches: 0</span>
                        <ul className="sidebar-links ibm-plex-mono-regular">
                            <li>
                                <a href="#computers-intro">Computers</a>    
                                <ul>
                                    <li><a href="#introduction">Introduction</a></li>
                                    <li><a href="#discussion">Discussion</a></li>
                                    <ul>
                                        <li><a href="#supercomputers">Supercomputers</a></li>
                                        <li><a href="#mainframe">Mainframe Computers</a></li>
                                        <li><a href="#minicomputers">Minicomputers</a></li>
                                        <li><a href="#servers">Servers</a></li>
                                        <li><a href="#workstations">Workstations</a></li>
                                        <li><a href="#microcomputers">Microcomputers</a></li>
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
                        <h1 id="computers-intro" style={{marginTop: '0', color: 'var(--site-light-purple)', textAlign: 'center'}}>Computers</h1>
                        <div className="enclosed">
                        <h2 id="introduction">Introduction</h2>
                            <p>
                                Computers change how humans interact with technology and they offer multiple types for
                                different needs and purposes. Special features and capabilities are possessed by each type of
                                computer including supercomputers, mainframes, minicomputers, servers, workstations and
                                microcomputers. These computers differ in processing power, size, usage and cost for multiple fields
                                like research and business and personal use. Supercomputers excel in their unmatched
                                computational capabilities and mainframes are experts in managing enormous quantities of
                                transactions. For small to medium organizations, a balance between cost and power is struck by
                                minicomputers. Servers manage and distribute resources in networking. Professionals need
                                advanced hardware for specialized tasks, so workstations are designed accordingly. Finally, everyday
                                usage is dominated by microcomputers or personal computers because they are affordable and
                                flexible. By understanding the differences between these types, you can identify their best use cases
                                and the importance of their technology. The special characteristics, strengths, and applications are
                                explored by this study and these aspects are examined together. The development of industries and
                                society at large is also contributed to by them.
                            </p>
                        </div>
                        <div className="spacer"></div>
                        <div className="enclosed">
                            <h2 id="discussion">Discussion</h2>
                            <p>
                                The invention of computers goes back to the early centuries in the 19th century, with Charles
                                Babbage having a concept of the Analytical Engine, which most probably started the idea of modern
                                computing. The first electronic computers were developed around the mid-20th century, including
                                ENIAC, created to be able to compute large-scale calculations in military and scientific procedures.
                                Over the years, computers evolved from massive room-sized machines to compact devices that can
                                fit into a pocket with the development of microprocessors and semiconductor technology. The core
                                working of all computers is based on processing information as binary data, i.e., information can be
                                represented in the form of sequences of 0s and 1s. This binary data is manipulated by the hardware
                                components such as CPU, memory, and storage, coordinated through software that performs a
                                computer's tasks.
                            </p>
                            <div className="spacer"></div>
                            <p>
                                There are various types of computers, each addressing different needs. Supercomputers use
                                parallel processing, in which thousands of processors work on different parts of a calculation
                                simultaneously to accomplish the desired results. They are thus particularly suited for complex
                                simulations. Mainframes focus mainly on multitasking and transaction management, relying on
                                redundant systems to ensure reliability. Minicomputers were introduced in the 1960s as affordable
                                alternatives to mainframes, focusing on smaller-scale applications for businesses. Servers evolved to
                                support networking needs, distributing resources and services to client devices within local or global
                                systems. Workstations were designed to meet the needs of professionals, featuring powerful graphics
                                and computational capabilities for intensive applications. Microcomputers revolutionized personal and
                                small business computing, offering an affordable and user-friendly option for everyday tasks.
                                Each of these computers shares principles in operation but is engineered differently to meet
                                specific functions, manifesting the diversity and adaptability of computing technology. Their history
                                reflects humanity's increasing dependence on machines to process information and drive innovation.
                            </p>
                        </div>
                        <div className="spacer"></div>
                        <h1 id="supercomputers">Supercomputers</h1>
                        <table className="portfolio-table">
                            <thead>
                            <tr>
                                <th>Category</th>
                                <th>Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Name/Brand</td>
                                <td>Cray, IBM Blue Gene, NVIDIA GDX, IBM Summit, Fugaku, etc</td>
                            </tr>
                            <tr>
                                <td>Build</td>
                                <td>Largely sized, typically occupying entire rooms or halls</td>
                            </tr>
                            <tr>
                                <td>CPU</td>
                                <td>Multi-core processors, with millions of cores; clock speed varies (~1-4 GHz); transistors in billions; advanced parallel processing with high-speed interconnects</td>
                            </tr>
                            <tr>
                                <td>Memory</td>
                                <td>Petabytes of high-speed RAM</td>
                            </tr>
                            <tr>
                                <td>Processing Speed</td>
                                <td>Measured in petaflops (quadrillions of floating-point operations per second)</td>
                            </tr>
                            <tr>
                                <td>Calculating Power</td>
                                <td>Can perform up to exaFLOPS; MIPS in the trillions</td>
                            </tr>
                            <tr>
                                <td>Working Principle</td>
                                <td>Parallel processing of massive datasets using thousands of processors working in unison. Data is divided into smaller tasks distributed across cores</td>
                            </tr>
                            <tr>
                                <td>Energy Consumption</td>
                                <td>Requires megawatts of power; often uses advanced cooling systems</td>
                            </tr>
                            <tr>
                                <td>Field of Use</td>
                                <td>Weather forecasting (simulating hurricanes), molecular modeling, astrophysics (mapping the universe), AI research</td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="spacer"></div>
                        <h1 id="mainframe">Mainframe Computers</h1>
                        <table className="portfolio-table">
                            <thead>
                            <tr>
                                <th>Category</th>
                                <th>Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Name/Brand</td>
                                <td>IBM Z-series, Unisys ClearPath, Fujitsu GS21</td>
                            </tr>
                            <tr>
                                <td>Build</td>
                                <td>Usually cabinet-sized; scalable depending on needs. Large and robust systems designed for high availability</td>
                            </tr>
                            <tr>
                                <td>CPU</td>
                                <td>Multi-core processors optimized for I/O operations; ~2-5 GHz; transistors in billions; massive caching systems</td>
                            </tr>
                            <tr>
                                <td>Memory</td>
                                <td>Terabytes of ECC RAM</td>
                            </tr>
                            <tr>
                                <td>Processing Speed</td>
                                <td>Capable of processing billions of transactions per second</td>
                            </tr>
                            <tr>
                                <td>Calculating Power</td>
                                <td>Trillions of instructions per second (TIPS); heavy focus on throughput rather than raw computational speed</td>
                            </tr>
                            <tr>
                                <td>Working Principle</td>
                                <td>Batch and transaction processing; designed for reliability, scalability, and security in handling enormous I/O tasks</td>
                            </tr>
                            <tr>
                                <td>Energy Consumption</td>
                                <td>Hundreds of kilowatts</td>
                            </tr>
                            <tr>
                                <td>Field of Use</td>
                                <td>Banking systems (processing millions of transactions daily), airline reservation systems, government data processing</td>
                            </tr>
                            </tbody>
                        </table>    
                        <div className="spacer"></div>              
                        <h1 id="minicomputers">Minicomputers</h1>
                        <table className="portfolio-table">
                            <thead>
                            <tr>
                                <th>Category</th>
                                <th>Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Name/Brand</td>
                                <td>DEC PDP-11, IBM AS/400, HPE Integrity</td>
                            </tr>
                            <tr>
                                <td>Build</td>
                                <td>Mid-sized, typically rack-mounted</td>
                            </tr>
                            <tr>
                                <td>CPU</td>
                                <td>Multi-core processors, ~1-3 GHz; optimized for medium-scale operations</td>
                            </tr>
                            <tr>
                                <td>Memory</td>
                                <td>Tens to hundreds of gigabytes of RAM</td>
                            </tr>
                            <tr>
                                <td>Processing Speed</td>
                                <td>Performs tasks at speeds of tens of billions of operations per second</td>
                            </tr>
                            <tr>
                                <td>Calculating Power</td>
                                <td>TeraFLOPS or lower; sufficient for specific industrial or business operations</td>
                            </tr>
                            <tr>
                                <td>Working Principle</td>
                                <td>Task-oriented systems designed for specific industrial or departmental functions. Can support multiple users simultaneously</td>
                            </tr>
                            <tr>
                                <td>Energy Consumption</td>
                                <td>Tens of kilowatts</td>
                            </tr>
                            <tr>
                                <td>Field of Use</td>
                                <td>Small businesses for inventory control, engineering computations, or hospital management systems</td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="spacer"></div>
                        <h1 id="servers">Servers</h1>
                        <table className="portfolio-table">
                            <thead>
                            <tr>
                                <th>Category</th>
                                <th>Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Name/Brand</td>
                                <td>Dell PowerEdge, HPE ProLiant, Lenovo ThinkSystem</td>
                            </tr>
                            <tr>
                                <td>Build</td>
                                <td>Rack-mounted or tower form factor; scalable</td>
                            </tr>
                            <tr>
                                <td>CPU</td>
                                <td>Multi-core processors, typically with higher thread counts; ~2-4 GHz clock speed</td>
                            </tr>
                            <tr>
                                <td>Memory</td>
                                <td>Dozens to hundreds of gigabytes, with expandable configurations</td>
                            </tr>
                            <tr>
                                <td>Processing Speed</td>
                                <td>Handles millions of requests per second in a networked environment</td>
                            </tr>
                            <tr>
                                <td>Calculating Power</td>
                                <td>Focused on multitasking and high IOPS (Input/Output Operations Per Second)</td>
                            </tr>
                            <tr>
                                <td>Working Principle</td>
                                <td>Processes requests and data management tasks over a network. Serves multiple users by managing and distributing resources</td>
                            </tr>
                            <tr>
                                <td>Energy Consumption</td>
                                <td>Tens to hundreds of kilowatts, depending on load</td>
                            </tr>
                            <tr>
                                <td>Field of Use</td>
                                <td>Web hosting (running websites), database management, cloud storage, enterprise applications</td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="spacer"></div>
                        <h1 id="workstations">Workstations</h1>
                        <table border="1" style={{borderCollapse: 'collapse', width: '100%'}}>
                            <thead>
                            <tr>
                                <th>Category</th>
                                <th>Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Name/Brand</td>
                                <td>Apple Mac Pro, Dell Precision, HP ZBook</td>
                            </tr>
                            <tr>
                                <td>Build</td>
                                <td>Desktop-sized, often heavier-duty than typical PCs</td>
                            </tr>
                            <tr>
                                <td>CPU</td>
                                <td>High-end processors with multiple cores; ~2-5 GHz; optimized for rendering and scientific tasks</td>
                            </tr>
                            <tr>
                                <td>Memory</td>
                                <td>16 GB to 1 TB of RAM</td>
                            </tr>
                            <tr>
                                <td>Processing Speed</td>
                                <td>Gigaflops to low teraflops, optimized for professional-grade applications</td>
                            </tr>
                            <tr>
                                <td>Calculating Power</td>
                                <td>Mid-range computational power for specialized tasks</td>
                            </tr>
                            <tr>
                                <td>Working Principle</td>
                                <td>Runs high-demand applications like 3D rendering or simulation software, typically used in engineering, design, or media production</td>
                            </tr>
                            <tr>
                                <td>Energy Consumption</td>
                                <td>Around 200-800 watts</td>
                            </tr>
                            <tr>
                                <td>Field of Use</td>
                                <td>CAD (designing architecture), animation rendering, video editing, or scientific modeling</td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="spacer"></div>                  
                        <h1 id="microcomputers">Microcomputers</h1>
                        <table className="portfolio-table">
                            <thead>
                            <tr>
                                <th>Category</th>
                                <th>Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Name/Brand</td>
                                <td>Apple MacBook, Dell Inspiron, Raspberry Pi</td>
                            </tr>
                            <tr>
                                <td>Build</td>
                                <td>Compact, from laptops to handheld devices</td>
                            </tr>
                            <tr>
                                <td>CPU</td>
                                <td>Dual or quad-core processors; ~1-4 GHz; consumer-grade efficiency</td>
                            </tr>
                            <tr>
                                <td>Memory</td>
                                <td>4 GB to 64 GB of RAM</td>
                            </tr>
                            <tr>
                                <td>Processing Speed</td>
                                <td>Moderate speeds for everyday tasks; usually in gigaflops</td>
                            </tr>
                            <tr>
                                <td>Calculating Power</td>
                                <td>Millions to billions of instructions per second (MIPS)</td>
                            </tr>
                            <tr>
                                <td>Working Principle</td>
                                <td>Designed for personal use, executing a variety of general-purpose tasks like word processing, browsing, and entertainment</td>
                            </tr>
                            <tr>
                                <td>Energy Consumption</td>
                                <td>Low power consumption, ~15-90 watts for laptops</td>
                            </tr>
                            <tr>
                                <td>Field of Use</td>
                                <td>Home computing, education (online classes), gaming, and office productivity</td>
                            </tr>
                            </tbody>
                        </table>
                        
                        
                    </section>
                </main>
            </div>
        </>
    )
}