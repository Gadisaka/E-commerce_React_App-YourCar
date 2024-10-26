import React, { useRef } from "react";

import img2 from "../assets/start.png";
// import { TestimonialCard } from "../Components/TestimonialCard";

export default function AutoPlay() {
  let sliderRef = useRef(null);

  const play = () => {
    sliderRef.slickPlay();
  };

  const pause = () => {
    sliderRef.slickPause();
  };

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 1, // Only one card visible at a time
    slidesToScroll: 1, // Scroll one card at a time
    prevArrow: null,
    nextArrow: null,
  };

  return (
    <div className="slider-container w-full px-6" id="AutoPlay1">
      <Slider
        ref={(slider) => (sliderRef = slider)}
        {...settings}
        className="py-14 w-auto"
      >
        <TestimonialCard
          note="I recently bought a car through YourCar and I was blown away by their exceptional service. The staff were friendly and knowledgeable, and they helped me find the perfect car for my needs. I highly recommend YourCar to anyone looking for a luxury car buying experience."
          img={img2}
          name="Annie Rudy"
          place="Las Vegas"
        />

        <TestimonialCard
          note="I recently bought a car through YourCar and I was blown away by their exceptional service. The staff were friendly and knowledgeable, and they helped me find the perfect car for my needs. I highly recommend YourCar to anyone looking for a luxury car buying experience."
          img={img2}
          name="Annie Rudy"
          place="Las Vegas"
        />

        <TestimonialCard
          note="I recently bought a car through YourCar and I was blown away by their exceptional service. The staff were friendly and knowledgeable, and they helped me find the perfect car for my needs. I highly recommend YourCar to anyone looking for a luxury car buying experience."
          img={img2}
          name="Annie Rudy"
          place="Las Vegas"
        />

        <TestimonialCard
          note="I recently bought a car through YourCar and I was blown away by their exceptional service. The staff were friendly and knowledgeable, and they helped me find the perfect car for my needs. I highly recommend YourCar to anyone looking for a luxury car buying experience."
          img={img2}
          name="Annie Rudy"
          place="Las Vegas"
        />
      </Slider>
    </div>
  );
}
