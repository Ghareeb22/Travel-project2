import React, { useEffect } from "react";
import "./Home.css";
import Video from "../../Assets/video2.mp4";
import { AiOutlineSwapRight } from "react-icons/ai";
import image1 from "../../Assets/image1.jpg";
import image3 from "../../Assets/image3.jpg";
import image4 from "../../Assets/image4.jpg";
import image5 from "../../Assets/image5.jpg";

import Aos from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="Home">
      <div className="videoBg">
        <video src={Video} autoPlay loop muted></video>
      </div>
      <div className="sectionText">
        <h1 data-aos="fade-up">Unlock Your Travel Dreams With Us! </h1>
        <p>
          Discover the world's most adventurous nature, life is so short for a
          trip.
        </p>
        <button className="btn flex" data-aos="fade-up">
          Get Started <AiOutlineSwapRight className="icon" />
        </button>
      </div>
      <div className="popularPlaces">
        <div className="content">
          <h3 data-aos="fade-up">Popular Places</h3>
          <div className="images flex " data-aos="fade-up">
            <img src={image1} alt="Destination" />
            <img src={image3} alt="Destination" />
            <img src={image4} alt="Destination" />
            <img src={image5} alt="Destination" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
