import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
import Features from "./components/sections/Features"
import HowItWorks from "./components/sections/HowItWorks"
import Sports from "./components/sections/Sports"
import Faq from "./components/sections/Faq"
import FinalCTA from "./components/sections/FinalCTA"
import Footer from "./components/layout/Footer"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Sports />
        <Faq />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
