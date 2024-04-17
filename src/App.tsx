import { Footer } from './Components/footer'
import { HeroSection } from './Components/hero-section'
import { NavBar } from './Components/navbar'
import { ProjectsSections } from './Components/projects-section'
import { TechnologiesSection } from './Components/technologies-section'

function App() {

  return (
    <div>
      <NavBar />
      <main className='container mx-auto flex flex-col gap-52 min-h-screen  py-44'>
        <HeroSection />
        <TechnologiesSection />
        <ProjectsSections />
      </main>
      <Footer />
    </div>
  )
}

export default App
