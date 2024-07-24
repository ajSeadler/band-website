import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AboutPage from "./components/AboutPage";
import Shows from "./components/Shows";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ShowDetailsPage from "./components/ShowDetailsPage";
import MemberDetails from "./components/MemberDetails";

function App() {
  return (
    <div className="app">
      <NavBar />
      <ScrollToTop />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/showdetails/:id" element={<ShowDetailsPage />} />
          <Route path="/member/:name" element={<MemberDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
