import React from 'react'
import './style.css'
import { about } from '../../assets'

const About = () => {
  return (
    <main style={{marginBottom:'2.5rem',overflow:'hidden'}}>
      <div className='about-image'>
        <img src={about} alt='about' />
      </div>
      <div className='about-content page-padding'>
        <h3>About us</h3>
        <p>
          We are certified by SPICES BOARD OF INDIA to export Indian spices to world-wide nations without compromising on the standards. Our management strives to set benchmark for efficiency in executing spice business. We sterilize spices to control micro contamination up-to the required levels. We are assured about the prompt delivery and quality of products.
        </p>
        <p>
          ‘Kankas Trades’ is also certified by “AGRICULTURAL AND PROCESSED FOOD PRODUCTS EXPORT DEVELOPMENT AUTHORITY” of India for exporting fresh fruits, fresh vegetables, Condiments and other Indian food products all over the world.
        </p>
        <p>
          Our food products have satisfied customers all over the world with its incredible quality, extraordinary taste and rich flavor. We are engaged in supplying spices, honey, herbs, dry fruits, millets and fresh fruits all under-one-roof. At the core of our success is our superior infrastructure. Our company is equipped with best-of-the-world technologies and has modern facilities to offer you international quality standards across all of our product range.
        </p>
        <p>The name of KANKAS TRADES is synonymous with "PERFECTION" in every aspect of exporting Spices, Nut-products and ALL FOODSTUFFS from India.
        </p>
        <p>
          We are engaged in exporting a range of food and coir products across the globe. By allowing sustainable development to drive our services, we meet customer needs.
        </p>
        <p>
          Our organization strives to achieve the confidence of our buyers, by providing them the quality products at ‘cost-benefit’ basis. Our policy is to get complete satisfaction of customers and not merely make profits in import and export business in Chennai.
        </p>
        <p>
          We, Kankas Trades believe in serving customers in the best possible manner. Shipment of quality food products is our specialty. With efficient and timely services, we emerge out as the most dependable business partners in this competitive world. We are one of the certified exporters in India to offer spices & agro based products conforming to the physical and microbiological parameters as per the international standards.
        </p>
      </div>
    </main>
  )
}

export default About
