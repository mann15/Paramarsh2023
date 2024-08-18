import React from "react";
import images from "../assets/images";
import data from "../assets/data";
const Workshop = () => {
  return (
    <div className="w-full h-full text-purple-200 text-center px-[10vw] py-[12vh] sm:px-0 all">
      <div className="overflow-hidden mb-[12vh]">
        <div className="relative  ">
          <img
            // src={data?.img}
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
          <div className="flex  text-purple-200 text-center flex-wrap justify-center bg-black/0">
            <div className="w-1/2 px-[1vw] md:w-full md:pt-10">
              <img
                src={images.w2}
                alt="View-Finder"
                className="bg-black/30 backdrop-blur-sm shadow-md ring-fuchsia-800 ring-1  rounded-2xl p-5 my-5"
                data-aos="fade-right"
              />
              <p
                className="text-xl font-semibold bg-black/30 backdrop-blur-sm shadow-md ring-fuchsia-800 ring-1  rounded-2xl p-5 mb-5 Grotesk"
                data-aos="fade-right"
              >
                Drone Designing
              </p>
              <p
                className="text-justify bg-black/30 backdrop-blur-sm shadow-md ring-fuchsia-800 ring-1  rounded-2xl p-5 mb-5"
                data-aos="fade-right"
              >
                Elevate your knowledge and skills in the dynamic field of Drone
                Designing through our specialized course. Designed for
                engineering enthusiasts, tech aficionados, and aspiring
                innovators, this program uncovers the intricacies of
                aerodynamics, delves into hands-on design and assembly. Our
                expert instructors will guide you through the process, providing
                practical insights and real-world applications.
              </p>
              <div
                className="text-left bg-black/30 backdrop-blur-sm shadow-md ring-fuchsia-800 ring-1  rounded-2xl p-8"
                data-aos="fade-right"
              >
                <p className="pt-5">
                  By enrolling in this course, you'll get a comprehensive
                  curriculum:
                </p>
                <ul className="list-disc">
                  <li>Basic introduction of drone.</li>
                  <li>
                    Understanding the technology on which drones are designed.
                  </li>
                  <li>Introduction to DGCA Rules & Regulations.</li>
                  <li> Application of drones in different industries.</li>
                  <li>Live flying demonstration.</li>
                </ul>
                <div className="text-left pt-5" data-aos="fade-right">
                  <p className="Grotesk">For Queries,</p>
                  <p>Contact :-</p>
                  <p>Keta Patel: +91 8320088076</p>
                </div>
                <div
                  className="flex items-center flex-wrap justify-center py-[5vh]"
                  data-aos="fade-right"
                >
                  <a href="https://konfhub.com/dd-d690c3bd" target="_blank">
                    <button className="text-center text-purple-200 border border-x-white border-y-slate-400 p-2  hover:bg-black/80 btn">
                      REGISTER HERE
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-1/2 px-[1vw] md:w-full md:pt-10">
              <img
                src={images.w1}
                alt="Meme-Mania"
                className="bg-black/30 backdrop-blur-sm shadow-md ring-fuchsia-800 ring-1  rounded-2xl p-5 my-5"
                data-aos="fade-left"
              />
              <p
                className="text-xl font-semibold bg-black/30 backdrop-blur-sm shadow-md ring-fuchsia-800 ring-1  rounded-2xl p-5 mb-5"
                data-aos="fade-left"
              >
                Metaverse
              </p>
              <p
                className="text-justify bg-black/30 backdrop-blur-sm shadow-md ring-fuchsia-800 ring-1  rounded-2xl p-5 mb-5"
                data-aos="fade-left"
              >
                Venture on an unbelievable pilgrimage into the realm of the
                Metaverse with our immersive and enlightening workshop. Tailored
                for forward-thinking individuals, tech visionaries, and those
                intrigued by the future of digital landscapes, this workshop
                will offer deep dive into the concepts, technologies, and
                opportunities of the Metaverse and its possibilities through
                Blockchain. Our seasoned instructors will guide you through the
                intricacies, enabling you to grasp the nuances and harness the
                potential of this transformative terrain.
              </p>
              <div
                className="text-left bg-black/30 backdrop-blur-sm shadow-md ring-fuchsia-800 ring-1  rounded-2xl p-8"
                data-aos="fade-left"
              >
                <p className="pt-5">
                  By enrolling in this course, you'll get a comprehensive
                  curriculum:
                </p>
                <ul className="list-disc">
                  <li>Introduction of Metaverse.</li>
                  <li>Visionary perspective and objective of Metaspace.</li>
                  <li>
                    Decoding role of Blockchain in the field of Metaverse.
                  </li>
                  <li>
                    How can user engage and monetize in the virtual economy of
                    Metaspace.
                  </li>
                  <li>
                    A newly launched gaming session at the end of the workshop
                  </li>
                </ul>
                <div className="text-left pt-5" data-aos="fade-right">
                  <p className="Grotesk">For Queries,</p>
                  <p>Contact :-</p>
                  <p>Keta Patel: +91 8320088076</p>
                </div>
                <div
                  className="flex items-center flex-wrap justify-center py-5"
                  data-aos="fade-left"
                >
                  <a href="https://konfhub.com/metaverse" target="_blank">
                    <button className="text-center text-purple-200 border border-x-white border-y-slate-400 p-2  ">
                      REGISTER HERE
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshop;