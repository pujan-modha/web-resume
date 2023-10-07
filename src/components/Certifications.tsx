import {CertificationsData} from "../data/CertificationsData.ts";

const Certifications = () => {
    return (
        <>
            <section>
                <div className='bg-background'>
                    <h2 className='text-lg text-foreground font-bold print:mt-[2.5%] pointer-events-none'>CERTIFICATIONS</h2>
                    <div className='text-sm'>
                        <ul>
                            {CertificationsData.map((certifications, id) => (
                                <li key={id}>
                                    <span className='font-semibold text-secondary opacity-75 select-none'> › </span><span
                                    className='text-primary font-light'><span
                                    className='font-semibold'>{certifications.certificationCourseName}</span>
                                    {!certifications.certificationHaveCourseLink ? ("") : (<span>
                                            <span> - </span><a
                                        href={certifications.certificationLinkToCourse} target="_noref">(<span
                                        className='hover:text-primary text-secondary font-light hover:underline'>{certifications.certificationCoursePlatformName}
                                        <span className='text-primary opacity-50 print:hidden inline-flex align-middle'><svg
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            className="w-auto h-4">
                                            <path
                                                d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"/>
                                            <path
                                                d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"/>
                                        </svg></span></span>)</a>
                                        </span>)}
                                    </span>
                                    {!certifications.certificationHaveCertificate ? ("") : (<span>
                                            <span> | </span><a
                                        href={certifications.certificationLinkToCertificate} target="_noref">(<span
                                        className='hover:text-primary text-secondary font-light hover:underline'>Certificate
                                        <span className='text-primary opacity-50 print:hidden inline-flex align-middle'><svg
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            className="w-auto h-4">
                                            <path
                                                d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"/>
                                            <path
                                                d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"/>
                                        </svg></span></span>)</a>
                                    </span>)}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Certifications;