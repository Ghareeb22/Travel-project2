import React, { useState, useEffect } from "react";
import "./Questions.css";
import Accordion from "./Accordion";
import Aos from "aos";
import "aos/dist/aos.css";
const Questions = () => {
  const [active, setActive] = useState(
    "How do i choose the right travel destination for me ?"
  );
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="questions section container">
      <div className="secHeading" data-aos="fade-up">
        <h3>Frequently Asked Questions</h3>
      </div>
      <div className="secContainer grid">
        <div className="accordion grid " data-aos="fade-up">
          <Accordion
            title="How do i choose the right travel destination for me ?"
            desc="Consider your interests, budget, desired experiences, and the type of
        environment you enjoy. Research destinations that alighn with your
        preferences and offer attractions or activities you find appealing."
            active={active}
            setActive={setActive}
          />
          <Accordion
            title="What are the best times to visit specific destinations?"
            desc="Research the climate, weather patterns, and peak tourist seasons of the destination you're intersted in.
            Opt for the shoulder seasons when the weather is pleasent, and crowds are fewer, if possible."
            active={active}
            setActive={setActive}
          />
          <Accordion
            title="How can I find budget-friendly travel options and deals"
            desc="Look for travel deals, discounts on flights and accommodations, and 
            consider using travel apps or websites that offer competitive prices.
            Being flexible with your travel dates can also help you find better deals"
            active={active}
            setActive={setActive}
          />
          <Accordion
            title="What essential items should I pack for my adventure"
            desc="Pack appropriate clothing, toiletries, travel documents (passport, visa, etc.), essential medications
            , and any specific gear needed for your adventure (e.g., hiking boots, snorkeling gear.)"
            active={active}
            setActive={setActive}
          />
        </div>

        <div className="form">
          <div className="secHeading" data-aos="fade-up">
            <h4 data-aos="fade-up">Do you have any spesific Question ?</h4>
            <p data-aos="fade-up">
              Please fill the form below and our dedicated team will get in
              touch with you as soon as possible.
            </p>
          </div>
          <div className="formContent grid" data-aos="fade-up">
            <input type="email" placeholder="Enter Email Address" />
            <textarea placeholder="Enter Your Question Here"></textarea>
            <button className="btn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
