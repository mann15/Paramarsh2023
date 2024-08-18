import React, { useState } from "react";
import "../index.css";
import ct1 from "../assets/images/ct abhishek.jpg"
import ct2 from "../assets/images/ct om.jpg"
import ct3 from "../assets/images/ct shrey.jpg"
import ct4 from "../assets/images/ct varshil.jpg"
import ct5 from "../assets/images/ct vivek.jpg"


import { AiFillLinkedin } from "react-icons/ai";
import Org from "../components/Org";
import JrOrg from "../components/JrOrg";
import Volunteers from "../components/Volunteers";
import JuniorVolunteers from "../components/JuniorVolunteers";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Abhishek Khandare",
    description: '"Human beings will never understand each other, at least not until they feel similar suffering." ~Pain',
    linkedinUrl: "https://www.linkedin.com/in/abhishek-khandare",
    image: ct1,
  },
  {
    name: "Om Singh",
    description: '"Reality is negotiable" ~Aisen Sosuke',
    linkedinUrl: "https://www.linkedin.com/in/om-singh-75362b246",
    animename: "naruto",
    image: ct2,
  },
  {
    name: "Shrey Limbani",
    description: '"Though I walk through the valley of the shadow of death, I will fear no evil." ~Minato Namikaze',
    linkedinUrl: "https://www.linkedin.com/in/shrey-limbani",
    animename: "naruto",
    image: ct3,
  },
  {
    name: "Varshil Kotecha",
    description: '"You must protect those who have faith in you." ~Tobirama' ,
    linkedinUrl: "https://www.linkedin.com/in/varshil-kotecha-b3a956237",
    animename: "naruto",
    image: ct4,
  },
  {
    name: "Vivek Vaghela",
    description: '"The Power Comes In Response To A Need, Not A Desire." ~Goku',
    linkedinUrl: "https://www.linkedin.com/in/vivek-vaghela-863940252",
    animename: "naruto",
    image: ct5,
  },
];

