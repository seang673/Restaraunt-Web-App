import React from 'react';
import "../src/nav.css";
import lllogo2 from "../src/Images/LLLogo2.webp";
import {Link} from "react-router-dom"


const Nav = () => {
  return (

      <nav>
        <div class = "container">

            <img src = {lllogo2} alt=" Little Lemon Logo" class="nav-img" width="250" length="250"></img>


            <ul class = "nav-ul">
              <li class ="nav-li"><Link to="/home" >Home</Link></li>
              <li class = "nav-li"><Link to="/about">About</Link></li>
              <li class = "nav-li"><Link to="/menu">Menu</Link></li>
              <li class = "nav-li"><Link to="/reservations">Reservations</Link></li>
              <li class = "nav-li"><Link to="/orderonline">Order Online</Link></li>
              <li class = "nav-li"><Link to="/login">Login</Link></li>
            </ul>



        </div>


      </nav>

  );
};

export default Nav;