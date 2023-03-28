import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <>
      <div className="footer-container"> 
      <div className="child">
        <div className="para">
        <p >Copyright © 2023 Film Box</p>
        <h1>Welcome to Open Database Movie Hub </h1>
        </div>
       <div className='Icons'>
        <a href="www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
      </div>

        
      </div>
      </>
    );
  }

  export default Footer;
  