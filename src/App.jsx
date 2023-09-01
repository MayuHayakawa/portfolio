import { useState } from 'react';
import LanguageContext from './context/languagecontext'

import AboutMe from './components/aboutme'
import Contacts from './components/contacts'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Projects from './components/projects'
import Summary from './components/summary'
import Toolkit from './components/toolkit'

function App() {
  const [ language, setLanguage ] = useState("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "jp" : "en");
  }

  return (
    <LanguageContext.Provider value={{language, toggleLanguage}}>
      <header className="sticky top-0 z-10">
       <Navbar />
      </header>
      <main className='m-auto flex flex-col text-center gap-32 max-lg:gap-16'>
        <Summary />
        <Projects />
        <AboutMe />
        <Toolkit />
        <Contacts />
      </main>
      <Footer />
    </LanguageContext.Provider>
  )
}

export default App
