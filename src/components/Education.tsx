const Education = () => {
    return(
        <>
            <section>
                <div>
                    <h2 className='text-lg text-foreground font-bold print:mt-[2.5%]'>EDUCATION</h2>
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
                                <li><span
                                    className='font-semibold text-primary'>Major:<span> </span></span><span
                                    className='text-primary font-light'>Computer Science</span></li>
                                <li><span
                                    className='font-semibold text-primary'>Minor:<span> </span></span><span
                                    className='text-primary font-light'>TBD</span></li>
                                <li><span
                                    className='font-semibold text-primary'>GPA:<span> </span></span><span
                                    className='text-primary font-light'>7.5</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Education;