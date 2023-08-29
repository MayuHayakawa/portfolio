import AboutMe from './components/aboutme'
import Contacts from './components/contacts'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Projects from './components/projects'
import Summary from './components/summary'
import Toolkit from './components/toolkit'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Summary />
        <Projects />
        <AboutMe />
        <Toolkit />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}

export default App
