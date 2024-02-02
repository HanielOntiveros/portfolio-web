import { Home, About, Skills, Projects, Contact } from ".."

export const MainSection = () => {
    return (
        <main>
            <Home />
            <About />
            <div className="lg:hidden">
                <Skills />
            </div>
            <Projects />
            <Contact />
        </main>
    )
}
