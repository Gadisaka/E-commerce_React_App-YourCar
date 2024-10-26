export const TestimonialCard = (props) => {
  return (
    <div className="w-full md:w-[600px] md:h-[300px] bg-white flex flex-col justify-center items-center px-10 py-10 md:px-10 md:py-10">
      <p className="text-center">{props.note}</p>
      <img src={props.img} className="w-40 my-6" />
      <div className="flex items-center">
        <p className="text-[20px] font-bold mr-4">{props.name}</p>
        <p className="text-[14px] opacity-50">{props.place}</p>
      </div>
    </div>
  );
};
