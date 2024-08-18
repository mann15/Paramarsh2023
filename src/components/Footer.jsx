import React, { useEffect } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { TiLocation } from "react-icons/ti";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import images from "../assets/images";
import "./footer.css"





const Footer = () => {
  const mapStyle = {
    marginRight: "1em",
    // Add other style properties as needed
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      // once: true, // Only animate once
    });
  }, []);

      
  return (
    <footer className="w-full h-full bggrad">
      <div className=" flex">
        <div className="text-[3vh]  md:text-[15px] justify-center text-purple-300 mt-[8vh] jost w-1/3 sm:w-0">
          <div className=" mx-[15%]  ">
            <div className="font-semibold borderzz flex flex-col text-center sm:opacity-0 Grotesk">
              CONNECT WITH US
            </div>

            <div className="  pt-7 flex sm:opacity-0">
              <div className="hov flex w-60">
              
                <p className="text-center ml-2 text-[16px] xl:text-[23px]">
                <IoIosCall
                  color="white"
                  size={20}
                  className="xl:w-[30px] xl:h-[30px] "
                /><a href="tel:+919510387540">+91 9510387540</a>
                </p>
              </div>
            </div>

            <div className=" pt-5 xl:px-72 flex text-wrap sm:opacity-0">
              <div className="hov flex w-60">
             
                <p className="text-center ml-2 text-[16px] h-10 xl:text-[23px] xl:w-[36px] md:text-[12px]">
                <HiOutlineMail
                  color="white"
                  size={20}
                  className="xl:w-[30px] xl:h-[30px]"
                />
                <a href="mailto:msu.paramarsh2k23@gmail.com"> msu.paramarsh2k23@gmail.com</a>
                </p>
              </div>
            </div>
          </div>


<div className="mx-[15%]">
          <div className="font-semibold mt-[8vh] borderzz text-center sm:hidden Grotesk">
            FOLLOW US
          </div>

          <div>
            <ul className="flex  flex-row justify-center pt-7 space-x-12   md:space-x-3 sm:hidden">
              <li className="icons">
                <a
                  href="https://instagram.com/msu_paramarsh?igshid=MmJiY2I4NDBkZg=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineInstagram
                    color="white"
                    size={26}
                    className="ico "
                  />
                </a>
              </li>

              <li className="icons">
                <a
                  href="https://twitter.com/MSU_Paramarsh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter color="white" size={26} className="ico" />

                </a>
              </li>
              <li className="icons">
                <a
                  href="https://youtube.com/@msu_paramarsh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsYoutube color="white" size={26} className="ico " />
                </a>
              </li>
              <li className="icons">
                <a
                  href="https://www.linkedin.com/company/paramarsh-ideas-infinite"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn color="white" size={26} className="ico " />
                </a>
              </li>
              <li className="icons">
                <a
                  href="https://m.facebook.com/ParamarshSangli/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF color="white" size={26} className="ico " />
                </a>
              </li>
            </ul>
          </div>

          </div>  
        </div>
        <div className="w-1/3   sm:w-[100%]">
         

        <div className="h-0 pt-5 sm:w-0 sm:h-0 ">
            <img
              src={images.m1}
              alt=""
              className="sm:w-0 imgfit sm:h-0    "
              style={{ margin: 'auto' }}
            />
          </div>
          {/* <div className="h-0 w-[20vw]  pt-16 md:pt-8 sm:w-0 sm:h-0 ">
            <img
              src={images.m1}
              alt=""
              className="sm:w-0 sm:h-0 w-[40vw] border-2  max-h-[34vh] md:h-[35vw] md:w-[20vw] "
            />
          </div> */}

          

          <div className="">
            <img
              src={images.m1}
              alt=""
              className="w-0 h-0 sm:w-[55vw] sm:h-44 mx-auto"
            />
          </div>

          <div className="opacity-0 sm:opacity-100 sm:mt-6  text-purple-300 jost  flex flex-col ">
            <div className=" sm:text-[4vw] sm:w-[100%] sm:text-center  sm:tracking-wider borderzz5 Grotesk">
              {" "}
              CONNECT WITH US
            </div>
            <div className="flex flex-row mt-3 sm:items-center sm:justify-center sm:pr-24 sm:tracking-widest">
              <IoIosCall color="white" size={21} className="ml-2 " />
              <p className="text-center ml-1 text-[18px]"><a href="tel:+919510387540">+919510387540</a></p>
            </div>
          </div>

          <div className="flex flex-row mt-3 font-medium text-purple-300 jost text-center  opacity-0 sm:opacity-100 sm:items-center sm:justify-center">
            <HiOutlineMail color="white" size={21} className="ml-2 mt-1 " />
            <p className="text-center ml-1 text-[18px] sm:text-wrap">
            <a href="mailto:msu.paramarsh2k23@gmail.com"> msu.paramarsh2k23@gmail.com</a>
            </p>
          </div>

          

          <div className="sm:mt-[10vw]  jost text-purple-300 sm:text-[4vw] sm:w-[100%] sm:text-center font-semibold borderzz5 text-[0px] Grotesk">
            FOR LATEST UPDATES
          </div>

          <div className="jost text-purple-300 pb-3 sm:text-[16px] text-center px-2 pt-3 text-[0px]">
            Write your email down to get news about any upcoming activities!
          </div>

          <div className="tag  opacity-0 sm:opacity-100 sm:w-screen  flex   justify-center items-center  sm:h-10 sm:rounded-md  w-[0px] h-[0px]">
           
         
           <form className=""> 
           <div className=" flex ring-fuchsia-700 ring-1 p-1 rounded-sm">
            <input
              type="text"
              className="bg-slate-400 opacity-30 rounded-tl-sm  rounded-bl-sm sm:w-[50vw]  backdrop-blur-sm w-[0px] h-[0px]   sm:h-10"
              placeholder="Email address"
              ></input><button className="text-center  rounded-tr-sm rounded-br-sm bg-[#631b7367]  backdrop-blur-xl text-white h-7 sm:h-10 sm:pb-0 " >   submit   
              </button></div></form>
              
           
          </div>

          <div className="text-[0px] jost sm:text-[4vw] text-purple-300 font-semibold text-center mt-[10vw] flex flex-wrap justify-center Grotesk">
            <p>VISIT US AT </p>
            <a
              href="https://goo.gl/maps/e3HhoiP1dwnZpuBp8"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <TiLocation
                color="white"
                size={30}
                className=" ml-3 xl:w-[40px] xl:h-[40px] w-0 h-0 sm:w-6 sm:h-6"
              />
            </a>
          </div>

          <div className="text-0 text-center text-purple-300  jost font-thin flex justify-center sm:text-[14px] sm:pt-[6vw] mt-20 text-[0px]">
            <p> &#169; website handled by &nbsp;</p>
            <p className="font-semibold">
              <Link to="/web">WEB TEAM'23</Link>
            </p>
          </div>
        </div>

        <div className="  text-purple-300 mt-[8vh] jost w-1/3 sm:hidden sm:w-0">

          <div className=" mx-[15%] ">
          <div className="text-[3vh] md:text-[15px]  borderzz text-center font-semibold xl:ml-[35%] xl:text-[5vh] xl:w-[350px] Grotesk">
            FOR LATEST UPDATES
          </div>

          <div className="pt-5   md:pl-[6%] text-wrap xl:text-[23px]">
            Write your email down to get news about any upcoming activities!
          </div>
{/* //w-[40vw] md:w-20 xl:w-[22vw] xl:ml-[25%] */}
          <div className="tag rounded-md  submitbtn ">
           <form className=""> 
           <div className=" flex w-[22vw] ring-fuchsia-700 ring-1 p-1 rounded-md">
            <input
              type="email"
              className="bg-slate-400 opacity-30 backdrop-blur-sm  "
              placeholder="Email address"
              required
            ></input><button className="text-center bg-[#631b7367]  backdrop-blur-xl text-white h-7 pb-5 " >   submit   
            </button></div></form>
          </div>
          </div>
          <div className="text-[3vh] md:text-[17px] mx-[15%] mt-[10vh] font-semibold justify-center borderzz flex xl:pl-[35%] xl:text-[5vh]  ">
            <p className="Grotesk">VISIT US AT!</p>
            <a
              href="https://goo.gl/maps/e3HhoiP1dwnZpuBp8"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <TiLocation
                color="white"
                size="30px"
                className=" ml-3 xl:w-[40px] xl:h-[40px]"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="jost text-sm pt-5 relative -top-14  text-purple-300 flex justify-center sm:h-0 sm:text-[0px]">
        <p className="">&#169; website handled by &nbsp;</p>
        <p className="font-semibold">
          <Link to="/web">WEB TEAM'23</Link>
        </p>
      </div>

    </footer>
  );
};
//ring-fuchsia-800 ring-1 p-1 rounded-md
export default Footer;