import { Hero } from "./sections/Hero"
import { Specialties } from "./sections/Specialties"
import { WhatIDo } from "./sections/WhatIDo"
import { BioLinks } from "./sections/BioLinks"
import { Footer } from "./sections/Footer"

function App() {
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

export default App
