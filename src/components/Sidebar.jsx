import React, { useEffect, useRef } from "react";
import { RxCross1 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import images from "../assets/images";

const Sidebar = ({ handleClick }) => {
  const location = useLocation();
  const sidebarRef = useRef(null);

  const categories = [
    { title: "Home", route: "/",route1:"/para_2023/index.html" },
    { title: "About Us", route: "/about" },
    {
      title: "Events",
      route: "/event",
      route1: "/event/Eloquence",
      route2: "/event/Bizaurus",
      route3: "/event/The-Fading-Trail",
      route4: "/event/Inquisitive",
      route5: "/event/The-False-Perception",
      route6: "/event/Rangmanch",
      route7: "/event/Faneticz",
      route8: "/event/Adrenaline-Rush",
    },
    {
      title: "Transcedence",
      route: "/tranc",
      route1: "/guestlec",
      route2: "/workshop",
    },
    { title: "Startupedia", route: "/startup" },
    {
      title: "Smokal",
      route: "/smokal",
      route1: "/smokal/Broadway-Beats",
      route2: "/smokal/Comicality",
      route3: "/smokal/Enchantz",
      route4: "/smokal/Caesura",
      route5: "/smokal/Smoking%20Ace's",
    },
    { title: "Extravaganza", route: "/extravag" },
    {
      title: "E-stuff",
      route: "/estuff",
      route1: "/estuff/22nd-yard",
      route2: "/estuff/Battle-dore",
      route3: "/estuff/Wall-E-Ball",
    },
    { title: "Cognizance", route: "/cogni" },
    { title: "Sanidhya", route: "/sanidhya" },
    { title: "Pronite", route: "/pronite" },
    // {title: "History", route:"/history"},
    { title: "Our Team", route: "/team", route1: "/web" },
    { title: "Contact", route: "/contact" },
  ];

  const closeSidebarOnOutsideClick = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      handleClick();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeSidebarOnOutsideClick);

    return () => {
      document.removeEventListener("mousedown", closeSidebarOnOutsideClick);
    };
  }, []);

  return (
    <div 
    ref={sidebarRef}
     className="text-white fixed h-screen bg-black/75 w-[25vw] md:w-[35vw] sm:w-[60vw] xs:w-[100vw] text-lg overflow-x-hidden overflow-y-auto z-50 ">
      <div className=" absolute top-10 left-8 cursor-pointer">
        {/* <RxCross1 color="white" size="28px" onClick={handleClick} /> */}
        <img src={images.cross} alt="" className="w-20  md:w-16 sm:w-16 xs:w-14 " onClick={handleClick} />
      </div>
      <div className="pl-24 pt-28 space-y-1.5">
        {categories.map((category, key) => (
          <p
            key={key}
            className="cursor-pointer hover:scale-110 transition duration-200 hover:text-slate-500 "
          >
            <Link
              to={category.route}
              onClick={handleClick}
              className={
                location.pathname === category.route ||
                location.pathname === category.route1 ||
                location.pathname === category.route2 ||
                location.pathname === category.route3 ||
                location.pathname === category.route4 ||
                location.pathname === category.route5 ||
                location.pathname === category.route6 ||
                location.pathname === category.route7 ||
                location.pathname === category.route8
                  ? "text-blue-500 font-bold text-xl rounded-full"
                  : ""
              }
            >
              {category.title}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
