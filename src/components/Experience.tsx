import MediaQuery from "react-responsive";

const Experience = () => {
    return(
        <>
            <section>
                <h2 className='text-lg text-foreground font-bold print:mt-[2.5%]'>EXPERIENCE</h2>
                <div className='mb-[2.5%]'>
                    <div className='grid print:grid-cols-2 md:grid-cols-2'>
                        <div>
                            <p className='font-semibold text-primary'>IEEE STUDENT BRANCH<span> | </span>WEBMASTER
                            </p>
                            <div className='opacity-0 print:opacity-100 h-0 print:h-full'>
                                <p className='gap-[1%] text-xs text-secondary italic'>(Manipal University,
                                    Jaipur)</p>
                            </div>
                            <MediaQuery minWidth={768}>
                                <p className='gap-[1%] text-xs print:hidden text-secondary italic'>(Manipal University,
                                    Jaipur)</p>
                            </MediaQuery>
                        </div>
                        <div>
                            <div className='opacity-0 print:opacity-100 h-0 print:h-full'>
                                <p className='text-secondary text-xs font-medium print:text-right md:text-right italic'>(May
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
                            <div className='opacity-0 print:opacity-100 h-0 print:h-full'>
                                <p className='gap-[1%] text-xs text-secondary italic'>(Manipal University,
                                    Jaipur)</p>
                            </div>
                            <MediaQuery minWidth={768}>
                                <p className='gap-[1%] text-xs print:hidden text-secondary italic'>(Manipal University,
                                    Jaipur)</p>
                            </MediaQuery>
                        </div>
                        <div>
                            <div className='opacity-0 print:opacity-100 h-0 print:h-full'>
                                <p className='text-secondary text-xs font-medium print:text-right md:text-right italic'>(May
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
                            <div className='opacity-0 print:opacity-100 h-0 print:h-full'>
                                <p className='gap-[1%] text-xs text-secondary italic'>(Manipal University,
                                    Jaipur)</p>
                            </div>
                            <MediaQuery minWidth={768}>
                                <p className='gap-[1%] text-xs print:hidden text-secondary italic'>(Manipal University,
                                    Jaipur)</p>
                            </MediaQuery>
                        </div>
                        <div>
                            <div className='opacity-0 print:opacity-100 h-0 print:h-full'>
                                <p className='text-secondary text-xs font-medium print:text-right md:text-right italic'>(May
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
        </>
    )
}

export default  Experience;