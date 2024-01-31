import { About, Home, Navbar, Skills } from "./components"

export const App = () => {

  return (
    <div className='bg-black scroll-auto'>
      < Navbar />
      <Home />
      <About />
      <Skills />
    </div>
  )
}
