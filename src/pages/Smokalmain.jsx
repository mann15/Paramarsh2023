import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Smokalmain = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const allData = location.state.smokalData;
  const key = location.state.key;
  const [pageKey, setPageKey] = useState(key);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  AOS.init({
    duration: 500, // Animation duration in milliseconds
    offset: 100, // Offset (in pixels) from the original trigger point
    easing: "ease-in-out", // Easing function for the animation
    // once:true
  });

  useEffect(() => {
    setData(allData[pageKey]);
  }, [allData]);

  const handleNext = () => {
    if (pageKey === allData.length - 1) {
      setData(allData[0]);
      setPageKey(0);
    } else {
      setData(allData[pageKey + 1]);
      setPageKey(pageKey + 1);
    }
  };
  const handlePrev = () => {
    if (pageKey === 0) {
      setData(allData[allData.length - 1]);
      setPageKey(allData.length - 1);
    } else {
      setData(allData[pageKey - 1]);
      setPageKey(pageKey - 1);
    }
  };
  return (
    <div
      className="w-full h-full text-purple-200 text-center all py-[5vh] sm:p-0"
      onLoad={handleScrollToTop}
    >
      <div className="flex justify-center w-screen  items-center flex-col">
      <div className="overflow-hidden flex flex-col w-[77%] items-center mt-[2vh]">
        <div className="relative border-b-2 border-purple-500">
          <img
            src={data?.img}
            // alt={data?.title}
            className="w-full h-full"
            data-aos="fade-down"
          />
          {/* <p className="absolute bottom-0 w-full h-48 bg-gradient-to-b from-black/0 to-black"></p>
          <p
            className="absolute bottom-14 xs:bottom-11 left-0 text-4xl md:text-3xl sm:text-2xl xs:text-xl px-[3vw] font-bold "
            data-aos=""
          >
            {data?.title}
          </p> */}

          {/* <p
            className="absolute bottom-5 left-0 text-2xl md:text-xl sm:text-base px-[3vw] font-semibold"
            data-aos=""
          >
            Participation : {data?.participation}
          </p> */}
          {data.title !== "Enchantz" && data.title !== "Broadway-Beats" && (
          <a href={data?.link}>

          <button
            className="absolute bottom-5 right-5 text-center text-purple-200 border border-x-white border-y-slate-400 py-5 px-8 cursor-pointer btn sm:py-2 sm:px-5 xs:px-2 bg-black/80"
            data-aos="fade-left"
            >
            Register
          </button>
            </a>)}
        </div>

        <div className="bg-black/0">
          <div
            className="text-2xl md:text-xl sm:text-lg p-5 pt-10 mb-5 bg-black/30 backdrop-blur-sm shadow-md ring-fuchsia-800 ring-1 rounded-lg m-1 Grotesk"
            data-aos="fade-right"
          >
            {data?.quote}
            <div
              className=" text-lg sm:text-sm text-justify pt-5"
              data-aos="fade-left"
            >
              {data?.desc}
            </div>
          </div>
          <div
            className="mt-5 text-center bg-black/30 backdrop-blur-sm shadow-md ring-fuchsia-800 ring-1 rounded-lg m-1 p-5"
            data-aos="fade-right"
          >
            <p className="Grotesk"> Participation : {data?.participation}</p>
            <p className="Grotesk"> Total Fees : ₹{data?.fees} /-</p>
          </div>
          <div
            className=" text-left mt-5 bg-black/30 backdrop-blur-sm shadow-md ring-fuchsia-800 ring-1 rounded-lg m-1 p-5"
            data-aos="fade-left"
          >
            <p className="Grotesk"> Rules :</p>
            <ol className="list-none p-5">
              <li>{data?.r1}</li>
              <li>{data?.r2}</li>
              <li>{data?.r3}</li>
              <li>{data?.r4}</li>
              <li>{data?.r5}</li>
              <li>{data?.r6}</li>
              <li>{data?.r7}</li>
            </ol>
          </div>
          <div
            className="text-left mt-5 bg-black/30 backdrop-blur-sm shadow-md ring-fuchsia-800 ring-1 rounded-lg m-1 p-5"
            data-aos="fade-left"
          >
            <p className="Grotesk"> For Queries,</p>
            <p className="">Contact :-</p>
            <p>Keta Patel : +91 8160323117</p>
          </div>
        </div>

        {data.title === "Enchantz" && (
        <div className="flex items-center sm:flex-col twobutton p-5 justify-center gap-10 sm:space-x-0 sm:space-y-[5vh] mt-8">
          <a href={data?.link1}>

          <button className="text-center text-purple-200 border border-x-white border-y-slate-400 p-1 w-64 btn" data-aos="zoom-in">
            REGISTER HERE FOR SOLO
          </button>
          </a>
          <a href={data?.link2}>

          <button className="text-center text-purple-200 border border-x-white border-y-slate-400 p-1 w-64 btn" data-aos="zoom-in">
            REGISTER HERE FOR DUET
          </button>
          </a>
        </div>
      )}
        {data.title === "Broadway-Beats" && (
        <div className="flex items-center threebutton  sm:flex-col p-10 justify-center gap-5  sm:space-x-0 sm:space-y-[5vh] mt-8 mx-16">
          <a href={data?.link1}>

          <button className="text-center text-purple-200 border border-x-white border-y-slate-400 p-1 w-64 btn" data-aos="zoom-in">
            REGISTER HERE FOR SOLO
          </button>
          </a>
          <a href={data?.link2}>

          <button className="text-center text-purple-200 border border-x-white border-y-slate-400 p-1 w-64 btn" data-aos="zoom-in">
            REGISTER HERE FOR DUET
          </button>
          </a>
          <a href={data?.link3}>

          <button className="text-center text-purple-200 border border-x-white border-y-slate-400 p-1 w-64 btn" data-aos="zoom-in">
            REGISTER HERE FOR GROUP
          </button>
          </a>
        </div>
      )}



        <div className="flex items-center flex-wrap p-[5vh] justify-center space-x-[10vw] ">
          {data?.title !== "Broadway-Beats" && (
            <button
              className="text-center text-purple-200 border border-x-white border-y-slate-400 p-2 btn"
              onClick={handlePrev}
              data-aos="zoom-in"
            >
              PREVIOUS
            </button>
          )}
          {data?.title !== "Smoking Ace's" && (
            <button
              className="text-center text-purple-200 border border-x-white border-y-slate-400 p-2 btn"
              onClick={handleNext}
              data-aos="zoom-in"
            >
              NEXT
            </button>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Smokalmain;