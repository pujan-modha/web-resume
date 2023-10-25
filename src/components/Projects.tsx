import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faGitlab} from "@fortawesome/free-brands-svg-icons";
import {faCode} from "@fortawesome/free-solid-svg-icons";
import MediaQuery from "react-responsive";
import {ProjectsData} from "../data/ProjectsData.ts";

const Projects = () => {
    return (
        <>
            <section className='h-min'>
                <div className='bg-background'>
                    <h2 className='text-lg text-foreground font-bold print:mt-[2.5%] pointer-events-none'>PROJECTS</h2>
                    {ProjectsData.map((project, id) => (
                        <div className='mb-[2.5%]' key={id}>
                            <div className='grid print:grid-cols-2 md:grid-cols-2'>
                                <div>
                                    <p className='font-semibold text-primary'>
                                        <span>
                                            {!project.ProjectHasLink ? (<span>{project.ProjectName}
                                </span>) : (<a href={project.ProjectLink} target="_noref"
                                               className='hover:text-secondary hover:underline'>{project.ProjectName}
                                                <span
                                                    className='text-primary font-light opacity-50 print:hidden inline-flex'><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor" className="w-auto h-4">
                                                    <path fillRule="evenodd"
                                                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                          clipRule="evenodd"/>
                                                </svg>
                                                </span>
                                            </a>)}
                                        </span>
                                        {!project.ProjectHasGitHub ? ("") : (
                                            <span><span className='text-primary opacity-50 font-thin text-sm select-none'> | </span><a
                                                href={project.ProjectGitHubLink} target='_noref'
                                                className='opacity-75 hover:opacity-100'><FontAwesomeIcon
                                                icon={faGithub} style={{color: "#6272a4"}}/>
                                        </a></span>)}
                                        {!project.ProjectHasGitLab ? ("") : (<span><span
                                            className='text-primary'><span
                                            className='text-primary opacity-50 font-thin text-sm select-none'> | </span></span><a
                                            href='/' target='_noref'
                                            className='opacity-75 hover:opacity-100'><FontAwesomeIcon
                                            icon={faGitlab} style={{color: "#6272a4"}}/>
                                        </a></span>)}
                                        {!project.ProjectHasOtherLink ? ("") : (<span><span
                                            className='text-primary opacity-50 font-thin text-sm select-none'> | </span><a href='/'
                                                                                                               target='_noref'
                                                                                                               className='opacity-75 hover:opacity-100'><FontAwesomeIcon
                                            icon={faCode} style={{color: "#6272a4"}}/>
                                        </a></span>)}
                                    </p>
                                </div>
                                <div>
                                    <div className='opacity-0 print:opacity-100 h-0 print:h-full'>
                                        <p className='text-secondary text-xs font-medium print:text-right md:text-right italic'>({project.ProjectTimeFrom}{!project.ProjectHasTimeTo ? ("") : (
                                            <span><span> - </span>{project.ProjectTimeTo}</span>)}
                                            {!project.ProjectHasLocation ? ("") : (
                                                <span><span> | </span>{project.ProjectLocation}</span>)}
                                            )</p>
                                    </div>
                                    <MediaQuery minWidth={768}>
                                        <p className='text-secondary text-xs font-medium print:hidden md:text-right italic'>({project.ProjectTimeFrom}{!project.ProjectHasTimeTo ? ("") : (
                                            <span><span> - </span>{project.ProjectTimeTo}</span>)}
                                            {!project.ProjectHasLocation ? ("") : (
                                                <span><span> | </span>{project.ProjectLocation}</span>)}
                                            )</p>
                                    </MediaQuery>
                                    <p className='text-secondary text-xs font-medium print:text-right md:hidden print:hidden italic'>({project.ProjectTimeFrom}{!project.ProjectHasTimeTo ? ("") : (
                                        <span><span> - </span>{project.ProjectTimeTo}</span>)}
                                        {!project.ProjectHasLocation ? ("") : (
                                            <span><span> | </span>{project.ProjectLocation}</span>)}
                                        )</p>
                                </div>
                            </div>
                            {!project.ProjectHasTechStack ? ("") : (
                                <div>
                                    <ul className='flex flex-wrap gap-[0.75%]'>
                                        {project.ProjectTechStack.map((projecttechstack, id) => (
                                            <li key={id}
                                                className='pointer-events-none print:text-foreground print:border text-xs border border-secondary text-secondary px-[1%] mb-[1%] md:mb-[0.5%] print:mb-[0.5%]'>{projecttechstack}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <div className='text-sm text-primary'>
                                <ul>
                                    {project.ProjectDescription.map((projectdescription, id) => (
                                        <li key={id}>
                                            <span className='text-secondary font-semibold opacity-75 select-none'> › </span>{projectdescription}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Projects;
