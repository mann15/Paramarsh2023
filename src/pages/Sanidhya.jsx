import React from "react";
import images from "../assets/images";

import "./Sani.css";

const Sanidhya = () => {
  const sani = [
    {
      image: images.s6,
      title: "Nature Conservation Day Awarness Program",
      content:
        "Team Paramarsh joined hands with the ongoing awareness event at kamatibaug and spread awareness regarding nature conservation and disseminated about green cover ascendancy, as they distributed 100 saplings in families.",
    },
    {
      image: images.ie1,
      title: "Speaking Street",
      content:"Societal issues sometimes get drown under the pressure of society only and this issue was dealt by PARAMARSH as they conducted street plays in Vadodara to raise awareness against societal issues such as drug usage, acid attacks, and superstitions.",
    },
    {
      image: images.s9,
      title: "Adios Addiction",
      content:"Paramarsh students conducted an awareness rally and campaign to make their college campus tobacco-free. They burned cigarettes to symbolize a permanent end to smoking, and this drive of Adios Addiction made their campus to be the first tobacco free campus.",
    },
    {
      image: images.s7,
      title: "Little Steps",
      content:
        "A small step towards the upliftment counts. We at Paramarsh, believe the same. This year we conducted a donation drive , providing underprivileged kids with educational kits and boosting up their confidence with our little step towards development.",
    },
    {
      image: images.sani1,
      title: "World No Tabacco Day Awareness Program",
      content:'Paramarsh team members raised awareness about the harmful effects of tobacco consumption. Students from over 15 Anganwadi centers participated, and took part in a drawing competition centered around "No Consumption of Tobacco" promoting healthier lifestyle',
    },
    {
      image: images.s10,
      title: "Road Rage Awareness",
      content:"Team Paramarsh and Vadodara Traffic Police conducted a campaign to prevent fatal accidents caused by mobile phone usage while driving due to lack of traffic awareness and regulations.",
    },
  ];

  return (
    <div className="text-white">
      <section className="wrapper   ">
        <div className="top tracking-normal -mt-10 px-2">SANIDHYA</div>

        <div className="bottom tracking-normal -mt-10 px-2" aria-hidden="true">
          SANIDHYA
        </div>
      </section>

      <div className="my-[12vh]">

      <p className=" text-center text-[20px] md:text-[18px] sm:text-[15px] xs:text-[14px] px-10 ">
        {" "}
        Nurturing our collective humanity is both a reflection of our past and a promise for the future—a testament to our capacity for growth, unity, and the pursuit of a better world for all. Paramarsh binds together everyone transcending borders, cultures and languages.{" "}
      </p>

      <div className="flex gap-5 flex-wrap items-center justify-center py-10">
        {sani.map((items, key) => (
          <div className="sanicard " key={key}>
            <div className="sanicard-container">
              <div className="sanicard-front bg-black/20 h-[500px] w-[500px] image1-glow flex justify-center items-center flex-col">
                <img
                  src={items.image}
                  alt=""
                  className="h-[200px]  w-[300px] mx-5 my-5 image2-glow"
                />
                <h1 className="Grotesk"> {items.title} </h1>
              </div>
              <div className="sanicard-back bg-black/20 h-[500px] w-[500px] image1-glow flex justify-center items-center flex-col p-10">
                <p> {items.content} </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
                  </div>
  );
};

export default Sanidhya;