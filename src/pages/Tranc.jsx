import React from "react";
import images from "../assets/images";
import { Link } from "react-router-dom";
import "../index.css"

const Transcendence = () => {

  const transcendence = [
    { src: images.g1, link: "/guestlec", alt: "Guest Lectures" },
    { src: images.g2, link: "/workshop", alt: "Work Shops" },

  ];

  return (<div>
    

    <section className="wrapper   ">
        <div className="top tracking-normal -mt-10 px-2">TRANSCENDENCE</div>

        <div className="bottom tracking-normal -mt-10 px-2" aria-hidden="true">
        TRANSCENDENCE
        </div>
      </section>
        <div className="eventB-container sm:space-y-3 flex flex-wrap items-center justify-center text-white">
      
      {transcendence.map((event, index) => (
        <div
          key={index}
          className="eventB-card my-[20vh] rounded-md p-[3px] w-[70vh]  flex flex-wrap mx-[50px] "
        >
          <Link to={event.link}>
            <img className="p-[2px] rounded-xl z-40 tranc-img" src={event.src} alt={event.alt} />
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Transcendence;
