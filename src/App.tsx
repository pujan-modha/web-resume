import './App.css'
import Header from "./components/Header.tsx";
import Contact from "./components/Contact.tsx";
import Education from "./components/Education.tsx";
import Skills from "./components/Skills.tsx";
import Experience from "./components/Experience.tsx";
import Projects from "./components/Projects.tsx";
import Certifications from "./components/Certifications.tsx";
import Achievements from "./components/Achievements.tsx";
import HorizontalRule from "./components/HorizontalRule.tsx";

function App() {
    return (
        <>
            <div className='mx-[2.5%] md:mx-auto'>
                <div className='text-foreground bg-background font-mono box-border max-w-3xl mx-auto print:my-0 my-[2.5%] print:border-0 border-4 border-foreground w-full'>
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