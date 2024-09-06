import React from 'react'
import { Navbar } from './Components/Navbar/Navbar'
import { Hero } from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Testinomials from './Components/Testinomials/Testinomials'
export const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    <Title title="Our advantages" subtitle="What we will offer" />
      <div className="container"> 
      
      <Programs /> </div>
      <About />
      <Title title="Testinomials" subtitle="What our clients say" />
      <Testinomials />
      <Title title="Contact us" subtitle="Get In Touch" />
      <Contact />
      <Footer />

    </div>
  )
}
export default App
