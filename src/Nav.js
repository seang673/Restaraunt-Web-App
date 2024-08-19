import React from 'react';
import "../src/styles.css";
import lllogo2 from "../src/Images/LLLogo2.webp";

const Nav = () => {
  return (

      <nav>
        <div class = "seven-container">
        <img src = {lllogo2} alt=" Little Lemon Logo" width="150" length="150"></img>

          <a href="/home" >Home</a>
          <a href="/about">About</a>
          <a href="/menu">Menu</a>
          <a href="/reservations">Reservations</a>
          <a href="/orderonline">Order Online</a>
          <a href="/login">Login</a>

        </div>
      </nav>

  );
};

export default Nav;