import React from 'react';
import "/Users/seang/CouseraProj/my-app/src/styles.css";
import dalogo from "/Users/seang/CouseraProj/my-app/src/Images/LLLogo.jpg";

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
          <li><a href="">About</a></li>
          <li><a href="">Careers</a></li>
          <li><a href="">Press Releases</a></li>
          <li><a href="">Exclusive Recipes</a></li>
          <li><a href="">Our Kitchen</a></li>
        </pre>

      </div>

      <div class="footer-item">
        <p>Connect With Us:</p>
        <pre>

          <li><a href="">Facebook</a></li>
          <li><a href="">Instagram</a></li>
          <li><a href="">X</a></li>
          <li><a href="">TikTok</a></li>

        </pre>

     </div>
    </div>


  </footer>

  );
};

export default Footer;