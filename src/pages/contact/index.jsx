import React from 'react'
import {contact} from '../../assets'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faLocationDot,faMobileButton } from '@fortawesome/free-solid-svg-icons'
import ContactForm from '../../components/forms/contact'

const Contact = () => {
  return (
    <main style={{marginBottom:'2.5rem'}}>
      <div className='contact-image'>
        <img src={contact} alt='contact-image' />
      </div>
        <h3 className='contact-heading page-padding'>Contact us</h3>
      <div className='page-padding contact-content'>
          <div className='contact-details'>
            <div className='contact-address'>
              <div className='icon-background'>
              <FontAwesomeIcon icon={faLocationDot} color='white' />
              </div>
            <div>
              <p style={{color:'var(--color-green)',fontSize:'20px'}}>JNTB</p>
              <p style={{color:'var(--color-green)',fontSize:'20px'}}>EXPORT IMPORT</p>
              <p>#1210,Tower B,</p>
              <p>ITHUM,Sector 62,</p>
              <p>NOIDA-201301</p>
            </div>
            </div>
            <div className='contact-address'>
              <div className='icon-background'>
              <FontAwesomeIcon icon={faMobileButton} color='white' />
              </div>
              <div>
                <p style={{color:'GrayText'}}>+91 9289 409329</p>
              </div>
            </div>
            <div className='contact-address'>
              <div className='icon-background'>
              <FontAwesomeIcon icon={faEnvelope} color='white' />
              </div>
              <div>
                <a href='mailto:info@jntbexim.com' >info@jntbexim.com</a>
                {/* <a href='maitto:durgaprasad@kankasexports.com'>kankasexports@gmail.com</a> */}
              </div>
            </div>
          </div>
          <div className='contact-form-container'>
            <ContactForm />
          </div>
      </div>
      <div className='page-padding' style={{marginTop:'1.5rem'}}>
      <iframe src="https://www.google.com/maps/d/embed?mid=1uOxF_6d_PQIx5lE36nlu8iOikKPZDiM&ehbc=2E312F" width="100%" height="380"></iframe>
      </div>
    </main>
  )
}

export default Contact
