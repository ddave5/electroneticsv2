import React from 'react'
import './services.css'
import Industrial from '../../assets/images/services/industrial.jpg'
import Residental from '../../assets/images/services/residential.jpg'
import Industrialblur from '../../assets/images/services/industrialblur.jpg'
import Residentalblur from '../../assets/images/services/residentialblur.jpg'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import ImageComponent from '../../component/ImageComponent/ImageComponent'

const Services = () => {

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <section id='services'>
        <h5>Mivel foglalkozunk?</h5>
        <h2>Szolgáltatások</h2>
        <div className="container services__container">
          <Link to='/services/industrial' className='service__link'>
            <div className='service__component'>
              <ImageComponent src={Industrial} alt='industrial' blur={Industrialblur} cn='serviceImage' isVisible={true}/>
              <p> Ipari Szolgáltatásaink </p>
            </div>
          </Link>
          <Link to='/services/residental' className='service__link'>
            <div className='service__component'>
              <ImageComponent src={Residental} alt='residential' blur={Residentalblur} cn='serviceImage' isVisible={true}/>
              <p> Lakossági Szolgáltatásaink </p>
            </div>
          </Link>
        </div>
      </section>
      <div className='spacer layerSubpage' />
    </motion.div>
  )
}

export default Services