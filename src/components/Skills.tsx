const Skills = () => {
    return(
        <>
            <section>
                <h2 className='text-lg text-foreground font-bold print:mt-[2.5%]'>SKILLS</h2>
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
                                <li className='print:text-foreground print:border text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Tailwind CSS</li>
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
        </>
    )
}

export default Skills;