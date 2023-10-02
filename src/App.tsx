import './App.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquareGithub, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faSquareEnvelope, faSquarePhone} from "@fortawesome/free-solid-svg-icons";
import MediaQuery from "react-responsive";

function App() {
    return (
        <>
            <div className='mx-[2.5%] md:mx-auto'>
                <div
                    className='text-foreground bg-background font-mono box-border max-w-3xl mx-auto print:my-0 my-[2.5%] print:border-0 border-4 border-foreground w-full'>
                    <section>
                        <div className='px-[2.5%] text-left md:text-center mx-auto align-middle print:mt-0 mt-[5%]'>
                                <div>
                                    <h1 className='text-5xl font-bold md:tracking-wide my-[2.5%]'><span
                                        className='print:text-foreground print:tracking-normal bg-foreground text-background tracking-wide font-black'>P</span>ujan<span
                                        className='-tracking-widest'> </span><span
                                        className='print:text-foreground print:tracking-normal bg-foreground text-background tracking-wide font-black'>M</span>odha
                                    </h1>
                                    <p className='mt-[1%] print:my-[1%] text-primary font-semibold text-xl'>Full-Stack
                                        Developer</p>
                                    <p className='font-medium text-primary'>Porbandar, Gujarat, India</p>
                                </div>
                            <hr className='mx-auto border-2 border-opacity-50 border-primary my-[2.5%]'/>
                        </div>
                    </section>
                    <div className='px-[2.5%]'>
                        <section>
                            <div>
                                <ul className='grid grid-cols-1 md:grid-cols-2 print:grid-cols-2'>
                                    <li><span
                                        className='font-semibold text-primary'><FontAwesomeIcon
                                        icon={faSquareGithub} size='lg'
                                        style={{color: "#44475a"}}/><span className='-tracking-widest'> </span></span><a
                                        href="/"
                                        target="_noref"><span
                                        className='hover:text-primary text-secondary font-light hover:underline'>github.com/pujan-modha<span
                                        className='text-primary opacity-50'>↗</span></span></a></li>
                                    <li><span
                                        className='font-semibold text-primary'><FontAwesomeIcon icon={faLinkedin}
                                                                                                size='lg'
                                                                                                style={{color: "#44475a"}}/><span
                                        className='-tracking-widest'> </span></span><a
                                        href="/" target="_noref"><span
                                        className='hover:text-primary text-secondary font-light hover:underline'>linkedin.com/in/pujan-modha<span
                                        className='text-primary opacity-50'>↗</span></span></a></li>
                                    <li><span
                                        className='font-semibold text-primary'><FontAwesomeIcon
                                        icon={faSquareEnvelope} size='lg'
                                        style={{color: "#44475a"}}/><span className='-tracking-widest'> </span></span><a
                                        href="mailto:pujan@ieee.org" target="_noref"><span
                                        className='hover:text-primary text-secondary font-light hover:underline'>pujan@ieee.org<span
                                        className='text-primary opacity-50'>↗</span></span></a></li>
                                    <li><span
                                        className='font-semibold text-primary'><FontAwesomeIcon icon={faSquarePhone}
                                                                                                size='lg'
                                                                                                style={{color: "#44475a"}}/><span
                                        className='-tracking-widest'> </span></span><a
                                        href="tel:+91 9484856107" target="_noref"><span
                                        className='hover:text-primary text-secondary font-light hover:underline'>+91 9484856107<span
                                        className='text-primary opacity-50'>↗</span></span></a></li>
                                </ul>
                            </div>
                            <hr className='mx-auto border border-opacity-25 border-foreground my-[2.5%] w-full'/>
                        </section>
                        <section>
                            <div>
                                <h2 className='text-lg text-foreground font-bold'>EDUCATION</h2>
                                <div className='grid print:grid-cols-2 md:grid-cols-2'>
                                    <div>
                                        <p className='font-semibold text-base text-primary'>MANIPAL UNIVERSITY,
                                            JAIPUR</p>
                                        <div>
                                                <div className=''>
                                                    <p className='text-secondary font-medium'>Bachelor of
                                                        Technology</p>
                                                    <p className='text-secondary text-sm font-medium italic'>(2022<span> - </span>Present)
                                                    </p>
                                                </div>
                                        </div>
                                    </div>
                                    <div className='text-sm'>
                                        <ul>
                                            <li><span className='font-semibold text-primary'>Major:<span> </span></span><span
                                                className='text-primary font-light'>Computer Science</span></li>
                                            <li><span className='font-semibold text-primary'>Minor:<span> </span></span><span
                                                className='text-primary font-light'>TBD</span></li>
                                            <li><span
                                                className='font-semibold text-primary'>GPA:<span> </span></span><span
                                                className='text-primary font-light'>7.5</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <hr className='mx-auto border border-opacity-25 border-foreground my-[2.5%] w-full'/>
                        </section>
                        <section>
                            <h2 className='text-lg text-foreground font-bold'>SKILLS</h2>
                            <div>
                                <div>
                                    <p className='font-semibold text-primary'>LANGUAGES</p>
                                    <div>
                                        <ul className='flex flex-wrap gap-[1%]'>
                                            <li className='print:text-foreground print:border text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>C/C++</li>
                                            <li className='print:text-foreground print:border text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Java</li>
                                            <li className='print:text-foreground print:border text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Python</li>
                                            <li className='print:text-foreground print:border text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Kotlin</li>
                                            <li className='print:text-foreground print:border text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>PHP</li>
                                            <li className='print:text-foreground print:border text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>HTML/CSS</li>
                                            <li className='print:text-foreground print:border text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Javascript</li>
                                            <li className='print:text-foreground print:border text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Typescript</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <p className='font-semibold text-primary'>FRAMEWORKS</p>
                                    <div>
                                        <ul className='flex flex-wrap gap-[1%]'>
                                            <li className='print:text-foreground print:border text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>React.js</li>
                                            <li className='print:text-foreground print:border text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Node.js</li>
                                            <li className='print:text-foreground print:border text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Laravel</li>
                                            <li className='print:text-foreground print:border text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Next.js</li>
                                            <li className='print:text-foreground print:border text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Vite.js</li>
                                            <li className='print:text-foreground print:border text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Tailwind
                                                CSS
                                            </li>
                                            <li className='print:text-foreground print:border text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Bootstrap</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <p className='font-semibold text-primary'>TOOLS</p>
                                    <div>
                                        <ul className='flex flex-wrap gap-[1%]'>
                                            <li className='print:text-foreground print:border text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Git</li>
                                            <li className='print:text-foreground print:border text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Docker</li>
                                            <li className='print:text-foreground print:border text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Vercel</li>
                                            <li className='print:text-foreground print:border text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>GitHub</li>
                                            <li className='print:text-foreground print:border text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Kubernetes</li>
                                            <li className='print:text-foreground print:border text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Linux</li>
                                            <li className='print:text-foreground print:border text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Netlify</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <hr className='mx-auto border border-opacity-25 border-foreground my-[2.5%] w-full'/>
                        </section>
                        <section>
                            <h2 className='text-lg text-foreground font-bold'>EXPERIENCE</h2>
                            <div className='mb-[2.5%]'>
                                <div className='grid print:grid-cols-2 md:grid-cols-2'>
                                    <div>
                                        <p className='font-semibold text-primary'>IEEE STUDENT BRANCH<span> | </span>WEBMASTER
                                        </p>
                                        <MediaQuery minWidth={768}>
                                            <p className='gap-[1%] text-xs text-secondary italic'>(Manipal University, Jaipur)</p>
                                        </MediaQuery>
                                    </div>
                                    <div>
                                        <div className='opacity-0 print:opacity-100 h-0 print:h-full'>
                                            <p className='text-secondary text-xs font-medium print:hidden md:text-right italic'>(May
                                                2023<span> - </span>Present)</p>
                                        </div>
                                        <MediaQuery minWidth={768}>
                                            <p className='text-secondary text-xs font-medium print:hidden md:text-right italic'>(May
                                                2023<span> - </span>Present)</p>
                                        </MediaQuery>
                                        <p className='text-secondary text-xs font-medium print:text-right md:hidden print:hidden italic'>(May
                                            2023<span> - </span>Present<span> | </span>Manipal University, Jaipur)</p>
                                    </div>
                                </div>
                                <div className='gap-[1%]'>
                                </div>
                                <div className='text-sm text-primary'>
                                    <ul>
                                        <li><span className='text-secondary'> › </span>Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Sed sed purus quis massa hendrerit pulvinar.
                                            Vestibulum facilisis risus at aliquet posuere.
                                        </li>
                                        <li><span className='text-secondary'> › </span>Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Sed sed purus quis massa hendrerit pulvinar.
                                            Vestibulum facilisis risus at aliquet posuere.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='mb-[2.5%]'>
                                <div className='grid print:grid-cols-2 md:grid-cols-2'>
                                    <div>
                                        <p className='font-semibold text-primary'>IEEE STUDENT BRANCH<span> | </span>WEBMASTER
                                        </p>
                                        <MediaQuery minWidth={768}>
                                            <p className='gap-[1%] text-xs text-secondary italic'>(Manipal University, Jaipur)</p>
                                        </MediaQuery>
                                    </div>
                                    <div>
                                        <div className='opacity-0 print:opacity-100 h-0 print:h-full'>
                                            <p className='text-secondary text-xs font-medium print:hidden md:text-right italic'>(May
                                                2023<span> - </span>Present)</p>
                                        </div>
                                        <MediaQuery minWidth={768}>
                                            <p className='text-secondary text-xs font-medium print:hidden md:text-right italic'>(May
                                                2023<span> - </span>Present)</p>
                                        </MediaQuery>
                                        <p className='text-secondary text-xs font-medium print:text-right md:hidden print:hidden italic'>(May
                                            2023<span> - </span>Present<span> | </span>Manipal University, Jaipur)</p>
                                    </div>
                                </div>
                                <div className='gap-[1%]'>
                                </div>
                                <div className='text-sm text-primary'>
                                    <ul>
                                        <li><span className='text-secondary'> › </span>Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Sed sed purus quis massa hendrerit pulvinar.
                                            Vestibulum facilisis risus at aliquet posuere.
                                        </li>
                                        <li><span className='text-secondary'> › </span>Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Sed sed purus quis massa hendrerit pulvinar.
                                            Vestibulum facilisis risus at aliquet posuere.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='mb-[2.5%]'>
                                <div className='grid print:grid-cols-2 md:grid-cols-2'>
                                    <div>
                                        <p className='font-semibold text-primary'>IEEE STUDENT BRANCH<span> | </span>WEBMASTER
                                        </p>
                                        <MediaQuery minWidth={768}>
                                            <p className='gap-[1%] text-xs text-secondary italic'>(Manipal University, Jaipur)</p>
                                        </MediaQuery>
                                    </div>
                                    <div>
                                        <div className='opacity-0 print:opacity-100 h-0 print:h-full'>
                                            <p className='text-secondary text-xs font-medium print:hidden md:text-right italic'>(May
                                                2023<span> - </span>Present)</p>
                                        </div>
                                        <MediaQuery minWidth={768}>
                                            <p className='text-secondary text-xs font-medium print:hidden md:text-right italic'>(May
                                                2023<span> - </span>Present)</p>
                                        </MediaQuery>
                                        <p className='text-secondary text-xs font-medium print:text-right md:hidden print:hidden italic'>(May
                                            2023<span> - </span>Present<span> | </span>Manipal University, Jaipur)</p>
                                    </div>
                                </div>
                                <div className='gap-[1%]'>
                                </div>
                                <div className='text-sm text-primary'>
                                    <ul>
                                        <li><span className='text-secondary'> › </span>Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Sed sed purus quis massa hendrerit pulvinar.
                                            Vestibulum facilisis risus at aliquet posuere.
                                        </li>
                                        <li><span className='text-secondary'> › </span>Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Sed sed purus quis massa hendrerit pulvinar.
                                            Vestibulum facilisis risus at aliquet posuere.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr className='mx-auto border border-opacity-25 border-foreground my-[2.5%] w-full'/>
                        </section>
                        <section className='h-min'>
                            <h2 className='text-lg text-foreground font-bold'>PROJECTS</h2>
                            <div className='mb-[2.5%]'>
                                <div className='grid print:grid-cols-2 md:grid-cols-2'>
                                    <div>
                                        <p className='font-semibold text-primary'><a href="/" target="_noref"
                                                                                     className='hover:text-secondary hover:underline'>PROJECT
                                            - 1<span className='text-primary font-light opacity-50'>↗</span></a><span
                                            className='text-primary'> | </span><a href='/'
                                                                                  target='_noref'
                                                                                  className='opacity-75 hover:opacity-100'><FontAwesomeIcon
                                            icon={faGithub} style={{color: "#6272a4"}}/><span
                                            className='text-primary opacity-50 font-thin text-sm'>↗</span></a></p>
                                    </div>
                                    <div>
                                        <p className='text-secondary text-xs font-medium print:text-right md:text-right italic'>(May
                                            2023<span> - </span>Present)</p>
                                    </div>
                                </div>
                                <div>
                                    <ul className='flex flex-wrap gap-[1%]'>
                                        <li className='print:text-foreground print:border text-xs border border-secondary text-secondary px-[1%] my-[0.5%]'>React.js</li>
                                        <li className='print:text-foreground print:border text-xs border border-secondary text-secondary px-[1%] my-[0.5%]'>Node.js</li>
                                        <li className='print:text-foreground print:border text-xs border border-secondary text-secondary px-[1%] my-[0.5%]'>Vercel</li>
                                    </ul>
                                </div>
                                <div className='text-sm text-primary'>
                                    <ul>
                                        <li><span className='text-secondary'> › </span>Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Sed sed purus quis massa hendrerit pulvinar.
                                            Vestibulum facilisis risus at aliquet posuere.
                                        </li>
                                        <li><span className='text-secondary'> › </span>Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Sed sed purus quis massa hendrerit pulvinar.
                                            Vestibulum facilisis risus at aliquet posuere.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='mb-[2.5%]'>
                                <div className='grid print:grid-cols-2 md:grid-cols-2'>
                                    <div>
                                        <p className='font-semibold text-primary'><a href="/" target="_noref"
                                                                                     className='hover:text-secondary hover:underline'>PROJECT
                                            - 2<span className='text-primary font-light opacity-50'>↗</span></a><span
                                            className='text-primary'> | </span><a href='/'
                                                                                  target='_noref'
                                                                                  className='opacity-75 hover:opacity-100'><FontAwesomeIcon
                                            icon={faGithub} style={{color: "#6272a4"}}/><span
                                            className='text-primary opacity-50 font-thin text-sm'>↗</span></a></p>
                                    </div>
                                    <div>
                                        <p className='text-secondary text-xs font-medium print:text-right md:text-right italic'>(May
                                            2023<span> - </span>Present)</p>
                                    </div>
                                </div>
                                <div>
                                    <ul className='flex flex-wrap gap-[1%]'>
                                        <li className='print:text-foreground print:border text-xs border border-secondary text-secondary px-[1%] my-[0.5%]'>Bash</li>
                                        <li className='print:text-foreground print:border text-xs border border-secondary text-secondary px-[1%] my-[0.5%]'>Git</li>
                                        <li className='print:text-foreground print:border text-xs border border-secondary text-secondary px-[1%] my-[0.5%]'>Python</li>
                                    </ul>
                                </div>
                                <div className='text-sm text-primary'>
                                    <ul>
                                        <li><span className='text-secondary'> › </span>Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Sed sed purus quis massa hendrerit pulvinar.
                                            Vestibulum facilisis risus at aliquet posuere.
                                        </li>
                                        <li><span className='text-secondary'> › </span>Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Sed sed purus quis massa hendrerit pulvinar.
                                            Vestibulum facilisis risus at aliquet posuere.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr className='mx-auto border border-opacity-25 border-foreground my-[2.5%] w-full'/>
                        </section>
                        <section>
                            <div>
                                <div>
                                    <h2 className='text-lg text-foreground font-bold'>CERTIFICATIONS</h2>
                                    <div className='text-sm'>
                                        <ul>
                                            <li><span className='font-black text-secondary'> › </span><span
                                                className='text-primary font-light'><span className='font-semibold'>Problem solving using HTML</span><span> - </span><a
                                                href="/" target="_noref">(<span
                                                className='hover:text-primary text-secondary font-light hover:underline'>Coursera<span
                                                className='text-primary opacity-50'>↗</span></span>)</a></span><span> | </span><a
                                                href="/" target="_noref">(<span
                                                className='hover:text-primary text-secondary font-light hover:underline'>Certificate<span
                                                className='text-primary opacity-50'>↗</span></span>)</a></li>
                                            <li><span className='font-black text-secondary'> › </span><span
                                                className='text-primary font-light'><span className='font-semibold'>Using Artificial Intelligence in Cooking</span><span> - </span><a
                                                href="/" target="_noref">(<span
                                                className='hover:text-primary text-secondary font-light hover:underline'>Udemy<span
                                                className='text-primary opacity-50'>↗</span></span>)</a></span><span> | </span><a
                                                href="/" target="_noref">(<span
                                                className='hover:text-primary text-secondary font-light hover:underline'>Certificate<span
                                                className='text-primary opacity-50'>↗</span></span>)</a></li>
                                            <li><span className='font-black text-secondary'> › </span><span
                                                className='text-primary font-light'><span className='font-semibold'>Data Science for dummies</span><span> - </span><a
                                                href="/" target="_noref">(<span
                                                className='hover:text-primary text-secondary font-light hover:underline'>Udacity<span
                                                className='text-primary opacity-50'>↗</span></span>)</a></span><span> | </span><a
                                                href="/" target="_noref">(<span
                                                className='hover:text-primary text-secondary font-light hover:underline'>Certificate<span
                                                className='text-primary opacity-50'>↗</span></span>)</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <hr className='mx-auto border border-opacity-25 border-foreground my-[2.5%] w-full'/>
                        </section>
                        <section>
                            <div>
                                <h2 className='text-lg text-foreground font-bold'>ACHIEVEMENTS</h2>
                                <div className='text-sm'>
                                    <ul>
                                        <li><span className='font-black text-secondary'> › </span><span
                                            className='text-primary font-light'><span className='font-semibold'>2nd Position</span><span> - </span>ICHACK 2.0</span><span> | </span><a
                                            href="/" target="_noref">(<span
                                            className='hover:text-primary text-secondary font-light hover:underline'>Certificate<span
                                            className='text-primary opacity-50'>↗</span></span>)</a></li>
                                        <li><span className='font-black text-secondary'> › </span><span
                                            className='text-primary font-light'><span className='font-semibold'>Winner</span><span> - </span>UXPLORER by IEEE SB MUJ</span><span> | </span><a
                                            href="/" target="_noref">(<span
                                            className='hover:text-primary text-secondary font-light hover:underline'>Certificate<span
                                            className='text-primary opacity-50'>↗</span></span>)</a></li>
                                        <li><span className='font-black text-secondary'> › </span><span
                                            className='text-primary font-light'><span className='font-semibold'>Top 15</span><span> - </span>MUJ HACK-X 2023</span><span> | </span><a
                                            href="/" target="_noref">(<span
                                            className='hover:text-primary text-secondary font-light hover:underline'>Certificate<span
                                            className='text-primary opacity-50'>↗</span></span>)</a></li>
                                    </ul>
                                </div>
                            </div>
                            <hr className='hidden mx-auto border border-opacity-25 border-foreground my-[2.5%] w-full'/>
                        </section>
                    </div>
                    <hr className='mx-auto border-2 border-opacity-50 border-primary my-[2.5%] w-[95%]'/>
                </div>
            </div>
        </>
    )
}

export default App;