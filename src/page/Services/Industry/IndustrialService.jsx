import React, { useState } from 'react'
import './industrialService.css'
import {FaNetworkWired, FaIndustry} from 'react-icons/fa'
import {FaWalkieTalkie} from 'react-icons/fa6'
import {BiPowerOff} from 'react-icons/bi'
import GeneralService from '../General/GeneralService'

const IndustrialService = () => {

  const texts = [
    {
      id : 'r',
      icon: <FaNetworkWired/>,
      title: 'Rendszerhálózatok',
      text1: 'A rendszerhálózatok olyan összeköttetéseket jelentenek, amelyek lehetővé teszik a számítógépek, eszközök és más informatikai erőforrások közötti kommunikációt és adatcsere folyamatát. Ezek a hálózatok kulcsfontosságúak az üzleti, oktatási és szórakoztató iparágakban, valamint a mindennapi életünkben is.',
      text2: 'A rendszerhálózatok nagyban hozzájárulnak a hatékony információáramláshoz és a szervezetek működésének optimalizálásához. Az interneten, helyi hálózatokon (LAN), szélessávú kapcsolatokon és egyéb kommunikációs infrastruktúrákon keresztül különböző eszközök képesek egymással kommunikálni, adatokat cserélni és erőforrásokat megosztani.',
      text3: 'A rendszerhálózatoknak számos előnye van. A központi adattárolás és az erőforrások megosztása lehetővé teszi a hatékonyabb munkavégzést és a költségek csökkentését. Az adatok gyors és biztonságos átvitele révén az emberek és a vállalkozások könnyedén hozzáférhetnek a szükséges információkhoz. A hálózati kapcsolatok lehetővé teszik az online kommunikációt, a virtuális konferenciákat és a távoli munkavégzést, amelyek megkönnyítik a távolságok áthidalását és a csapatmunkát.',
    },
    {
      id : 'k',
      icon: <FaWalkieTalkie/>,
      title: 'Kommunikációs eszközök',
      text1: 'Cégünk szakértői vagyunk a cégek kommunikációs hálózatainak tervezésében és kivitelezésében. Célunk, hogy ügyfeleink számára optimális és hatékony rendszerhálózatot biztosítsunk, amely megfelel az egyéni igényeknek és elvárásoknak. Egyedi kommunikációs eszközök és programok tervezését, kivitelezését és telepítését is vállaljuk. Figyelembe vesszük az ügyfelek specifikus igényeit, és olyan megoldásokat kínálunk, amelyek maximálisan kielégítik az adott vállalkozás kommunikációs követelményeit. Legyen szó helyi hálózatokról (LAN) vagy távoli hozzáférésről, biztosítjuk a stabil és megbízható infrastruktúrát.',
      text2: 'Emellett szintén vállaljuk meglévő hálózatok korszerűsítését és felújítását. A technológia folyamatosan fejlődik, és fontos, hogy a vállalkozások lépést tartsanak a változásokkal. Szakembereink segítenek a meglévő rendszerek frissítésében és optimalizálásában, hogy kihozzák belőlük a legnagyobb hatékonyságot és teljesítményt.',
      text3: 'Ha távkommunikációs eszközökre van szüksége, akkor is fordulhat hozzánk. Cégünk tervezi, kivitelezi és telepíti a távkommunikációs eszközöket, amelyek lehetővé teszik a távoli munkavégzést és az online kommunikációt. Az üzleti világ globálissá válik, és fontos, hogy a vállalkozások könnyedén kommunikálhassanak partnereikkel és alkalmazottaikkal világszerte. Összességében cégünk teljes körű szolgáltatást nyújt a rendszerhálózatok tervezése, kivitelezése, telepítése és karbantartása területén. Bízhat bennünk, hogy segítünk kiépíteni és fenntartani a hatékony kommunikációs infrastruktúrát, amely a vállalkozásának növekedését és sikerét szolgálja.',
    },
    {
      id : 'a',
      icon: <BiPowerOff/>,
      title: 'Automatizálás',
      text1: 'A gyári folyamatok automatizálása forradalmasítja az ipari termelést, lehetővé téve a hatékonyabb és pontosabb működést. Az automatizáció alkalmazásával a gyártók képesek növelni a termelékenységet, csökkenteni a hibalehetőségeket és optimalizálni az erőforrások felhasználását. Az automatizáció lényege, hogy gépek, robotok és számítógépes rendszerek vezérlik a gyártási folyamatokat, minimalizálva az emberi beavatkozás szükségességét. A modern technológiák, például a szoftverek, szenzorok és az internet of things (IoT) eszközei lehetővé teszik a gyártási adatok gyűjtését és elemzését valós időben, ami automatikus döntéshozatalt és optimalizált működést eredményez.',
      text2: 'Az automatizált gyártási folyamatok számos előnnyel járnak. Az egyik legfontosabb a termelékenység növekedése. Az automatizált rendszerek nagy sebességgel és pontossággal képesek végrehajtani a gyártási feladatokat, ami növeli a termelési kapacitást és csökkenti a ciklusidőt. Emellett a hibalehetőségek minimalizálása révén a termékminőség is javul, ami növeli az ügyfél elégedettségét.',
      text3: 'Az automatizáció továbbá lehetővé teszi a munkaerő optimalizálását. Az ismétlődő és monoton feladatokat a gépek végzik, míg az emberi erőforrásokat magasabb hozzáadott értéket nyújtó tevékenységekre lehet irányítani, például a műszaki felügyeletre, a tervezésre vagy a problémamegoldásra. Az automatizált gyártási folyamatok rugalmasságot is biztosítanak. Az intelligens rendszerek könnyen alkalmazkodnak a termelési igényekhez és változó követelményekhez. Az egyszerű programozási lehetőségek és a moduláris felépítés lehetővé teszik, hogy a folyamatokat könnyedén módosítsák vagy új termékekre állítsák át, így a vállalatok gyorsabban reagálhatnak a piaci változásokra és versenyelőnyt szerezhetnek.',
    },
    {
      id : 'v',
      icon: <FaIndustry/>,
      title: 'Vezérlőszekrény',
      text1: 'A vezérlőszekrények kiemelkedő szerepet játszanak az ipari folyamatok hatékony irányításában és működtetésében. Cégünk specializálódott a vezérlőszekrények tervezésére, megépítésére, telepítésére és felújítására, hogy ügyfeleinknek kiváló minőségű és megbízható megoldásokat nyújtsunk. Tervezés: Tapasztalt csapatunk gondosan tervezi és tervezés közben figyelembe veszi az ügyfelek igényeit és elvárásait. Szakértőink szorosan együttműködnek a vállalkozással, hogy megismerjék az adott ipari folyamatot, és optimalizált vezérlőszekrényt tervezzenek, amely tökéletesen illeszkedik a feladathoz.',
      text2: 'Megépítés: A legmodernebb technológiákat és minőségi alkatrészeket használva építjük fel a vezérlőszekrényeket. A szigorú minőségellenőrzés és a precíz munkavégzés garantálja a megbízható és hosszú élettartamú rendszerek létrehozását. Szakembereink precízióval és gondossággal dolgoznak, hogy magas szintű funkcionalitást és megbízhatóságot biztosítsanak.',
      text3: 'Telepítés: A telepítés során szakértőink gondoskodnak a vezérlőszekrények helyszíni beállításáról és csatlakoztatásáról. Az együttműködésben az ügyféllel biztosítjuk a pontos és hatékony telepítést, valamint a rendszer megfelelő működését és integrációját a meglévő infrastruktúrával. Felújítás: Ha meglévő vezérlőszekrényeinek frissítésére vagy felújítására van szükség, szintén segítséget nyújtunk. Tapasztalatunk és szakértelmünk révén képesek vagyunk optimalizálni és korszerűsíteni a meglévő vezérlőszekrényeket, hogy megfeleljenek az új kihívásoknak és elvárásoknak. Emellett a meghibásodott vagy elavult alkatrészeket is cseréljük, hogy biztosítsuk a megbízható és hatékony működést.',
    },
  ]

  const [currenttab, setCurrentTab] = useState('r')

  return (
    <>
      <div className='industrial__container'>
        <h2>Ipari Szolgáltatásaink</h2>
        <div className='industrial__content__container'>
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

export default IndustrialService