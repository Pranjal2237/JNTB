import React from 'react'
import './style.css'
import { EnquiryForm } from '../../components'
import { service } from '../../assets'

const Enquiry = () => {
  return (
    <div style={{marginBottom:'2.5rem'}}>
        <div className='service-image'>
            <img src={service} alt='service' />
        </div>
        <div className='enquiry-content page-padding'>
            <h3>Enquire Now</h3>
            <div>
            <EnquiryForm />
            </div>
        </div>
    </div>
  )
}

export default Enquiry
