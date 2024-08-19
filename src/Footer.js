import React from 'react';
import "../src/styles.css";

const Footer = () => {
  return (

    <footer>
      <div class="four-container">

      <div class="grid-item">
      <img src="barelemons.png" width="40" height="40"></img>

      </div>


      <div class="grid-item">

        <p>Contact Info: </p>
        <pre>
          Address: 123 Main Street Anytown, USA 12345<br></br>

          Phone: (555) 123-4567<br></br>
          Email Address: info@littlelemon.com<br></br>
        </pre>

      </div>


      <div class="grid-item">

        <p>Get to Know Us More.</p>
        <pre>
          About<br></br>
          Careers<br></br>
          Press Releases<br></br>
          Exclusive Recipes<br></br>
          Our Kitchen<br></br>
        </pre>

      </div>


      <div class="grid-item">

        <p>Connect With Us:</p>
        <pre>

          Facebook<br></br>
          Instagram<br></br>
          LinkedIn<br></br>
          X<br></br>
        </pre>

     </div>
    </div>


  </footer>

  );
};

export default Footer;