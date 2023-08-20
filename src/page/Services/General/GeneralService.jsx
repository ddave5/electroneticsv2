import React, { useEffect, useState } from 'react'
import './generalService.css'
import {motion} from 'framer-motion'
import ImageComponent from '../../../component/ImageComponent/ImageComponent'
import images from './images/images'
import blurimages from './images/blurimages'

const GeneralService = (props) => {

  const [title, setTitle] = useState('');
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();
  const [image4, setImage4] = useState();
  const [blurimage1, setBlurImage1] = useState();
  const [blurimage2, setBlurImage2] = useState();
  const [blurimage3, setBlurImage3] = useState();
  const [blurimage4, setBlurImage4] = useState();

  const [isVisible, setIsVisible] = useState(true);

  useEffect( () => {
    setIsVisible(false); 

    const timeout = setTimeout(() => {
      setIsVisible(true);
      setDatas(props.id);
    }, 300); 

    return () => clearTimeout(timeout);
  },[props.id])

  const setDatas = (id) => {  
    setTitle(props.title);
    setText1(props.text1);
    setText2(props.text2);
    setText3(props.text3);
    setImage1(images[id][0]); 
    setImage2(images[id][1]); 
    setImage3(images[id][2]); 
    setImage4(images[id][3]);
    setBlurImage1(blurimages[id][0]); 
    setBlurImage2(blurimages[id][1]); 
    setBlurImage3(blurimages[id][2]); 
    setBlurImage4(blurimages[id][3]);
  }
  
  return (
    <>
      <div className='general__container'>
        <motion.h2 initial={false} animate={{opacity: isVisible ? 1 : 0}}>{title}</motion.h2>
        <div className='general__container__content'>
          <div className='first__part'>
            <ImageComponent src={image1} blur={blurimage1} isVisible={isVisible} alt='first'/>
            <motion.p initial={false} animate={{opacity: isVisible ? 1 : 0}}>{text1}</motion.p>
          </div>
          <div className='second__part'>
            <motion.p initial={false} animate={{opacity: isVisible ? 1 : 0}} className='second__part__text'>{text2}</motion.p>
            <div className='second__part__images'>
              <ImageComponent src={image2} blur={blurimage2} alt='second' cn='first__image' isVisible={isVisible}/>
              <ImageComponent src={image3} blur={blurimage3} alt='third' cn='second__image' isVisible={isVisible}/>
            </div>
          </div>
          <div className='third__part'>
            <ImageComponent src={image4} blur={blurimage4} alt='forth' loading='lazy' isVisible={isVisible}/>
            <motion.p initial={false} animate={{opacity: isVisible ? 1 : 0}} >{text3}</motion.p>
          </div>
        </div>
      </div>
    </>
  )
}

export default GeneralService