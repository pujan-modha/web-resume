import './Resume.css'

function Resume() {

  return (
    <body>
      <div className='mx-[2.5%] md:mx-auto print:w-letter'>
          <div className='text-foreground bg-background font-mono box-border max-w-3xl mx-auto print:my-0 my-[2.5%] print:border-0 border-4 border-foreground w-full'>
              <div className='text-center mx-auto align-middle print:mt-0 mt-[5%]'>
                  <h1 className='text-5xl font-bold md:tracking-wide md:my-0 my-[2.5%]'><span className='print:text-foreground bg-foreground text-background'>P</span>ujan <span className='print:text-foreground bg-foreground text-background'>M</span>odha</h1>
                  <p className='mt-[1%] print:my-[1%] text-primary font-semibold text-xl'>Full-Stack Developer</p>
                  <p className='font-medium text-primary'>Porbandar, Gujarat, India</p>
                  <hr className='mx-auto border-2 border-opacity-75 border-primary my-[2.5%] w-[95%]'/>
              </div>
              <div className='px-[2.5%]'>
                  <section>
                      <div className='text-sm grid print:grid-cols-2 md:grid-cols-2'>
                          <div>
                              <h2 className='text-lg text-foreground font-bold'>CONTACT</h2>
                              <ul>
                                  <li><span className='font-semibold text-primary'>GitHub: </span><a href="/" target="_noref"><span className='hover:text-primary text-secondary font-light'>github.com/pujan-modha<span className='text-primary opacity-50'>↗</span></span></a></li>
                                  <li><span className='font-semibold text-primary'>LinkedIn: </span><a href="/" target="_noref"><span className='hover:text-primary text-secondary font-light'>linkedin.com/in/pujan-modha<span className='text-primary opacity-50'>↗</span></span></a></li>
                                  <li><span className='font-semibold text-primary'>Twitter: </span><a href="/" target="_noref"><span className='hover:text-primary text-secondary font-light'>twitter.com/pujan_modha<span className='text-primary opacity-50'>↗</span></span></a></li>
                                  <li><span className='font-semibold text-primary'>E-Mail: </span><a href="mailto:pujan@ieee.org" target="_noref"><span className='hover:text-primary text-secondary font-light'>pujan@ieee.org<span className='text-primary opacity-50'>↗</span></span></a></li>
                                  <li><span className='font-semibold text-primary'>Phone: </span><a href="tel:+91 9484856107" target="_noref"><span className='hover:text-primary text-secondary font-light'>+91 9484856107<span className='text-primary opacity-50'>↗</span></span></a></li>
                              </ul>
                          </div>
                          <hr className='md:hidden print:hidden mx-auto border border-opacity-50 border-foreground my-[2.5%] w-full'/>
                          <div>
                              <h2 className='text-lg text-foreground font-bold'>EDUCATION</h2>
                              <div>
                                  <p className='font-semibold text-base text-primary'>MANIPAL UNIVERSITY, JAIPUR</p>
                                  <p className='text-secondary text-sm font-medium'>2022 - Present | Bachelor of Technology</p>
                              </div>
                              <div className='text-sm'>
                                  <ul>
                                      <li><span className='font-semibold text-primary'>Major: </span><span className='text-primary font-light'>Computer Science</span></li>
                                      <li><span className='font-semibold text-primary'>Minor: </span><span className='text-primary font-light'>TBD</span></li>
                                      <li><span className='font-semibold text-primary'>GPA: </span><span className='text-primary font-light'>7.5</span></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <hr className='mx-auto border border-opacity-50 border-foreground my-[2.5%] w-full'/>
                  </section>
                  <section>
                      <h2 className='text-lg text-foreground font-bold'>SKILLS</h2>
                      <div className='grid print:grid-cols-2 md:grid-cols-2'>
                          <div className='md:row-span-2 print:row-span-2 gap-y-[5%]'>
                              <div>
                                  <p className='font-semibold text-primary'>LANGUAGES</p>
                                  <div>
                                      <ul className='flex flex-wrap gap-[1%]'>
                                          <li className='print:text-foreground text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>C/C++</li>
                                          <li className='print:text-foreground text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Java</li>
                                          <li className='print:text-foreground text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Python</li>
                                          <li className='print:text-foreground text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Kotlin</li>
                                          <li className='print:text-foreground text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>PHP</li>
                                          <li className='print:text-foreground text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>HTML/CSS</li>
                                          <li className='print:text-foreground text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Javascript</li>
                                          <li className='print:text-foreground text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Typescript</li>
                                      </ul>
                                  </div>
                              </div>
                              <div>
                                  <p className='font-semibold text-primary'>TECHNOLOGIES</p>
                                  <div>
                                      <ul className='flex flex-wrap gap-[1%]'>
                                          <li className='print:text-foreground text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>React.js</li>
                                          <li className='print:text-foreground text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Next.js</li>
                                          <li className='print:text-foreground text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Git</li>
                                          <li className='print:text-foreground text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Vercel</li>
                                          <li className='print:text-foreground text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Node.js</li>
                                          <li className='print:text-foreground text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Tailwind CSS</li>
                                          <li className='print:text-foreground text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Bootstrap</li>
                                          <li className='print:text-foreground text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Netlify</li>
                                          <li className='print:text-foreground text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Linux</li>
                                          <li className='print:text-foreground text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>SQL</li>
                                          <li className='print:text-foreground text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Docker</li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div>
                              <p className='font-semibold text-primary'>SOFT SKILLS</p>
                              <div>
                                  <ul className='flex flex-wrap gap-[1%]'>
                                      <li className='print:text-foreground text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Communication</li>
                                      <li className='print:text-foreground text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Logical Thinking</li>
                                      <li className='print:text-foreground text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Problem Solving</li>
                                      <li className='print:text-foreground text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Management</li>
                                      <li className='print:text-foreground text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Marketing</li>
                                      <li className='print:text-foreground text-sm bg-secondary text-background px-[2.5%] mb-[1%]'>Networking</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <hr className='mx-auto border border-opacity-50 border-foreground my-[2.5%] w-full'/>
                  </section>
                  <section>
                      <h2 className='text-lg text-foreground font-bold'>EXPERIENCE</h2>
                      <div className='mb-[2.5%]'>
                          <div className='grid print:grid-cols-2 md:grid-cols-2'>
                              <div>
                                  <p className='font-semibold text-primary'>IEEE STUDENT BRANCH | WEBMASTER</p>
                              </div>
                              <div>
                                  <p className='text-secondary text-xs font-medium print:text-right md:text-right'>(May 2023 - Present | MUJ)</p>
                              </div>
                          </div>
                          <div className='text-sm text-primary'>
                              <ul>
                                  <li><span className='text-secondary'> › </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed purus quis massa hendrerit pulvinar. Vestibulum facilisis risus at aliquet posuere.</li>
                                  <li><span className='text-secondary'> › </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed purus quis massa hendrerit pulvinar. Vestibulum facilisis risus at aliquet posuere.</li>
                              </ul>
                          </div>
                      </div>
                      <div className='mb-[2.5%]'>
                          <div className='grid print:grid-cols-2 md:grid-cols-2'>
                              <div>
                                  <p className='font-semibold text-primary'>IEEE STUDENT BRANCH | WEBMASTER</p>
                              </div>
                              <div>
                                  <p className='text-secondary text-xs font-medium print:text-right md:text-right'>(May 2023 - Present | MUJ)</p>
                              </div>
                          </div>
                          <div className='text-sm text-primary'>
                              <ul>
                                  <li><span className='text-secondary'> › </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed purus quis massa hendrerit pulvinar. Vestibulum facilisis risus at aliquet posuere.</li>
                                  <li><span className='text-secondary'> › </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed purus quis massa hendrerit pulvinar. Vestibulum facilisis risus at aliquet posuere.</li>
                              </ul>
                          </div>
                      </div>
                      <div className='mb-[2.5%]'>
                          <div className='grid print:grid-cols-2 md:grid-cols-2'>
                              <div>
                                  <p className='font-semibold text-primary'>IEEE STUDENT BRANCH | WEBMASTER</p>
                              </div>
                              <div>
                                  <p className='text-secondary text-xs font-medium print:text-right md:text-right'>(May 2023 - Present | MUJ)</p>
                              </div>
                          </div>
                          <div className='text-sm text-primary'>
                              <ul>
                                  <li><span className='text-secondary'> › </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed purus quis massa hendrerit pulvinar. Vestibulum facilisis risus at aliquet posuere.</li>
                                  <li><span className='text-secondary'> › </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed purus quis massa hendrerit pulvinar. Vestibulum facilisis risus at aliquet posuere.</li>
                              </ul>
                          </div>
                      </div>
                      <hr className='mx-auto border border-opacity-50 border-foreground my-[2.5%] w-full'/>
                  </section>
                  <section className='h-min'>
                      <h2 className='text-lg text-foreground font-bold'>PROJECTS</h2>
                      <div className='mb-[2.5%]'>
                          <div className='grid print:grid-cols-2 md:grid-cols-2'>
                              <div>
                                  <p className='font-semibold text-primary hover:text-secondary'><a href="/" target="_noref">PROJECT - 1 | GITHUB<span className='text-primary opacity-50 font-thin text-sm'>↗</span></a></p>
                              </div>
                              <div>
                                  <p className='text-secondary text-xs font-medium print:text-right md:text-right'>(May 2023 - Present)</p>
                              </div>
                          </div>
                          <div className='text-sm text-primary'>
                              <ul>
                                  <li><span className='text-secondary'> › </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed purus quis massa hendrerit pulvinar. Vestibulum facilisis risus at aliquet posuere.</li>
                                  <li><span className='text-secondary'> › </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed purus quis massa hendrerit pulvinar. Vestibulum facilisis risus at aliquet posuere.</li>
                              </ul>
                          </div>
                      </div>
                      <div className='mb-[2.5%]'>
                          <div className='grid print:grid-cols-2 md:grid-cols-2'>
                              <div>
                                  <p className='font-semibold text-primary hover:text-secondary'><a href="/" target="_noref">PROJECT - 2 | GITHUB<span className='text-primary opacity-50 font-thin text-sm'>↗</span></a></p>
                              </div>
                              <div>
                                  <p className='text-secondary text-xs font-medium print:text-right md:text-right'>(May 2023 - Present)</p>
                              </div>
                          </div>
                          <div className='text-sm text-primary'>
                              <ul>
                                  <li><span className='text-secondary'> › </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed purus quis massa hendrerit pulvinar. Vestibulum facilisis risus at aliquet posuere.</li>
                                  <li><span className='text-secondary'> › </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed purus quis massa hendrerit pulvinar. Vestibulum facilisis risus at aliquet posuere.</li>
                              </ul>
                          </div>
                      </div>
                      <hr className='mx-auto border border-opacity-50 border-foreground my-[2.5%] w-full'/>
                  </section>
                  <section>
                      <div className='grid print:grid-cols-2 md:grid-cols-2'>
                          <div>
                              <h2 className='text-lg text-foreground font-bold'>CERTIFICATIONS</h2>
                              <div className='text-sm'>
                                  <ul>
                                      <li><span className='font-black text-secondary'> › </span><a href="/" target="_noref"><span className='hover:text-secondary text-primary font-light'>Course 1 - Coursera</span></a><span> </span><a href="/" target="_noref"><span className='hover:text-primary text-secondary font-light'>(Certificate<span className='text-primary opacity-50'>↗</span>)</span></a></li>
                                      <li><span className='font-black text-secondary'> › </span><a href="/" target="_noref"><span className='hover:text-secondary text-primary font-light'>Course 2 - Udemy</span></a><span> </span><a href="/" target="_noref"><span className='hover:text-primary text-secondary font-light'>(Certificate<span className='text-primary opacity-50'>↗</span>)</span></a></li>
                                      <li><span className='font-black text-secondary'> › </span><a href="/" target="_noref"><span className='hover:text-secondary text-primary font-light'>Course 3 - Udacity</span></a><span> </span><a href="/" target="_noref"><span className='hover:text-primary text-secondary font-light'>(Certificate<span className='text-primary opacity-50'>↗</span>)</span></a></li>
                                  </ul>
                              </div>
                          </div>
                          <hr className='md:hidden print:hidden mx-auto border border-opacity-50 border-foreground my-[2.5%] w-full'/>
                          <div>
                              <h2 className='text-lg text-foreground font-bold'>ACHIEVEMENTS</h2>
                              <div className='text-sm'>
                                  <ul>
                                      <li><span className='font-black text-secondary'> › </span><a href="/" target="_noref"><span className='text-primary font-light'>Achievement - 1</span><span> </span><span className='hover:text-primary text-secondary font-light'>(Certificate<span className='text-primary opacity-50'>↗</span>)</span></a></li>
                                      <li><span className='font-black text-secondary'> › </span><a href="/" target="_noref"><span className='text-primary font-light'>Achievement - 2</span><span> </span><span className='hover:text-primary text-secondary font-light'>(Certificate<span className='text-primary opacity-50'>↗</span>)</span></a></li>
                                      <li><span className='font-black text-secondary'> › </span><a href="/" target="_noref"><span className='text-primary font-light'>Achievement - 3</span><span> </span><span className='hover:text-primary text-secondary font-light'>(Certificate<span className='text-primary opacity-50'>↗</span>)</span></a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <hr className='hidden mx-auto border border-opacity-50 border-foreground my-[2.5%] w-full'/>
                  </section>
              </div>
              <hr className='mx-auto border-2 border-opacity-75 border-primary my-[2.5%] w-[95%]'/>
          </div>
      </div>
    </body>
  )
}

export default Resume;
