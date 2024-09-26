import React, { useEffect } from "react";
import ContactUs from "./ContactUs";
import ReleaseCTA from "./ReleaseCTA";
import SecondSection from "./SecondSection";
import ScrollDownIndicator from "./ScrollDownIndicator";
import "../styles/Home.css";

const Home = () => {
  useEffect(() => {
    const parallaxEffect = () => {
      const sections = document.querySelectorAll(".parallax-bg");

      sections.forEach((section) => {
        const sectionTop = section.parentElement.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // Only apply parallax when the section is in the viewport
        if (sectionTop < windowHeight && sectionTop > -windowHeight) {
          const scrollPosition = window.scrollY;
          const sectionOffset = section.parentElement.offsetTop;
          
          // Calculate the parallax offset (adjust the multiplier for speed)
          const parallaxOffset = (scrollPosition - sectionOffset) * 0.3;
          section.style.backgroundPositionY = `${parallaxOffset}px`;
        }
      });
    };

    window.addEventListener("scroll", parallaxEffect);

    return () => {
      window.removeEventListener("scroll", parallaxEffect);
    };
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="section hero-section">
        <div className="parallax-bg"></div>
        <div className="scroll-down">
        <ScrollDownIndicator />
        </div>
      </section>

      {/* Shop Section */}
      <section className="section shop-section">
        <div className="parallax-bg"></div>
        <div className="content">
          <ReleaseCTA />
         
        </div>
      </section>

      {/* Apparel Section */}
      <section className="section apparel-section">
        <div className="parallax-bg"></div>
        <div className="content">
          <SecondSection />
          
        </div>
      </section>

      {/* Accessories Section */}
      <section className="section accessories-section">
        <div className="parallax-bg"></div>
        <div className="content">
          <h2 style={{ fontSize: "2.3rem" }}>BOOKING</h2>
          <ContactUs />
        </div>
      </section>
    </div>
  );
};

export default Home;
