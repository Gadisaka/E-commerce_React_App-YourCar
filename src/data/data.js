import car1 from "../assets/cars/car1.png";
import car2 from "../assets/cars/car2.png";
import car3 from "../assets/cars/car3.png";
import car4 from "../assets/cars/car4.png";
import car5 from "../assets/cars/car5.png";
import car6 from "../assets/cars/car6.png";

const cars = [
  {
    id: 1,
    name: "Porsche 911",
    class: "Sports Car",
    description:
      "The Porsche 911 is a true icon in the sports car world, known for its sleek design, impressive performance, and superior handling. It's a two-door, two-seat coupe that's perfect for those who love to feel the wind in their hair and the road beneath their wheels.",
    seats: 2,
    luggage: 2,
    image: car1,
  },
  {
    id: 2,
    name: "BMW 7 Series",
    class: "Luxury Car",
    description:
      "The BMW 7 Series is the ultimate luxury car, offering unparalleled comfort, style, and technology. With its sleek exterior and spacious interior, this four-door sedan is perfect for those who demand the very best in automotive design and performance.",
    seats: 5,
    luggage: 3,
    image: car2,
  },
  {
    id: 3,
    name: "Range Rover Sport",
    class: "SUV",
    description:
      "The Range Rover Sport is a versatile SUV that's perfect for both on and off-road adventures. With its powerful engine and advanced four-wheel drive system, this vehicle can handle any terrain with ease. It's also incredibly spacious, with room for up to seven passengers and plenty of cargo space.",
    seats: 7,
    luggage: 4,
    image: car3,
  },
  {
    id: 4,
    name: "Mercedes-Benz S-Class",
    class: "Luxury Car",
    description:
      "The Mercedes-Benz S-Class is the epitome of luxury and style, with its sleek lines and advanced technology. It's a four-door sedan that's perfect for those who demand the very best in automotive design and performance.",
    seats: 5,
    luggage: 2,
    image: car4,
  },
  {
    id: 5,
    name: "Tesla Model S",
    class: "Electric Car",
    description:
      "The Tesla Model S is a high-performance electric car that's perfect for those who want to combine luxury with sustainability. With its sleek design and advanced technology, this four-door sedan offers a smooth and quiet ride. It also has plenty of space for passengers and luggage.",
    seats: 5,
    luggage: 2,
    image: car5,
  },
  {
    id: 6,
    name: "Bentley Bentayga",
    class: "Luxury SUV",
    description:
      "The Bentley Bentayga is the ultimate luxury SUV, offering unparalleled comfort, style, and performance. With its powerful engine and advanced technology, this vehicle can handle any terrain with ease. It's also incredibly spacious, with room for up to seven passengers and plenty of cargo space.",
    seats: 7,
    luggage: 4,
    image: car6,
  },
];

// -----------------------------------------testimonials--------------------------------

export const testimonials = [
  {
    name: "John Moo",
    description:
      "I recently bought a car through YourCar and I was blown away by their exceptional service. The staff were friendly and knowledgeable, and they helped me find the perfect car for my needs. I highly recommend YourCar to anyone looking for a luxury car buying experience.",
    image: car1,
    place: "Las Vegas",
  },
  {
    name: "Sarah Ahmed",
    description:
      "YourCar made selling my car a breeze. They handled all the paperwork and negotiations, and I received a fair price for my vehicle. I would definitely use their services again in the future.",
    image: car2,
    place: "New York",
  },
  {
    name: "Michael Khalil",
    description:
      "I had a wonderful experience renting a car from YourCar. The car was in excellent condition and the pickup and drop-off process was seamless. I highly recommend them for anyone in need of a luxury car rental.",
    image: car3,
    place: "Dubai",
  },
  {
    name: "Emily Han",
    description:
      "YourCar exceeded my expectations in every way. From the moment I walked in, I felt like a valued customer. The staff went above and beyond to ensure that I found the car of my dreams. I couldn't be happier with my purchase and I highly recommend YourCar to anyone in the market for a luxury vehicle.",
    image: car4,
    place: "Paris",
  },
];

export default cars;
