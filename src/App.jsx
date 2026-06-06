// Import React — needed for JSX to work
import React from 'react'

// Import all section components that make up the portfolio page
import Navbar      from './components/Navbar'
import About       from './components/About'
import Stats       from './components/Stats'
import Projects    from './components/Projects'
import Skills      from './components/Skills'
import Experience  from './components/Experience'
import Interests   from './components/Interests'
import Contact     from './components/Contact'
import Footer      from './components/Footer'

// App is the root component — it composes all sections in reading order
function App() {
  return (
    // Outer wrapper div — sets the base background and constrains overflow
    <div className="bg-bg text-white overflow-x-hidden">

      {/* Fixed navigation bar — always visible at the top of the viewport */}
      <Navbar />

      {/* ── MAIN CONTENT ── rendered as a semantic main landmark */}
      <main>
        {/* About me — bio and personal background */}
        <About />

        {/* Stats row — experience, projects, and commitment numbers */}
        <Stats />

        {/* Projects grid — featured work with hover details */}
        <Projects />

        {/* Skills — design tools, frontend, and process expertise */}
        <Skills />

        {/* Experience — professional timeline */}
        <Experience />

        {/* Interests & hobbies — personal dimension */}
        <Interests />

        {/* Contact form + social links */}
        <Contact />
      </main>

      {/* Site footer — copyright and back-to-top */}
      <Footer />
    </div>
  )
}

// Export App so main.jsx can import and render it
export default App
