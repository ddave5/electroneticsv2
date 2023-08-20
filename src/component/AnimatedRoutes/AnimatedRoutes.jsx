import React from 'react'
import {Routes, Route, useLocation, Navigate} from 'react-router-dom';
import Home from '../../page/Home/Home'
import About from '../../page/About/About'
import Prices from '../../page/Prices/Prices'
import Contact from '../../page/Contact/Contact'
import IndustrialService from '../../page/Services/Industry/IndustrialService';
import ResidentalService from '../../page/Services/Residental/ResidentalService';
import Services from '../../page/Services/Services'
import {AnimatePresence} from 'framer-motion'
import NotFound from '../../page/Error/404/NotFound';
const AnimatedRoutes = () => {

  const location = useLocation();
  return (
    <AnimatePresence >
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/prices' element={<Prices/>} />
        <Route path='/services'>
          <Route index element={<Services/>}/>
          <Route path='/services/industrial' element={<IndustrialService/>} />
          <Route path='/services/residental' element={<ResidentalService/>} />
        </Route>
        <Route path ='/contact' element={<Contact/>} />
        <Route path = '*' element={<NotFound/>} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes