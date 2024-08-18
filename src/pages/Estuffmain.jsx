import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Estuffmain = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const allData = location.state.estuffData;
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
      className="w-full h-full text-purple-200 text-center  py-[5vh] sm:p-0 all"
      onLoad={handleScrollToTop}
    >
      <div className="flex justify-center w-screen  items-center flex-col">
      <div className="overflow-hidden flex flex-col w-[77%] items-center justify-center">
        <div className="relative border-b-2 border-purple-500">
          <img
            src={data?.img}
            // alt={data?.title}
            className="w-full h-full"
            data-aos="fade-down"
          />
          {data.title !== "Battle-dore" && (
            <a href={data?.link}>

          <button
            className="absolute bottom-5 right-5 text-center text-purple-200 border py-5 px-8 cursor-pointer btn sm:py-2 sm:px-5 xs:px-2 bg-black/80"
            data-aos="fade-left"
            >
            Register
          </button>
            </a>
          )}
        </div>

        <div className="bg-black/0">
          <div
            className="text-2xl md:text-xl sm:text-lg p-5 pt-10 mb-5 bg-black/30 backdrop-blur-sm font-semi shadow-md ring-fuchsia-800 ring-1 rounded-lg m-1 Grotesk"
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
            <p className="Grotesk">Participation : {data?.participation}</p>
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
            <p className="Grotesk">For Queries,</p>
            <p>Contact :-</p>
            <p>Mehul Kanzariya : (+91) 9510387540 </p>
          </div>
        </div>
        {data.title === "Battle-dore" && (
        <div className="flex items-center sm:flex-col p-5 justify-center space-x-[5vw] sm:space-x-0 sm:space-y-[5vh] all">
          <a href={data?.link1}>

          <button className="text-center text-purple-200 border p-2 w-64 btn" data-aos="zoom-in">
            REGISTER HERE FOR SINGLES
          </button>
          </a>
          <a href={data?.link2}>

          <button className="text-center text-purple-200 border border-x-white border-y-slate-400 p-2 w-64 btn" data-aos="zoom-in">
            REGISTER HERE FOR DOUBLES
          </button>
          </a>
        </div>
      )}
        <div className="flex items-center flex-wrap p-[5vh] justify-center space-x-[10vw] sm:space-x-2 sm:spce-y-5">
        
          {data?.title !== "22nd-yard" && (
            <button
              className="text-center text-purple-200 border border-x-white border-y-slate-400 p-2 w-24 btn"
              onClick={handlePrev}
              data-aos="zoom-in"
            >
              PREVIOUS
            </button>
          )}
          {data?.title !== "Wall-E-Ball" && (
            <button
              className="text-center text-purple-200 border border-x-white border-y-slate-400 p-2 w-24 btn"
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

export default Estuffmain;