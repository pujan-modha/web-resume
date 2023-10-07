import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ContactData} from "../data/ContactData.ts";

const Contact = () => {
    return(
        <>
            <section>
                <div className='bg-background'>
                    <ul className='grid grid-cols-1 md:grid-cols-2 print:grid-cols-2'>
                        {ContactData.map((contact, id) => (
                        <li key={id}><span
                            className='font-semibold text-primary'><FontAwesomeIcon
                            // @ts-expect-error for fa icon
                            icon={contact.ContactIcon} size='lg'
                            style={{color: "#44475a"}}/><span className='-tracking-widest'> </span></span><a
                            href={contact.ContactLink}
                            target="_noref"><span
                            className='hover:text-primary text-secondary font-light hover:underline'>{contact.ContactText}<span
                            className='text-primary opacity-50 print:hidden'>↗</span></span></a></li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Contact;