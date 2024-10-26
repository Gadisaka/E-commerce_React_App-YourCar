import GridCard from "../Components/GridCard";
import { carData } from "../data/data2";

export const CardGrid = () => {
  return (
    <div className="w-full min-h-screen md:h-screen  grid grid-cols-1 md:grid-cols-3 grid-rows-3">
      {carData.map((car, i) => {
        return (
          <GridCard
            key={car.id}
            style={`w-full h-full relative group ${i > 2 && "hidden md:block"}`}
            image={car.img}
            name={car.name}
            model={car.model}
            description={car.description}
          />
        );
      })}
    </div>

    // <div className='w-full h-screen bg-red-500'></div>
  );
};
