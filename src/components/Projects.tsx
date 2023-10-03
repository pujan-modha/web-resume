import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
    return(
        <>
            <section className='h-min'>
                <h2 className='text-lg text-foreground font-bold print:mt-[2.5%]'>PROJECTS</h2>
                <div className='mb-[2.5%]'>
                    <div className='grid print:grid-cols-2 md:grid-cols-2'>
                        <div>
                            <p className='font-semibold text-primary'><a href="/" target="_noref" className='hover:text-secondary hover:underline'>PROJECT
                                - 1<span className='text-primary font-light opacity-50'>↗</span></a><span
                                className='text-primary'> | </span><a href='/' target='_noref' className='opacity-75 hover:opacity-100'><FontAwesomeIcon
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
            </section>
        </>
    )
}

export default Projects;