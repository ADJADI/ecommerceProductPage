import React, { useState, useEffect } from "react";
import MainData from "./MainData";
import ProductMobile from "../Product/ProductMobile";
import ProductDesktop from "../Product/ProductDesktop";
import minus from "../../assets/images/icon-minus.svg";
import plus from "../..//assets/images/icon-plus.svg";
import cart from "../../assets/images/icon-cart.svg";

export default function Main() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [counterValue, setCounterValue] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMore = () => {
    setCounterValue(counterValue + 1);
  };
  const handleLess = () => {
    if (counterValue >= 1) {
      setCounterValue(counterValue - 1);
    }
  };

  return (
    <div className="h-screen">
      {isMobile ? <ProductMobile /> : <ProductDesktop />}
      <div className="p-5">
        {MainData.map((el, index) => (
          <div key={index} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2 ">
              <h3 className="text-xs font-semibold text-Orange">
                SNEAKER COMPANY
              </h3>
              <h2 className="text-3xl font-semibold">{el.title}</h2>
              <p className=" text-Darkgrayishblue text-sixteen">
                {el.description}
              </p>
            </div>
            <div className="flex gap-10 items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-semibold">
                  ${((el.initialPrice * el.discount) / 100).toFixed(2)}
                </span>
                <span className="text-Orange font-semibold px-2 bg-PaleOrange rounded-md">
                  {el.discount}%
                </span>
              </div>

              <span className="line-through opacity-50">
                ${el.initialPrice}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex flex-col gap-5 p-5 -mt-5">
        <div className="flex justify-around items-center w-full bg-Lightgrayishblue rounded-xl h-14 shadow-sm">
          <button onClick={handleLess}>
            <img src={minus} alt="" />
          </button>
          <span className=" bg-Lightgrayishblue w-auto text-center font-semibold ">
            {counterValue}
          </span>

          <button onClick={handleMore}>
            <img src={plus} alt="" />
          </button>
        </div>
        <div className="flex items-center justify-center gap-5 rounded-xl bg-Orange h-14 shadow-PaleOrange drop-shadow-sm shadow-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-5 fill-white"
          >
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill-rule="nonzero"
            />
          </svg>

          <h2 className="text-white font-semibold">Add to cart</h2>
        </div>
      </div>
    </div>
  );
}
