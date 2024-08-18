import React from "react";
import images from "../assets/images";

const Startup = () => {
  return (
    <div className=" text-purple-200 all">
      {/* <section className="wrapper  ">
        <div className="top tracking-normal -mt-10 px-2">STARTUPEDIA</div>

        <div className="bottom tracking-normal -mt-10 px-2" aria-hidden="true">
        STARTUPEDIA
        </div>
      </section> */}
      {/* <div className='text-center py-20 jumping-text'>
      <p className='text-glow1'>COMING SOON</p>
    </div> */}
    <div className="flex justify-center w-screen  items-center flex-col">
      <div className="overflow-hidden  flex-col w-[77%] items-center my-[12vh]">

      <div className=" flex justify-center items-center ">
        <img src={images.w3} alt="" />
      </div>
      <div className="bg-black/0 ">
            {/* <div className="text-4xl md:text-3xl sm:text-2xl xs:text-xl px-[10vw] py-[5vh] font-bold">
            {data?.title}
          </div> */}
            <div
              className="text-2xl md:text-xl sm:text-lg p-5 pt-10 mb-5 font-semibold bg-black/30 backdrop-blur-sm shadow-md ring-fuchsia-800 ring-1 rounded-lg m-1 "
              data-aos="zoom-out"
            >
              <div className="Grotesk text-center">

              It’s not magic. It’s talent and sweat” (Silicon Valley).
              </div>
              <div
                className=" text-lg sm:text-sm text-center  pt-5 paragraphtext "
                data-aos="zoom-out"
              >
                
Why not give that talent a platform, a stairway to success. An idea is the beginning of an achievement.




Paramarsh’23 ignited the idea of Startupedia - a development dialogue, with the sole aim of giving path to young mind. We take pleasure in providing young innovators and entrepreneurs a platform to take their talent and ideas to the level they deserve. Cozoom-out with an idea isn’t enough, it is crafting of the idea into a real working thing, that’s a truly delightful experience. It is about making the idea come alive.
Startupedia is amalgamation of workshops, consolidation, mentoring and presentation.
              </div>
            </div>
           
            <div
              className=" text-left mt-5 bg-black/30 backdrop-blur-sm shadow-md ring-fuchsia-800 ring-1 rounded-lg m-1 p-5 paragraphtext"
              data-aos="zoom-out"
            >
              <p className="Grotesk"> Rules :</p>
              <ol className="list-none p-5 paragraphtext">
                <li>1) Participants have to register via Konfhub. There is no fee for entry.</li>
                <li>2) Participation can be done as an individual or a team.</li>
                <li>3) Each individual or team may enter only one idea or concept.</li>
                <li>4) Pitch competitors cannot be part of multiple teams.</li>
                <li>5) Entries must be the original work of entrants.</li>
                <li>6) Ensure your availability on the day of the event before participating</li>
                <li>7) Participants have to share the presentation about their startup on   paramarsh22.startupedia@gmail.com </li>
                <li>8) Participants will be short listed on the basis of:-</li>
                <li className="pl-4">  a) Level of traction </li>
                <li className="pl-4"> b) Market value and growth</li>
                <li className="pl-4">c) Product and business plan</li>
                <li className="pl-4">d) Futuristic vision</li>
                <li>9) Shortlisted participants will get an opportunity to pitch their ideas in front of investors and jury.</li>
              </ol>
            </div>
          
            <div
              className="text-left mt-5 bg-black/30 backdrop-blur-sm shadow-md ring-fuchsia-800 ring-1 rounded-lg m-1 p-5"
              data-aos="zoom-out"
            >
              <p className="Grotesk">For Queries,</p>
              <p>Contact :-</p>
              <p>Om Singh: +91 7096898216</p>
            </div>
            <div
                  className="flex items-center flex-wrap justify-center py-5"
                  data-aos="zoom-out"
                >
                  <a href="https://konfhub.com/startupedia">

                  <button className="text-center text-wpurple-200 border border-x-white border-y-slate-400 p-2  hover:bg-black/80 ">
                    REGISTER HERE
                  </button>
                  </a>
                </div>
          </div>
        
</div>
    </div>

      </div>

  );
};

export default Startup;
