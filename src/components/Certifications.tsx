import {CertificationsData} from "../data/CertificationsData.ts";

const Certifications = () => {
    return (
        <>
            <section>
                <div>
                    <div>
                        <h2 className='text-lg text-foreground font-bold print:mt-[2.5%]'>CERTIFICATIONS</h2>
                        <div className='text-sm'>
                            <ul>
                                {CertificationsData.map((certifications, id) => (
                                    <li key={id}>
                                        <span className='font-black text-secondary'> › </span><span
                                        className='text-primary font-light'><span
                                        className='font-semibold'>{certifications.certificationCourseName}</span>
                                        {!certifications.certificationHaveCourseLink ? ("") : (<span>
                                            <span> - </span><a
                                            href={certifications.certificationLinkToCourse} target="_noref">(<span
                                            className='hover:text-primary text-secondary font-light hover:underline'>{certifications.certificationCoursePlatformName}<span
                                            className='text-primary opacity-50'>↗</span></span>)</a>
                                        </span>)}
                                </span>
                                        {!certifications.certificationHaveCertificate ? ("") : (<span>
                                            <span> | </span><a
                                            href={certifications.certificationLinkToCertificate} target="_noref">(<span
                                            className='hover:text-primary text-secondary font-light hover:underline'>Certificate<span
                                            className='text-primary opacity-50'>↗</span></span>)</a>
                                        </span>)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Certifications;