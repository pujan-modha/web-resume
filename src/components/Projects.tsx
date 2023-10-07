import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faGitlab} from "@fortawesome/free-brands-svg-icons";
import {faCode} from "@fortawesome/free-solid-svg-icons";
import MediaQuery from "react-responsive";
import {ProjectsData} from "../data/ProjectsData.ts";

const Projects = () => {
    return(
        <>
            <section className='h-min'>
                <div className='bg-background'>
                    <h2 className='text-lg text-foreground font-bold print:mt-[2.5%]'>PROJECTS</h2>
                    {ProjectsData.map((project, id) => (
                        <div className='mb-[2.5%]' key={id}>
                            <div className='grid print:grid-cols-2 md:grid-cols-3'>
                                <div className='md:col-start-1 md:col-span-2'>
                                    <p className='font-semibold text-primary'>
                                        <span>
                                            {!project.ProjectHasLink ? (<span>{project.ProjectName}
                                </span>) : (<a href={project.ProjectLink} target="_noref"
                                               className='hover:text-secondary hover:underline'>{project.ProjectName}
                                                <span className='text-primary font-light opacity-50'>↗</span>
                                            </a>)}
                                        </span>
                                        {!project.ProjectHasGitHub ? ("") : (<span><span className='text-primary opacity-50 font-thin text-sm'> | </span><a href={project.ProjectGitHubLink} target='_noref' className='opacity-75 hover:opacity-100'><FontAwesomeIcon
                                            icon={faGithub} style={{color: "#6272a4"}}/><span
                                            className='text-primary opacity-50 font-thin text-sm'>↗</span></a></span>)}
                                        {!project.ProjectHasGitLab ? ("") : (<span><span
                                            className='text-primary'><span className='text-primary opacity-50 font-thin text-sm'> | </span></span><a href='/' target='_noref' className='opacity-75 hover:opacity-100'><FontAwesomeIcon
                                            icon={faGitlab} style={{color: "#6272a4"}}/><span
                                            className='text-primary opacity-50 font-thin text-sm'>↗</span></a></span>)}
                                        {!project.ProjectHasOtherLink ? ("") : (<span><span className='text-primary opacity-50 font-thin text-sm'> | </span><a href='/' target='_noref' className='opacity-75 hover:opacity-100'><FontAwesomeIcon
                                            icon={faCode} style={{color: "#6272a4"}}/><span
                                            className='text-primary opacity-50 font-thin text-sm'>↗</span></a></span>)}
                                    </p>
                                    {!project.ProjectHasLocation ? ("") : (
                                        <div>
                                            <div className='opacity-0 print:opacity-100 h-0 print:h-full'>
                                                <p className='gap-[1%] text-xs text-secondary italic'>({project.ProjectLocation})</p>
                                            </div>
                                            <MediaQuery minWidth={768}>
                                                <p className='gap-[1%] text-xs print:hidden text-secondary italic'>({project.ProjectLocation})</p>
                                            </MediaQuery>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <div className='opacity-0 print:opacity-100 h-0 print:h-full'>
                                        <p className='text-secondary text-xs font-medium print:text-right md:text-right italic'>({project.ProjectTimeFrom}{!project.ProjectHasTimeTo ? (")") : (<span><span> - </span>{project.ProjectTimeTo})</span>)}</p>
                                    </div>
                                    <MediaQuery minWidth={768}>
                                        <p className='text-secondary text-xs font-medium print:hidden md:text-right italic'>({project.ProjectTimeFrom}{!project.ProjectHasTimeTo ? (")") : (<span><span> - </span>{project.ProjectTimeTo})</span>)}</p>
                                    </MediaQuery>
                                    <p className='text-secondary text-xs font-medium print:text-right md:hidden print:hidden italic'>({project.ProjectTimeFrom}{!project.ProjectHasTimeTo ? ("") : (<span><span> - </span>{project.ProjectTimeTo}</span>)}
                                        {!project.ProjectHasLocation ? ("") : (<span><span> | </span>{project.ProjectLocation}</span>)}
                                        )</p>
                                </div>
                            </div>
                            {!project.ProjectHasTechStack ? ("") : (
                                <div>
                                    <ul className='flex flex-wrap gap-[0.75%]'>
                                        {project.ProjectTechStack.map((projecttechstack, id) => (
                                            <li key={id} className='print:text-foreground print:border text-xs border border-secondary text-secondary px-[1%] md:my-[0.5%]'>{projecttechstack}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <div className='text-sm text-primary'>
                                <ul>
                                    {project.ProjectDescription.map((projectdescription, id) => (
                                        <li key={id}>
                                            <span className='text-secondary'> › </span>{projectdescription}
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