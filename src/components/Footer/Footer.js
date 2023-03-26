import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <>
      <div className="footer-container"> 
        <p >Copyright © 2023 Film Box</p>
        <h1>Welcome to Open Database Movie Hub </h1>
        </div> 
        <div className='Icons'>
        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
      <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
      <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
      </>
    );
  }

  export default Footer;
  