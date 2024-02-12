import React, { useState } from "react";
import MainData from "../home/MainData";

export default function ProductDesktop() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openWindow, setOpenWindow] = useState(false);
  const [selectedItems, setSelectedItem] = useState(null);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleWindowOpening = () => {
    setOpenWindow(!openWindow);
  };

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

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
    <div className="p-5 flex flex-col gap-5 md:max-w-[400px] xl:max-w-[520px] ">
      <div className="">
        <button type="button" onClick={handleWindowOpening}>
          <img
            src={MainData[0].bigScreenUrls[currentImageIndex]}
            alt={`Product View ${currentImageIndex + 1}`}
            className="object-cover rounded-xl"
          />
        </button>
      </div>
      <div className="flex gap-5">
        {MainData[0].smallScreenUrls.map((el, index) => (
          <div className="" key={index}>
            <button type="button" onClick={() => handleImageClick(index)}>
              <img
                src={el}
                alt={`Product View ${currentImageIndex + 1}`}
                className={`cursor-pointer rounded-xl ${
                  selectedItems === index ? "opacity-25" : ""
                }`}
                onClick={() => handleItemClick(index)}
              ></img>
            </button>
          </div>
        ))}
      </div>

      {openWindow && (
        <div className="absolute bg-Verydarkblue h-full bg-opacity-80 top-0 pt-32 left-0 flex w-full justify-center z-50">
          <div className="w-[500px] relative flex flex-col gap-5">
            <div className="absolute w-full top-60 flex items-center ">
              <div className="flex justify-between w-full">
                <button
                  onClick={prevImage}
                  className="rounded-full h-11 w-11 bg-white shadow-xl flex items-center justify-center -ml-5"
                >
                  <div className=" w-full h-full flex items-center justify-center rounded-full ">
                    <svg
                      className="stroke-Verydarkblue hover:stroke-Orange"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      width="20px"
                    >
                      <path d="M11 1 3 9l8 8" strokeWidth="3" fill="none" />
                    </svg>
                  </div>
                </button>
                <button
                  onClick={nextImage}
                  className="rounded-full h-11 w-11 bg-white shadow-xl flex items-center justify-center  -mr-5"
                >
                  <svg
                    className=" h-5 w-3   stroke-Verydarkblue hover:stroke-Orange"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m2 1 8 8-8 8" strokeWidth="3" fill="none" />
                  </svg>
                </button>
              </div>
            </div>
            <button
              className="absolute -top-7   w-full flex justify-end"
              onClick={handleWindowOpening}
            >
              <svg
                className="fill-Darkgrayishblue hover:fill-Orange w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" />
              </svg>
            </button>
            <div className="">
              <img
                src={MainData[0].bigScreenUrls[currentImageIndex]}
                alt={`Product View ${currentImageIndex + 1}`}
                className="w-full object-cover rounded-xl"
              />
            </div>

            <div className="flex gap-5 px-10">
              {MainData[0].smallScreenUrls.map((el, index) => (
                <div className="" key={index}>
                  <button type="button" onClick={() => handleImageClick(index)}>
                    <img
                      src={el}
                      alt={`Product View ${currentImageIndex + 1}`}
                      className={`cursor-pointer rounded-xl ${
                        selectedItems === index ? "opacity-25" : ""
                      }`}
                      onClick={() => handleItemClick(index)}
                    ></img>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
