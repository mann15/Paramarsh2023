import React, { useEffect, useState, useRef } from "react";
import "../index.css";
import images from "../assets/images";

const Pronite = () => {
  const [progress, setProgress] = useState(0);
  const [items, setItems] = useState([
    {
      title: "Madhur Sharma",
      image: images.p1,
      para:'Madhur Sharma is an Indian Playback singer and live performer from Bhopal based in Mumbai. He is well known for number of popular songs, including " KAALI KAALI ZULFON KE" . He has emerged as the most popular online sensation of 2022. He has garnered more than 500 million views and 71.1M streams across all media. His first original song "Yaari" was released in 2019 under "Times Music" and was a great hit. This song was released on the occasion of friendship day and have already crossed 2+ million views. ',
    },
    {
      title: "Rahul Dua",
      image: images.p2,
      para: 'An established India stand-up comedian & brightest comic of the new generation "Rahul Dua" made 2020 mesmerized and full of laughters with his Performance under the banner of pronite. Rahul Dua caught his first big break when he appeared on "Comicstaan", a comedy reality show. He is also an active YouTuber and his Videos go viral. His genre of comedy is observational comedy.',

    },
    {
      title: "Ritviz",
      image: images.p3,
      para:  "Let's take a trip down the memory lane of 2019 when Ritviz illuminated Paramarsh's stage with his presence and made the atmosphere worth remembering. The beloved sensation who debuted several years ago and conquered the hearts of youth, RITVIZ is also an internationally renowned electronic popstar who has everyone hooked up on his beats. A desi pop playlist with his popular songs Udd Gaye and Sage is what keeps you moving on the dance floor.",

    },
    {
      title: "Mohammed Irfan",
      image: images.p4,
      para: '2018 marks remarkable stage lit performance of Mohammed Irfan.He is also well known for being able to sing in several languages. His journey in the industry accelerates and he collaborated with the music directors like Sajid-Wajid, Himesh Reshammiya, Meet Bros, Jeet Ganguly and many more. 2014 has been a successful year for Irfan where he lent his voice for many hit songs like "Baarish" from Yaariyan, "Muskurane" from Citylights, "Banjaara" from Ek Villain, "Dard Dilo Ke" from The Xpose and "Tu Hi Tu" from Kick.',

    },
    {
      title: "The Local Train Band",
      image: images.p5,
      para:  "The Local Train, the name itself suggests it to be a concoction of varied Indian culture. Its not just a band, but an emotion . It was ranked India’s no.1 rock band by Sennheiser. Their album ‘Aalas Ka Pedh’ went on to become one of the highest selling independent albums of the year and was also featured on the list of “Most Streamed Albums” on Apple Music. Their marvellous performance blessed the stage of Paramarsh'17.",

    },
    {
      title: "Nikhita Gandhi",
      image: images.p6,
      para:  "Nikhita Gandhi, an epitome of most diversified vocalist, is an Indian playback singer who has worked in Indian films in four different languages. She has recently sung as the face of Kriti Sanon in Raabta for the title track ‘Raabta’. Her song ‘Ullu ka Pattha’(Jagga Jasoos), a duet with Arijit Singh is also a hit song.",
    },
    {
      title: "Lagoori Band",
      image: images.p7,
      para:  "Lagori makes music that reflects the face of the modern Indian youth. This band combines Indian classical melodies and inflections with Rock music, resulting in an interesting mix that is high on energy, being catchy and soulful at the same time. Paramarsh’16 beholds memories of experiencing this great band performance.",

    },
    {
      title: "Shefali Alvares",
      image: images.p8,
      para:  "Shefali Alvares is a liberal melody that grabs a foothold at Jazz and has enchanted Bollywood with her versatile diction. Her famous songs include ‘Badtameez Dil’, ‘Steal the Night’, ‘Ratta Maar’, ‘Dhatting Nach’, and many more. Paramarsh'16 was a witness to her enchanting performance.",
    },
    {
      title: "Tochi Raina",
      image: images.p9,
      para:  "A notable playback singer in Hindi films, Tochi Raina's famous works include ‘Kabira’ from “Yeh Jawaani Hai Deewani”, ‘Iktara’ from 'Wake up Sid', ‘Saibo’ for the Hindi movie “Shor in the City” a duet with Shreya Ghoshal and many others. An awesome musical night was experienced by Paramarsh’15 in tune with Tochi Raina.",
    },
    {
      title: "Raghu Dixit",
      image: images.p10,
      para: " Raghu Dixit, an Indian singer, composer, producer is the front-man for the Raghu Dixit Project, a multi-lingual folk music band. This band is known for their unique combination of Indian traditional sounds and western medleys. This band has a modern, global sound and that is rooted and true to India's rich cultural heritage.Paramarsh’14 had the pleasure of witnessing this rich in culture band.",
    },
    {
      title: "Paradigm Shift Band",
      image: images.p11,
      para:  "Paradigm Shift is a Mumbai-based progressive rock band. Their music is an amalgamation of various genres of music, combining Indian classical music with contemporary Progressive Rock themes. Their famous compositions include ‘Khwabon Mein’, ‘Deedar’ and many more.",
    },
    {
      title: "Aditi Singh Sharma",
      image: images.p12,
      para:  "Aditi Singh Sharma is an Indian playback singer who made her singing debut in Bollywood with Anurag Kashyap’s Dev D. She’s famous for her work in movies like ‘No One Killed Jessica’, ‘Heroine’ and ‘Agent Vinod’. She has also worked for MTV’s Coke Studio.",
    },
    {
      title: "Parikrama Band",
      image: images.p13,
      para: 'Parikrama is a Rock and Roll band from Delhi, India. They have several live performances and original numbers to their name. This band is renowned to be the "Indian God of Rock". Most of their recordings are made in live performances. ‘But It Rained’ (1996) is their biggest hit ever!',
    },
    {
      title: "Benny Dayal",
      image: images.p14,
      para: "Benny Dayal, a singer who hails from the state of Kerala, is a member of the band S5. Given a break by A.R. Rahman, he has churned out many hit numbers. His famous songs include ‘Ekk Main Aur Ekk Tu’ and ‘Daaru Desi’. He was here to present an exhilarated performance in Paramarsh’12.",
    },
  ]);
  const lastClickTimestampRef = useRef(0);
  const [autoProgressActive, setAutoProgressActive] = useState(true);
  const [direction, setDirection] = useState(1); 


  
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTimestamp = Date.now();
      if (
        autoProgressActive &&
        currentTimestamp - lastClickTimestampRef.current > 3000
      ) {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + direction * 10;

          if (newProgress === 140 || newProgress === 10) {
            setDirection(-direction); // Reverse the direction
          }

          return newProgress;
        });
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [autoProgressActive, direction]);



  // Helper function to calculate zIndex...
  const getZindex = (array, index) =>
    array.map((_, i) =>
      index === i ? array.length : array.length - Math.abs(index - i)
    );

  const animate = () => {
    const calculatedProgress = Math.max(0, Math.min(progress, 140));
    const active = Math.floor((calculatedProgress / 140) * (items.length - 1));

    const carouselItems = document.querySelectorAll(".carousel-item");
    carouselItems.forEach((item, index) => displayItems(item, index, active));
  };

  useEffect(() => {
    animate();
  }, [progress]);

  // Drag and click event handlers...

  const handleClick = (e, index) => {
    const { clientX } = e;
    const { innerWidth } = window;
    const leftThreshold = innerWidth * 0.4; // 40% of the screen from the left edge
    const rightThreshold = innerWidth * 0.6; // 40% of the screen from the right edge
    
    if (clientX > leftThreshold && clientX < rightThreshold) {
      setAutoProgressActive(false);
      // If within the range, don't update the progress and return early
      return;
    }
    if (clientX <= leftThreshold) {
      setProgress((prevProgress) => {
        return prevProgress - 10;
      });
    } else if (clientX >= rightThreshold) {
      setProgress((prevProgress) => {
        return prevProgress + 10;
      });
      
    }

    // Update the timestamp of the last click
    lastClickTimestampRef.current = Date.now();
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const displayItems = (item, index, active) => {
    const zIndex = getZindex([...items], active)[index];
    item.style.setProperty("--zIndex", zIndex);
    item.style.setProperty("--active", (index - active) / items.length);
  };

  return (
    <div className="flex flex-col ">
     <section className="wrapper   ">
        <div className="top tracking-normal -mt-10 px-2 ">PRONITE</div>

        <div className="bottom tracking-normal -mt-10 px-2" aria-hidden="true">
        PRONITE
        </div>
      </section>
      <div className='text-center py-20 jumping-text'>
      <p className='text-glow1'>COMING SOON</p>
    </div>
      <div className="carouselp -mt-[20vh] ">
        <p className="text-white text-6xl md:text-4xl sm:text-3xl xs:text-2xl text-center pt-[15vh] overflow-hidden Grotesk">Past year pronite:</p>
      {items.map((item, index) => (
  <div
    key={index}
    className={`carousel-item `}
    onMouseEnter={() => setAutoProgressActive(false)}
    onMouseLeave={() => setAutoProgressActive(true)}
  >
            <div className="carousel-boxp  ">
              {/* <div className="nump">
                {" "}
                {index === 0 && "2k17"}
                {index === 1 && "2k19"}
                {index === 2 && "2k20"}
                {index === 3 && "2k21"}
                {index === 4 && "2k22"}
                {index === 5 && "2k23"}
                {index === 6 && "2k19"}
                {index === 7 && "2k19"}
                {index === 8 && "2k19"}
                {index === 9 && "2k19"}
                {index === 10 && "2k19"}
                {index === 11 && "2k19"}
                {index === 12 && "2k19"}
                {index === 13 && "2k19"}
              </div> */}
              <div className="flex flex-col">
                <img
                  src={item.image}
                  alt={item.title}
                  className="proniteimg object-fill  rounded-xl  "
                  onClick={(e) => handleClick(e, index)}
                />
                <span className="text-2xl pro-title text-white text-center  mt-1 Grotesk">
                {item.title}
                </span>
                
                 <span className="p-[1vh] text-justify text-[16px] md:text-[12px] sm:text-[11px] xs:text-[11px]  text mb-1">

                  {item.para}
                  </span> 
                



              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pronite;