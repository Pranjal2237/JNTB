import React from 'react'
import './style.css'

const SecondaryLayout = ({heading,picture,description,ingredients,outro,varieties,varietyHeading,varitetyDesc}) => {
    
  return (
    <div>
      <div className='primary-image'>
        <img src={picture} alt='' />
      </div>
      <div className="primary-content page-padding">
        <h1>{heading}</h1>
        <p>{description}</p>
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
      </div>
      <div className='page-padding secondary-varieties-container'>
        <h1>{varietyHeading}</h1>
        <p>{varitetyDesc}</p>
        {
          varieties.map(({heading,description})=>(
            <div>
            <h2>{heading}</h2>
            <p>{description}</p>
            </div>
          ))
        }
      </div>
      <p className='page-padding outro'>{outro}</p>
    </div>
  )
}

export default SecondaryLayout