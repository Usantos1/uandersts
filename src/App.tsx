import { Routes, Route } from "react-router-dom"
import { Hero } from "./sections/Hero"
import { Specialties } from "./sections/Specialties"
import { WhatIDo } from "./sections/WhatIDo"
import { BioLinks } from "./sections/BioLinks"
import { Footer } from "./sections/Footer"
import CampanhaDeLead from "./pages/CampanhaDeLead/CampanhaDeLead"

function HomePage() {
  return (
    <div className="page-bg">
      <main>
        <Hero />
        <Specialties />
        <WhatIDo />
        <BioLinks />
        <Footer />
      </main>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/campanha-de-lead" element={<CampanhaDeLead />} />
      <Route path="/campanha-de-leads" element={<CampanhaDeLead />} />
    </Routes>
  )
}

export default App
