// import React, { useState } from 'react'
// import ReactCardFlip from 'react-card-flip';

// const Card = ({ item }) => {

//   const [isFlipped, setIsFlipped] = useState(false);

//   const handleClick = () => {
//     setIsFlipped(!isFlipped);
//   }
  
//   return (
//     <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
//       <div className=' bg-black/20 h-[300px] w-[300px] md:h-full md:w-[400px] lg:h-[500px] lg:w-[500px] image1-glow flex justify-center items-center flex-col '>
//         <img className=' h-[100px] w-[150px] md:h-[125px] md:w-[225px] lg:h-[150px] lg:w-[250px] md:h-[250px] md:w-[350px] lg:h-[350px] lg:w-[450px] image2-glow mx-5  my-5 ' src={item.img} alt='' />
//         <h2 className=' text-3xl md:text-4xl lg:text-4xl text-center my-2'>{item.heading}</h2>
//         <p className='text-center text-[16px] md:text-[20px] lg:text-[20px] '>{item.para}</p>
        
//         <button className=' bg-purple-700 rounded-none cursor-pointer border-[2px] my-5 p-2' onClick={handleClick}> READ MORE </button>
//       </div>

//       <div className=' bg-black/20 h-full w-[300px] md:h-full md:w-[400px] lg:h-[500px] lg:w-[500px] image1-glow flex justify-center items-center flex-col '>
//         <p className='text-center text-[16px] md:text-[20px] lg:text-[20px] px-10 md:px-20 lg:px-10 flex flex-wrap '>{item.show} </p>

//         <button className=' bg-purple-700 rounded-none cursor-pointer border-[2px] my-5 p-2' onClick={handleClick}> BACK </button>
//       </div>
//     </ReactCardFlip>
//   )
// }

// export default Card;