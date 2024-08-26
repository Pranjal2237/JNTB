import React from 'react'
import './style.css'

const PrimaryLayout = ({heading,picture,description,specifications,marketDemand,ingredients,benifits,outro}) => {
  return (
    <div>
      <div className='primary-image'>
        <img src={picture} alt="" />
      </div>
      <div className="primary-content page-padding">
        <h1>{heading}</h1>
        <p>{description}</p>
        <h2>Global Market Demand</h2>
        <p>{marketDemand}</p>
        <h2>Specification</h2>
        {
          specifications.map(({title,value})=>(
            <div className='primary-specifications'>
              <h3>{title}</h3>
              <p>{value}</p>
            </div>
          ))
        }
        <h2>Ingredients</h2>
        {
          ingredients.map(({title,value})=>(
            <div className='primary-ingredients'>
              <h3>{title}</h3>
              <div>
                {
                  value.map((val)=>(
                    <p>{val}</p>
                  ))
                }
              </div>
            </div>
          ))
        }
        <h2>Uses & Benefits</h2>
        <h3>Uses :</h3>
        <ul>
          {
            benifits.map((benefit)=>(
              <li>{benefit}</li>
            ))
          }
        </ul>
        <p>{outro}</p>
      </div>
    </div>
  )
}

export default PrimaryLayout