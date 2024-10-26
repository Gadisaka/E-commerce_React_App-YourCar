import React from "react";
import ab2 from "../assets/otherimages/ab2.png";
import ab1 from "../assets/otherimages/ab1.png";

const About = () => {
  return (
    <div
      className="relative flex md:justify-around justify-center p-12 w-full h-screen  "
      id="about"
    >
      {/* left */}
      <div className=" flex flex-col gap-10  ">
        <div className=" flex flex-col gap-0 mt-10 md:mt-0 ">
          <h1 className="  font-lora font-bold md:text-9xl text-[50px] text-[#EBEBEB]">
            ABOUT US
          </h1>

          <h1 className=" md:pl-10  mt-[-45px] self-center md:self-start font-lora font-bold text-[32px] md:text-[56px] text-[#741906] ">
            About
          </h1>
        </div>
        <div className=" ">
          <p className=" font-nunito-sans font-normal md:text-[15px] text-[15px] tracking-[5] md:w-[639px] w-[331] ">
            YourCar is a luxury car dealership that offers a personalized and
            first-class experience to its clients. Our team of experienced
            professionals is dedicated to providing exceptional service and
            finding the perfect vehicle to match our clients' unique preferences
            and requirements. We have an extensive selection of high-end
            vehicles, ranging from sports cars to SUVs, all of which are
            maintained to the highest standards of quality and safety. At
            YourCar,
            <br />
            <br />
            we are committed to creating a stress-free and enjoyable car buying
            experience. We understand that purchasing a luxury car can be a
            significant investment, which is why we offer flexible financing
            options to make the process more manageable. Our team is available
            to answer any questions and provide guidance throughout the entire
            buying process. We take pride in our outstanding customer service
            and attention to detail, and we are confident that our clients will
            be satisfied with their experience at YourCar.
          </p>
        </div>
      </div>
      {/* right */}
      <div className="relative md:flex hidden items-center  justify-center">
        <img
          src={ab1}
          alt=""
          className="w-full max-w-xs md:max-w-sm lg:max-w-md "
          class=""
        />
        <img
          src={ab2}
          alt=""
          className="w-full max-w-xs md:max-w-sm lg:max-w-md absolute h-[600px] "
        />
      </div>
    </div>
  );
};

export default About;

// <div className="relative flex justify-between p-5 w-full h-screen">
//   <div>
//     <div>
//       <h1>About</h1>
//       <h2>About</h2>
//       <div className=" w-[639px] h-[487px] ">
//         <p className="font-normal text-2xl tracking-[5%]">
//           YourCar is a luxury car dealership that offers a personalized and
//           first-class experience to its clients. Our team of experienced
//           professionals is dedicated to providing exceptional service and
//           finding the perfect vehicle to match our clients' unique
//           preferences and requirements. We have an extensive selection of
//           high-end vehicles, ranging from sports cars to SUVs, all of which
//           are maintained to the highest standards of quality and safety. At
//           YourCar, we are committed to creating a stress-free and enjoyable
//           car buying experience. We understand that purchasing a luxury car
//           can be a significant investment, which is why we offer flexible
//           financing options to make the process more manageable. Our team is
//           available to answer any questions and provide guidance throughout
//           the entire buying process. We take pride in our outstanding
//           customer service and attention to detail, and we are confident
//           that our clients will be satisfied with their experience at
//           YourCar.
//         </p>
//       </div>
//     </div>
//   </div>
//   <div>
//     <p>ccece</p>
//     <img src={ab1} alt="" />
//   </div>
// </div>
