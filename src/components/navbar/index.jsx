import React, { useEffect, useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Logo } from "../../assets";
import { Link,useLocation } from "react-router-dom";
import {subNav} from '../../constants';

const Navbar = ({activeTitle,setActiveTitle}) => {

  const[menuOpen,setMenuOpen]=useState(false);
  const {pathname}=useLocation()
  useEffect(()=>{
    let endpoint=pathname.slice(1);
    if(pathname.length==1)
    {
      endpoint='home'
    }
    setActiveTitle(endpoint);
  },[])
  return (
    <nav id="top" style={{ paddingTop: "10px" }}>
      <div className="navbar-contact">
        <p>+(91)-98408 00004</p>
        <FontAwesomeIcon icon={faEnvelope} color="var(--color-green)" />
        <a
          href="mailto:hr@jwtechno.com<"
          style={{ textDecoration: "none", color: "black" }}
        >
          hr@jwtechno.com
        </a>
      </div>
      <div className="navbar-container page-padding">
        <div className="navbar-logo">
          <img src={Logo} alt="title" />
        </div>
        <div className="menubar page-padding" onClick={()=>{setMenuOpen(!menuOpen)}}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={menuOpen?'navbar-items open':'navbar-items'} onClick={()=>{setMenuOpen(false)}}>
          <Link to="/">
            <li
              onClick={(e) => {
                setActiveTitle("home");
              }}
              className={"home" === activeTitle && "active"}
            >
              Home
            </li>
          </Link>
          <Link to="/about">
            <li
              onClick={(e) => {
                setActiveTitle("about");
              }}
              className={"about" === activeTitle && "active"}
            >
              About Us
            </li>
          </Link>
            <li
              className={"products" === activeTitle && "active"}
              style={{position:'relative'}}
              id="products"
            >
              Products
              <ul className="subNav">
                {
                  subNav.map(({item,link},index)=>{
                    return(
                      <Link to={`/products/${link}`}>
                      <li key={index}  onClick={(e) => {
                setActiveTitle('sub');
              }}>
                        {item}
                      </li>
                      </Link>
                    )
                  })
                }
              </ul>
            </li>
          {/* <Link to="/">
            <li
              onClick={(e) => {
                setActiveTitle("blog");
              }}
              className={"blog" === activeTitle && "active"}
            >
              Blog
            </li>
          </Link> */}
          <Link to="/contact">
            <li
              onClick={(e) => {
                setActiveTitle("contact");
              }}
              className={"contact" === activeTitle && "active"}
            >
              Contact Us
            </li>
          </Link>
          <Link to="/enquiry">
            <li
              onClick={(e) => {
                setActiveTitle("enquiry");
              }}
              className={"enquiry" === activeTitle && "active"}
            >
              Product Enquiry
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
