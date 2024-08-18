import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../index.css";

import "../components/footer.css";

import { Link } from "react-router-dom";
import YouTube from "react-youtube";

import Testimony from "../components/Testimony";
import Mesaages from "../components/Mesaages";
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import {BsYoutube} from 'react-icons/bs';
import images from "../assets/images";
import Patronages from "../components/Patronages";

const Home = (handleClick1) => {
  const [isHidden, setIsHidden] = useState(false);
  const logoRef = useRef(null);
  const daysRef = useRef(null);
const hoursRef = useRef(null);
const minsRef = useRef(null);
const secsRef = useRef(null);


const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  setIsHidden(scrollTop > 0);

  // Calculate opacity based on scroll position
  const maxScroll = 200; // Adjust this value as needed
  const opacity = 1 - Math.min(scrollTop / maxScroll, 1);

  // Apply opacity to the logo using the ref
  if (logoRef.current) {
    logoRef.current.style.opacity = opacity;
  }
  
  // Apply opacity to the countdown digits using the refs
  [daysRef, hoursRef, minsRef, secsRef].forEach((ref) => {
    if (ref.current) {
      ref.current.style.opacity = opacity;
    }
  });
};


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    AOS.init({
      duration: 1000, // Animation duration
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const categories = [
    { title: "Home", route: "/" },
    { title: "About Us", route: "/about" },
    { title: "Events", route: "/event" },
    { title: "Tranc", route: "/tranc" },
    { title: "Startupedia", route: "/startup" },
    { title: "Smokal", route: "/smokal" },
    { title: "Extravaganza", route: "/extravag" },
    { title: "E-stuff", route: "/estuff" },
    { title: "Cognizance", route: "/cogni" },
    { title: "Sanidhya", route: "/sanidhya" },
    { title: "Pronite", route: "/pronite" },
    { title: "Our Team", route: "/team" },
    { title: "Contact", route: "/contact" },
  ];
  
  const[days,setDays] = useState(0)
  const[hours,setHours] = useState(0)
  const[mins,setMins] = useState(0)
  const[secs,setSecs] = useState(0)

  const deadline = "September, 30, 2023"

  const getTime =()=>{
    const time = Date.parse(deadline) - Date.now()

    setDays(Math.floor(time/(1000*60*60*24)))
    setHours(Math.floor(time/(1000*60*60)%24))
    setMins(Math.floor((time/1000/60)%60))
    setSecs(Math.floor((time/1000)%60))
  }

  useEffect(()=>{
    const interval = setInterval(()=>getTime(),1000)
    return ()=> clearInterval(interval)
  },[]);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);
  return (
    <div className="w-screen h-full items-center all">
    <div className="image-container items-center">
      <img
        src={images.logo}
        alt=""
        className={`absolute z-30 object-scale-down w-[49vw] h-[95vh] -top-16 right-[25.5vw] lg:-top-14 md:-top-12 sm:-top-7 xs:-top-4 bg-image `}
        />
      <img
        ref={logoRef}
        src={images.logobg}
        alt=""
        className={`logo w-screen h-[95vh]  `}
      />
    </div>




      <div

        className={`w-screen h-10 absolute bottom-0 flex flex-row
         
        `}
        style={{ transition: "opacity 0.5s" }
      }
      >
        <div className={`w-[30vw] h-10 bggrad1 absolute left-0 glow-animation sm:opacity-0  ${
          isHidden ? "hidden" : ""
        } `}>
          <ul className={`flex  flex-row md:text-xs justify-around py-2 text-purple-300 jost font-semibold `}>
            <li>
              <Link to="/contact">CONTACTS</Link>
            </li>
            <li>
              <Link to="/about">ABOUTUS</Link>
            </li>
            <li>
              <Link to="/team">TEAM</Link>
            </li>
          </ul>
        </div>
       
        <div className={`w-[30vw] h-10 bggrad2 absolute right-0 glow-animation sm:opacity-0  ${
          isHidden ? "hidden" : ""
        }`}>
          <ul className={`flex flex-row md:text-xs justify-around py-2 text-purple-300 jost font-semibold `}>
            <li>
              <Link to="/event">EVENTS</Link>
            </li>
            <li>
              <Link to="/smokal">SMOKAL</Link>
            </li>
            <li>
            <a href="#glimpses">
   
      GLIMPSES

  </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='left-0 bottom-0 xs:bottom-14 sm:bottom-8  fixed z-50 sm:w-[35px] sm:h-[180px] bg-white rounded-sm box-icons opacity-0 sm:opacity-100'>
    <div className='flex flex-col justify-center space-y-6 px-4 sm:px-1 sm:py-3 sm:space-y-1 py-6'>
            <div className='icons'> 
              <a href="https://instagram.com/msu_paramarsh?igshid=MmJiY2I4NDBkZg==" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram color='white' size={28} className='fab px-1 py-1'/></a>
              </div>
              <div className='icons'><a href="https://twitter.com/MSU_Paramarsh" target="_blank" rel="noopener noreferrer"><AiOutlineTwitter color='white' size={28}
              className='fab px-1 py-1' /></a></div> 
              <div className='icons'><a href="https://www.linkedin.com/company/paramarsh-ideas-infinite" target="_blank" rel="noopener noreferrer"><BsYoutube color='white' size={28} className='fab px-1 py-1'/></a></div> 
              <div className='icons'><a href="https://m.facebook.com/ParamarshSangli/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn color='white' size={28} className='fab px-1 py-1'/></a></div>
              <div className='icons'><a href="https://youtube.com/@msu_paramarsh" target="_blank" rel="noopener noreferrer"><FaFacebookF color='white' size={28} className='fab px-1 py-1'/></a></div>
              </div>
        
    </div>

      <div className="flex flex-col items-center text-purple-200">
        <p className="text-5xl md:text-4xl pt-[8vh] text-center Grotesk ">
          The Otaku Elysian
        </p>
        <p className=" text-lg px-[10vw] md:px-[5vw] pt-[10vh] text-center xs:text-sm ">
        Set sail into a realm adorned with mesmerizing depictions, where the enigmatic splendour of beloved fictional personas dances before your very gaze. Embark on this incredible odyssey as we reminisce some cherished moments where tears came from our hearts to our eyes as Itachi delicately flicks his younger sibling on the forehead in his last moments, as Luffy warmly embraces his dear brother Ace, as Kurama teams up with Naruto to defeat Uchiha Madara, and when Tanjiro valiantly clashes to safeguard his beloved sister. Witness these exceptional characters within the meticulously woven tapestry crafted by Team Paramarsh, where the magic unfolds and captivates your senses. 
        </p>
<p className="text-lg px-[10vw] md:px-[5vw] pt-[1vh] text-center xs:text-sm">

Blaze a trail on an exhilarating journey through the enthralling tunnel, delving into the cartel of animated amazement. This year, immerse yourself in the grandeur of ecstasy with "The Otaku Elysian" theme and engage in camaraderie with fellow Otakus. Arigato!
</p>
      </div>
      <div className="flex items-center flex-col py-[5vh]">
        <button className="text-center text-white border border-x-white border-y-slate-400 p-2   glowanimation">
          <Link to="/about">ABOUT US</Link>
        </button>
      </div>
      {/* <Mesaages /> */}

      <div className="overflow-hidden flex-wrap pt-10">
        <p className="flex text-purple-100 font-bold text-5xl sm:text-3xl justify-center mb-10 Grotesk">
          Testimonial
        </p>
        {<Testimony />}
      </div>
      <div className="overflow-hidden flex-wrap pt-40">
      <p className="flex text-purple-100 font-bold text-5xl sm:text-3xl justify-center mb-10 Grotesk">
          Patronages
        </p>
        {<Patronages />}
      </div>
      <p className="flex text-purple-100 mt-36 pt-20 font-bold text-5xl sm:text-3xl justify-center mb-10 Grotesk" >
        Glimpses
      </p>
      <div
        className="flex flex-wrap items-center justify-center" id="glimpses"
        
      >
       
        <div class="videoFrame  slider-img flex flex-wrap gap-20 h-full mb-10 mx-[25px] md:space-y-20 xs:gap-0 xs:space-y-20"    >
			<div class="video" data-aos="fade-right">
				<iframe src="https://www.youtube.com/embed/bqyl3G9LV0g" frameborder="0" allowfullscreen></iframe>
			</div>
			<div class="video" data-aos="fade-left">
				<iframe src="https://www.youtube.com/embed/iiCtzpkauRw" frameborder="0" allowfullscreen></iframe>
			</div>
      <div class="video" data-aos="fade-up">
				<iframe src="https://www.youtube.com/embed/aA2hsVLi3ac" frameborder="0" allowfullscreen></iframe>
			</div>
			
		</div>
		{/* <div class="videoFrame slider-img"   >
		
		</div> */}
      </div>
      </div>
      
    
    
  );
};

export default Home;