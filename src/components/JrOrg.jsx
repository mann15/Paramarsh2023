import React, { useState } from 'react'
import jot1 from "../assets/images/ot ayushi.jpg"
import jot2 from "../assets/images/ot akansha.jpg"
import jot3 from "../assets/images/ot anjali.jpg"
import jot4 from "../assets/images/ot bhavya.jpg"
import jot5 from "../assets/images/ot dhruvil.jpg"
import jot6 from "../assets/images/ot harsh.jpg"
import jot7 from "../assets/images/ot isha.jpg"
import jot8 from "../assets/images/ot jyot.jpg"
import jot9 from "../assets/images/ot rahi.jpg"
import jot10 from "../assets/images/ot sakir.jpg"

import { AiFillLinkedin } from 'react-icons/ai';

const Juniors = [
  {
    name: "Ayushi Gusai",
    description: '“I will run as fast as I can to wherever my customer desires...." ~Violet Evergarden',
    linkedinUrl: "https://www.linkedin.com/in/gusai-ayushi-8b1247242",
    image: jot1,
  },
    {
      name: "Akanksha Singh",
      description: '"The starlights told me… that if I don’t give up, they’re always with me! It is possible that everyone is really gone when I give up! So I won’t give up! Never!" ~Usagi tsukino',
      linkedinUrl: "https://www.linkedin.com/in/akanksha-singh-6a188828a",
      image: jot2,
    },
    {
      name: "Anjali Dudiya",
      description: '"Humans and demons, we both should get along together." ~Shinobu Kocho',
      linkedinUrl: "https://www.linkedin.com/in/anjali-dudiya-99978a28a",
      image: jot3,
    },
    {
      name: "Bhavya Thacker",
      description: '"You can’t ever win if you’re always on the defensive; to win, you have to attack." ~Light Yagami',
      linkedinUrl: "https://www.linkedin.com/in/bhavya-thacker-224098255",
      image: jot4,
    },
    {
      name: "Dhruvil Rana",
      description: '"It’s true that I’m not very tall. However! I can jump!" ~Hinata Shoyo',
      linkedinUrl: "https://www.linkedin.com/in/dhruvil-rana-3448a1244",
      image: jot5,
    },
    {
      name: "Harsh Panchal",
      description: '"It’s not always possible to do what we want to do, but it’s important to believe in something before you actually do it." ~Might Guy',
      linkedinUrl: "https://www.linkedin.com/in/harsh-panchal-01678b28a",
      image: jot6,
    },
    {
      name: "Isha Jain",
      description: '"Life isn’t just doing things for yourself. It’s possible to live in such a way that other people’s happiness makes you happy too." ~Asuna Yuuki',
      linkedinUrl: "https://www.linkedin.com/in/isha-jain-27a77a279",
      image: jot7,
    },
    {
      name: "Jyot Chaudhari",
      description: '"Risking your life and doing something that could easily rob you of your life are exact opposites." ~L Lawliet',
      linkedinUrl: "https://www.linkedin.com/in/jyot-chaudhari-13b79628a",
      image: jot8,
    },
    {
      name: "Rahi Patel",
      description: '"So I’m gonna to be hero, I’ll make that money....so that my mom and dad can have easier lives." ~Uraraka Ochaka',
      linkedinUrl: "https://www.linkedin.com/in/rahi-patel-36880228a",
      image: jot9,
    },
    {
      name: "Sakir Mansuri",
      description: '"Sometimes when my boredom becomes overwhelming, I look for trouble." ~Ryuk',
      linkedinUrl: "https://www.linkedin.com/in/sakirmansuri",
      animename: "naruto",
      image: jot10,
    },
  ];
const JrOrg = () => {
  const [cardStates, setCardStates] = useState(
    Juniors.map(() => ({
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
{Juniors.map((Junior, index) => (
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
          <div className="name text-white text-2xl xs:text-[15px] sm:text-[18px] md:text-[20px] text-center  flex flex-row justify-center">
            {Junior.name}
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