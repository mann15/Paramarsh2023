import React, { useState } from 'react'
import vt1 from "../assets/images/vt aayush .jpg"
import vt2 from "../assets/images/vt anant.jpg"
import vt3 from "../assets/images/vt anurag.jpg"
import vt4 from "../assets/images/vt atharva.jpg"
import vt5 from "../assets/images/vt deep.jpg"
import vt6 from "../assets/images/vt hetvi.jpg"
import vt7 from "../assets/images/vt jian.jpg"
import vt8 from "../assets/images/vt man.jpg"
import vt9 from "../assets/images/vt manan.jpg"
import vt10 from "../assets/images/vt meet.jpg"
import vt11 from "../assets/images/prth.jpg"
import vt12 from "../assets/images/vt priyal.jpg"
import vt13 from "../assets/images/vt pulak.jpg"
import vt14 from "../assets/images/vvt riddhi.jpg"
import vt15 from "../assets/images/vt yashree.jpg"
import { AiFillLinkedin } from 'react-icons/ai';

const volunteers = [
    {
      name: "Aayush Shah",
      description: '"The lotus of the Leaf Village blooms twice!" ~Rock Lee',
      linkedinUrl: "https://www.linkedin.com/in/aayush-shah-077160283",
      image: vt1,
    },
    {
      name: "Anant Manglani",
      description: '"I’m going to bed, where I may die💀" ~Wizard Howl',
      linkedinUrl: "https://www.linkedin.com/in/anant-manglani-91705a260/",
      image: vt2,
    },
    {
      name: "Anurag Paul",
      description: '"No matter how hard or impossible it is , Never loose sight of your goals" ~Luffy',
      linkedinUrl: "https://www.linkedin.com/in/anurag-paul-7876b428a",
      image: vt3,
    },
    {
      name: "Atharva kadam",
      description: '"However strong you become,never seek to  bear everything alone.If you do, failure is certain."	~Itachi',
      linkedinUrl: "https://www.linkedin.com/in/atharva-kadam-9585a4244",
      image: vt4,
    },
    {
      name: "Deep Kanzariya",
      description: '"When the tree leaves dance, one shall find flames. The fire’s shadow will illuminate the village, and once again, tree leaves shall bud a new."	~Hiruzen Sarutobi',
      linkedinUrl: "https://www.linkedin.com/in/deep-kanzariya-94548b256",
      image: vt5,
    },
    {
      name: "Hetvi Shah",
      description: '"You make mistakes. But because of those mistakes, you get the Strength to stand up to them." ~Hinata Hyuga',
      linkedinUrl: "https://www.linkedin.com/in/hetvi-shah-54677b256/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BDxy0A8gbTf%2BylB2FpEMHhw%3D%3D",
      image: vt6,
    },
    {
      name: "Jian Chaudhary",
      description: '"Cheer up guys, at least I’m here!" ~Nobara Kugisaki',
      linkedinUrl: "https://www.linkedin.com/in/jian-chaudhary-a97a60268/",
      image: vt7,
    },
    {
      name: "Man Chopda",
      description: '"If you don’t like your Destiny, don’t Accept it. Instead have the Courage to Change it the way You want it to be!" ~Naruto Uzumaki',
      linkedinUrl: "https://www.linkedin.com/in/man-chopda-63a012278/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BDxy0A8gbTf%2BylB2FpEMHhw%3D%3D",
      image: vt8,
    },
    {
      name: "Manan kachhiya",
      description: '"The people that are the hardest to love are usually the ones who need it the most." ~Sasuke Uchiha',
      linkedinUrl: "https://www.linkedin.com/in/manan-kachhiya-06339926a",
      image: vt9,
    },
    {
      name: "Meet Tadvi",
      description: '"Wake up to reality. Nothing ever goes as planned in this world. The longer you live, the more you realize that only pain, suffering, and futility exist in this reality." ~Madara Uchiha',
      linkedinUrl: "https://www.linkedin.com/in/meet-tadvi-70b63b256",
      image: vt10,
    },
    {
      name: "Parth Panchal",
      description: '"Love Me Some Baddies, Can’t Get Enough." ~Denji',
      linkedinUrl: "https://www.linkedin.com/in/parth-panchal-311a57282",
      image: vt11,
    },
    {
      name: "Priyal Rawal",
      description: '"You get to decide where your happiness comes from." ~Nezuko',
      linkedinUrl: "https://www.linkedin.com/in/priyal-rawal-18ba42245",
      image: vt12,
    },
    {
      name: "Pulak Raibagkar",
      description: '"No, you don’t get it. I’m telling you this because you don’t. You think you get it, but that’s not the same as actually getting it. Get it?" ~Kakashi ',
      linkedinUrl: "http://www.linkedin.com/in/pulak0712",
      image: vt13,
    },
    {
      name: "Riddhi Thakkar",
      description: '"In darkness, you only need to see just as far as you headlights extend. As long as you keep going, it is enough." ~Suzume',
      linkedinUrl: "https://www.linkedin.com/in/riddhi-thakkar-741268287/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BDxy0A8gbTf%2BylB2FpEMHhw%3D%3D",
      image: vt14,
    },
    {
      name: "Yashree Joshi",
      description: '"This world is cruel and merciless,and it’s also very beatuiful." ~Mikasa Ackerman',
      linkedinUrl: "https://www.linkedin.com/in/yashree-joshi-1687a7253",
      image: vt15,
    },
  ];
const Vol = () => {
  const [cardStates, setCardStates] = useState(
    volunteers.map(() => ({
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
{volunteers.map((volunteer, index) => (
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
            src={volunteer.image}
            className="border-[6px] border-double rounded-3xl"
            alt={`Image ${index + 1}`}
          />
          <div className="name text-white text-2xl xs:text-[15px] sm:text-[18px] md:text-[20px] text-center  flex flex-row justify-center">
            {volunteer.name}
          </div>
        </div>

        <div className="card-back ">
          <div className="back-content flex justify-center items-center">
            <p className="text-white quoteanime flex justify-center items-center   text-center border-4 border-double bg-black p-4">
              {volunteer.description}
            </p>
          </div>
        </div>
      </div>
    </div>

    <a
      href={volunteer.linkedinUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center items-center "
      style={{ height: "8%" }}
    >
      <AiFillLinkedin className="text-4xl text-white cursor-pointer" />
    </a>
  </div>
))}
</div>
  )
}

export default Vol