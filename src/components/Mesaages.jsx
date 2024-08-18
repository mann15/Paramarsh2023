import React, { useEffect, useRef, useState } from "react";
import images from "../assets/images";
import { FaBuilding, FaQuoteLeft } from "react-icons/fa";
import { RiFootprintFill } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
import { TfiStatsUp } from "react-icons/tfi";

import { RxCross2 } from "react-icons/rx";
import AOS from "aos";
import "aos/dist/aos.css";

const Mesaages = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const counterRef = useRef(null);
  const counterRef1 = useRef(null);
  const counterRef2 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && count < 32000) {
          setCount((prevCount) => prevCount + 320);
        }
      });
    });
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [count]);
  useEffect(() => {
    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && count1 < 200) {
          setCount1((prevCount) => prevCount + 1);
        }
      });
    });
    if (counterRef1.current) {
      observer1.observe(counterRef1.current);
    }
    return () => {
      if (counterRef1.current) {
        observer1.unobserve(counterRef1.current);
      }
    };
  }, [count1]);
  useEffect(() => {
    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && count2 < 4000) {
          setCount2((prevCount) => prevCount + 40);
        }
      });
    });
    if (counterRef2.current) {
      observer2.observe(counterRef2.current);
    }
    return () => {
      if (counterRef2.current) {
        observer2.unobserve(counterRef2.current);
      }
    };
  }, [count2]);
  const [showFullMessage1, setShowFullMessage1] = useState(false);
  const [showFullMessage2, setShowFullMessage2] = useState(false);
  const [showFullMessage3, setShowFullMessage3] = useState(false);
  const [showFullMessage4, setShowFullMessage4] = useState(false);
  const msg1 = showFullMessage1
    ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim metus orci, quis gravida nunc iaculis non. Vestibulum malesuada nisl vitae mauris faucibus, ac interdum elit bibendum. Maecenas sed fermentum metus, at dignissim ex. Quisque vehicula risus eget vulputate lacinia. Nunc eget dolor sagittis, eleifend mi imperdiet, pellentesque tortor. Cras in pharetra turpis, nec vehicula arcu. Etiam arcu ante, hendrerit non mi non, pulvinar accumsan erat. Donec facilisis mattis nibh at dignissim. Cras id feugiat tellus. Etiam et libero interdum, vehicula leo vitae, efficitur ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim metus orci, quis gravida nunc iaculis non. Vestibulum malesuada nisl vitae mauris faucibus, ac interdum elit bibendum. Maecenas sed fermentum metus, at dignissim ex. Quisque vehicula risus eget vulputate lacinia. Nunc eget dolor sagittis, eleifend mi imperdiet, pellentesque tortor. Cras in pharetra turpis, nec vehicula arcu. Etiam arcu ante, hendrerit non mi non, pulvinar accumsan erat. Donec facilisis mattis nibh at dignissim. Cras id feugiat tellus. Etiam et libero interdum, vehicula leo vitae, efficitur ipsum."
    : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim atque sint veniam sunt ratione voluptate, sit, illum id qui dignissimos vero. Dicta cumque autem aliquam suscipit aliquid laudantium libero aperiam hic fugit sint, earum voluptatem exercitationem omnis minima quia aspernatur culpa. Animi vel dolor odio voluptate assumenda dolorem facilis vitae?";
  const msg2 = showFullMessage2
    ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim metus orci, quis gravida nunc iaculis non. Vestibulum malesuada nisl vitae mauris faucibus, ac interdum elit bibendum. Maecenas sed fermentum metus, at dignissim ex. Quisque vehicula risus eget vulputate lacinia. Nunc eget dolor sagittis, eleifend mi imperdiet, pellentesque tortor. Cras in pharetra turpis, nec vehicula arcu. Etiam arcu ante, hendrerit non mi non, pulvinar accumsan erat. Donec facilisis mattis nibh at dignissim. Cras id feugiat tellus. Etiam et libero interdum, vehicula leo vitae, efficitur ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim metus orci, quis gravida nunc iaculis non. Vestibulum malesuada nisl vitae mauris faucibus, ac interdum elit bibendum. Maecenas sed fermentum metus, at dignissim ex. Quisque vehicula risus eget vulputate lacinia. Nunc eget dolor sagittis, eleifend mi imperdiet, pellentesque tortor. Cras in pharetra turpis, nec vehicula arcu. Etiam arcu ante, hendrerit non mi non, pulvinar accumsan erat. Donec facilisis mattis nibh at dignissim. Cras id feugiat tellus. Etiam et libero interdum, vehicula leo vitae, efficitur ipsum."
    : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim atque sint veniam sunt ratione voluptate, sit, illum id qui dignissimos vero. Dicta cumque autem aliquam suscipit aliquid laudantium libero aperiam hic fugit sint, earum voluptatem exercitationem omnis minima quia aspernatur culpa. Animi vel dolor odio voluptate assumenda dolorem facilis vitae?";
  const msg3 = showFullMessage3
    ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim metus orci, quis gravida nunc iaculis non. Vestibulum malesuada nisl vitae mauris faucibus, ac interdum elit bibendum. Maecenas sed fermentum metus, at dignissim ex. Quisque vehicula risus eget vulputate lacinia. Nunc eget dolor sagittis, eleifend mi imperdiet, pellentesque tortor. Cras in pharetra turpis, nec vehicula arcu. Etiam arcu ante, hendrerit non mi non, pulvinar accumsan erat. Donec facilisis mattis nibh at dignissim. Cras id feugiat tellus. Etiam et libero interdum, vehicula leo vitae, efficitur ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim metus orci, quis gravida nunc iaculis non. Vestibulum malesuada nisl vitae mauris faucibus, ac interdum elit bibendum. Maecenas sed fermentum metus, at dignissim ex. Quisque vehicula risus eget vulputate lacinia. Nunc eget dolor sagittis, eleifend mi imperdiet, pellentesque tortor. Cras in pharetra turpis, nec vehicula arcu. Etiam arcu ante, hendrerit non mi non, pulvinar accumsan erat. Donec facilisis mattis nibh at dignissim. Cras id feugiat tellus. Etiam et libero interdum, vehicula leo vitae, efficitur ipsum."
    : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim atque sint veniam sunt ratione voluptate, sit, illum id qui dignissimos vero. Dicta cumque autem aliquam suscipit aliquid laudantium libero aperiam hic fugit sint, earum voluptatem exercitationem omnis minima quia aspernatur culpa. Animi vel dolor odio voluptate assumenda dolorem facilis vitae?";
  const msg4 = showFullMessage4
    ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim metus orci, quis gravida nunc iaculis non. Vestibulum malesuada nisl vitae mauris faucibus, ac interdum elit bibendum. Maecenas sed fermentum metus, at dignissim ex. Quisque vehicula risus eget vulputate lacinia. Nunc eget dolor sagittis, eleifend mi imperdiet, pellentesque tortor. Cras in pharetra turpis, nec vehicula arcu. Etiam arcu ante, hendrerit non mi non, pulvinar accumsan erat. Donec facilisis mattis nibh at dignissim. Cras id feugiat tellus. Etiam et libero interdum, vehicula leo vitae, efficitur ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim metus orci, quis gravida nunc iaculis non. Vestibulum malesuada nisl vitae mauris faucibus, ac interdum elit bibendum. Maecenas sed fermentum metus, at dignissim ex. Quisque vehicula risus eget vulputate lacinia. Nunc eget dolor sagittis, eleifend mi imperdiet, pellentesque tortor. Cras in pharetra turpis, nec vehicula arcu. Etiam arcu ante, hendrerit non mi non, pulvinar accumsan erat. Donec facilisis mattis nibh at dignissim. Cras id feugiat tellus. Etiam et libero interdum, vehicula leo vitae, efficitur ipsum."
    : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim atque sint veniam sunt ratione voluptate, sit, illum id qui dignissimos vero. Dicta cumque autem aliquam suscipit aliquid laudantium libero aperiam hic fugit sint, earum voluptatem exercitationem omnis minima quia aspernatur culpa. Animi vel dolor odio voluptate assumenda dolorem facilis vitae?";

  const messages = [
    {
      id: 1,
      msg: msg1,
      showFullMessage: showFullMessage1,
      setShowFullMessage: setShowFullMessage1,
      image: images.GL,
      name: "name1",
      designation: "designation1",
    },
    {
      id: 2,
      msg: msg2,
      showFullMessage: showFullMessage2,
      setShowFullMessage: setShowFullMessage2,
      image: images.GL,
      name: "name2",
      designation: "designation2",
    },
    {
      id: 3,
      msg: msg3,
      showFullMessage: showFullMessage3,
      setShowFullMessage: setShowFullMessage3,
      image: images.GL,
      name: "name3",
      designation: "designation3",
    },
    {
      id: 4,
      msg: msg4,
      showFullMessage: showFullMessage4,
      setShowFullMessage: setShowFullMessage4,
      image: images.GL,
      name: "name4",
      designation: "designation4",
    },
  ];

  const items = [
    {
      id: 1,
      icon: <RiFootprintFill color="white" size="60px" className="flex" />,
      label: "FOOTFALLS",
      count: count,
      ref: counterRef,
    },
    {
      id: 2,
      icon: <FaBuilding color="white" size="60px" className="flex" />,
      label: "Colleges",
      count: count1,
      ref: counterRef1,
    },
    {
      id: 3,
      icon: <BsPeopleFill color="white" size="60px" className="flex" />,
      label: "Visitors",
      count: count2,
      ref: counterRef2,
    },
    {
      id: 4,
      icon: <BsPeopleFill color="white" size="60px" className="flex" />,
      label: "Visitors",
      count: count2,
      ref: counterRef2,
    },
    {
      id: 5,
      icon: <BsPeopleFill color="white" size="60px" className="flex" />,
      label: "Visitors",
      count: count2,
      ref: counterRef2,
    },
  ];
  return (
    <div className="flex-row flex md:flex-col my-10">
        <div className="flex flex-col w-1/2 md:w-full flex-wrap md:flex-row">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`py-[1vh] text-white ${
                message.showFullMessage
                  ? "px-[3vw]"
                  : "w-[50vw]  sm:w-[100vw] px-[3vw] flex h-[300px] md:h-auto"
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  message.showFullMessage ? "" : "glow"
                }`}
              >
                {message.showFullMessage && (
                  <button
                    className="bg-transparent border-0 float-right"
                    onClick={() => message.setShowFullMessage(false)}
                  >
                    <RxCross2
                      size={25}
                      className="self-center hover:scale-125 transition duration-100"
                    />
                  </button>
                )}
                <div className="w-full  h-[300px] md:h-auto p-5 flex bg-black/30 rounded-xl backdrop-blur-sm relative z-10">
                  <div className="w-full p-5 md:p-0 relative">
                    <div
                      className="flex flex-row md:flex-col-reverse items-center justify-center h-full"
                      data-aos="flip-down"
                    >
                      <div
                        className={`w-[60%] md:w-full h-full shadow-md text-justify`}
                      >
                        <p className="font-bold md:text-center" data-aos="">
                          {message.name}
                        </p>
                        <p
                          className="font-bold pb-5 md:text-center"
                          data-aos=""
                        >
                          {message.designation}
                        </p>
                        <FaQuoteLeft color="white" size="15px" />
                        <p
                          className={`sm:text-sm ${
                            message.showFullMessage ? "" : "truncate"
                          }`}
                          data-aos={`${message.showFullMessage ? "" : ""}`}
                        >
                          {message.msg}
                        </p>
                        {!message.showFullMessage && (
                          <button
                            className="text-white underline pt-2"
                            onClick={() => {
                              message.setShowFullMessage(true);
                              messages.forEach((m) => {
                                if (m.id !== message.id) {
                                  m.setShowFullMessage(false);
                                }
                              });
                            }}
                          >
                            Read More
                          </button>
                        )}
                      </div>
                      <div className="flex items-center justify-center float-right p-2">
                        <img
                          src={message.image}
                          alt=""
                          className="w-60 rounded-2xl border-4 border-purple-400"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-1/2 md:w-full text-white flex-col">
          <div className="flex flex-row p-10 h-[150px] justify-center items-center">
            <TfiStatsUp color="white" size="40px" className="flex" />
            <p className="text-3xl w-full flex px-5">Statistics :</p>
          </div>
     <div className="w-full flex flex-col md:flex-row md:flex-wrap h-[1050px] md:h-[500px] xs:h-[1000px] items-center justify-center">
  {items.map((item) => (
    <div
      key={item.id}
      className="w-[55%] h-[20%] flex flex-row md:w-[31%] md:h-[48%] sm:h-[31%] sm:w-[48%] xs:h-[18%] xs:w-[75%] sm:p-1 triangle rounded-full bg-black/40 backdrop-blur-sm hover:-translate-y-3 transition duration-300 items-end"
      ref={item.ref}
    >
      <div className="flex flex-col items-center justify-center w-full">
        {item.icon}
        <p className="text-xl md:text-lg">{item.label}</p>
        <div className="items-center pb-3 justify-center w-full flex text-3xl md:text-xl">
          {item.count}+
        </div>
      </div>
    </div>
  ))}
</div>
        </div>
      </div>
  );
};

export default Mesaages;
