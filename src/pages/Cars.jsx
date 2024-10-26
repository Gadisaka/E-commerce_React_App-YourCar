import React from "react";
import CarCard from "../components/cars-section/CarCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import cars from "../data/data.js";
import "../index.css";
import useCartStore from "../store/Store.js";

const sliderSettings = {
  // arrows: false,
  dots: true,
  appendDots: (dots) => <ul className="slickDots">{dots}</ul>,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 3,
  infinite: true,

  nextArrow: (
    <div>
      <div className="next-slick-arrow">
        <button
          className="prev-icon"
          // onClick={handleGoToClick(--currentSlid)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.585815 2.34317L2.00003 0.928955L9.0711 8.00002L2.00003 15.0711L0.585815 13.6569L6.24267 8.00002L0.585815 2.34317Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
    // <SlickArrowRight />
  ),
  prevArrow: (
    <div>
      <div className="prev-slick-arrow">
        <button
          className="next-icon"
          // onClick={handleGoToClick(++currentSlid)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.41418 2.34317L7.99997 0.928955L0.928904 8.00002L7.99997 15.0711L9.41418 13.6569L3.75733 8.00002L9.41418 2.34317Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
    // <SlickArrowLeft />
  ),

  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1040,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

const Cars = () => {
  const { cart, addCar, removeCar, getTotalCars } = useCartStore();

  const getCarQuantity = (id) => {
    const carInCart = cart.find((c) => c.id === id);
    return carInCart ? carInCart.quantity : 0;
  };
  return (
    <div
      className="flex flex-col md:justify-between  w-full  h-screen gap-10 md:mb-24 md:px-24"
      id="cars"
    >
      <div className="flex flex-col items-center mt-10 ">
        <p className="md:text-9xl text-8xl font-bold text-[#EBEBEB]">CARS</p>
        <p className="md:text-5xl text-5xl font-bold text-[#741906] mt-[-40px] ">
          Cars
        </p>
      </div>
      <div className="">
        <Slider {...sliderSettings}>
          {cars.map((car) => {
            return (
              <CarCard
                key={car.id}
                id={car.id}
                car={car}
                class={car.class}
                name={car.name}
                seats={car.seats}
                luggage={car.luggage}
                description={car.description}
                image={car.image}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Cars;
