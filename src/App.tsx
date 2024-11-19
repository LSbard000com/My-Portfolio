import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Section from './components/Section'
import Header from './components/Header'
import Rssfeed from './components/Rssfeed'
import SideBar from './components/SideBar'
import Skills from './components/Skills'
import Top from './components/Top'
import Works from './components/Works'

function App() {


  return (
    <>
      <SideBar />
      <Header />
      <Top />
      <About />
      <Works />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
