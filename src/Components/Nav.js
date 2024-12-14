import React, {useState} from 'react';
import lllogo2 from "/Users/seang/CouseraProj/my-app/src/Images/LLLogo2.webp";


const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () =>
    {
      setMenuOpen(!menuOpen);
    }


  return (
      <nav className={'navbar ${menuOpen ? "open" : "" }'}>

        <a href="/" className="logo">
          <img src = {lllogo2} alt=" Little Lemon Logo" class="nav-img" width="250" length="250"></img>
        </a>


        {/* mobile navbar */}
        <div className="menu-icon" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>




            <ul className={'nav-links ${menuOpen ? "visible" : ""}'}>
              <li><a href="/" >Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/booking">Reservations</a></li>
              <li><a href="/orderonline">Order Online</a></li>
              <li><a href="/login">Login</a></li>
            </ul>





      </nav>

  );
};

export default Nav;