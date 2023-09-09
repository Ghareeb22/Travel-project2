import React, { useEffect } from "react";
import "./Reviews.css";
import pro1 from "../../Assets/pro1.jpg";
import pro2 from "../../Assets/pro2.jpg";
import pro3 from "../../Assets/pro3.jpg";
import pro4 from "../../Assets/pro4.jpg";

import imgBig from "../../Assets/imgBig.jpeg";
import { AiFillStar } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
const Reviews = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="review section container">
      <div className="secContainer grid">
        <div className="textDiv" data-aos="fade-up">
          <span className="redText">FROM OUR CLIENTS</span>
          <h3>Real Travel History From Our Beloved Clients</h3>
          <p>
            By choosing us as their tour agency, customers can expect an
            enriching and enjoyable travel experienec,filled with unforgettable
            memories that will last a lifetime
          </p>
          <span className="stars flex" data-aos="fade-up">
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
          </span>
          <div className="clientsImages flex" data-aos="fade-up">
            <img src={pro1} alt="Client Image" />
            <img src={pro2} alt="Client Image" />
            <img src={pro3} alt="Client Image" />
            <img src={pro4} alt="Client Image" />
          </div>
        </div>
        <div className="imgDiv" data-aos="fade-up">
          <img src={imgBig} alt="Image Div" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
