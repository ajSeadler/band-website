import React from "react";
import ContactUs from "./ContactUs"
import ReleaseCTA from "./ReleaseCTA";
import SecondSection from "./SecondSection";
import ScrollDownIndicator from "./ScrollDownIndicator"; // Import the new component
import "../styles/Home.css";
import { fontSize } from "@mui/system";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="section hero-section">
        {/* Other hero content can go here */}
        <ScrollDownIndicator /> {/* Add the scroll indicator */}
      </section>

      {/* Shop Section */}
      <section className="section shop-section">
        <div className="content">
          <ReleaseCTA />
          <ScrollDownIndicator />
        </div>
      </section>

      {/* Apparel Section */}
      <section className="section apparel-section">
        <div className="content">
          <SecondSection />
          <ScrollDownIndicator />
        </div>
      </section>

      {/* Accessories Section */}
      <section className="section accessories-section">
        <div className="content">
          <h2 style={{fontSize:"2.3rem"}}>BOOKING</h2>
          <ContactUs />
        </div>
      </section>
    </div>
  );
};

export default Home;
