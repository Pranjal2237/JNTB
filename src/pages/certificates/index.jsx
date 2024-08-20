import React, { useState } from "react";
import "./style.css";
import { slider1 } from "../../assets";
import { certificates } from "../../constants";
import CertificateSlider from "../../components/slider/certificates";

const Certificates = () => {
    const[open,setOpen]=useState(false);
    const[content,setContent]=useState({image:"",name:''})
    const Content=(image,name)=>{
      setOpen(true);
      setContent({image,name})
    }
  return (
    <main style={{ marginBottom: "2.5rem" }}>
      <div className="contact-image">
        <img src={slider1} alt="certificate-image" />
      </div>
      <h3 className="contact-heading page-padding">Certifications</h3>
      <div className="about-content page-padding">
        <p>
          At JNTB EXPORT IMPORT, we prioritize impeccable hygiene, quality, and safety in
          food handling and export. By adhering to rigorous protocols and
          conducting thorough quality checks, we consistently meet international
          food safety standards. This dedication has earned us multiple
          prestigious quality and food safety certifications.
        </p>
        <p>
          Certified by TPCI, APEDA, and other prestigious organizations, we
          ensure our entire process adheres to the highest quality and food
          safety standards. From handling and packaging to processing, we follow
          strict protocols meticulously. Proudly, we are an Indian
          government-certified exporter of food products, committed to
          excellence in every step.
        </p>
      </div>
      <div className="page-padding certificates-box padding-block">
        {
            certificates.map(({image,name})=>(
                <div className="certificate" onClick={()=>{Content(image,name)}}>
                    <img src={image} />
                    <p>{name}</p>
                </div>
            ))
        }
      </div>
      {open && <CertificateSlider image={content.image} name={content.name} />}
      {open && <div className="opacity">
      </div>}
      {
        open && <div className="cross" onClick={()=>{setOpen(false)}}>
            <div ></div>
            <div></div>
        </div>
      }
    </main>
  );
};

export default Certificates;
