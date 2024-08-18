import React, { useState, useEffect } from "react";
import prebg2 from "../assets/images/prebg2.jpg";
import naruto from "../assets/images/narutorun.gif";
import PreLoaderCSS from '../pages/PreLoader.css';

const PreLoader = ({ onLoadingComplete }) => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [loadPercentage, setLoadPercentage] = useState(0);

  useEffect(() => {
    const simulateLoading = () => {
      let currentPercentage = 0;
      const interval = setInterval(() => {
        currentPercentage += 1;
        setLoadPercentage(currentPercentage);
        if (currentPercentage >= 100) {
          clearInterval(interval);
          setLoadingComplete(true);
          // Trigger a callback if needed
          if (onLoadingComplete) {
            onLoadingComplete();
          }
        }
      }, 70); // Adjust the interval for a smoother animation
    };

    simulateLoading(); // Simulate loading progress

    return () => {
      // Clean up if component unmounts before completion
      setLoadPercentage(100);
      setLoadingComplete(true);
    };
  }, [onLoadingComplete]);

  if (!isLoadingComplete) {
    return (
      <div className='preloader-container'>
        <img src={prebg2} alt="" className='preloader-background' />
        <div className='textbox'>
          <h1 className='bangers text-[350px] text-center flex gap-3'>
            {loadPercentage}% {/* Display the loading percentage */}
          </h1>
        </div>
        <img src={naruto} alt="" className='naruto-image' />
      </div>
    );
  }
  return null;
}

export default PreLoader;
