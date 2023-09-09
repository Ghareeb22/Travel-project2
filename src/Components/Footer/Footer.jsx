import React, { useEffect } from "react";
import "./Footer.css";
import { BiLogoMediumOld } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { ImFacebook } from "react-icons/im";
import Aos from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="socials flex" data-aos="fade-up">
          <a href="https://www.facebook.com/muhammed.ash.184">
            <ImFacebook className="icon" />
          </a>
          <a href="https://twitter.com/?lang=en">
            <BsTwitter className="icon" />
          </a>
          <a href="https://www.instagram.com/">
            <AiFillInstagram className="icon" />
          </a>
        </div>

        <div className="footerLinks" data-aos="fade-up">
          <span className="linkTitle">Information</span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </div>

        <div className="footerLinks" data-aos="fade-up">
          <span className="linkTitle">Helpful Links</span>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Travel & Condition</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </div>

        <div className="footerLinks" data-aos="fade-up">
          <span className="linkTitle">Contact Details</span>
          <span className="phone">01145776860</span>
          <span className="email">M.Gharib2212@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
