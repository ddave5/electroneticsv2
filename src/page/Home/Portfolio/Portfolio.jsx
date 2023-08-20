import React from 'react'
import './portfolio.css'
import HBVSZ from '../../../assets/images/portfolio/HBVSZ.jpg'
import ERV from '../../../assets/images/portfolio/ERV.jpg'

const Portfolio = () => {
  const portfolios = [
    {
      "id": 1,
      "name": "Hajdúkerületi és Bihari Vízközmű Szolgáltató Zrt.",
      "image": HBVSZ,
      "description": "Szennyvíz átemelők vezérlésének felújítása és átalakítása. Úszókapcsolók telepítése és üzembe helyezése.",
    },
    {
      "id": 2,
      "name": "ÉRV Zrt.",
      "image": ERV,
      "description": "Hajdúböszörmény szennyvíztisztító telep szalagos iszapprés teljes körű felújítása és üzembe helyezése.",
    },
  ];

  return (
    <section id='portfolio'>
      <h5>Akik már megbíztak bennünk!</h5>
      <h2>Portfólió</h2>
      <div className="portfolio_card_container">
        {portfolios.map((portfolio) => {
          return (<div key={portfolio.id} className="portfolio_card component reveal">
          <div className="portfolio_card_desc">
            <div className="title">
              <h3> {portfolio.name} </h3>
            </div>
            <div className="img">
              <img src={portfolio.image} alt={portfolio.name}/> 
            </div>
            <div className="description">
              <p> {portfolio.description}</p>
            </div>  
          </div>
        </div>)
        })}
      </div>
    </section>
  )
}

export default Portfolio