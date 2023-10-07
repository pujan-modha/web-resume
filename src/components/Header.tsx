import {
    HeaderAddress, HeaderFancyName,
    HeaderFirstLetterFN,
    HeaderFirstLetterLN, HeaderFirstName, HeaderLastName,
    HeaderNoFirstLetterFN,
    HeaderNoFirstLetterLN, HeaderTitle,
} from "../data/HeaderData.ts"

const Header = () => {
    return (
        <>
            <section>
                <div className='px-[2.5%] text-left print:text-center md:text-center mx-auto align-middle print:mt-0 mt-[5%] bg-background'>
                    <div>
                        <h1 className='text-5xl font-bold md:tracking-wide my-[2.5%] pointer-events-none'>
                            <span>
                                {/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */}
                                {!HeaderFancyName ? ("") : (
                                    <span className='selection:underline selection:underline-offset-auto print:text-foreground print:tracking-normal print:font-bold bg-foreground text-background tracking-wide font-black print:underline print:underline-offset-auto'>
                                {HeaderFirstLetterFN}
                            </span>
                                )}
                                {/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */}
                                {!HeaderFancyName ? (<span className='underline underline-offset-auto'>
                                {HeaderFirstName}
                            </span>) : (
                                    <span className='underline underline-offset-auto'>
                                {HeaderNoFirstLetterFN}
                            </span>
                                )}
                                <span className='-tracking-widest'> </span>
                                {/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */}
                                {!HeaderFancyName ? ("") : (
                                    <span className='selection:underline selection:underline-offset-auto print:text-foreground print:tracking-normal print:font-bold bg-foreground text-background tracking-wide font-black print:underline print:underline-offset-auto'>
                                {HeaderFirstLetterLN}
                            </span>
                                )}
                                {/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */}
                                {!HeaderFancyName ? (<span className='underline underline-offset-auto'>
                                {HeaderLastName}
                            </span>) : (
                                    <span className='underline underline-offset-auto'>
                                {HeaderNoFirstLetterLN}
                            </span>
                                )}
                            </span>
                        </h1>
                        <p className='mt-[1%] print:my-[1%] text-primary font-semibold text-xl'>{HeaderTitle}</p>
                        <p className='font-medium text-primary'>{HeaderAddress}</p>
                    </div>
                    <hr className='mx-auto border-2 border-opacity-50 border-primary my-[2.5%]'/>
                </div>
            </section>
        </>
    )
}

export default Header;