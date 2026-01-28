import React from 'react'
import Header from './Component/Header'
import Footer from './Component/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Projects from './Pages/Projects'
import Resume from './Pages/Resume'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/project' element={<Projects/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App