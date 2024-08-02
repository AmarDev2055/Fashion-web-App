import "./FooterStyles.css"
import logo from "../assets/logo.png"
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="top">
            <div className="logo">
                <img src={logo} alt=""/>
                <h1>LuxeLoom</h1>
            </div>
            
            <div>
                <a href="/">
                    <i className="fa-brands fa-facebook-square"></i>
                </a>
                <a href="/">
                     <i className="fa-brands fa-instagram-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-youtube-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-pinterest-square"></i>
                </a> 
            </div>
        </div>

        <div className="bottom">
            
            <div>
                <h4>MAY WE HELP YOU?</h4>
                <a href="/">Contact Us</a>
                <a href="/">My Order</a>
                <a href="/">FAQs</a>
                <a href="/">Email Unsubscribe</a>
                <a href="/">Sitemap</a>
            </div>
            <div>
                <h4>THE COMPANY</h4>
                <a href="/">About</a>
                <a href="/">Equilibrium</a>
                <a href="/">Code of Ethics</a>
                <a href="/">Careers</a>
                <a href="/">Corporate Information</a>
                <a href="/">Privacy & Cookie Policy</a>
            </div>
            <div>
                <h4>LUXELOOM SERVICES</h4>
                <a href="/">Discover our services</a>
                <a href="/">Book an Appointment</a>
                <a href="/">Collect In-Store</a>
            </div>
        </div>
        <p className="copyright">Copyright © 2023, LuxeLoom | Privacy Policy</p>
    </div>
  )
}

export default Footer