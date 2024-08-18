import React from "react";
import "../index.css";
import images from "../assets/images";



const Guestlec = () => {
  return (
    <div className="all">
      <p className=" text-6xl md:text-4xl sm:text-3xl xs:text-2xl text-center pt-[10vh] overflow-hidden Grotesk text-purple-300 all">
        Guest Lecture of Paramarsh'23:
      </p>
     <div className="w-screen flex justify-center mt-[10vh]">

      <div className="guest-card flex justify-center items-center  p-2 sm:h-[50vh] sm:w-[80vw] ">
        <h2 className="guest-heading">
          {/* <img src={images.g3} alt="" /> */}
        <img src={images.g3} className="guest-img  w-[30vw] md:w-[45vw] sm:w-[70vw] sm:h-[48vh]" alt="" />
        </h2>
     </div>
      </div>
      <p className="text-5xl text-center pt-10 text-purple-200 sm:text-3xl Grotesk">G. Satheesh Reddy</p>
      <div className="text-center flex justify-center w-screen  items-center flex-col my-16 text-purple-200 text-2xl md:text-xl sm:text-lg">
        <p className="w-[77%]">
          An intriguing personality who has contributed his entire life to the
          development of India in the defense R&D and aerospace program. A key
          contributor to advancing India's space and defense capabilities,
          contributing significantly to the nation's scientific and
          technological prowess through Hypersonic Technology Demonstration
          Vehicle and ATAGS. Paramarsh'23 exceedingly presents Dr. G Satheesh
          Reddy for an interactive session to arouse intellectual curiosity and
          dedication of youth towards the nation's Technological Development.
        </p>
      </div>
      <div className="my-20 flex justify-center w-screen  items-center flex-col text-purple-200 text-2xl md:text-xl sm:text-lg">
        <div className=" flex-col w-[77%] items-center">
        <p>• Former Secretary Department of Defense R&D.</p>
        <p>• Former Chairman DRDO.</p>
        <p>• Former Scientific Adviser to Raksha Mantri. </p>
        <p>• President Aeronautical Society of India. </p>
        <p>
          • Chief Architect of India's first Anti - Satellite missile test
          (ASAT) "Mission Shakti".
        </p>
        <p>
          {" "}
          • Notable contribution for development of the Hypersonic Technology
          Demonstration Vehicle, Advanced Towed Artillery Gun System (ATAGS).{" "}
        </p>
        <p>
          • First Indian in 100+ years to receive Honorary Fellowship and silver
          medal from Royal Aeronautical Society, London.
        </p>
                  <p className="Grotesk mt-20">For Queries,</p>
                  <p>Contact :-</p>
                  <p>Om Singh: +91 7096898216</p>
        </div>
      </div>
   
      <div className="w-screen flex items-center my-20 justify-center">
      <a href="https://konfhub.com/glreddy" >
      <button className="text-center text-purple-200 border border-x-white border-y-slate-400 p-3  ">
                      REGISTER HERE
                    </button>
                    </a>
      </div>
    </div>
  );
};

export default Guestlec;