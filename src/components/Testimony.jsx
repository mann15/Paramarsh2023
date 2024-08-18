import React from "react";
import images from "../assets/images";
import "../index.css";

const Testimony = () => {
  return (
    <div className="flex justify-center w-screen h-96 sm:h-80 text-purple-200 overflow-hidden ">
      <h6 className="text1 text-lg font-bold">Kiran Bedi</h6>
      <img
        src={images.t1}
        alt=""
        className="img10 mt-12 w-60 h-60 sm:w-48 sm:h-48"
      />
      <p className="text1 w-[300px] text-center   justify-center text-lg font-bold mt-96 sm:mt-72">
        "The organizing team is full of enthusiasm and was amazing."
      </p>

      <h6 className="text2 text-lg font-bold">Chetan Bhagat</h6>
      <img
        src={images.t2}
        alt=""
        className="img9 mt-12 w-60 h-60 sm:w-48 sm:h-48"
      />
      <p className="text2 w-[300px] text-center  justify-center text-lg font-bold mt-96 sm:mt-72">
        "I have never seen such energy in any other college event. I hope it's contagious."
      </p>

      <h6 className="text3 text-lg font-bold">Benny Dayal</h6>
      <img
        src={images.t3}
        alt=""
        className="img8 mt-12 w-60 h-60 sm:w-48 sm:h-48"
      />
      <p className="text3 w-[300px] text-center  justify-center text-lg font-bold mt-96 sm:mt-72">
        "8000 people sang in chorus with me. What an energy! What an audience! Baroda, You Rock! "
      </p>

      <h6 className="text4 text-lg font-bold">Vivek Agnihotri</h6>
      <img
        src={images.t4}
        alt=""
        className="img7 mt-12 w-60 h-60 sm:w-48 sm:h-48"
      />
      <p className="text4 w-[300px] text-center  justify-center text-lg font-bold mt-96 sm:mt-72">
        "Great management and charismatic skills. PARAMARSH was worth visiting. "
      </p>

      <h6 className="text5 text-lg font-bold">Technical Guruji</h6>
      <img
        src={images.t5}
        alt=""
        className="img6 mt-12 w-60 h-60 sm:w-48 sm:h-48"
      />
      <p className="text5 w-[300px] text-center  justify-center text-lg font-bold mt-96 sm:mt-72">
        "One of the best experience of my life. The management of PARAMARSH was of the level of an IIT fest. "
      </p>
      <h6 className="text6 text-lg font-bold">Mayilsamy Annadurai</h6>
      <img
        src={images.t6}
        alt=""
        className="img5 mt-12 w-60 h-60 sm:w-48 sm:h-48"
      />
      <p className="text6 w-[300px] text-center  justify-center text-lg font-bold mt-96 sm:mt-72">
        "My absolute pleasure to the event, it was an extraordinary experience. "
      </p>
      <h6 className="text8 text-lg font-bold">Rahul Dua</h6>
      <img
        src={images.t7}
        alt=""
        className="img3 mt-12 w-60 h-60 sm:w-48 sm:h-48"
      />
      <p className="text8 w-[300px] text-center  justify-center text-lg font-bold mt-96 sm:mt-72">
        "Good to see the enthusiasm of team members."
      </p>
      <h6 className="text7 text-lg font-bold">Mohammed Irfan</h6>
      <img
        src={images.t8}
        alt=""
        className="img4 mt-12 w-60 h-60 sm:w-48 sm:h-48"
      />
      <p className="text7 w-[300px] text-center  justify-center text-lg font-bold mt-96 sm:mt-72">
      "Great hospitality and an electrifying crowd. Hats off to tje team spirit. "
      </p>
      <h6 className="text9 text-lg font-bold">Anil Kakodkar</h6>
      <img
        src={images.t9}
        alt=""
        className="img2 mt-12 w-60 h-60 sm:w-48 sm:h-48"
      />
      <p className="text9 w-[300px] text-center  justify-center text-lg font-bold mt-96 sm:mt-72">
        "Spectacular management by young Innovators. "
      </p>
      <h6 className="text10 text-lg font-bold">Tiku Talsania</h6>
      <img
        src={images.t10}
        alt=""
        className="img1 mt-12 w-60 h-60 sm:w-48 sm:h-48"
      />
      <p className="text10 w-[300px] text-center  justify-center text-lg font-bold mt-96 sm:mt-72">
        " I was surprised to see their passion and dedication towards work."
      </p>
    </div>
  );
};

export default Testimony;
