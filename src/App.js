import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';
import './App.css';

function App() {
  return (
    <>

      <Nav/>
      <Header/>
      <Highlights/>
      <Testimonials/>
      <About/>
      <Footer/>
    </>
  );
}

export default App;
