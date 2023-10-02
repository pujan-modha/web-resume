const Header = () => {
    return(
        <>
            <section>
                <div
                    className='px-[2.5%] text-left print:text-center md:text-center mx-auto align-middle print:mt-0 mt-[5%]'>
                    <div>
                        <h1 className='text-5xl font-bold md:tracking-wide my-[2.5%]'><span
                            className='print:text-foreground print:tracking-normal print:font-bold bg-foreground text-background tracking-wide font-black'>P</span>ujan<span
                            className='-tracking-widest'> </span><span
                            className='print:text-foreground print:tracking-normal print:font-bold bg-foreground text-background tracking-wide font-black'>M</span>odha
                        </h1>
                        <p className='mt-[1%] print:my-[1%] text-primary font-semibold text-xl'>Full-Stack
                            Developer</p>
                        <p className='font-medium text-primary'>Porbandar, Gujarat, India</p>
                    </div>
                    <hr className='mx-auto border-2 border-opacity-50 border-primary my-[2.5%]'/>
                </div>
            </section>
        </>
    )
}

export default Header;