import React from 'react'
import './card.css'

const Card = (props) => {
  return (
    <div className='card__container'>
      <p className='card__icon'>{props.icon}</p>
      <p className='card__title'>{props.title}</p>
      <p className='card__detail'>{props.detail}</p>
    </div>
  )
}

export default Card