import React, { useEffect, useRef, useState } from 'react'
import './contact.css'
import {BsPhoneFill} from 'react-icons/bs';
import {HiOutlineMail} from 'react-icons/hi';
import emailjs from 'emailjs-com';
import {motion} from 'framer-motion'

const Contact = (props) => {

  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    const {isHome} = props;
    setIsHome(isHome)
  }, [])

  const contactArray = [ 
    {
      "id": 1,
      "icon": <BsPhoneFill/>,
      "content": "+36 70 307 8971",
      "url": "tel:+36703078971",
      "descripton": "Hívjon fel!"
    },
    {
      "id": 2,
      "icon": <HiOutlineMail/>,
      "content": "electronetics.hu@gmail.com",
      "url": "https://mailto:electronetics.hu@gmail.com",
      "descripton": "Küldjön üzenetet!"
    }]
  
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_t312w4w', 'template_j9meyqf', form.current, 'dZ96iffI1Ryvowb67');
      
      e.target.reset();
    };

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <section id='contact' className={isHome ? 'whitening' : ''}>
        <h5>Szeretne kérdezni?</h5>
        <h2>Kapcsolat</h2>
        <div className="container contact__container">
          <div className='information__container'>
            <h3>Kapcsolatok</h3>
            <p>Ha van bármilyen kérdésük vagy csak szeretnének beszélgetni, akkor</p>
            <div className='information__chip__container'>
              {contactArray.map( (contact) => {
                return(
                  <article key={contact.id} className='information__chip' data-aos="zoom-in">
                    <p className='information__chip__icon'>{contact.icon}</p>
                    <span className='information__text'>{contact.content}</span>
                    <a href={contact.url} target='_blank' rel='noreferrer'>{contact.descripton}</a>
                  </article>
                )})}
            </div>
          </div>
          <div className='email__container'>
            <h3>Vagy írjon nekünk közvetlenül! </h3>
            <form ref={form} onSubmit={sendEmail} autoComplete="off">
              <input type="text" name='name' placeholder='Az Ön neve' required />
              <input type="email" name='email' placeholder='Az Ön e-mail címe' required />
              <textarea name="message" rows="7" placeholder='Üzenet...' required ></textarea>
              <button type='submit' className='btn' >Küldés</button>
            </form>
          </div>
        </div>
      </section>
      <div className={isHome ? 'whitening spacer layerSubpage' : 'spacer layerSubpage'} />
    </motion.div>
  )
}

export default Contact