import React, { useState } from 'react'
import './residentalService.css'
import {BsHouseFill} from 'react-icons/bs'
import {BiPowerOff} from 'react-icons/bi'
import GeneralService from '../General/GeneralService'

const ResidentalService = () => {
  const texts = [
    {
      id : 'l',
      icon: <BsHouseFill/>,
      title: 'Lakások, kertesházak',
      text1: 'Az első lépés az ügyféllel való találkozó és a projekt részletes áttekintése. Ebben a fázisban felméred a lakás vagy családi ház villanyszerelési igényeit, valamint a kamera- és riasztórendszerek elhelyezését. Megbeszélitek az egyes helyiségek világítási igényeit és a biztonsági követelményeket. A konzultáció alapján elkészíted a terveket és az ajánlatot. Ez magában foglalja a villanyszerelési tervet, a kamera- és riasztórendszerek elhelyezését, valamint a szükséges anyagok és eszközök becslését. Az ajánlat tartalmazza a költségeket, az időkeretet és a végrehajtandó feladatok leírását.',
      text2: 'Ha az ügyfél elfogadja az ajánlatot, elkezded az engedélyezési folyamatot, ha szükséges. Ezután beszerzed a szükséges anyagokat és eszközöket a telepítéshez. Minőségi és megbízható villanyszerelési eszközöket, kamerákat és riasztórendszereket választasz.',
      text3: 'A villanyszerelési munkálatok során elvégzed a kábelezést, a világítótestek és konnektorok telepítését, valamint a vezérlőegységek és elosztópanelek bekötését. Ezután telepíted a kamera- és riasztórendszereket, elhelyezve a kamerákat, érzékelőket és csatlakoztatva a vezetékeket. Miután a telepítés befejeződött, elvégzed a rendszerek tesztelését, hogy megbizonyosodj arról, hogy megfelelően működnek. Ezután bemutatod a megrendelőnek a végeredményt, bemutatod a rendszerek működését és segítesz neki azok használatában és kezelésében. Végül átadod a munkaterületet és biztosítod a szükséges dokumentációt és garanciákat.',
    },
    {
      id : 'ha',
      icon: <BiPowerOff/>,
      title: 'Házak automatizálása',
      text1: 'Cégünk szakértő csapata arra specializálódott, hogy teljes körű vagy részleges automatizációt biztosítson házakban és lakásokban. Az általunk tervezett és megépített rendszerek segítségével az ügyfelek kényelmesen élvezhetik az otthoni automatizáció előnyeit. Fontos megjegyezni, hogy tevékenységünk automatizált otthonokra összpontosít, nem pedig okos otthonokra. Az automatizált otthonokban az összes kívánt eszközt egyszerűen vezérelheti és be- vagy kikapcsolhatja a kényelmesen használható okos eszközökön keresztül, mint például weboldalak vagy mobilalkalmazások.',
      text2: 'Az általunk vállalt automatizáció (okosítás) körét széles skálán helyezzük elérhetővé. Ez magában foglalja a konyhai eszközök és berendezések automatizálását, amelyekkel pontosan szabályozhatja a főzési folyamatot és az időzítéseket. Fürdőszobai eszközök automatizálásával kényelmesebbé teheti a reggeli és esti rutinokat.',
      text3: 'Emellett gondoskodunk a redőnyök, fűtő- és hűtőrendszerek, konnektorok, lámpák, öntözőrendszerek és meglévő eszközök automatizálásáról is. Ezeknek az eszközöknek a beépítése és okosítása révén egyszerűen szabályozhatja a megfelelő hőmérsékletet, világítást, energiatakarékosságot és kényelmet az otthonában. Munkánk során kiemelt figyelmet fordítunk a testreszabhatóságra és az ügyfél igényeinek kielégítésére. Minden projektnél alaposan felmérjük az ügyfél elvárásait, és ezek alapján tervezzük és valósítjuk meg az automatizált rendszereket. Ez lehetővé teszi számunkra, hogy egyedi és optimalizált megoldásokat nyújtsunk, amelyek tökéletesen illeszkednek a lakás vagy ház környezetéhez és a felhasználói igényekhez.',
    }

  ]

  const [currenttab, setCurrentTab] = useState('l')

  return (
    <>
      <div className='residental__container'>
        <h2>Lakossági Szolgáltatásaink</h2>
        <div className='residental__content__container'>
          <div className='menu__aside'>
            <ul>
              {texts.map( (elem) => {
                return( 
                  <li key={elem.id} onClick={() => setCurrentTab(elem.id)}>{elem.icon} {elem.title}</li>
                )})}
            </ul>
          </div>
          <div className='main__content__container'>
            {texts.filter(element => element.id === currenttab).map((elem) => { return(
              <GeneralService 
                {...elem}
                />
            )})}
          </div>
        </div>
      </div>
      {window.innerWidth > 1024 ? (<div className='spacer layerSubpage' />) : <div className='spacer layerSubpageMobile' />}
    </>
  )
}

export default ResidentalService