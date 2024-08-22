import React from 'react';
import "../src/styles.css";
import lllogo2 from "../src/Images/LLLogo2.webp";

const Nav = () => {
  return (

      <nav>
        <div class = "nav-container">


          <div class="nav-image"><img src = {lllogo2} alt=" Little Lemon Logo" width="150" length="150"></img></div>

          <div class="nav-item"><a href="/home" >Home</a></div>
          <div class="nav-item"><a href="/about">About</a></div>
          <div class="nav-item"><a href="/menu">Menu</a></div>
          <div class="nav-item"><a href="/reservations">Reservations</a></div>
          <div class="nav-item"><a href="/orderonline">Order Online</a></div>
          <div class="nav-item"><a href="/login">Login</a></div>

        </div>
      </nav>

  );
};

export default Nav;