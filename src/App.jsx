import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Expirence from './components/expirence/Expirence'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonoal/Testimonial'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Service from './components/services/service'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Expirence/>
    <Service/>
    <Portfolio/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </>

  )
}

export default App
