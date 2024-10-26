import React from "react";

const GridCard = (props) => {
  return (
    <>
      <div className={props.style}>
        <img
          src={props.image}
          className="w-full h-full object-cover"
          alt="Car 1"
        />
        <div className="w-full h-full bg-[#000000a8] absolute top-0 right-0 flex flex-col gap-3 justify-center items-center p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <p className="text-white text-[30px]">
            {props.name} {props.model}
          </p>
          <p className="text-white text-[18px] text-center">
            {props.description}
          </p>
          <div className="flex text-white justify-center items-center border rounded-lg md:w-48 w-36 md:h-12 h-10">
            <a
              className="text-white text-2xl md:text-4xl font-thin"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default GridCard;
