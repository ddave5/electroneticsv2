import React, { useEffect, useState } from 'react'
import './imageComponent.css'
import { motion } from 'framer-motion';
import { FadeLoader } from 'react-spinners';

const ImageComponent = (props) => {

  const {src, blur, cn} = props

  const [imageLoaded, setImageLoaded] = useState(false);
  const [blurImageLoaded, setBlurImageLoaded] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect( () => {
    setImageLoaded(false);
    setVisible(props.isVisible);
  }, [props.isVisible])

  return (
    <>
      <span style={{display: imageLoaded ? 'none' : 'block'}} className='blur__span'>
        <motion.img initial={false} animate={{opacity: visible ? 1 : 0}}
          src={blur} className={'imgcomponent '.concat(cn)} alt={props.alt} onLoad={() => setBlurImageLoaded(true)}/>
        <FadeLoader color="#e4e4e4" style={{display: blurImageLoaded ? 'block' : 'none'}} className='loader'/>
      </span>
      <motion.img 
        initial={false} 
        animate={{opacity: visible ? 1 : 0}}
        src={src} 
        alt={props.alt} 
        className={'imgcomponent '.concat(cn)}
        onLoad={() => setImageLoaded(true)}
        style={{display: !imageLoaded ? 'none' : 'block'}}/>
    </>
  )
}

export default ImageComponent