import './App.css'
import {useState} from "react";
import Header from "./components/Header.tsx";
import Contact from "./components/Contact.tsx";
import Education from "./components/Education.tsx";
import Skills from "./components/Skills.tsx";
import Experience from "./components/Experience.tsx";
import Projects from "./components/Projects.tsx";
import Certifications from "./components/Certifications.tsx";
import Achievements from "./components/Achievements.tsx";
import HorizontalRule from "./components/HorizontalRule.tsx";
import {HeaderFullName} from "./data/HeaderData.ts";
export const HeaderFirstName = "PUJAN";

function App() {
    const [title] = useState(HeaderFullName);
    useState(() => {
        document.title = title;
    });
    return (
        <>
            <div className='px-[2.5%] md:mx-auto bg-[#44475a] py-[2.5%] print:py-0'>
                <div className='text-foreground bg-background font-mono box-border max-w-3xl mx-auto print:border-0 border-4 border-foreground w-full'>
                    <Header/>
                    <div className='px-[2.5%]'>
                        <Contact/>
                        <HorizontalRule/>
                        <Education/>
                        <HorizontalRule/>
                        <Skills/>
                        <HorizontalRule/>
                        <Experience/>
                        <HorizontalRule/>
                        <Projects/>
                        <HorizontalRule/>
                        <Certifications/>
                        <HorizontalRule/>
                        <Achievements/>
                    </div>
                    <hr className='mx-auto border-2 border-opacity-50 border-primary my-[2.5%] w-[95%]'/>
                </div>
            </div>
        </>
    )
}

export default App;