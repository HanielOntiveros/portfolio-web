import { About, Home, Projects, Skills } from "./components"
import { Navbar } from "./components/Navbar"

export const App = () => {

  return (
    <div className='bg-black scroll-auto'>
      < Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}
