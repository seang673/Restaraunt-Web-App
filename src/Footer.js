import React from 'react';
import "../src/styles.css";
import dalogo from "../src/Images/LLLogo.jpg";

const Footer = () => {
  return (

    <footer>
    <div class="footer-container">

      <div class="footer-item">
        <img src={dalogo} alt="Little Lemon Logo" width="300" height="250"></img>
      </div>

      <div class="footer-item">
        <p>Contact Info: </p>
        <pre>
          Address: 123 Main Street Anytown, USA 12345<br></br>

          Phone: (555) 123-4567<br></br>
          Email Address: info@littlelemon.com<br></br>
        </pre>

      </div>


      <div class="footer-item">
        <p>Get to Know Us More.</p>
        <pre>
          <li>About</li>
          <li>Careers</li>
          <li>Press Releases</li>
          <li>Exclusive Recipes</li>
          <li>Our Kitchen</li>
        </pre>

      </div>

      <div class="footer-item">
        <p>Connect With Us:</p>
        <pre>

          <li>Facebook</li>
          <li>Instagram</li>
          <li>LinkedIn</li>
          <li>X</li>

        </pre>

     </div>
    </div>


  </footer>

  );
};

export default Footer;