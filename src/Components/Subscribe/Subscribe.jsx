import React, { useEffect } from "react";
import "./Subscribe.css";
import call1 from "../../Assets/call1.png";
import Aos from "aos";
import "aos/dist/aos.css";
const Subscribe = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="subscribe section container">
      <div className="secContainer grid" data-aos="fade-up">
        <img src={call1} alt="Div Image" />

        <div className="textDiv" data-aos="fade-up">
          <h4>Best Way To Start Your Journey!</h4>
          <p>
            We offer personalized itienraries tailored to individual preferences
            and interests
          </p>
          <button className="btn" data-aos="fade-up">
            Start Here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
