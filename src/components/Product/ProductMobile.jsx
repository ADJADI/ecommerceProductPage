import React, { useState } from "react";
import MainData from "../home/MainData";
import leftArrow from "../../assets/images/icon-previous.svg";
import rightArrow from "../../assets/images/icon-next.svg";

export default function ProductMobile() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % MainData[0].bigScreenUrls.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + MainData[0].bigScreenUrls.length) %
        MainData[0].bigScreenUrls.length
    );
  };

  return (
    <div className="">
      <div className="relative h-[320px] bg-blue-900">
        <img
          src={MainData[0].bigScreenUrls[currentImageIndex]}
          alt={`Product View ${currentImageIndex + 1}`}
          className="object-cover h-full w-full"
        />

        <div className="absolute w-full h-full top-0 flex items-center ">
          <div className="flex justify-between px-5 w-full ">
            <button
              onClick={prevImage}
              className="rounded-full  h-8 w-8 bg-white shadow-md flex items-center justify-center"
            >
              <img src={leftArrow} alt="" className="h-3 w-3" />
            </button>
            <button
              onClick={nextImage}
              className="rounded-full h-8 w-8  bg-white shadow-md flex items-center justify-center"
            >
              <img src={rightArrow} alt="" className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
