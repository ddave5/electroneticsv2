import React from 'react'
import './home.css'
import Portfolio from './Portfolio/Portfolio';
import Introduction from './Introduction/Introduction';
import Contact from '../Contact/Contact'
import Video from '../../assets/videos/home.mp4'
import Image from '../../assets/images/homeImage.jpg'
import {motion} from 'framer-motion'

const Home = () => {

  return (
    <motion.div className='home' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <div id="home" className='home__container'>
        {window.innerWidth > 600 ? 
          <video src={Video} className='opening__video' 
                muted loop autoPlay disablePictureInPicture preload='auto' 
                width="100%"/> : 
          <img src={Image} className='opening__image' alt='homeImage'/> }
        <div className='dark__blur'/>
        <div className='title__container'>
          <h1 className='opening__title'>Electro Netics Kft.</h1>
          <h2 className='opening__subtitle'>Lépjünk a jövőbe!</h2>
        </div>
        <div className='spacer layerIntro'/>
        <Introduction />
        <div className='spacer layerIntroPortfolio'/>
        <Portfolio /> 
        <div className='spacer layerPortfolioContact'/>
        <Contact isHome="true"/> 
      </div>
    </motion.div>
  )
}

export default Home