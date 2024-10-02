import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import MyProjects from './pages/MyProjects'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Registeration from './pages/Registeration'
import Login from './pages/Login'
import Footer from './components/Footer'
import Error404 from './pages/Error404'
import LogOut from './pages/LogOut'
import Experience from './pages/Experience'

const App = () => {
  return (
    <>
      <div className='container'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/myprojects' element={<MyProjects />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/services' element={<Services />} /> 
            <Route path='/registeration' element={<Registeration />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<LogOut />} />
            <Route path='/error' element={<Error404 />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  )
}

export default App