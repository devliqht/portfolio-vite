import '../../css/portfolios/Portfolios.css';
import { Link } from 'react-router-dom';

export default function Motherboards() {
    return (
        <>
            <div className="container">
                <aside className="sidebar">
                    <div className="grouped-nav">
                        <div className="logo league-spartan">Turing</div>
                        <span id="counter" className="ibm-plex-mono-regular">Matches: 0</span>
                        <ul className="sidebar-links ibm-plex-mono-regular">
                            <li>
                                <a href="#motherboard-intro">Motherboards</a>    
                                <ul>
                                    <li><a href="#what-is-motherboard">What is a motherboard?</a></li>
                                    <li><a href="#mchugh">History of Motherboards</a></li>
                                    <li><a href="#uses">Uses of Motherboards</a></li>
                                </ul>
                            </li>
                            <div className="nav-spacer"></div>
                            <li>    
                                <a href="#components">Components of a Motherboard</a>    
                                <ul>
                                    <li><a href="#mb-table">Motherboard Table</a></li>
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
                        <h1 id="motherboard-intro" style={{marginTop: '0', color: 'var(--site-light-pink)', textAlign: 'center'}}>Motherboards</h1>
                        <div className="enclosed">
                            <h2 id="what-is-motherboard">What is a motherboard?</h2>
                            <p>
                                A motherboard is a critical component of a computer system, acting as the main circuit board that
                                connects various hardware components, allowing them to communicate. It is often referred to as the
                                mainboard, system board, or logic board. It serves as the central hub that connects and facilitates
                                communication between various hardware components, including the CPU, RAM, storage devices, and
                                expansion cards. Without a motherboard, the individual components of a computer cannot interact effectively.
                                The design and specifications of motherboards have evolved significantly since their inception, accommodating
                                advances in technology and user needs.
                            </p>
                        </div>
                        <div className="spacer"></div>
                        <div className="enclosed">
                            <h2 id="mchugh">IBM Engineer Patty McHugh</h2>
                            <img className="content-img" src="../assets/mchugh.jpg" alt="McHugh" />
                            <p>
                                The concept of the motherboard evolved from earlier technology known as the backplane, which was
                                simply a circuit board that connected various components without integrating them. The first motherboard as
                                we know it today was introduced by IBM in 1981 with the Planar Breadboard, designed by engineer Patty
                                McHugh. This board housed essential components like the CPU and RAM, marking a significant milestone in
                                computer architecture.
                            </p>
                        </div>
                        <div className="spacer"></div>
                        <div className="enclosed">
                            <h2 id="history">History of Motherboards</h2>
                            <ul>
                                <li>1970s-1980s: The concept of a motherboard began to take shape with early PCs, like the Apple II in
                                    1977, which used single, large circuit boards to mount processors, memory, and other components.
                                    IBM’s 1981 PC introduced the term "motherboard" more formally, featuring an open architecture that
                                    allowed for expansion cards and peripherals.</li>
                                    <ul>
                                        <li>1981: Introduction of the Planar Breadboard in IBM's first personal computer.</li>
                                        <li>1984: Release of the Advanced Technology (AT) motherboard, which set a standard for future
                                            designs.</li>
                                        <li>1985: Introduction of the Baby AT motherboard, which was smaller and more compatible with
                                            various PC cases.</li>
                                    </ul>
                                <li>1990s: As personal computers became more mainstream, motherboard designs became standardized,
                                    with AT (Advanced Technology) being an early form factor. Later, the ATX (Advanced Technology
                                    eXtended) form factor emerged, which became a widespread standard and introduced better layout
                                    designs, cooling, and ease of expansion.</li>
                                    <ul>
                                        <li>1995: Development of the ATX form factor by Intel, which improved layout and airflow and
                                            became the most widely adopted standard</li>
                                    </ul>
                                <li>
                                    2000s-Present: Since the 2000s, motherboards have evolved to support more advanced CPUs, GPUs,
                                    and connectivity options like USB, SATA, and PCIe. They also began to incorporate features for
                                    overclocking, RGB lighting, and Wi-Fi connectivity, catering to gaming and enthusiast communities.
                                </li>
                            </ul>
                        </div>
                        <div className="spacer"></div>
                        <div className="enclosed">
                            <h2 id="uses">Uses of Motherboards</h2>
                            <ul>
                                <li>Personal Computers: They form the backbone of desktops and laptops, allowing users to build and upgrade systems
                                    for everyday tasks, gaming, and professional applications.</li>
                                <li>
                                    Servers: High-end motherboards are used in server systems, designed to handle large data volumes,
        process multiple tasks simultaneously, and ensure maximum uptime and reliability.
                                </li>
                                <li>
                                    Embedded Systems: In devices like smart TVs, IoT devices, and industrial machines, smaller form-factor
        motherboards power the essential functions of these systems.
                                </li>
                                <li>
                                    Mobile Devices: Motherboards in smartphones and tablets, sometimes called logic boards, contain the CPU,
        memory, storage, and other components in compact configurations
                                </li>
                            </ul>
                        </div>
                        <div className="spacer"></div>
                        <div className="enclosed">
                            <h2 id="components">Components of a Motherboard</h2>
                            <ul>
                                <li><span style={{color: 'whitesmoke'}}>CPU Socket:</span> Holds the CPU, which executes instructions. Different sockets support different types of CPUs
                                    (e.g., Intel's LGA or AMD's AM sockets)</li>
                                <li>
                                    <span style={{color: 'whitesmoke'}}>Chipset: </span>The set of controllers that manage data flow between the CPU, RAM, and peripherals. Divided
        into northbridge (now integrated into CPUs in modern boards) and southbridge (handles slower
        components)
                                </li>
                                <li>
                                    <span style={{color: 'whitesmoke'}}>RAM Slots:</span> Connect the motherboard to memory sticks for temporary data storage.
                                </li>
                                <li>
                                    <span style={{color: 'whitesmoke'}}>PCIe Slots:</span> Provide connectivity for expansion cards, such as GPUs, sound cards, and network adapters.
                                </li>
                                <li>
                                    <span style={{color: 'whitesmoke'}}>Storage Connectors:</span> SATA ports for connecting hard drives and SSDs, and newer boards also have M.2 slots for
        faster NVMe SSDs.
                                </li>
                                <li>
                                    <span style={{color: 'whitesmoke'}}>Power Connectors:</span> Connect the power supply unit (PSU) to distribute electricity to various components.
                                </li>
                                <li>
                                    <span style={{color: 'whitesmoke'}}>USB Headers: </span>Provide connections for USB ports on the front or top of a PC case.
                                </li>
                                <li>
                                    <span style={{color: 'whitesmoke'}}>BIOS/UEFI Chip:</span> Contains firmware that initializes hardware at startup and provides a low-level interface for
        system settings.
                                </li>
                                <li>
                                    <span style={{color: 'whitesmoke'}}>I/O Ports:</span> Located at the back panel for connecting external devices, including USB, HDMI, audio,
        Ethernet, and more.
                                </li>
                            </ul>
                        </div>
                        <div className="spacer"></div>
                        <h1 id="mb-table">Motherboard Table</h1>
                        <table className="portfolio-table" style={{borderCollapse: 'collapse', width: '100%'}}>
                            <thead>
                            <tr>
                                <th>Form Factor</th>
                                <th>Build</th>
                                <th>Chipsets</th>
                                <th>CPU</th>
                                <th>BIOS</th>
                                <th>PCI/e Slots</th>
                                <th>SATA</th>
                                <th>Built-in Features</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>AT Motherboard</td>
                                <td>12 in x 13.8 in</td>
                                <td>Intel 80286, 80386, 80486</td>
                                <td>1</td>
                                <td>Older BIOS types</td>
                                <td>5</td>
                                <td>Not supported</td>
                                <td>Basic Functionality</td>
                            </tr>
                            <tr>
                                <td>ATX Motherboard</td>
                                <td>12 in x 9.6 in</td>
                                <td>Intel Pentium - Z-series and H-series, AMD X/B-series</td>
                                <td>1</td>
                                <td>UEFI support</td>
                                <td>4-7</td>
                                <td>4-12</td>
                                <td>Extensive IO</td>
                            </tr>
                            <tr>
                                <td>BTX Motherboard</td>
                                <td>12.8 in x 10.5 in</td>
                                <td>Intel Pentium 4, 915 and 945 series</td>
                                <td>1</td>
                                <td>Similar to ATX</td>
                                <td>Up to 7</td>
                                <td>Supported in newer models</td>
                                <td>Enhanced thermal management design</td>
                            </tr>
                            <tr>
                                <td>Extended-ATX Motherboard</td>
                                <td>12 in x 13 in</td>
                                <td>Intel’s X299, Z-series, AMD X570, TRX40</td>
                                <td>Up to 2</td>
                                <td>UEFI support</td>
                                <td>Up to 8</td>
                                <td>&gt; than standard ATX</td>
                                <td>High-performance and multi-GPU</td>
                            </tr>
                            <tr>
                                <td>LPX Motherboard</td>
                                <td>Typically 9 in x 13 in</td>
                                <td>Intel Pentium Chipsets</td>
                                <td>1</td>
                                <td>Older BIOS types</td>
                                <td>&lt; 4</td>
                                <td>Rarely supported</td>
                                <td>Compact Systems</td>
                            </tr>
                            <tr>
                                <td>Micro-ATX Motherboard</td>
                                <td>9.6 in x 9.6 in</td>
                                <td>Intel B- and H-series, AMD A- and B-series</td>
                                <td>1</td>
                                <td>UEFI in newer models</td>
                                <td>4</td>
                                <td>4-8</td>
                                <td>Compact yet versatile; budget builds</td>
                            </tr>
                            <tr>
                                <td>Mini ITX Motherboard</td>
                                <td>6.7 in x 6.7 in</td>
                                <td>Intel Z, B, H-series, AMD B- and A-series</td>
                                <td>1</td>
                                <td>UEFI in newer models</td>
                                <td>1</td>
                                <td>2-6</td>
                                <td>Small form factor PCs</td>
                            </tr>
                            <tr>
                                <td>Mini-ATX Motherboard</td>
                                <td>5.9 in x 5.9 in</td>
                                <td>Similar to micro-ATX chipsets</td>
                                <td>1</td>
                                <td>Often has UEFI firmware</td>
                                <td>2-4</td>
                                <td>4-8</td>
                                <td>May include graphics outputs, ethernet, and Wi-Fi</td>
                            </tr>
                            <tr>
                                <td>Pico BTX Motherboard</td>
                                <td>8 in x 10.5 in</td>
                                <td>Intel 915, 945, and other Pentium-era chipsets</td>
                                <td>1</td>
                                <td>Older BIOS types</td>
                                <td>1-2</td>
                                <td>2-4</td>
                                <td>May include basic I/O ports but lack advanced features</td>
                            </tr>
                            <tr>
                                <td>Standard-ATX Motherboard</td>
                                <td>12 in x 9.6 in</td>
                                <td>From early Intel Pentium to the latest Intel</td>
                                <td>1 to 2</td>
                                <td>UEFI support</td>
                                <td>4-7</td>
                                <td>4-12</td>
                                <td>Advanced I/O options such as USB ports, integrated audio, ethernet, Wi-Fi, and Bluetooth</td>
                            </tr>
                            </tbody>
                        </table>
                        

                    </section>
                </main>
            </div>
        </>
    )
}