const Team = () => {
  const [cardStates, setCardStates] = useState(
    teamMembers.map(() => ({
      rotateX: 0,
      rotateY: 0,
      flipped: false,
    }))
  );
  const [openCardIndex, setOpenCardIndex] = useState(null); // Track the index of the open card

  const handleMouseLeave = (index) => {
    if (openCardIndex === null || openCardIndex === index) {
      // Reset rotation if no card is open or the currently open card is the same as the one being left
      setCardStates((prevCardStates) => {
        const updatedCardStates = [...prevCardStates];
        updatedCardStates[index] = {
          ...updatedCardStates[index],
          rotateX: 0,
          rotateY: 0,
        };
        return updatedCardStates;
      });
    }
  };

  const handleImageClick = (index) => {
    if (openCardIndex === null) {
      // No card is open, just flip the clicked card
      setCardStates((prevCardStates) => {
        const updatedCardStates = [...prevCardStates];
        updatedCardStates[index] = {
          ...updatedCardStates[index],
          flipped: !updatedCardStates[index].flipped,
        };
        return updatedCardStates;
      });
      setOpenCardIndex(index);
    } else if (openCardIndex === index) {
      // The clicked card is already open, close it
      setCardStates((prevCardStates) => {
        const updatedCardStates = [...prevCardStates];
        updatedCardStates[index] = {
          ...updatedCardStates[index],
          flipped: !updatedCardStates[index].flipped,
        };
        return updatedCardStates;
      });
      setOpenCardIndex(null);
    } else {
      // Close the previously open card and open the clicked card
      setCardStates((prevCardStates) => {
        const updatedCardStates = [...prevCardStates];
        updatedCardStates[openCardIndex] = {
          ...updatedCardStates[openCardIndex],
          flipped: false, // Close the previously open card
        };
        updatedCardStates[index] = {
          ...updatedCardStates[index],
          flipped: true, // Open the clicked card
        };
        return updatedCardStates;
      });
      setOpenCardIndex(index);
    }
  };

  const handleMouseMove = (index, e) => {
    if (!cardStates[index].isClicked) {
      // Only rotate when the card is not clicked
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const offsetX = x / rect.width;
      const offsetY = y / rect.height;

      const limits = 15.0;
      const newRotateY = offsetX * (limits * 2) - limits;
      const newRotateX = offsetY * (limits * 2) - limits;

      setCardStates((prevCardStates) => {
        const updatedCardStates = [...prevCardStates];
        updatedCardStates[index] = {
          ...updatedCardStates[index],
          rotateX: newRotateX,
          rotateY: newRotateY,
        };
        return updatedCardStates;
      });
    }
  };
  return (
    <div className="flex flex-col text-white ">
      <section className="wrapper   ">
        <div className="top tracking-normal -mt-10 px-2">OUR TEAM</div>

        <div className="bottom tracking-normal -mt-10 px-2" aria-hidden="true">
          OUR TEAM
        </div>
      </section>
      <p className="w-screen text-center text-6xl text-glow1 Grotesk mt-24 md:text-4xl sm:text-3xl xs:text-2xl">
        CO-ORDINATORS

      </p>
      <div className=" flex flex-wrap justify-evenly mx-14 mt-11 gap-[130px] m-[10vh]  ">
        {teamMembers.map((teamMember, index) => (
          <div
            key={index}
            className={`card1  card1-${index}  `}
            onMouseMove={(e) => handleMouseMove(index, e)}
            onMouseLeave={() => handleMouseLeave(index)}
            style={{
              transform: `perspective(800px) rotateX(${cardStates[index].rotateX}deg) rotateY(${cardStates[index].rotateY}deg)`,
            }}
          >
            <div
              className="glare-container"
              onClick={() => handleImageClick(index)}
            >
              <div
                className={`glare ${
                  cardStates[index].flipped ? "flipped" : ""
                }`}
              >
                <div className="card-front">
                  <img
                    src={teamMember.image}
                    className="border-[6px] border-double rounded-3xl"
                    alt={`Image ${index + 1}`}
                  />
                  <div className="name  text-white text-2xl xs:text-[15px] sm:text-[18px] md:text-[20px] text-center  flex flex-row justify-center">
                    {teamMember.name}
                  </div>
                </div>

                <div className="card-back ">
                  <div className="back-content flex justify-center items-center">
                    <p className="text-white quoteanime text-center border-4 flex justify-center items-center  border-double bg-black p-4">
                      {teamMember.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={teamMember.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center"
              style={{ height: "8%" }}
            >
              <AiFillLinkedin className="text-4xl text-white cursor-pointer" />
            </a>
          </div>
        ))}
      </div>

      <p className="w-screen text-center text-6xl Grotesk text-glow1 mt-24 md:text-4xl sm:text-3xl xs:text-2xl">
       
        ORGANIZERS
      </p>
      {<Org />}

      <p className="w-screen text-center text-6xl Grotesk text-glow1 mt-24 md:text-4xl sm:text-3xl xs:text-2xl">
        JUNIOR ORGANIZERS
      </p>
      {<JrOrg />}

      <p className="w-screen text-center text-6xl Grotesk text-glow1 mt-24 md:text-4xl sm:text-3xl xs:text-2xl">
        VOLUNTEERS
      </p>
      {<Volunteers />}

      <p className="w-screen text-center text-6xl Grotesk text-glow1 mt-24 md:text-4xl sm:text-3xl xs:text-2xl">
        JUNIOR  VOLUNTEERS
      </p>
      {<JuniorVolunteers />}

      <div className="w-screen flex items-center mb-20  justify-center all">
      <a href="/web" >
      <button className="text-center text-purple-200 border border-x-white border-y-slate-400 p-4  ">
      <Link to="/web">Web Team</Link>
                    </button>
                    </a>
      </div>
    </div>

  );
};

export default Team;
