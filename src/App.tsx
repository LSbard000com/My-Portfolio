import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Section from './components/Section'
import SideBar from './components/SideBar'
import Skills from './components/Skills'
import Top from './components/Top'
import Works from './components/Works'

function App() {


  return (
    <>
      <SideBar />
      <Top />
      <Section layoutType='left'>
        <About />
      </Section >
      <Works />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
