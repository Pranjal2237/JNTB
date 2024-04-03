import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const HomeCard = ({image,heading,paragraph,link}) => {
  return (
    <div className='homecard'>
      <div className='homecard-image'>
        <img src={image} alt='image' />
      </div>
      <div className='homecard-content'>
        <h3>{heading}</h3>
        <p>{paragraph}</p>
        <Link to={`/products/${link}`}>
        <div className='abs-btn'>More +</div>
        </Link>
      </div>
    </div>
  )
}

export default HomeCard
