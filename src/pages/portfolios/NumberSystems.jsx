import '../../css/portfolios/Portfolios.css';
import { Link } from 'react-router-dom';

export default function NumberSystems() {
    return (
        <>
            <div className="container">
                <aside className="sidebar">
                    <div className="grouped-nav">
                        <div className="logo league-spartan">Turing</div>
                        <span id="counter" className="ibm-plex-mono-regular">Matches: 0</span>
                        <ul className="sidebar-links ibm-plex-mono-regular">
                            <li>
                                <a href="#ns-intro">Number Systems</a>    
                                <ul>
                                    <li><a href="#number">What is a number?</a></li>
                                    <li><a href="#number-systems">Number Systems</a></li>
                                    <ul>
                                        <li><a href="#babylonian">Babylonian Civilization</a></li>
                                        <li><a href="#hindu-arabic">Hindu-Arabic System</a></li>
                                        <li><a href="#base">The Base</a></li>
                                        <li><a href="#digits">Digits</a></li>
                                        <li><a href="#positional-notation">Positional Notation</a></li>
                                        <li><a href="#place-value">Place Value</a></li>
                                    </ul>
                                </ul>
                            </li>
                            <div className="nav-spacer"></div>
                            <li>    
                                <a href="#types">Types of Number Systems</a>    
                                <ul>
                                    <li><a href="#decimal">Decimal</a></li>
                                    <li><a href="#binary">Binary</a></li>
                                    <li><a href="#octal">Octal</a></li>
                                    <li><a href="#hex">Hexadecimal</a></li>
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
                        <h1 id="ns-intro" style={{marginTop: '0', color: 'var(--site-light-purple)', textAlign: 'center'}}>Number Systems</h1>
                            <h2 id="number">What is a number?</h2>
                            <div className="enclosed">
                                <p>A number is a mathematical object used to count, measure, and label. Numbers serve as the
                                    fundamental elements of mathematics and have a wide variety of forms and uses depending on
                                    the context.</p>
                            </div>
                        <div className="spacer"></div>

                        <div className="enclosed purple">
                            <h2 id="number-systems" style={{color: 'var(--site-light-purple)'}}>Number Systems</h2>
                            <p>Number systems are the various ways of representing numbers. Each system has its own structure, set of rules,
                                and operations. It is a mathematical notation for representing numbers of a given set, consistently using digits or
                                other symbols. It allows us to perform arithmetic operations like addition, subtraction, multiplication, and
                                division.</p>
                        </div>
                        
                        <div className="spacer"></div>

                        <div className="enclosed light">
                            <h2 id="babylonian" style={{color: 'var(--site-light)'}}>The Babylonian Civilization</h2>
                            <img className="content-img" src="../assets/sexagesimal.png" alt="Sexagesimal System" />
                            <p>
                                The first true written positional numeral system is generally attributed to the ancient Babylonian civilization. It
                                emerged around 3000 BCE influenced by earlier Sumerian systems. It was primarily used in ancient
                                Mesopotamia for trade, astronomy, and record-keeping and was based on a sexagesimal (base-60) system.
                            </p>
                            <div className="spacer"></div>
                            <p>
                                The sexagesimal system was an ancient system of counting,
                                calculation, and numerical notation that used powers of 60
                                much as the decimal system uses powers of 10. Rudiments of
                                the ancient system survive in vestigial form in our division of the
                                hour into 60 minutes and the minute into 60 seconds.

                                Although it is a positional system, it lacks a true zero, which can
                                complicate calculations and representations. The absence of
                                zero means that the system relies on spacing to indicate the
                                absence of a value, which can be less intuitive.
                            </p>
                        </div>

                        <div className="spacer"></div>
                        <div className="enclosed">
                            <h2 id="hindu-arabic">Hindu-Arabic System</h2>
                            <img className="content-img" src="../assets/hindu-arabic.jpg" alt="Hindu Arabic System" />
                            <p>
                                While the Babylonian's Sexagesimal system was the first true positional numeral system, the Hindu-Arabic
                                system was also one of the number systems that influenced modern mathematics and also introduced the
                                number.

                                The Hindu-Arabic numeral system is a decimal (base-10)
                                system, meaning it uses ten distinct symbols to represent
                                numbers. Each position in a number corresponds to a power of
                                ten, allowing for the representation of large numbers with
                                relatively few symbols.
                
                                Developed between the 1st and 4th centuries CE in India and
                                later spread to the Middle East and Europe by the 9th century. It
                                became widely adopted in Europe during the 13th century due to
                                the works of mathematicians like Fibonacci.
                            </p>
                        </div>

                        <div className="spacer"></div>
                        <h1 style={{textAlign: 'center'}}>Elements of a number system</h1>
                        <div className="enclosed">
                            <h2 id="base">The Base</h2>
                            <p>Every number system is based on a specific base or radix, which determines how many unique digits or symbols
                                are used in that system. The base also defines how place values increase or decrease as you move left or right
                                in a number.</p>
                            <div className="spacer"></div>
                            <p>There are four commonly used type of bases, and they are:</p>
                            <ul>
                                <li>Binary (Base 2) - 0s and 1s</li>
                                <li>Decimal (Base 10) - 0, 1, 2, 3, 4, 5, 6, 7, 8, 9</li>
                                <li>Octal (Base 8) - 0, 1, 2, 3, 4, 5, 6, 7</li>
                                <li>Hexadecimal (Base 16) - 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F</li>

                            </ul>         
                        </div>
                        <div className="spacer"></div>
                        <div className="enclosed">
                            <h2 id="digits">Digits</h2>
                            <p>These are the basic symbols used in the system. The number of
                                unique digits equals the base of the number system.</p>
                        </div>

                        <div className="spacer"></div>
                        <div className="enclosed">
                            <h2 id="positional-notation">Positional Notation</h2>
                            <p>Positional notation (or place-value notation) is a method for representing numbers in which the position of each
                                digit within a number determines its value. The value of a digit depends not only on the digit itself but also on its
                                position or place in the number, and the base (or radix) of the number system being used. It uses a set of digits
                                to represent the value of a number. The product of each digit and its place value indicates the value of the digit.
                                The sum of those products is the value of the number.</p>
                        </div>

                        <div className="spacer"></div>
                        <div className="enclosed">
                            <h2 id="place-value">Place Value</h2>
                            <p>Each digit's value depends on its position within a number. Moving
                                left in a number increases the value by powers of the base, and
                                moving right decreases the value (for decimal fractions).</p>
                        </div>

                        <div className="spacer"></div>
                        <h1 id="types" style={{textAlign: 'center'}}>Types of Number Systems</h1>
                        <div className="enclosed">
                            <h2 id="decimal">Decimal</h2>
                            <img className="content-img" src="../assets/decimal.png" alt="Decimal" />
                            <p>The decimal number system, also called the base-10 number system, is the standard system for denoting
                                integer and non-integer numbers. It is the most widely used number system 8
                                in the world. The decimal number
                                system has 10 symbols, mainly 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. The position of every digit has a weight which is a
                                power of 10.</p>
                            <div className="spacer"></div>
                            <p>
                                As shown in Figure 3, we can see the number 5319 as an
                                example of a base 10 number. Every digit is multiplied by
                                10 raised to the corresponding position number (which is
                                also called its weight), and this process repeats for all the
                                digits in the decimal number. The figure proves the
                                derivation of a decimal number by adding the product of
                                each operation.
                            </p>
                        </div>
                        <div className="spacer"></div>
                        <div className="enclosed">
                            <h2 id="binary">Binary</h2>
                            <img className="content-img" src="../assets/binary.png" alt="Binary"/>
                            <p>The binary number system is a way of representing numbers using only two digits: 0 and 1. It is a base-2
                                system, meaning each position in a binary number represents a power of 2. Unlike the decimal system, which
                                uses ten digits (0-9), binary only uses two, making it essential in computing because digital systems like
                                computers process data in binary form.</p>
                            <div className="spacer"></div>
                            <p>In figure 5, we can see the binary number 11001. Since
                                it's the Base-2 system, that means that we multiply the
                                digits by 2 raised to the corresponding position number
                                (similar to that of a decimal number). Hence, our first
                                digit (starting from the right) or also known as the Least
                                Significant Bit, is multiplied by 2^0, and the second
                                digit by 2^1, so on and so forth.</p>
                            <div className="spacer"></div>
                            <p>We disregard zero since 0 multiplied with anything still equates to zero. Therefore, we are left with 1x2^0, 1x2^3
                                and 1x2^4. Adding all of these products together gives us the base 10 conversion of this binary which is 25.</p>
                        </div>
                        <div className="spacer"></div>
                        <div className="enclosed">
                            <h2 id="octal">Octal</h2>
                            <img className="content-img" src="../assets/octal.png" alt="Octal"/>
                            <p>The octal number system is a base-8 numbering system that uses eight digits: 0, 1, 2, 3, 4, 5, 6, and 7. Each
                                position in an octal number represents a power of 8.</p>
                            
                        </div>
                        <div className="spacer"></div>
                        <div className="enclosed">
                            <h2 id="hex">Hexadecimal</h2>
                            <p>Base-16 (Hexadecimal) is a positional number system that uses 16 as its base. It is widely used in computer
                                science and digital electronics because it offers a compact way to represent large binary numbers. In the
                                hexadecimal system, each digit can represent one of 16 values, ranging from 0 to 15.</p>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}