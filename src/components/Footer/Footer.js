import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="child">
          <div className="para">
            <h1>Welcome to Open Database Movie Hub </h1>
            <p>Copyright © 2023 Film Box</p>
          </div>
          <div className="Icons">
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.twitter.com/">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.Instagram.com/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
