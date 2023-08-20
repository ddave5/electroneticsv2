import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className='footer__company'>
          <div className='footer__company__container'>
            <h1>Electro Netics Kft.</h1>
            <div>
              <p> electronetics.hu@gmail.com </p>
              <p> bence.nagy@electronetics.hu </p>
              <p> gabor.kiss@electronetics.hu </p>
              <p> +36 70 307 8971 </p>
            </div>
          </div>
        </div>
        <div className='footer__options'>
          <div className='options__container'>
            <div className='option__box footer__contact'>
              <h2>Cím</h2>
              <ul>
                <li> 4220 Hajdúböszörmény,</li>
                <li> Hét vezér utca 27.</li>
              </ul>
            </div>
            <div className='option__box footer__documents'>
              <h2>Doumentumok</h2>
              <ul>
                <li><a href='#home'>Impresszum</a></li>
                <li><a href='#home'>Adatvédelmi nyilatkozat</a></li>
                <li><a href='#home'>Szerzői jogi nyilatkozat</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='footer__copyright'>
        <p>©2023.Electro Netics Kft. Created by <a href="https://felegyhazi-david.web.app/">David Felegyhazi</a></p>
      </div>
    </footer>
  )
}

export default Footer