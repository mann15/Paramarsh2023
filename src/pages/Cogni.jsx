import React, { useEffect } from "react";
import "../index.css";

import Aos from "aos";
import "aos/dist/aos.css";
import images from "../assets/images";

const Cognizance = () => {
  const visitsData = [
    {
      title: "Radio Mirchi",
      image: images.i10,
      content:
        "Team Paramarsh visits the leading Radio station of the town - Radio Mirchi 98.3 to meet the enlivening voices behind the 24×7 vibrant Vadodara. Had a cognizant interaction with the Programming Head, Mr. Krishnamurthi Kumar.",
    },
    {
      title: "Arena Animation",
      image: images.i9,
      content:
        "A visit to the leading animation hub of the town - Arena Animation, was conducted.It was a workshop cum interactive session to perceive some valuable facts related to the world of animation. The session included: - • Introduction to the Field of Animation and Vfx. • Hands On Task of VFX using Green Screen. • Understanding the Use of Sound and Edit in Films with Live Recording(Foley).",
    },
    {
      title: "SEE LINKAGE",
      image: images.c1,
      content:
        "A visit was arrange for the students of Mechanical and Electrical Engineeringstudents to SEE Linkages Pvt Ltd, Vadodara. This industrial visit providedstudents better insights on Hydraulic & Pneumatic, Electrical & Mechanical Linkages, Customized Electromechanical assemblies as well as Customized Machine parts.",
    },
    {
      title: "HWP - Heavy water treatment plant",
      image: images.c2,
      content:
        "On July 18, 2022, Team Paramarsh paid a visit to HWP in Baroda. HWP is India's first monothermic ammonia-hydrogen exchange process plant.It also includes the manufacture of potassium metal and deuterium gas. We went on a plant tour that included the potassium metal plant, the TBP plant, and the sodium electrolytic cell. This industrial visit provided students perception on scientific and futuristic vision of our country. ",
    },
  ];
  const ben = [
    { content: " ●Offers practical training" },
    { content: "●Opportunit to interact with big bussiness" },
    {content:
        " ●Chance to explore different aspects of manufacturing, processing and production.",
    },
    { content: " ●Brings face-to-face with industrial realities." },
    { content: " ●Illusions about a workplace are considerably solved." },
    { content: "● Develops interpersonal skills." },
    { content: " ●Regular visits help to identify different areas of work." },
  ];

  const sponso1 = [
    { logo: images.s1, link: "https://www.matrixcomsec.com/" },
    { logo: images.s2, link: "https://conmatindia.com/" },
    { logo: images.s3, link: "https://global.abb/group/en" },
    { logo: images.s4, link: "https://ongcindia.com/" },
    { logo: images.s5, link: "https://www.siemens.com/left/en.html" },
    { logo: images.s6, link: "https://www.skillplusindia.left/" },
    { logo: images.s7, link: "https://www.thermaxglobal.com/" },
    { logo: images.s8, link: "https://www.mafatlals.com/" },
    { logo: images.p4, link: "https://www.gsecl.left/" },
    { logo: images.p3, link: "https://www.tcradvanced.com/" },
    { logo: images.p2, link: "https://www.seelinkages.left/" },
    { logo: images.p1, link: "https://www.larsentoubro.com/" },
  ];

  const out = [
    { sec: " 3D printing" },
    { sec: " Animation" },
    { sec: " Radio Station" },
    { sec: " Renewable Energy Sector" },
    { sec: " Sewage treatment plant" },
    { sec: " Dairy" },
  ];

  const tc = [
    {
      P: " Follow the visiting rules and regulations applicable on the premises.",
    },
    { P: " Engage with guides and ask questions." },
    { P: " part left group activities." },
    { P: " The minimum strength for each visit is 10 students." },
    { P: "Technical companies are limited to specified departments only." },
  ];

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="overflow-hidden w-full  text-purple-200">
      <section className="wrapper   ">
        <div className="top tracking-normal -mt-10 px-2 ">COGNIZANCE</div>

        <div
          className="bottom tracking-normal -mt-10 px-2 "
          aria-hidden="true"
        >
          COGNIZANCE
        </div>
      </section>

      <div className="flex justify-center w-screen  items-center flex-col">
      <div className="my-[12vh] flex-col items-center sm:w-[100%] justify-center w-[80%]">
     
      <p className="py-4 px-[45px] text-[22px] text-center ">
        Industrial visits are an integral part of the college curriculum for
        professional degrees and it's main objective is to offer an insight into
        the working of a factory or industrial unit.
      </p>
      <p className="py-4 px-[45px] text-[22px] text-center">
        While a lot of theoretical knowledge is available left books, students
        get an opportunity to experience them only when they visit these units
        and delve deeper into the reality.
      </p>
      <p className="py-4 px-[45px] text-[22px] text-center">
        Paramarsh under it's segment- Cognizance, raises this initiative to give
        a vision to the budding engineers and lead their goals with acuity.
      </p>
      <div className="mb-[70px] text-center mt-14 text-[50px] md:text-[40px] sm:text-[35px] xs:text-[20px] Grotesk">
        Past Visits:
      </div>
      <div className="space-y-10 mt-28">
        {visitsData.map((visit, index) => (
          <div>
            <div
              key={index}
              className="flex justify-center md:flex md:justify-start md:ml-[10px] lg:ml-[100px] sm:text-[22px] text-[40px] lg:text-[50px]"
              data-aos="fade-left"
            >
              <p className="w-screen text-left sm:text-center text-[30px] md:text-[22px] mx-10 Grotesk">
                {visit.title}
              </p>
            </div>
            <div className="flex justify-center md:flex sm:flex-wrap sm:justify-center items-center md:justify-start lg:flex lg:justify-start">
              <img
                className="w-[100px] md:w-[300px] sm:w-[230px] lg:w-[400px] object-scale-down md:ml-[10px] lg:ml-[100px] sm:mx-20"
                src={visit.image}
                alt=""
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              />
              <p
                className="w-[600px] md:w-[400px] text-2xl mx-[25px] md:text-xl sm:text-[18px] text-justify"
                data-aos="zoom-out-left"
              >
                {visit.content}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>

      <div className=" mb-[12vh] mt-[5vh] w-[75%] sm:w-[90%] eleco  ">
       <p className="Grotesk text-[30px] text-left">
         Benefits of Industrial visits:

        </p>
        {ben.map((con, key) => (
          <ul key={key} className="text-[20px] py-2">{con.content}</ul>
        ))}
      </div>
      {/* COMPANIES AFFILIATED WITH US :
      <div className="flex space-y-[150px] justify-center gap-8 w-[100vw] overflow-x-hidden items-center">
        <div>
          <div className="flex flex-wrap justify-center flex-row">
            {sponso1.map((sponso, key) => (
              <a href={sponso.link} target="_blank">
                <img
                  className="hover:scale-110 w-[300px] sm:w-[200px] m-3 h-[150px] border-[2px]  object-scale-down"
                  src={sponso.logo}
                  alt=""
                />
              </a>
            ))}
          </div>
        </div>
      </div> */}
      <div className="w-[75%] sm:w-[90%]">
      <p className="text-[30px]   sm:pl-1 Grotesk text-left">Out of the box sectors</p>
      <ul className="sm:pl-1 py-3 space-y-2 text-[20px]" >
        {/* ● 3D printing
        <br />
        ● Animation
        <br />
        ● Radio Station
        <br />
        ● Renewable Energy Sector
        <br />
        ● Sewage treatment plant
        <br />
        ● Dairy
        <br /> */}
        <li>●3D printing</li>
        <li>●Animation</li>
        <li>●Radio Station</li>
        <li>●Renewable Energy Sector</li>
        <li>●Sewage treatment plant</li>
        <li>●Dairy</li>
       
      </ul>
      </div>
      {/* <div className='text-[22px] py-6 '>Terms and Conditions :
                </div>
                {
                    tc.map((tc, key) => (
                        <motion.div
                            initial={{
                                x: '-100px'
                            }}
                            whileInView={{
                                x: '0'
                            }}
                            transition={{
                                duration: 1
                            }}
                            className='pl-6 flex gap-x-4 text-[24px]'
                        >
                            <GiChainedArrowHeads />{tc.P}
                        </motion.div>
                    ))
                } */}
      <div className="text-[25px] mt-7 mb-2 Grotesk w-[75%] sm:w-[90%] sm:pl-1 ">For Queries,  </div>
      <div className=" flex  text-[20px] pb-[12vh] w-[75%] sm:w-[90%] sm:pl-1"> Contact :-<br/>Krishna Rana :+91 8735886614</div>
    </div>
    </div>
  );
};

export default Cognizance;