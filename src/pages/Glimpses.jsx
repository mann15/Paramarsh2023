// import React, { useState } from 'react'
// // import "../Glimpses.css"
// import {RxDoubleArrowRight} from 'react-icons/rx';
// import {RxDoubleArrowLeft} from 'react-icons/rx';

// import img1 from "../assets/images/1693112525646.png"
// import img2 from "../assets/images/1693112525646.png"
// // import img2 from "../assets/images/2.jpg"

// const Glimpses = () => {

//   const [num, setNum] = useState(2018);
//   const incNum = ()=>{
//     if(num < 2023){
//       setNum(num + 1);
      
//     }
//     else
//     setNum(2023);
//   }

//   const decNum = ()=>{
//     if(num > 2017){
//       setNum(num - 1);
      
//     }
//     else
//     setNum(2017);
//   }

//   const [currentImage, setCurrentImage] = useState(0);
//   const images = [img1,img2,img3];

//   const handleChangeImage = () => {
//     const nextImage = (currentImage + 1) % images.length;
//     setCurrentImage(nextImage);
   
//   };

//   return (
//     <div className='glimpses'>
    
//          <input type="checkbox" name="" id="checkbox-cover" />
//          <input type="checkbox" name="" id="checkbox-page1" />
//          <input type="checkbox" name="" id="checkbox-page2" />
//          <input type="checkbox" name="" id="checkbox-page3" />
//          <input type="checkbox" name="" id="maindiv" />
       

//          <div className='main  w-full h-screen flex justify-center items-center'>
          

//           <div className='electrolize w-96  text-[25px] text-white history '>
//             <p className='font-extrabold text-[60px] '>HISTORY</p>
//            <span>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, dignissimos sapiente quidem facilis fugit at illum accusantium, atque magnam ab praesentium culpa dolorem molestias, nisi assumenda laudantium doloribus! Voluptates, recusandae.
//             erunt quae?
//            </span>
//           </div>

         
// {/*           
//             <div className='logo'>
//             <div className='afterlogo'>
//             <p className='mobiletext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus distinctio enim veritatis veniam, accusamus quis recusandae impedit? Quaerat assumenda quae, praesentium nobis a accusantium nisi rem veniam. Dicta, nemo illum?
//             Voluptate laborum ullam dicta molestiae itaque deserunt perferendis voluptatibus, harum nam quidem nemo repellat minus magnam tempore laboriosam consequatur quas beatae maiores, obcaecati saepe. Est qui beatae nobis id laborum?</p>
           
              
            
//             </div>
//           </div> */}

//           <div className='counters '>
//           <img src={images[currentImage]} alt={`Image ${currentImage}`} className='w-screen h-screen  bg-cover' />
//           <div className='textbg flex w-screen justify-center items-center space-x-5'>
//             <p className='text-white text-xl' onClick={()=>{decNum();handleChangeImage();}} ><RxDoubleArrowLeft color='white' size={25} /></p>
//             <p className='textc' onClick={()=>{incNum();handleChangeImage();decNum()}} >{num}</p>
//             <p className='text-white text-xl' onClick={()=>{handleChangeImage();incNum()}} ><RxDoubleArrowRight color='white' size={25} /></p>
//             </div>
//           </div>

          

//          <div className='book'>
//             <div className='cover'>
//                 <label htmlFor="checkbox-cover"></label>
//             </div>

            
//             <div className='page' id='page1' >
//                 <div className='front-page '>
//                 <p className='textss electrolize'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, vel accusantium, eligendi soluta consequuntur voluptatum illo minus, deserunt a doloremque voluptas autem dicta ex iste eaque quisquam est blanditiis odit!
//                 Consectetur, cupiditate, quae ab sit atque molestiae aspernatur cumque repudiandae incidunt neque aperiam ullam delectus asperiores aut expedita! Placeat facere nemo ratione, ipsam soluta molestiae ea enim odit ipsa iste?</p>
//                 <label className="next" htmlFor="checkbox-page1">
//                   <RxDoubleArrowRight color='black' size={28} />
//                 </label>
//                 </div>

//                 <div className='back-page'>
//                     <img src="" />
//                     <label className="prev" htmlFor="checkbox-page1">
//                     <RxDoubleArrowLeft color='black' size={28} />
//                     </label>
//                 </div>
            

            
                 
//             </div>


//             <div className='page' id='page2'>
//                 <div className=' front-page'>
//                 <p className='textss electrolize'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, vel accusantium, eligendi soluta consequuntur voluptatum illo minus, deserunt a doloremque voluptas autem dicta ex iste eaque quisquam est blanditiis odit!
//                 Consectetur, cupiditate, quae ab sit atque molestiae aspernatur cumque repudiandae incidunt neque aperiam ullam delectus asperiores aut expedita! Placeat facere nemo ratione, ipsam soluta molestiae ea enim odit ipsa iste?</p>
//                 <label className="next" htmlFor="checkbox-page2">
//                 <RxDoubleArrowRight color='black' size={28} />
//                 </label>
//                 </div>

//                 <div className='back-page'>
//                     <img src="" />
//                     <label className="prev" htmlFor="checkbox-page2">
//                     <RxDoubleArrowLeft color='black' size={28} />
//                     </label>
//                 </div>
            

            
                 
//             </div>


//             <div className='page' id='page3'>
//                 <div className=' front-page'>
//                 <p className='textss electrolize'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, vel accusantium, eligendi soluta consequuntur voluptatum illo minus, deserunt a doloremque voluptas autem dicta ex iste eaque quisquam est blanditiis odit!
//                 Consectetur, cupiditate, quae ab sit atque molestiae aspernatur cumque repudiandae incidunt neque aperiam ullam delectus asperiores aut expedita! Placeat facere nemo ratione, ipsam soluta molestiae ea enim odit ipsa iste?</p>
//                 <label className="next" htmlFor="checkbox-page3">
//                 <RxDoubleArrowRight color='black' size={28} />
//                 </label>
//                 </div>

//                 <div className='back-page'>
//                     <img src="" />
//                     <label className="prev" htmlFor="checkbox-page3">
//                     <RxDoubleArrowLeft color='black' size={28} />
//                     </label>
//                 </div>
            

            
                 
//             </div>
//             <div className='back-cover'></div>

//          </div>
//          </div>
//     </div>
//   )
// }

// export default Glimpses