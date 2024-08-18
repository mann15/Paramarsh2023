import React, { useState } from 'react'
import { AiFillLinkedin } from 'react-icons/ai';
import images1 from "../assets/images/ot priyansh.jpg"
import images2 from "../assets/images/vt man.jpg"
import images3 from "../assets/images/vt hetvi.jpg"
import images4 from "../assets/images/vvt riddhi.jpg"
import images5 from "../assets/images/vt atharva.jpg"
import images6 from "../assets/images/vt meet.jpg"
import images7 from "../assets/images/vt priyal.jpg"

import ContentTeam from "../components/ContentTeam"
import DesigningTeam from '../components/DesigningTeam';

const teamMembers = [
  {
    name: "Priyansh Shah",
    description: '"Human beings will never understand each other, at least not until they feel similar suffering." ~Pain',
    post: "Organizer",
    linkedinUrl: "https://www.linkedin.com/in/abhishek-khandare/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BDxy0A8gbTf%2BylB2FpEMHhw%3D%3D",
    image: images1,
  },
  {
    name: "Atharva kadam",
    description: '"However strong you become,never seek to  bear everything alone.If you do, failure is certain."	~Itachi',
    post: "Volunteer",
    linkedinUrl: "https://www.linkedin.com/in/atharva-kadam-9585a4244/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BDxy0A8gbTf%2BylB2FpEMHhw%3D%3D",
    image: images5,
  },
  {
    name: "Hetvi Shah",
    description: '"You make mistakes. But because of those mistakes, you get the Strength to stand up to them." ~Hinata Hyuga',
    post: "Volunteer",
    linkedinUrl: "https://www.linkedin.com/in/hetvi-shah-54677b256/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BDxy0A8gbTf%2BylB2FpEMHhw%3D%3D",
    image: images3,
  },
  {
    name: "Man Chopda",
    description: '"If you don’t like your Destiny, don’t Accept it. Instead have the Courage to Change it the way You want it to be!" ~Naruto Uzumaki',
    post: "Volunteer",
    linkedinUrl: "https://www.linkedin.com/in/man-chopda-63a012278/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BDxy0A8gbTf%2BylB2FpEMHhw%3D%3D",
    image: images2,
  },
  {
    name: "Meet Tadvi",
    description: '"Wake up to reality. Nothing ever goes as planned in this world. The longer you live, the more you realize that only pain, suffering, and futility exist in this reality." ~Madara Uchiha',
    post: "Volunteer",
    linkedinUrl: "https://www.linkedin.com/in/meet-tadvi-70b63b256/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BDxy0A8gbTf%2BylB2FpEMHhw%3D%3D",
    image: images6,
  },
  {
    name: "Priyal Rawal",
    description: '"You get to decide where your happiness comes from." ~Nezuko',
    post: "Volunteer",
    linkedinUrl: "https://www.linkedin.com/in/priyal-rawal-18ba42245/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BDxy0A8gbTf%2BylB2FpEMHhw%3D%3D",
    image: images7,
  },
  {
    name: "Riddhi Thakkar",
    description: '"In darkness, you only need to see just as far as you headlights extend. As long as you keep going, it is enough." ~Suzume',
    post: "Volunteer",
    linkedinUrl: "https://www.linkedin.com/in/riddhi-thakkar-741268287/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BDxy0A8gbTf%2BylB2FpEMHhw%3D%3D",
    image: images4,
  },
];

const Web = () => {
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
      <div className="top tracking-normal -mt-10 px-2">WEB TEAM</div>

      <div className="bottom tracking-normal -mt-10 px-2" aria-hidden="true">
        WEB TEAM
      </div>
    </section>
  
      <p className="w-screen text-center text-6xl text-glow1 Grotesk mt-24 md:text-4xl sm:text-3xl xs:text-2xl">
        CODING TEAM
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
                  <div className="name text-white text-2xl xs:text-[15px] sm:text-[18px] md:text-[20px] text-center  flex flex-col justify-center">
                   <p>
                     {teamMember.name}
                    </p>
                    {teamMember.post}
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
              href={teamMember.
                linkedinUrl}
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
      <p className="w-screen text-center text-6xl text-glow1 Grotesk mt-24 md:text-4xl sm:text-3xl xs:text-2xl">
        CONTENT TEAM
      </p>
      <ContentTeam/>
      <p className="w-screen text-center text-6xl text-glow1 Grotesk mt-24 md:text-4xl sm:text-3xl xs:text-2xl">
        DESIGNING TEAM
      </p>
          <DesigningTeam/>
    </div>
  )
}

export default Web
