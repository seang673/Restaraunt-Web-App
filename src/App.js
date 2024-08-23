import React from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';
import {Routes, Route, Link} from 'react-router-dom';
import Login from './pages/Login';
import Menu from './pages/Menu';
import OrderOnline from './pages/Orderonline';
import Reservations from './pages/Reservations';

function App() {
  return (
    <>


      <Nav/>
      <Routes>
          <Route path="/" element={<Header />}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/reservations" element={<Reservations />}></Route>
          <Route path="/orderonline" element={<OrderOnline/>}></Route>
          <Route path="/login" element={<Login />}></Route>

      </Routes>
      <Header/>

      <Highlights/>
      <Testimonials/>
      <About/>
      <Footer/>



    </>
  );
}

export default App;
