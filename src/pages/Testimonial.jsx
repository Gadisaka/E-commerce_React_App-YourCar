import img1 from "../assets/car.png";
import img2 from "../assets/start.png";

import { TestimonialCard } from "../Components/TestimonialCard";
import AutoPlay from "../Components/AutoPlay";

export const Testimonial = () => {
  return (
    <div className="w-full h-screen bg-[#12273d] flex flex-col justify-center items-center relative">
      <p className="text-white text-[47px] md:text-[110px] font-serif absolute top-[60px] opacity-5 font-bold">
        {" "}
        TESTIMONIALS
      </p>

      <p className="text-white text-[40px] font-serif mb-8">Testimonials</p>

      <div className="relative">
        <img
          src={img1}
          className="absolute w-[150px] md:w-[280px] md:-bottom-20 md:-right-20 -bottom-8 -right-0"
        />

        <div className="w-full px-6">
          <TestimonialCard
            note="I recently bought a car through YourCar and I was blown away by their exceptional service. The staff were friendly and knowledgeable, and they helped me find the perfect car for my needs. I highly recommend YourCar to anyone looking for a luxury car buying experience."
            img={img2}
            name="Annie Rudy"
            place="Las Vegas"
          />
        </div>

        {/* <AutoPlay /> */}
      </div>
    </div>
  );
};
