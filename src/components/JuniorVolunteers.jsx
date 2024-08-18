import React, { useState } from 'react'
import { AiFillLinkedin } from 'react-icons/ai';
import jv1 from "../assets/images/jv anirudha.jpg"
import jv2 from "../assets/images/jv dweep.jpg"
import jv3 from "../assets/images/jv harsh.jpg"
import jv4 from "../assets/images/jv heet undaviya.jpg"
import jv5 from "../assets/images/jv het sanghani.jpg"
import jv6 from "../assets/images/jv hetasvi.jpg"
import jv7 from "../assets/images/jv krishna.jpg"
import jv8 from "../assets/images/jv meet .jpg"
import jv9 from "../assets/images/jv mohit.jpg"
import jv10 from "../assets/images/jv neel.jpg"
import jv11 from "../assets/images/jv naitra.jpg"
import jv12 from "../assets/images/jv parth.jpg"
import jv13 from "../assets/images/jv rajdeep.jpg"
import jv14 from "../assets/images/jv rudra patel.jpg"
import jv15 from "../assets/images/jv rudra tandel.jpg"
import jv16 from "../assets/images/jv sanvi.jpg"
import jv17 from "../assets/images/jv shrey.jpg"
import jv18 from "../assets/images/jv sidharth.jpg"
import jv19 from "../assets/images/jv siddhii.jpg"
import jv20 from "../assets/images/jv sujal.jpg"
import jv21 from "../assets/images/jv tirth jaiswal.jpg"
import jv22 from "../assets/images/jv tirth.jpg"
import jv23 from "../assets/images/jv vaibhavi.jpg"

