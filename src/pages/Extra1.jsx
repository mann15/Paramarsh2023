import React, { useState } from 'react'
import images from '../assets/images'
import "../index.css"

const Extravaganza = () => {
  const [abv, setAbv] = useState(
    [
      {
        id: 1,
        title: 'Archery',
        im: images.e5,
        text: 'Archery, a game of concentration and the perfect balance of your mind and body, is what Paramarsh presents to you in extravaganza. Fix your target, pull the string, close your one eye, and aim for it.',
      },
            {
                id: 2,
                im: images.e6,
                title: "Ninja Star",
                text: 'Do you aspire to perform all the ninja tasks with your concentration and power? Was Ninja Hattori your spirit character in your childhood? Then Paramarsh gives you a chance to fulfill your childhood dream by presenting "Ninja Star", a typical ninja technique as a part of extravaganza. Pull up your sleeves to hit the spot.'
            },
              {
                id: 3,
                im: images.e7,
                title: "Axe Throwing",
                text: " A deadly tool with an edge so sharp that it can cut even a tree in two, boon if used carefully, curse if you miss by a millimeter. If you have the capability to handle it wisely and shot it perfectly, Axe Throw is made for you."
              },
              {
                id: 4,
                im: images.e8,
                title: "Blow-Dart",
                text: " Blow dart gun, the best weapon if you have the precision and the worst if you fumble. Blow dart gun is a game where you take your best shot to win."
              },
              {
                id: 5,
                im: images.e9,
                title: "Go-Karting",
                text: "Go-karting an adventurous Motorsport . One that entices the novice to ride. Held in the open circuits , the enthusiasts race upon the tracks ! Those tech Karts publicised their presence and let the dormant karter in those layman unviel."
              },
              {
                id: 6,
                im: images.e16,
                title: "KTM Stunt Show",
                text: "KTM is known for its off-road motorcycles and is also one of the most popular two wheelers among youth. KTM brought some of the most experienced stuntmen to our campus under extravaganza and within fraction of seconds got all the attention it deserved."
              },
              {
                id: 7,
                im: images.e10,
                title: "Speed Painting",
                text: " Speed painting is exactly what you'd imagine – art against the clock. Adroitness at its best, is what you see. Paramarsh'16 witnessed one such maestro of speed painting - Amit Verma."
              },
              {
                id: 8,
                im: images.e11,
                title: "Rapelling",
                text: "The adventures you have imagined to have performed were brought into live experience at Paramarsh'16 in the form of Rapelling and Burma Bridge."
              },
              {
                id: 9,
                im: images.e12,
                title: "Caricatures",
                text: "Only hackers are different from programmers and computer users. It has been rightly said by Walt Disney, 'All cartoon characters and fables must be exaggeration, caricatures. It is the very nature of fantasy and fable'. Paramarsh bought to you, under the banner of 'Extravaganza', a chance to live this fantasy with Caricatures!"
              },
              {
                id: 10,
                im: images.e13,
                title: "Beatboxing",
                text: "A perfect combination of synchronization, energy, passion and expression in addition to the exceptional talent showcased by Beatboxing berserk Deepak Soni, Paramarsh '14 witnessed the enthralled masses being mesmerised by his magnificent sense of musicality."
              },
              {
                id: 11,
                im: images.e14,
                title: "Power Bocking",
                text: "Power Bocking- Act for the Steeled The extreme sport of jumping and running with spring stilts gets the audience stunned. The power strider's makes their moves to entertain the mass. Taking MSU by storm Paramarsh'15 invited the Bocker's to set their stunts on!"
              },
              {
                id: 12,
                im: images.e15,
                title: "Freestyle Football",
                text: "A highly anticipated combination of arcade action which exposes the heart of the world's beautiful game, on-the-ball flare, the freestyle football recepted scores of frenzied applause from the mass audience."
              },

        ].map(item => ({ ...item, showContent: false }))
    );

    return (
      <div className="text-white">
      <section className="wrapper">
        <div className="top tracking-normal -mt-10 px-2">EXTRAVAGANZA</div>

        <div className="bottom tracking-normal -mt-10 px-2" aria-hidden="true">
          EXTRAVAGANZA
        </div>
      </section>
      <div className="w-screen my-[12vh]">
        <div className="flex gap-5 flex-wrap items-center justify-center">
          {abv.map((item, key) => (
            <div className="sanicard" key={key}>
              <div className="sanicard-container">
                <div className="sanicard-front bg-black/20 h-[500px] w-[500px] image1-glow flex justify-center items-center flex-col">
                  <img
                    src={item.im} // Use item.im for the image source
                    alt=""
                    className="h-[200px] w-[300px] mx-5 my-5 image2-glow "
                  />
                  <h1 className='Grotesk text-2xl sm:text-xl' > {item.title} </h1>
                </div>
                <div className="sanicard-back bg-black/20 h-[500px] w-[500px] image1-glow flex justify-center items-center flex-col p-10">
                  <p> {item.text} </p> {/* Use item.text for the content */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Extravaganza;