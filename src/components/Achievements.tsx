import {AchievementsData} from "../data/AchievementsData.ts";

const Achievements = () => {
    return (
        <>
            <section>
                <div className='bg-background'>
                    <h2 className='text-lg text-foreground font-bold print:mt-[2.5%]'>ACHIEVEMENTS</h2>
                    <div className='text-sm'>
                        <ul>
                            {AchievementsData.map((achievements, id) => (
                                <li key={id}><span className='font-black text-secondary'> › </span><span
                                    className='text-primary font-light'><span
                                    className='font-semibold'>{achievements.achievementMain}</span>
                                        <span> - </span>{achievements.achievementEvent}</span>
                                    {!achievements.achievementHaveCertificate ? ("") : (<span>
                                        <span> | </span><a href={achievements.achievementLinkToCertificate} target="_noref">(<span
                                        className='hover:text-primary text-secondary font-light hover:underline'>Certificate<span
                                        className='text-primary opacity-50 print:hidden'>↗</span></span>)</a>
                                </span>)}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/*<hr className='hidden mx-auto border border-opacity-25 border-foreground my-[2.5%] w-full'/>*/}
            </section>
        </>
    )
}

export default Achievements;