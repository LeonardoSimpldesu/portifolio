import { HeroSection } from './Components/hero-section'
import { NavBar } from './Components/navbar'
import { Footer } from './Components/footer'
import { ProjectsSections } from './Components/projects-section'
import { TechnologiesSection } from './Components/technologies-section'
import { Element } from 'react-scroll';

function App() {

  return (
    <div>
      <NavBar />
      <main className='container mx-auto flex flex-col min-h-screen sm:py-44'>
        <Element name='hero-section'>
          <HeroSection />
        </Element>
        <Element name='technologies-section'>
          <TechnologiesSection />
        </Element>
        <Element name='projects-section'>
          <ProjectsSections />
        </Element>
      </main>
      <Element name='contacts-section'>
        <Footer />
      </Element>
    </div>
  )
}

export default App
