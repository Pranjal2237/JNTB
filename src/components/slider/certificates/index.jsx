import React from 'react'
import './style.css'

import { certificates } from '../../../constants';

const CertificateSlider = ({image,name}) => {
  return (
    <div className="certificate-container">
      <div>
                <div className='certificate-box'>
                    <img src={image} />
                    <p>{name}</p>
                </div>
      </div>
    </div>
  )
}

export default CertificateSlider
