import React from "react";
import background from "../assets/otherimages/Background.png";

const Main = () => {
  return (
    <>
      <div className="relative w-full h-screen" id="home">
        <img
          src={background}
          alt="Car background"
          className="absolute top-0 left-0 w-full h-full object-cover object-top md:object-center "
        />
        <div className="relative md:justify-end justify-center text-end flex items-center pt-24">
          {/* right */}
          <div className="md:w-[605px] md:h-[504px]  w-[400px]  md:p-5  m-10 flex flex-col items-center md:items-end">
            <div className=" flex h-[164px] md:w-[505px] w-[341px] text-center md:text-right">
              <h1 className="text-white text-[32px] md:text-6xl  font-bold ">
                Find the perfect car for you at YourCar.
              </h1>
            </div>
            <div className="bg-black bg-opacity-50 md:bg-opacity-0 md:p-0 p-5   text-white text-center md:text-right md:h-[221px] md:w-[385px] w-[337px] h-[136px] ">
              <p className="text-xl md:text-4xl font-semibold">
                We offer a wide range of cars that cater to your needs and
                budget. Visit us today and drive away with your dream car!
              </p>
            </div>
            <div className="flex text-white justify-center items-center md:mt-0 mt-48 border rounded-lg md:w-48 w-36 md:h-14 h-12">
              {/* className="flex items-center  border rounded-lg    */}
              <a
                className="text-white text-2xl md:text-4xl font-thin"
                href="#cars"
              >
                Discover{" "}
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class=" size-5 md:size-6 ml-2 mt-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

// <div >
//         <div>
//             <div className='absolute w-full h-full bg-gradient-to-l from-[#00091A] opacity-10 '></div>
//             <img
//                 className='w-full h-full bg-center bg-cover'
//                 src={Background} alt="" />
//         </div>
//         <div>
//           <div className='absolute font-lora font-bold text-[60px] text-right w-[655px] h-[164px] top-[140px] left-[1200px]'>
//               <h1>Find the perfect car for you at YourCar.</h1>
//           </div>
//           <div className='absolute w-[395px] h-[221px] top-[330px] left-[1450px] font-lora font-bold text-[32px] text-right'>
//             <h1>We offer a wide range of cars that cater to your needs and budget. Visit us today and drive away with your dream car!</h1>
//           </div>
//           <div className='absolute top-[600px] left-[1650px] '>
//             <button className='flex flex-row items-center px-10 py-3 gap-[10px] w-[195px] h-[55px] border-[2px] rounded-lg  border-white'>
//               <h1 className='font-lora font-bold text-2xl '>Discover </h1>
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
//               <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
//               </svg>

//             </button>
//           </div>
//         </div>

//     </div>
