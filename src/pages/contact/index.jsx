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
              <p style={{color:'var(--color-green)',fontSize:'20px'}}>KANKAS TRADES</p>
              <p style={{color:'var(--color-green)',fontSize:'20px'}}>MERCHANT EXPORTER</p>
              <p>OLD NO 26, NEW NO 34,</p>
              <p>THIRUVENGADAM STREET,</p>
              <p>PERAMBUR, CHENNAI 600 011.</p>
            </div>
            </div>
            <div className='contact-address'>
              <div className='icon-background'>
              <FontAwesomeIcon icon={faMobileButton} color='white' />
              </div>
              <div>
                <p style={{color:'GrayText'}}>+91 98408 00004</p>
              </div>
            </div>
            <div className='contact-address'>
              <div className='icon-background'>
              <FontAwesomeIcon icon={faEnvelope} color='white' />
              </div>
              <div>
                <a href='mailto:durgaprasad@kankasexports.com' >durgaprasad@kankasexports.com</a>
                <a href='maitto:durgaprasad@kankasexports.com'>kankasexports@gmail.com</a>
              </div>
            </div>
          </div>
          <div className='contact-form-container'>
            <ContactForm />
          </div>
      </div>
      <div className='page-padding' style={{marginTop:'1.5rem'}}>
      <iframe src="https://www.google.com/maps/d/embed?mid=10kU-Tj0pWgJqLk9VVfjzvwarmoMt1Nc&ehbc=2E312F&noprof=1" width="100%" height="380"></iframe>
      </div>
    </main>
  )
}

export default Contact
