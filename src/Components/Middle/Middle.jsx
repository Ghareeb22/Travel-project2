import React, { useEffect } from "react";
import "./Middle.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Middle = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="middle section">
      <div className="secContainer container">
        <div className="grid">
          <span className="flex">
            <h1 data-aos="fade-up">10</h1>
            <p data-aos="fade-up">World Of Experinces</p>
          </span>
          <span className="flex">
            <h1 data-aos="fade-up">2k+</h1>
            <p data-aos="fade-up">Fine Destinations</p>
          </span>
          <span className="flex">
            <h1 data-aos="fade-up">10k+</h1>
            <p data-aos="fade-up">Customer Reviews</p>
          </span>

          <span className="flex">
            <h1 data-aos="fade-up">4.8</h1>
            <p data-aos="fade-up">Overall Rating</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Middle;
