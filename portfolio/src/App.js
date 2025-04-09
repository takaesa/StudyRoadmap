import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Services from './components/service/Service'
import Qualification from './components/qualification/Qualification'
import Testimonial from './components/testimonials/Testimonial'


const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Home></Home>
        <About></About>
        <Skills />
        <Services />
        <Qualification />
        <Testimonial />
      </main>
    </>
  )
}

export default App