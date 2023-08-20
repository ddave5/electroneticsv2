import React from 'react'
import './about.css'
import {motion} from 'framer-motion'
import Logo from '../../assets/images/logo/logo_white.png'
import Cards from '../../component/CardCarousel/Cards'
import Card from '../../component/CardCarousel/Card'
import {GoTrophy} from 'react-icons/go'
import {FaFileSignature} from 'react-icons/fa'
import {VscWorkspaceTrusted} from 'react-icons/vsc'

const About = () => {

  const cardelements = [
    {
      title: 'Alapítás éve',
      detail: '2021',
      icon: <FaFileSignature />
    },
    {
      title: 'Befejezett projektek',
      detail: 'Nagyon sok sikerünk volt!',
      icon: <GoTrophy />
    },
    {
      title: 'Jelenlegi projektek',
      detail: 'Huh ebből is nagyon nagyon sok van! ',
      icon: <VscWorkspaceTrusted />
    },
  ]
 
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <section id='about'>
        <h5>Kik vagyunk?</h5>
        <h2>A mi történetünk</h2>
        <div className="container about__container">
          <div className='about__us__part'>
            <div className='about__us__img'>
              <img src={Logo} alt='group' />
            </div>
            <div className='about__us__text'>
              <p>Cégünk alapítása 2021-ben történt, két fiatal ötlete alapján. Mindketten szeretjük a modern technológiát csodálni, tanulmányozni és motiváltak vagyunk abban, hogy ezen technológiákat mind a hétköznapi emberekhez eljuttassuk, mind a vállalkozások fejlődését segítsük velük. A világban a modern vállalkozások, a nagy multi cégek fejlettségét és modern létét már nem a gyártósorokon dolgozó emberek létszáma, nem az eladott termékek mennyisége határozza meg. A fő szempont, hogy a termelés hatékonyságát, kényelmét, felügyeletét milyen mértékben tudják gyorsítani, fejleszteni, modernizálni. Ezekhez elengedhetetlen a technológia fejlődése.</p>
            </div>
          </div>
          <div className='motto__part'>
            <p>Lépjünk a jövőbe!</p>
          </div>
          <div className='carousel__part'>
            <Cards autoplay={ true } autoplay_speed={ 5000 }>
              {cardelements.map( (card) => {
                return( 
                  <Card title={card.title} detail={card.detail} icon={card.icon} />
                )})}
            </Cards>
          </div>
        </div>
      </section>
      <div className='spacer layerSubpage' />
    </motion.div>
  )
}

export default About