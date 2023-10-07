import {SkillsData} from "../data/SkillsData.ts";

const Skills = () => {
    return (
        <>
            <section>
                <div className='bg-background'>
                    <h2 className='text-lg text-foreground font-bold print:mt-[2.5%] pointer-events-none'>SKILLS</h2>
                    {SkillsData.map((skills, id) => (
                        <div key={id}>
                            <div>
                                <p className='font-semibold text-primary'>{skills.SkillsTitle}</p>
                                <div>
                                    <ul className='flex flex-wrap gap-[0.75%]'>
                                        {skills.SkillsName.map((skillname, id) => (
                                            <li key={id}
                                                className='pointer-events-none print:text-foreground print:border text-xs bg-secondary text-background px-[1%] mb-[1%]'>{skillname}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Skills;