import React from 'react'
import './introduction.css'
import introPicture from '../../../assets/images/intro.jpg';

const Introduction = () => {
  return (
    <>
    <div className="introduction__container">
      <div className='image__container'>
        <img src={introPicture} alt='intro' className='intro__image'/>
      </div>
      <div className='text__container'>
        <p>
          Cégünk alapítása 2021-ben történt, két fiatal ötlete alapján. Mindketten szeretjük a modern technológiát csodálni, tanulmányozni és motiváltak vagyunk abban, hogy ezen technológiákat mind a hétköznapi emberekhez eljuttassuk, mind a vállalkozások fejlődését segítsük velük. A világban a modern vállalkozások, a nagy multi cégek fejlettségét és modern létét már nem a gyártósorokon dolgozó emberek létszáma, nem az eladott termékek mennyisége határozza meg. A fő szempont, hogy a termelés hatékonyságát, kényelmét, felügyeletét milyen mértékben tudják gyorsítani, fejleszteni, modernizálni. Ezekhez elengedhetetlen a technológia fejlődése.
        </p>
      </div>
    </div>
    </>
  )
}

export default Introduction