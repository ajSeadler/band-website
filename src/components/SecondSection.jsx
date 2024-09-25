import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "../styles/ReleaseCTA.css";

const SecondSection = () => {
  return (
    <div className="release-cta">
      <h2>MERCH</h2>
      <p>
        We're super DIY when it comes to our merch! If you're interested in any items, just shoot us an email, and we'll help you get what you need.
      </p>
      {/* Use Link component for routing */}
      <Link to="/merch" className="cta-button">
        Check it out
      </Link>
    </div>
  );
};

export default SecondSection;
