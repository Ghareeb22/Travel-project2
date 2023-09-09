import React, { useEffect } from "react";
import "./Destination.css";
import { MdLocationPin } from "react-icons/md";
import { BsFillCalendarDateFill, BsFillCreditCardFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";
// images
import img1 from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import img8 from "../../Assets/img8.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
const destinations = [
  {
    id: 1,
    img: img6,
    name: "Sahara Desert",
    location: "Africa",
    rating: 4.7,
  },
  {
    id: 2,
    img: img2,
    name: "Santorini",
    location: "Greece",
    rating: 4.6,
  },
  {
    id: 3,
    img: img3,
    name: "Field, AB",
    location: "Canda",
    rating: 4.5,
  },
  {
    id: 4,
    img: img4,
    name: "Maldives Beach",
    location: "Maldives",
    rating: 4.9,
  },
  {
    id: 5,
    img: img5,
    name: "Dubai",
    location: "United Arab Emarites",
    rating: 4.5,
  },
  {
    id: 6,
    img: img8,
    name: "The Pyramids",
    location: "Egypt",
    rating: 4.9,
  },
  {
    id: 7,
    img: img1,
    name: "The Nile",
    location: "Egypt",
    rating: 4.7,
  },
];
const Destination = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="destination section container">
      <div className="secContainer">
        <div className="secTitle">
          <span className="redText" data-aos="fade-up">
            EXPLORE NOW
          </span>
          <h3 data-aos="fade-up">Find Your Dream Destination</h3>
          <p data-aos="fade-up">
            Fill in the fields below to find the best spot for your next tour.
          </p>
        </div>
        <div className="searchField grid" data-aos="fade-up">
          <div className="inputField flex" data-aos="fade-up">
            <MdLocationPin className="icon" data-aos="fade-up" />
            <input type="text" placeholder="Location" data-aos="fade-up" />
          </div>
          <div className="inputField flex">
            <BsFillCreditCardFill className="icon" />
            <input type="text" placeholder="Budget" />
          </div>
          <div className="inputField flex">
            <BsFillCalendarDateFill className="icon" />
            <input type="text" placeholder="Date" />
          </div>
          <button className="btn flex" data-aos="fade-up">
            <BiSearchAlt className="icon" />
            Search
          </button>
        </div>
        <div className="secMenu">
          <ul className="flex" data-aos="fade-up">
            <li className="active">All</li>
            <li>Recommended</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Mountain</li>
          </ul>
        </div>
        <div className="destinationContainer grid">
          {destinations.map((destination) => {
            return (
              <div
                className="signleDestination"
                key={destination.id}
                data-aos="fade-up"
              >
                <div className="imgDiv">
                  <img src={destination.img} alt="Destination Image" />
                  <div className="descInfo flex">
                    <div className="text">
                      <span className="name">{destination.name}</span>
                      <p className="flex">
                        <TiLocation className="icon" />
                        {destination.location}
                      </p>
                    </div>
                    <span className="rating">{destination.rating}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Destination;
