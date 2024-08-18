import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Event from "./pages/Event";
import Team from "./pages/Team";
import Cogni from "./pages/Cogni";
import Estuff from "./pages/Estuff";

import Pronite from "./pages/Pronite";
import Sanidhya from "./pages/Sanidhya";
import Smokal from "./pages/Smokal";
import Startup from "./pages/Startup";
import Tranc from "./pages/Tranc";
import Web from "./pages/Web";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import { CgMenuLeftAlt } from "react-icons/cg";
import Eventsmain from "./pages/Eventsmain";
import Smokalmain from "./pages/Smokalmain";
import Guestlec from "./pages/Guestlec";
import Workshop from "./pages/Workshop";
import Estuffmain from "./pages/Estuffmain";
import gif from "./assets/images/ezgif.com-video-to-gif (1).gif"
// import Sponsors from "./components/Sponsors";
import Glimpses from "./pages/Glimpses";
import Extravag from "./pages/Extra1";
import images from "./assets/images";
import PreLoader from "./pages/PreLoader";



function App() {

  const[isLoading, setIsLoading] = useState(true);
useEffect(() => {
  const fakeDataFetch = () =>{
    setTimeout(() => {
      setIsLoading(false);
    }, 7000);
  }
  fakeDataFetch();
}
,[]);
  const showHandler = () => {
    setshowSidebar(!showSidebar);
  };
  const [showSidebar, setshowSidebar] = useState(false);
  

const location = useLocation();
  const isRootPath = location.pathname === "/para_2023/index.html";
 
  
  

  return  isLoading?(
    <PreLoader />
  ):(
    <div className="ab bg-black/40 w-screen h-full ">
      <img
        src={gif}
        alt="bg"
        className="w-screen h-screen bg-cover bg-no-repeat fixed -z-10 object-cover"
      />
       {!showSidebar ? (
        <div className="fixed top-9 left-9 cursor-pointer z-50">
          {/* <CgMenuLeftAlt color="black" size="35px" onClick={showHandler} /> */}
          <img src={images.sharingan} className="w-14 md:w-12 sm:w-10 xs:w-9 sharingan " onClick={showHandler} />
        </div>
      ) : (
        <Sidebar handleClick={showHandler}/>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Event />} />
        <Route path="/team" element={<Team />} />
        <Route path="/cogni" element={<Cogni />} />
        <Route path="/estuff" element={<Estuff />} />
        <Route path="/extravag" element={<Extravag />} />
        <Route path="/pronite" element={<Pronite />} />
        <Route path="/sanidhya" element={<Sanidhya />} />
        <Route path="/smokal" element={<Smokal />} />
        <Route path="/startup" element={<Startup />} />
        <Route path="/tranc" element={<Tranc />} />
        <Route path="/web" element={<Web />} />

        
        <Route path="/guestlec" element={<Guestlec />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/history" element={<Glimpses />} />
        <Route path="/event/:id" element={<Eventsmain />} />
        <Route path="/smokal/:id" element={<Smokalmain />} />
        <Route path="/estuff/:id" element={<Estuffmain />} />


      </Routes>
{isRootPath && <Home />}
      {/* <div className="overflow-hidden">
        <p className="flex text-white font-bold text-5xl sm:text-3xl justify-center mt-[30vh] mb-10">
          SPONSORS{" "}
        </p>
        <Sponsors />
      </div> */}
      <Footer />
    </div>
  );
}

export default App;