const JuniorVs = [
    {
      name: "Aniruddha Parasram",
      description: '"I ain’t giving up!! To not give up, I have a reason" ~Takemichi',
      linkedinUrl: "https://www.linkedin.com/in/aniruddha-parasram-251a5b286",
      image: jv1,
    },
    {
      name: "Dweep Gadkari",
      description: '"If you wanna save him, go ahead and save him." ~Jujutsu Kaisen',
      linkedinUrl: "https://www.linkedin.com/in/dweep-gadkari-66a71328a",
      image: jv2,
    },
    {
      name: "Harsh Suthar",
      description: '"I believe love is the most twisted curse of all	" ~Gojo Saturo',
      linkedinUrl: "https://www.linkedin.com/in/harsh-suthar-696202287",
      image: jv3,
    },
    {
      name: "Het Undaviya",
      description: '"I’m not gonna be smiling whether we win or lose against you." ~Draken',
      linkedinUrl: "https://www.linkedin.com/in/het-undaviya-a39702243",
      image: jv4,
    },
    {
      name: "Het Sangani",
      description: '"If all you can do is destroying what’s precious to me… than I will destroy you" ~Manjiro',
      linkedinUrl: "https://www.linkedin.com/in/het-sangani-a86072287",
      image: jv5,
    },
    {
      name: "Hetasvi Trivedi",
      description: '"I hate feeling frustrated so I don’t want to lose anymore. It’s not fun... unless I win" ~Nagi',
      linkedinUrl: "https://www.linkedin.com/in/hetasvi-trivedi-11b1a0287",
      image: jv6,
    },
    {
      name: "Krishna Sankaliya",
      description: '"Life isn’t just doing things for yourself. It’s possible to live in such a way that other people’s happiness makes you happy too." ~Asuna Yukki',
      linkedinUrl: "https://www.linkedin.com/in/krishna-sankaliya-1a9b81256",
      image: jv7,
    },
    {
      name: "Meet Kadam",
      description: '"You’re not gonna be able to stop me unless you kill me" ~Keisuke Baji',
      linkedinUrl: "https://www.linkedin.com/in/meet-kadam-489a56286",
      image: jv8,
    },
    {
      name: "Mohit Shukla",
      description: '"You must go on, no matter what."	~Tanjiro Kamado',
      linkedinUrl: "https://www.linkedin.com/in/mohit-shukla-403180287",
      image: jv9,
    },
    {
      name: "Neel Patel",
      description: '"You jujutsu sorcerers are always trouble, no matter what the era." ~Ryoman',
      linkedinUrl: "https://www.linkedin.com/in/neel-patel-711393287",
      image: jv10,
    },
    {
      name: "Netra Shah",
      description: '"Love is the most twisted curse of all" ~Tsukumo',
      linkedinUrl: "www.linkedIn.com/in/netra-shah-56b897271",
      image: jv11,
    },
    {
      name: "Parthsinh Solanki",
      description: '"Hiding Won’t Make The Sadness Go away" ~Zenitsu' ,
      linkedinUrl: "http://www.linkedin.com/in/parthsinh-solanki-51b4b4287",
      image: jv12,
    },
    {
      name: "Rajdeepsinh Puwar",
      description: '"The World Needs Paradis To Be The Root Of All Evil…" ~Hange Zoe',
      linkedinUrl: "https://www.linkedin.com/in/rajdeepsinh-puwar-797267287?trk=contact-info",
      image: jv13,
    },
    {
      name: "Rudra Patel",
      description: '"That’s enough, Soifon. You remind me of myself. I even think of you sometimes as my little sister." ~Yoruichi',
      linkedinUrl: "https://www.linkedin.com/in/patel-rudra-775267287",
      image: jv14
    },
    {
      name: "Rudrakumar Tandel",
      description:'"Death and pain are just a small peace to pay for the enjoyment of battle" ~Kenpachi',
      linkedinUrl: "https://www.linkedin.com/in/rudra-tandel-90aa40285",
      image: jv15,
    },
    {
      name: "Sanvi Shanishchara",
      description: '"Terrifying is to know that you will never go back to the happiness you once had" ~Rangiku',
      linkedinUrl: "https://www.linkedin.com/in/sanvi-shanishchara-368297287",
      image: jv16,
    },
    {
      name: "Shrey Panchasara",
      description: '"Risk it all for even a glimmer of real freedom,It doesn’t matter how cruel the world can be or how adjust.Tatakae!!Tatakae!!" ~Eren Yeager',
      linkedinUrl: "https://www.linkedin.com/in/shrey-panchasara-75a387278",
      image: jv17,
    },
    {
      name: "Siddharth Pandya",
      description: '"I’d Rather Die Than Become A Burden." ~Armin Arlert',
      linkedinUrl: "https://www.linkedin.com/in/siddharth-pandya-03a0a8287",
      image: jv18,
    },
    {
      name: "Siddhi Kulkarni",
      description: '"I was happier spending time with you as a curse than when I was alive"	~Rika Orimoto ',
      linkedinUrl: "https://www.linkedin.com/in/siddhi-kulkarni-07071028a",
      image: jv19,
    },
    {
      name: "Sujal Chauhan",
      description: '"Never mind! Bring forth the deepest shadows … and don’t worry about the exact form for now. Just push it forward from your cursed energy … Here we go!!" ~Megumi',
      linkedinUrl: "https://www.linkedin.com/in/sujal-chauhan-572510287?trk=contact-info",
      image: jv20,
    },
    {
      name: "Tirth Jaiswal",
      description: '"Just do what you’ve gotta do, keep moving forward, that’s all we can do." ~Reiner Braun',
      linkedinUrl: "https://www.linkedin.com/in/tirth-jaiswal-a5580728a",
      image: jv21,
    },
    {
      name: "Tirth Patel",
      description: '"When I say it doesn’t hurt me, that means I can bear it" ~Killua Zoldyck',
      linkedinUrl: "https://www.linkedin.com/in/tirth-patel-94b78728a",
      image: jv22,
    },
    {
      name: "Vaibhavi Lad",
      description: '"Better watch out, because ready or not, here I come!" ~Inosuke',
      linkedinUrl: "https://www.linkedin.com/in/vaibhavi-lad-91b80228a",
      image: jv23,
    },
  ];
  

const JuniorVolunteers = () => {
  const [cardStates, setCardStates] = useState(
    JuniorVs.map(() => ({
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
{JuniorVs.map((JuniorV, index) => (
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
            src={JuniorV.image}
            className="border-[6px] border-double rounded-3xl"
            alt={`Image ${index + 1}`}
          />
          <div className="nameanime text-white text-2xl xs:text-[15px] sm:text-[18px] md:text-[20px] text-center  flex flex-row justify-center">
            {JuniorV.name}
          </div>
        </div>

        <div className="card-back ">
          <div className="back-content flex justify-center items-center">
            <p className="text-white quoteanime flex justify-center items-center   text-center border-4 border-double bg-black p-4">
              {JuniorV.description}
            </p>
          </div>
        </div>
      </div>
    </div>

    <a
      href={JuniorV.linkedinUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center items-center "
      style={{ height: "8%" }
    }
    >
      <AiFillLinkedin className="text-4xl text-white cursor-pointer" />
    </a>
  </div>
))}
</div>
  )
}

export default JuniorVolunteers