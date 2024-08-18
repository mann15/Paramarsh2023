import React, { useState } from 'react'
import anant from "../assets/images/vt anant.jpg"
import jignesh from "../assets/images/ot jignesh.jpg"
import { AiFillLinkedin } from 'react-icons/ai';

const contentTeams = [
    {
        name: "Jignesh Vador",
            description: '"My fire burns everything... A truly invincible ability." ~Ace',
            linkedinUrl: "https://www.linkedin.com/in/jignesh-vador-429794254",
post:"Organizer",
            image: jignesh,
          }, 
    {
        name: "Anant Manglani",
        description: '"I’m going to bed, where I may die💀" ~Wizard Howl',
        linkedinUrl: "https://www.linkedin.com/in/anant-manglani-91705a260/",
        post:"Volunteer",
        image: anant,
      },
  ];
const JrOrg = () => {
  const [cardStates, setCardStates] = useState(
    contentTeams.map(() => ({
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
<div className=" flex flex-wrap justify-evenly mx-14 mt-11 gap-[130px] m-[10vh]  ">
{contentTeams.map((Junior, index) => (
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
            src={Junior.image}
            className="border-[6px] border-double rounded-3xl"
            alt={`Image ${index + 1}`}
          />
          <div className="name text-white text-2xl xs:text-[15px] sm:text-[18px] md:text-[20px] text-center  flex flex-col justify-center">
          <p>
             {Junior.name}
            </p> 
            {Junior.post}
          </div>
        </div>

        <div className="card-back ">
          <div className="back-content flex justify-center items-center">
            <p className="text-white quoteanime flex justify-center items-center   text-center border-4 border-double bg-black p-4">
              {Junior.description}
            </p>
          </div>
        </div>
      </div>
    </div>

    <a
      href={Junior.linkedinUrl}
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
)
}
 

export default JrOrg