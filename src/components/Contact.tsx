import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faSquareGithub, faSquareGitlab, faSquareXTwitter} from "@fortawesome/free-brands-svg-icons";
import {faSquareEnvelope, faSquarePhone} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return(
        <>
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
                            className='font-semibold text-primary'><FontAwesomeIcon
                            icon={faLinkedin}
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
                            className='font-semibold text-primary'><FontAwesomeIcon
                            icon={faSquarePhone}
                            size='lg'
                            style={{color: "#44475a"}}/><span
                            className='-tracking-widest'> </span></span><a
                            href="tel:+91 9484856107" target="_noref"><span
                            className='hover:text-primary text-secondary font-light hover:underline'>+91 9484856107<span
                            className='text-primary opacity-50'>↗</span></span></a></li>
                        <li><span
                            className='font-semibold text-primary'><FontAwesomeIcon
                            icon={faSquareXTwitter}
                            size='lg'
                            style={{color: "#44475a"}}/><span
                            className='-tracking-widest'> </span></span><a
                            href="/" target="_noref"><span
                            className='hover:text-primary text-secondary font-light hover:underline'>x.com/pujan_modha<span
                            className='text-primary opacity-50'>↗</span></span></a></li>
                        <li><span
                            className='font-semibold text-primary'><FontAwesomeIcon
                            icon={faSquareGitlab}
                            size='lg'
                            style={{color: "#44475a"}}/><span
                            className='-tracking-widest'> </span></span><a
                            href="/" target="_noref"><span
                            className='hover:text-primary text-secondary font-light hover:underline'>gitlab.com/pujan_modha<span
                            className='text-primary opacity-50'>↗</span></span></a></li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Contact;