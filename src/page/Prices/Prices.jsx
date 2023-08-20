import React from 'react'
import './prices.css'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const Prices = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className='prices__container'>
      <h3>Jelenleg ez az oldal fejlesztés alatt áll, addig is kérjük, hogy kérjen árajánlatot a
        <h2 className='prices__link'><Link to='/contact'> kapcsolat</Link></h2> oldalon!</h3>
    </motion.div>
  )
}

export default Prices