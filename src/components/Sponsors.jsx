import Slider from "react-slick";
import React, { useEffect } from 'react'
import { useState } from "react";
import "../index.css"


import i1 from "../assets/images/2.jpg"
import i2 from "../assets/images/22nd.jpg"
import i3 from "../assets/images/5.jpg"
import i4 from "../assets/images/AR.jpg"
import i5 from "../assets/images/caesura.jpg"

const lists = [
  { image: i1, title: "title", paragraph: "KYB" },
  { image: i2, title: "food", paragraph: "Swiggy" },
  { image: i3, title: "music", paragraph: "9XM" },
  { image: i4, title: "patner", paragraph: "Global" },
  { image: i5, title: "printing", paragraph: "Jayprints" },

  { image: i5, title: "printing", paragraph: "Jayprints" },
  { image: i5, title: "printing", paragraph: "Jayprints" },
  { image: i5, title: "printing", paragraph: "Jayprints" },
  { image: i5, title: "printing", paragraph: "Jayprints" }
];
const Sponsors = () => {
  
  const [imgIndex,setImgIndex] = useState(0);
  const[slidesToShow ,setSlidesToShow] =useState(5);
const updateSlidesToShow =()=>{
  const screenWidth = window.innerWidth;
  if (screenWidth<600 && screenWidth>100){
    setSlidesToShow(3);
  }
  else {
    setSlidesToShow(5);
  }
};
useEffect(()=>{
  updateSlidesToShow();
  window.addEventListener("resize",updateSlidesToShow);
  return () =>{
    window.removeEventListener("resize",updateSlidesToShow);
  };
},[])

  const settings = {
    infinite:true, //to allow the slides to show infinitely
    lazyLoad: true,
    speed: 2000, //this is the speed of slider in ms
    slidesToShow:slidesToShow, //number of slides to show up on screen
    centerMode: true, 
    centerPadding: 0,
    autoplay:true,
    beforeChange: (current, next) => setImgIndex(next), 
  };
  return (
    
    <div className="apps text-white cursor-pointer">
       <Slider {...settings} className="mt-[1vh] ">
       {lists.map((list, idx) => (
          <div className={idx === imgIndex ? "slide activeSlide" : "slide" }  key={idx}>
            <h2 className=" text-center">{list.title}</h2>
            <img src={list.image} className="  items-center"  alt={idx} />
            <p className="text-center">{list.paragraph}</p>
          </div>
        ))}
       </Slider>
    </div>
  )
}

export default Sponsors