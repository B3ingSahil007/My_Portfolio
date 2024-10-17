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
import AdminLayouts from './components/layouts/AdminLayouts'
import AdminUsers from './pages/AdminUsers'
import AdminContacts from './pages/AdminContacts'
import AdminUpdate from './pages/AdminUpdate'
import AdminProjects from './pages/AdminProjects'
import AdminExperiences from './pages/AdminExperiences'
import AdminServices from './pages/AdminServices'
import AdminAllProjects from './pages/AdminAllProjects'
import AdminAllExperiences from './pages/AdminAllExperiences'
import AdminAllServices from './pages/AdminAllServices'
import AdminProjectUpdate from './pages/AdminProjectUpdate'
import AdminExperiencesUpdate from './pages/AdminExperiencesUpdate'
import AdminServiceUpdate from './pages/AdminServiceUpdate'

const App = () => {
  return (
    <>
      <div className='container'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Registeration />} />
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/myprojects' element={<MyProjects />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/services' element={<Services />} />
            <Route path='/logout' element={<LogOut />} />
            <Route path='/error' element={<Error404 />} />
            <Route path='*' element={<Error404 />} />
            <Route path='/admin' element={<AdminLayouts />}>
              <Route path='allusers' element={<AdminUsers />} />
              <Route path='allusers/:id/edit' element={<AdminUpdate />} />
              <Route path='allcontacts' element={<AdminContacts />} />
              <Route path='addprojects' element={<AdminProjects />} />
              <Route path='addexperience' element={<AdminExperiences />} />
              <Route path='addservices' element={<AdminServices />} />
              <Route path='allprojects' element={<AdminAllProjects />} />
              <Route path='allprojects/:id/edit' element={<AdminProjectUpdate />} />
              <Route path='allexperiences' element={<AdminAllExperiences />} />
              <Route path='allexperiences/:id/edit' element={<AdminExperiencesUpdate />} />
              <Route path='allservices' element={<AdminAllServices />} />
              <Route path='allservices/:id/edit' element={<AdminServiceUpdate />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  )
}

export default App