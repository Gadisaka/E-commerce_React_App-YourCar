import React from "react";
import car1 from "../assets/cars/car1.png";
import useCartStore from "../store/Store";

const Cart = () => {
  const isCartOpen = useCartStore((state) => state.isCartOpen);
  const { cart, addCar, removeCar, deleteCar, clearCart } = useCartStore();

  if (!isCartOpen) return null;

  return (
    <div className="fixed z-[10] right-0 top-0 pt-24 bg-[#12273D] bg-opacity-90 w-[400px] h-full  pb-16 text-[#741906] justify-between flex flex-col  items-center">
      <div className="h-[400px] flex flex-col gap-5 overflow-y-scroll ">
        {cart?.map((car) => (
          <div
            className="flex justify-between bg-white px-7 h-[114px] "
            key={car.id}
          >
            <div className=" flex flex-col justify-center gap-3">
              <h1 className="font-semibold text-xl">{car.class}</h1>
              <p className="font-normal text-sm text-[#232222F5]">{car.name}</p>
              <div className="flex gap-3">
                <div className="flex w-[96px] h-[30px] bg-red-800 text-center font-semibold text-white text-2xl rounded-lg justify-center items-center ">
                  <button className=" w-8 " onClick={() => removeCar(car.id)}>
                    -
                  </button>
                  <p className="bg-white  text-black w-8 h-full ">
                    {car.quantity}
                  </p>
                  <button className=" w-8 " onClick={() => addCar(car)}>
                    +
                  </button>
                </div>
                <button
                  onClick={() => {
                    deleteCar(car.id);
                  }}
                >
                  <svg
                    version="1.1"
                    id="Uploaded to svgrepo.com"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="25px"
                    height="25px"
                    viewBox="0 0 32 32"
                    xml:space="preserve"
                  >
                    <style type="text/css"></style>
                    <path
                      class="feather_een"
                      d="M20,26.5v-16c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v16c0,0.276-0.224,0.5-0.5,0.5
	S20,26.776,20,26.5z M28,5v1c0,0.552-0.448,1-1,1l-1.847,22.166C25.066,30.203,24.2,31,23.16,31H8.84
	c-1.04,0-1.907-0.797-1.993-1.834L5,7C4.448,7,4,6.552,4,6V5c0-1.105,0.895-2,2-2h7V2c0-0.552,0.448-1,1-1h4c0.552,0,1,0.448,1,1v1
	h7C27.105,3,28,3.895,28,5z M14,3h4V2h-4V3z M25.997,7H6.003l1.84,22.083C7.887,29.601,8.32,30,8.84,30H23.16
	c0.52,0,0.953-0.399,0.997-0.917L25.997,7z M27,5c0-0.552-0.448-1-1-1H6C5.448,4,5,4.448,5,5v1h22V5z M17.5,27
	c0.276,0,0.5-0.224,0.5-0.5v-16c0-0.276-0.224-0.5-0.5-0.5S17,10.224,17,10.5v16C17,26.776,17.224,27,17.5,27z M14.5,27
	c0.276,0,0.5-0.224,0.5-0.5v-16c0-0.276-0.224-0.5-0.5-0.5S14,10.224,14,10.5v16C14,26.776,14.224,27,14.5,27z M11.5,27
	c0.276,0,0.5-0.224,0.5-0.5v-16c0-0.276-0.224-0.5-0.5-0.5S11,10.224,11,10.5v16C11,26.776,11.224,27,11.5,27z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <img src={car.image} className=" w-[138px] h-[80px] " alt="" />
            </div>
          </div>
        ))}
      </div>

      <button
        className="flex text-xl font-normal gap-5 bg-[#741906] w-[190px] h-[41px] rounded justify-center items-center text-white  "
        onClick={clearCart}
      >
        Delete All{" "}
        <svg
          version="1.1"
          id="Uploaded to svgrepo.com"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="21px"
          height="24px"
          viewBox="0 0 32 32"
          xml:space="preserve"
          fill="#FFFFFF"
        >
          <style type="text/css"></style>
          <path
            class="stone_een"
            d="M5,7h22c0.552,0,1-0.448,1-1V5c0-1.105-0.895-2-2-2h-7V2c0-0.552-0.448-1-1-1h-4c-0.552,0-1,0.448-1,1v1
	H6C4.895,3,4,3.895,4,5v1C4,6.552,4.448,7,5,7z M14,2h4v1h-4V2z M5.083,8l1.764,21.166C6.934,30.203,7.8,31,8.84,31H23.16
	c1.04,0,1.907-0.797,1.993-1.834L26.917,8H5.083z M12,26.5c0,0.276-0.224,0.5-0.5,0.5S11,26.776,11,26.5v-15
	c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5V26.5z M15,26.5c0,0.276-0.224,0.5-0.5,0.5S14,26.776,14,26.5v-15
	c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5V26.5z M18,26.5c0,0.276-0.224,0.5-0.5,0.5S17,26.776,17,26.5v-15
	c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5V26.5z M21,26.5c0,0.276-0.224,0.5-0.5,0.5S20,26.776,20,26.5v-15
	c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5V26.5z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Cart;
