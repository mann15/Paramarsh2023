import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../index.css";
import { useNavigate } from "react-router-dom";
import events from "../assets/data/index";

const Event = () => {
  const [showAlert, setShowAlert] = useState(true); // State to manage alert visibility

  useEffect(() => {
    Aos.init({
      offset: 10,
    });
  }, []);

  const navigate = useNavigate();

  const navigateHandler = (dat, data, key) => {
    navigate(`/event/${dat.title}`, { state: { eventsData: data, key } });
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="">

      
      <section className="wrapper">
        <div className="top tracking-normal -mt-10 px-2">EVENTS</div>

        <div className="bottom tracking-normal -mt-10 px-2 " aria-hidden="true">
          EVENTS
        </div>
      </section>
      

      <div className="eventB-container text-center my-[12vh] justify-evenly ">
        {events.map((dat, key) => (
          <div
            className="eventB-card rounded-xl cursor-pointer w-[500px] "
            data-aos="fade-in"
            data-aos-duration="1500"
            key={key}
          >
            <img
              src={dat.img}
              alt={dat.title}
              onClick={() => navigateHandler(dat, events, key)}
              className="eventB-img z-40 "
            />
          </div>
        ))}
      </div>
      {showAlert && (
        <div className="alert-container h-screen w-screen flex items-center justify-center">
          <div className="alert w-[30vw] h-[20vh] md:w-[50vw] sm:w-[90vw]">
            <p>Participants can take part in maximum 3 events</p>
            <span className="close-button" onClick={closeAlert}>
              &#x2715;
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Event;