import '../../css/portfolios/Portfolios.css';
import { Link } from 'react-router-dom';

export default function ComputerHardware() {
    return (
        <>
            <div className="container">
                <aside className="sidebar">
                    <div className="grouped-nav">
                        <div className="logo league-spartan">Turing</div>
                        <span id="counter" className="ibm-plex-mono-regular">Matches: 0</span>
                        <ul className="sidebar-links ibm-plex-mono-regular">
                            <li>
                                <a href="#computer-hardware-intro">Computer Hardware</a>    
                                <ul>
                                    <li><a href="#computer">What is a computer?</a></li>
                                    <li><a href="#types-of-pc">Types of Computers</a></li>
                                    <li><a href="#historical-context">Historical Context</a></li>
                                    <li><a href="#architecture">Architecture</a></li>
                                </ul>
                            </li>
                            <div className="nav-spacer"></div>
                            <li>    
                                <a href="#computer-hardware">Computer Hardware</a>   
                                <ul>
                                    <li><a href="#internal-hardware">Internal Hardware Components</a></li>
                                    <ul>
                                        <li><a href="#motherboard">Motherboard</a></li>
                                        <li><a href="#cpu">Central Processing Unit</a></li>
                                        <li><a href="#ram">Random Access Memory</a></li>
                                        <li><a href="#storage-devices">Storage Devices</a></li>
                                        <li><a href="#gpu">Graphics Processing Unit</a></li>
                                        <li><a href="#psu">Power Supply Unit</a></li>
                                        <li><a href="#cooling-systems">Cooling Systems</a></li>
                                    </ul>
                                    <li><a href="#external-hardware">External Hardware Components</a></li>
                                    <ul>
                                        <li><a href="#monitor">Monitors</a></li>
                                        <li><a href="#keyboard">Keyboards</a></li>
                                        <li><a href="#mice">Mice</a></li>
                                        <li><a href="#printers-scanners">Printers and Scanners</a></li>
                                    </ul>
                                </ul> 
                    
                            </li>
                            <div className="nav-spacer"></div>
                            <li>
                                <a href="#software">Computer Software</a>
                                <ul>
                                    <li><a href="#system-software">System Software</a></li>
                                    <li><a href="#device-drivers">Device Drivers</a></li>
                                    <li><a href="#application-software">Application Software</a></li>
                                    <ul>
                                        <li><a href="#application-software">Software Suites</a></li>
                                    </ul>
                                    <li><a href="#dev-software">Development Software</a></li>
                                </ul>
                            </li>
                            <div className="nav-spacer"></div>
                            <li><a href="#implementations">Implementation in the different institutions in the community</a></li>
                            <ul>
                                <li><a href="#education">Educational Institution</a></li>
                                <li><a href="#business">Business Sector</a></li>
                                <li><a href="#healthcare">Healthcare Institutions</a></li>
                                <li><a href="#non-profit">Non-profit organizations</a></li>
                            </ul>
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
                        <h1 id="computer-hardware-intro" style={{marginTop: '0', color: 'var(--site-light-purple)', textAlign: 'center'}}>Computer Hardware</h1>
                        <h2 id="computer">What is a computer?</h2>
                        <div className="enclosed">
                            <p>A computer is an electronic device designed to process data, perform calculations, and execute instructions
                                automatically. It operates by accepting input, manipulating that data according to programmed instructions, and
                                producing output.</p>
                        </div>
                        <div className="spacer"></div>
                        <h1 id="types-of-pc">Types of Computers</h1>
                        <div className="enclosed">
                            <ul>
                                <li>Personal Computers (PCs): Designed for individual use, including
                                    desktops and laptops.</li>
                                <li>Mainframes: Powerful machines used for large-scale computing
                                    tasks.</li>
                                <li>Supercomputers: Extremely fast computers used for complex
                                    computations in fields like scientific research and weather
                                    forecasting.</li>
                                <li>Embedded Systems: Computers integrated into other devices (like
                                    appliances or vehicles) to control specific functions</li>
                            </ul>
                        </div>
                        <div className="spacer"></div>
                        <div className="enclosed">
                            <h2 id="historical-context">Historical Context</h2>
                            <p>The concept of a computer has evolved significantly over time. Early mechanical
                                devices laid the groundwork for modern computing. The first electronic programmable
                                computer, ENIAC, was developed in the 1940s, marking a significant milestone in
                                computing history. The theoretical foundation was established by figures like Alan
                                Turing, who proposed the idea of a universal machine capable of performing any
                                computation.</p>
                            <div className="spacer"></div>
                            <h2 id="architecture">Architecture</h2>
                            <p>Most modern computers are based on the Von Neumann architecture, which describes
                                a system where data and instructions are stored in memory. This architecture allows the
                                CPU to execute instructions sequentially, making it efficient for various computing tasks.</p>
                        </div>
                        <div className="spacer"></div>
                        <h1 id="computer-hardware" style={{textAlign: 'center'}}>Elements of Computer Hardware</h1>
                        <h2 id="internal-hardware">Internal Hardware Components</h2> <div className="spacer"></div>
                        <div className="enclosed">
                            <h2 id="motherboard">Motherboard</h2>
                            <p>
                                The main circuit board that connects all components, including the
                                CPU, RAM, and storage devices. It contains slots for expansion
                                cards and interfaces for peripherals.
                            </p>
                            <div className="spacer"></div>
                            <p>
                                Motherboards vary widely in size, design, and
                                functionality, catering to different computing
                                needs—from high-performance gaming rigs to
                                compact home theater setups. The choice of
                                motherboard affects not only the physical size
                                of the computer but also its expandability and
                                overall performance capabilities
                            </p>
                        </div>
                        <div className="spacer"></div>
                        <div className="enclosed">
                            <h2 id="cpu">Central Processing Unit</h2>
                            <p>Central Processing Unit
                                The Central Processing Unit (CPU) is often referred to as
                                the "brain" of a computer. It is a critical component that
                                performs most of the processing tasks and controls the
                                operation of all other components within a computer
                                system. The CPU executes instructions from programs,
                                performs calculations, and manages data flow between
                                various hardware elements.</p>
                            <div className="spacer"></div>
                            <h3 id="functionality-cpu">Functionality of a CPU</h3>
                            <ul>
                                <li>Fetch: The control unit retrieves instructions from memory.</li>
                                <li>Decode: The control unit interprets the fetched instruction to
                                    determine what action is required.</li>
                                <li>Execute: The ALU performs the necessary calculations or
                                    logical operations based on the decoded instruction</li>

                            </ul>
                        </div>
                        <div className="spacer"></div>
                        <div className="enclosed">
                            <h2 id="ram">Random Access Memory</h2>
                            <p>Random Access Memory (RAM) is a crucial component of
                                modern computing systems, enabling fast data access and
                                processing. RAM is a type of volatile memory used in
                                computers and other devices to store data temporarily that
                                the CPU needs while performing tasks. Unlike permanent
                                storage (like hard drives), RAM loses its contents when the
                                power is turned off. It allows for quick read and write
                                access to a storage medium, which significantly enhances
                                the speed and efficiency of the computer.</p>
                            <div className="spacer"></div>
                            <h3 id="types-of-ram">Types of RAM</h3>
                            <ul>
                                <li>Static RAM (SRAM)</li>
                                <li>Dynamic RAM (DRAM)</li>
                                <li>Synchronous Dynamic RAM</li>
                                <li>Double Data Rate Synchronous Dynamic RAM (DDR SDRAM)</li>
                                <li>Graphics Double Data Rate (GDDR)</li>
                            </ul>
                        </div>
                        <div className="spacer"></div>
                        <div className="enclosed">
                            <h2 id="storage-devices">Storage Devices</h2>
                            <p>In the context of storage devices, Solid State Drives (SSDs) and Hard Disk Drives (HDDs) are two primary
                                types of storage devices used in computers and other digital devices. They serve the same basic function of
                                storing data, but they utilize different technologies and offer distinct advantages and disadvantages.</p>
                            <div className="spacer"></div>
                            <h3 className="ssd">Solid State Drive</h3>
                            <p>A Solid State Drive (SSD) is a newer type of
                                storage device that uses flash memory to store
                                data. Unlike HDDs, SSDs have no moving parts,
                                relying instead on NAND-based flash memory to
                                retain data. This design allows SSDs to read and
                                write data much faster.</p>
                            <div className="spacer"></div>
                            <h3 className="hdd">Hard Disk Drive</h3>
                            <p>
                                A Hard Disk Drive (HDD) is a traditional storage
                                device that uses spinning disks, or platters, to
                                read and write data. Data is stored magnetically,
                                and the drive has an arm with read/write heads
                                that move across the platters to access different
                                data locations.
                            </p>
                        </div>
                        <div className="spacer"></div>
                        <div className="enclosed">
                            <h2 id="gpu">Graphics Double Data Rate</h2>
                            <p>Graphics Double Data Rate (GDDR) is a type of
                                synchronous dynamic random-access memory (SDRAM)
                                specifically optimized for high-performance graphic
                                applications. GDDR is commonly used in graphics
                                processing units (GPUs) and gaming consoles because it
                                provides high bandwidth and low latency, which are
                                essential for rendering complex visuals and processing
                                large amounts of graphical data in real-time.</p>
                        </div>
                        <div className="spacer"></div>
                        <div className="enclosed">
                            <h2 id="psu">Power Supply Unit</h2>
                            <p>A Power Supply Unit (PSU) is an essential component in
                                electronic systems, particularly in computers. Its primary
                                function is to convert mains AC (Alternating Current) into low-
                                voltage regulated DC (Direct Current) power, which is
                                necessary for the operation of internal components like the
                                CPU, motherboard, and storage devices.</p>
                            <div className="spacer"></div>
                            <h3 id="functions-psu">Functions of a PSU</h3>
                            <ul>
                                <li>Voltage Conversion: Converts high-voltage AC from the
                                    wall outlet to low-voltage DC suitable for computer
                                    components.</li>
                                <li>Regulation and Filtering: Ensures stable output voltage,
                                    free from electrical noise and spikes that could damage
                                    components.</li>
                                <li>Power Distribution: Supplies power to various components
                                    via multiple connectors tailored for different hardware
                                    needs.</li>
                            </ul>
                        </div>
                        <div className="spacer"></div>
                        <div className="enclosed">
                            <h2 id="cooling-systems">Cooling Systems</h2>
                            <p>Cooling systems are essential for maintaining optimal operating temperatures in computers, preventing
                                overheating, and ensuring reliable performance. The two primary types of cooling systems are air cooling and
                                liquid cooling, each with its own advantages and disadvantages.</p>
                            <div className="spacer"></div>
                            <h3 id="air-cooling">Air Cooling</h3>
                            <p>
                                Air cooling utilizes fans
                                to blow air over
                                heatsinks attached to
                                heat-generating
                                components like the CPU
                                and GPU. The heatsink
                                absorbs heat from the
                                component, which is
                                then dissipated into the
                                air by the fan.
                            </p>
                            <div className="spacer"></div>
                            <h3 id="liquid-cooling">Liquid Cooling</h3>
                            <p>Liquid cooling systems
                                circulate a coolant (usually
                                water or a specialized fluid)
                                through tubes that connect
                                to a water block mounted
                                on the CPU or GPU. The
                                coolant absorbs heat and
                                is then pumped to a
                                radiator, where fans
                                dissipate the heat into the
                                air.</p>
                        </div>
                        <div className="spacer double"></div>
                        <h2 id="external-hardware">External Hardware Computers</h2>
                    
                        <div className="enclosed">
                            <h2 id="monitor">Monitor</h2>
                            <p>
                                Display visual output from the computer.
                                Various types include LCD, LED, and OLED
                                screens. There are also monitor panels such
                                as TN, VA, and IPS panels.
                            </p>
                        </div>

                        <div className="spacer"></div>
                        <div className="enclosed">
                            <h2 id="keyboard">Keyboards</h2>
                            <p>
                                Input devices used for typing and command
                                entry. Keyboards can be wired or wireless
                                through bluetooth or wireless usb dongle.
                                Keyboards have varying switches.
                            </p>
                        </div>

                        <div className="spacer"></div>
                        <div className="enclosed">
                            <h2 id="mice">Mice</h2>
                            <p>
                                Pointing devices that allow users to interact
                                with on-screen elements. Mice can also be
                                wired or wireless, with varying polling rate,
                                DPI and actuation force.
                            </p>
                        </div>

                        <div className="spacer"></div>
                        <div className="enclosed">
                            <h2 id="printers-scanners">Printers and Scanners</h2>
                            <p>
                                Printers are output devices that produce
                                physical copies of digital documents, while
                                scanners convert physical documents into
                                digital format.
                            </p>
                        </div>

                        <div className="spacer"></div>
                        <h1 id="software" style={{textAlign: 'center'}}>Computer Software</h1>
                        <div className="enclosed">
                            <p>
                                Software refers to a collection of instructions, data, or programs that enable a computer to perform specific
                                tasks. It is an essential component of computer systems, functioning alongside hardware to facilitate various
                                operations. Software can be broadly categorized into different types based on its purpose, licensing models,
                                and distribution methods.
                            </p>
                        </div>
                        <div className="spacer"></div>
                        <div className="enclosed">
                            <h2 id="system-software">System Software</h2>
                            <p>
                                This type includes the operating system (OS) and all utility programs that manage computer resources at a
                                low level. The OS serves as an intermediary between users and the computer hardware, managing tasks such
                                as memory allocation, file management, and device control.
                            </p>
                        </div>
                        <div className="spacer"></div>
                        <div className="enclosed">
                            <h2 id="device-drivers">Device Drivers</h2>
                            <p>
                                A device driver is a specialized program that allows the OS to interact with hardware devices such as printers,
                                graphics cards, and network adapters. Without these drivers, the OS would not be able to control or utilize the
                                hardware effectively. Each driver is tailored to a specific type of device and is dependent on both the hardware
                                it controls and the operating system it operates within.
                            </p>
                            <div className="spacer"></div>
                            <p>
                                Device drivers operate in conjunction with the OS kernel,
                                which manages system resources. When an application
                                requests an action involving hardware (like printing a
                                document), the OS sends this request to the relevant driver.
                                The driver then communicates directly with the hardware to
                                execute the command and returns any results or status
                                messages back to the OS.
                            </p>
                            <div className="spacer"></div>
                            <h3>Interaction Process</h3>
                            <ul>
                                <li>Command Issuance: The OS sends a command to the driver.</li>
                                <li>Execution: The driver translates this command into
                                    instructions for the hardware.</li>
                                <li>Response Handling: The hardware performs the action and
                                    sends feedback to the driver.</li>
                                <li>Feedback Relay: The driver sends this feedback back to the
                                    OS for further processing or display</li>
                            </ul>
                        </div>
                        <div className="spacer"></div>
                        <div className="enclosed">
                            <h2 id="application-software">Application Software: Software Suites</h2>
                            <p>
                                A software suite is a collection of related software applications bundled together to provide users with a
                                cohesive set of tools for specific tasks or functions. These suites typically share a common user interface and
                                integrate seamlessly, allowing for efficient workflow and data exchange among the applications.
                            </p>
                        </div>
                        <div className="spacer"></div>
                        <div className="enclosed">
                            <h2 id="dev-software">Development Software</h2>
                            <p>
                                This includes tools that developers use to create applications and software solutions. Common development
                                software includes:
                            </p>
                        </div>
                        <div className="spacer double"></div>
                        <h1 id="implementations" style={{textAlign: 'center'}}>Implementation in the different institutions in the
                            community</h1>
                        <div className="enclosed">
                            <p>
                                The integration of computer hardware and software into various community institutions is crucial for enhancing
                                operational efficiency, improving educational outcomes, and fostering community engagement. This
                                implementation varies across sectors such as education, healthcare, business, and non-profit organizations,
                                each with unique needs and challenges.
                            </p>
                        </div>
                        <div className="spacer"></div>
                        <div className="enclosed">
                            <h2 id="education">Educational Institutions</h2>
                            <p>
                                In educational settings, the deployment of computer hardware and software is fundamental for modern teaching
        and learning practices. Schools and universities utilize:
                            </p>
                            <ul>
                                <li>Hardware: Desktops, laptops, tablets, and interactive
                                    whiteboards facilitate interactive learning
                                    experiences.</li>
                                <li>Software: Learning management systems (LMS),
                                    Management Information Systems (MIS, such as
                                    USC ISMIS), educational applications, and
                                    administrative software streamline both teaching
                                    and administrative processes.</li>
                            </ul>
                        </div>
                        <div className="spacer"></div>
                        <div className="enclosed">
                            <h2 id="business">Business Sector</h2>
                            <p>
                                In the business community, the choice of computer hardware and software significantly impacts productivity and
        operational efficiency. Businesses typically implement:
                            </p>
                            <ul>
                                <li>Hardware: Workstations equipped with high-performance
                                    CPUs, multiple monitors, and networking devices
                                    to enhance collaboration.</li>
                                <li>
                                    Software: Applications for word processing, spreadsheets,
                                    databases, and specialized industry software
                                    tailored to specific business needs.
                                </li>
                            </ul>
                        </div>
                        <div className="spacer"></div>
                        <div className="enclosed">
                            <h2 id="healthcare">Healthcare Institutions</h2>
                            <p>Healthcare facilities increasingly rely on technology for patient care management. A lot in the Healthcare
                                Industry use tech. Key implementations include:</p>
                            <ul>
                                <li>Hardware: Medical devices integrated with computer
                                    systems for real-time data monitoring.</li>
                                <li>Software: Electronic health records (EHR) systems that
                                    facilitate patient data management, appointment
                                    scheduling, and billing processes.</li>
                            </ul>
                        </div>
                        <div className="spacer"></div>
                        <div className="enclosed">
                            <h2 id="non-profit">Non-profit Organizations</h2>
                            <p>Non-profit organizations leverage technology to improve service delivery and outreach efforts. Their
                                implementations often involve:</p>
                            <ul>
                                <li>Hardware: Computers for administrative tasks and mobile
                                    devices for field workers to connect with clients
                                    in real-time.</li>
                                <li>Software: Database management systems to track
                                    donations, volunteer activities, and client
                                    interactions.</li>
                            </ul>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}