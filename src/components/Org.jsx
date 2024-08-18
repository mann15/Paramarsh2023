import React, { useState } from 'react'

import ot1 from "../assets/images/ot jignesh.jpg"
import ot2 from "../assets/images/ot keta.jpg"
import ot3 from "../assets/images/ot krishna.jpg"
import ot4 from "../assets/images/ot mehul.jpg"
import ot5 from "../assets/images/ot naitik.jpg"
import ot6 from "../assets/images/ot priyansh.jpg"
import ot7 from "../assets/images/ot sahil.jpg"

import { AiFillLinkedin } from 'react-icons/ai';

const Organizers = [
{
    name: "Jignesh Vador",
        description: '"My fire burns everything... A truly invincible ability." ~Ace',
        linkedinUrl: "https://www.linkedin.com/in/jignesh-vador-429794254",
        image: ot1,
      },
      {
        name: "Keta Patel",
        description:'"Sometimes I do feel like I’m a failure. Like there’s no hope for me. But even so, I’m not gonna give up. Ever!" ~Rias Gremory',
        linkedinUrl: "https://www.linkedin.com/in/keta-patel-a2b53722a",
        image: ot2,
      },
      {
        name: "Krishna Rana",
        description: '"People’s feelings are memories that transcend time" ~Kurisu Makise',
        linkedinUrl: "https://www.linkedin.com/in/krishna-rana-4033741a7",
        image: ot3,
      },
      {
        name: "Mehul Kanzariya",
        description:'"I’ll Never Kick A Woman, Even If I Die!..." ~Sanji',
        linkedinUrl: "https://www.linkedin.com/in/m-k-742547287",
        image: ot4,
      },
      {
          name: "Naitik Kaklotar",
        description: '"Yo ho ho ho! Music is my power!"	~Brook',
        linkedinUrl: "https://www.linkedin.com/in/naitik-kaklotar-502b56278",
        image: ot5,
      },
 
      {
        name: "Sahil Patel",
        description: '"No one can determine another’s destiny." ~Neji Hyuga',
        linkedinUrl: "https://www.linkedin.com/in/sahil-patel-0b945b280",
        animename: "naruto",
        image: ot7,
    },
    // Add more team members here
    ];
    const Org = () => {
      const [cardStates, setCardStates] = useState(
        Organizers.map(() => ({
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
    {Organizers.map((Organizer, index) => (
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
                src={Organizer.image}
                className="border-[6px] border-double rounded-3xl"
                alt={`Image ${index + 1}`}
              />
              <div className="name text-white text-2xl xs:text-[15px] sm:text-[18px] md:text-[20px] text-center  flex flex-row justify-center">
                {Organizer.name}
              </div>
            </div>

            <div className="card-back ">
              <div className="back-content flex justify-center items-center">
                <p className="text-white quoteanime flex justify-center items-center  text-center border-4 border-double bg-black p-4">
                  {Organizer.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <a
          href={Organizer.linkedinUrl}
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

export default Org