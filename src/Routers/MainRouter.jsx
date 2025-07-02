import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../Components/LandingPahe'
import Services from '../Components/Services'
import AboutSection from '../Components/AboutSection'
import AboutHero from '../Components/AboutHero'
import ContactUs from '../Components/ContactUs'
import Careers from '../Components/Careers'
import Accessibility from '../Components/Accessibility'
import Privacy from '../Components/Privacy'
import Cookies from '../Components/Cookies'


const MainRouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path='/work' element={<AboutSection/>} />
            <Route path='/Services' element={<Services/>} />
            <Route path='/about' element={<AboutHero/>} />
            <Route path='/contact' element={<ContactUs/>} />
            <Route path='/careers' element={<Careers/>} />
            <Route path='/accessibility' element={<Accessibility/>} />
            <Route path='/privacy' element={<Privacy/>} />
            <Route path='/cookies' element={<Cookies/>} />
        </Routes>
    </div>
  )
}

export default MainRouter