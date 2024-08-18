import React from "react";
import p1 from "../assets/images/Curreny-CMo.jpg";
import p2 from "../assets/images/EX-CMo.jpg";
import p3 from "../assets/images/PMO.jpg";
import p4 from "../assets/images/HMOINDIA-AMIT-SHAH.jpg";
import p5 from "../assets/images/UNESCO.jpg";

const Patronages = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-screen gap-10 p-10">
      <div className="flex gap-10 ">
        <div>
          <img src={p3} alt=""  className="w-[25vw] md:w-[30vw] sm:w-[50vw] sm:gap-1"/>
        </div>
        <div>
          <img src={p1} alt=""  className="w-[25vw] md:w-[30vw] sm:w-[50vw] sm:gap-1"/>
        </div>
      </div>
      <div>
        <img src={p5} alt="" />
      </div>
      <div className="flex gap-10">
        <div>
          <img src={p4} alt=""  className="w-[25vw] md:w-[30vw] sm:w-[50vw] sm:gap-1"/>
        </div>
        <div>
          <img src={p2} alt=""  className="w-[25vw] md:w-[30vw] sm:w-[50vw] sm:gap-1"/>
        </div>
      </div>
    </div>
  );
};

export default Patronages;
