// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home'; 
import AboutUs from './components/AboutUs';
import Shows from './components/Shows';
import Contact from './components/Contact';
import Footer from './components/Footer';


import ScrollToTop from './components/ScrollToTop'; 

function App() {
  return (
    <div>
      <NavBar />

     
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/shows' element={<Shows />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blob' element={<Blob />} />
       
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
