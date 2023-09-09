import React, { useEffect } from "react";
import "./Portfolio.css";

import icon1 from "../../Assets/icon1.png";
import icon2 from "../../Assets/icon2.png";
import icon3 from "../../Assets/icon3.png";
import image2 from "../../Assets/image2.png";
import Aos from "aos";
import "aos/dist/aos.css";
const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="portfolio section container">
      <div className="secContainer grid">
        <div className="leftContent">
          <div className="secHeading" data-aos="fade-up">
            <h3>Why Should You Choose Us</h3>
            <p>
              We have extensive knowledge and experience in the travel industry
            </p>
          </div>
          <div className="grid">
            <div className="singlePortfolio flex">
              <div className="iconDiv" data-aos="fade-up">
                <img src={icon1} alt="" />
              </div>
              <div className="info" data-aos="fade-up">
                <h4>Safety and support</h4>
                <p>
                  Our top priority is the safety and well-being of our clients.
                  We maintain high safety standards and have emergency support
                  available during the trip
                </p>
              </div>
            </div>
            <div className="singlePortfolio flex">
              <div className="iconDiv" data-aos="fade-up">
                <img src={icon2} alt="" />
              </div>
              <div className="info" data-aos="fade-up">
                <h4>Diverse Range of Destinations</h4>
                <p>
                  Weather it's a domestic tour or an international adventure, we
                  cover a wide range of destinations to cater to different
                  interstes and prefrences.
                </p>
              </div>
            </div>
            <div className="singlePortfolio flex">
              <div className="iconDiv" data-aos="fade-up">
                <img src={icon3} alt="" />
              </div>
              <div className="info" data-aos="fade-up">
                <h4>24/7 Customer Support</h4>
                <p>
                  Our dedicated customer support team is available round the
                  clock to address any queries or concerns before , during and
                  after the trip.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rightContent" data-aos="fade-up">
          <img src={image2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
