import { Footer } from "./components/Footer"
import { MainSection } from "./components/Main/MainSection"
import { Navbar } from "./components/Navbar"

export const App = () => {

  return (
    <div className='bg-black scroll-auto'>
      <Navbar />
      <MainSection />
      <Footer />
    </div>
  )
}
