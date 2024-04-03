import React, { useState } from 'react'
import './style.css'
import ProductCard from '../../productCard'

const Secondary = ({heading,picture,paragraph,contentArray,options}) => {

  const[active,setActive]=useState(0);
  return (
    <div className='secondary'>
      <div className='secondary-image'>
        <img src={picture} alt='image' />
      </div>
      <div className='secondary-content page-padding'>
        <h1>{heading}</h1>
        {paragraph && <p>{paragraph}</p>}
        <div className='secondary__product-container'>
          <div className='secondary-options'>
            {options.map((option,index)=>(
              <div className='option-item' onClick={()=>{setActive(index)}} style={{backgroundColor:active===index && '#333'}}>
                {option}
              </div>
            ))}
          </div>
          <div>
            {contentArray.map(({heading,picture,paragraph},ind)=>(
              <>
              {active===ind && <ProductCard heading={heading} picture={picture} paragraph={paragraph} />}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Secondary
