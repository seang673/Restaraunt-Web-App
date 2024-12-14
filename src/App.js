import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Highlights from './Components/Highlights';
import Testimonials from './Components/Testimonials';
import About from './Components/About';


function App() {
  return (

    <>
      <Nav/>
      <Main/>
      <About/>
      <Highlights/>
      <Testimonials/>
      <Footer/>
    </>

  );
}

export default App;
