const Achievements = () => {
    return(
        <>
            <section>
            <div>
                <h2 className='text-lg text-foreground font-bold print:mt-[2.5%]'>ACHIEVEMENTS</h2>
                <div className='text-sm'>
                    <ul>
                        <li><span className='font-black text-secondary'> › </span><span
                            className='text-primary font-light'><span className='font-semibold'>2nd Position</span><span> - </span>ICHACK 2.0</span><span> | </span><a
                            href="/" target="_noref">(<span
                            className='hover:text-primary text-secondary font-light hover:underline'>Certificate<span
                            className='text-primary opacity-50'>↗</span></span>)</a></li>
                        <li><span className='font-black text-secondary'> › </span><span
                            className='text-primary font-light'><span
                            className='font-semibold'>Winner</span><span> - </span>UXPLORER by IEEE SB MUJ</span><span> | </span><a
                            href="/" target="_noref">(<span
                            className='hover:text-primary text-secondary font-light hover:underline'>Certificate<span
                            className='text-primary opacity-50'>↗</span></span>)</a></li>
                        <li><span className='font-black text-secondary'> › </span><span
                            className='text-primary font-light'><span
                            className='font-semibold'>Top 15</span><span> - </span>MUJ HACK-X 2023</span><span> | </span><a
                            href="/" target="_noref">(<span
                            className='hover:text-primary text-secondary font-light hover:underline'>Certificate<span
                            className='text-primary opacity-50'>↗</span></span>)</a></li>
                    </ul>
                </div>
            </div>
            <hr className='hidden mx-auto border border-opacity-25 border-foreground my-[2.5%] w-full'/>
        </section>
        </>
    )
}

export default Achievements;