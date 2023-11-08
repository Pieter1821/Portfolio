


import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Experience from './Components/Experience'
import About from './Components/About'


export default function Home() {
  return (
    <div className='home-container'>
              <Navbar/>
              <Hero/>
              <About/>
              <Projects/>
              <Experience/>
    </div>

    
    
  )
}
