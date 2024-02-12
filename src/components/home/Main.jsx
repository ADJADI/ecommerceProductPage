import React, { useState, useEffect } from "react";
import MainData from "./MainData";
import ProductMobile from "../Product/ProductMobile";
import ProductDesktop from "../Product/ProductDesktop";
import ProductCard from "../Product/ProductCard";
import minus from "../../assets/images/icon-minus.svg";
import plus from "../..//assets/images/icon-plus.svg";

export default function Main() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-full pb-20 md:flex md:justify-center  md:p-10  md:items-center md:h-[700px] xl:gap-20 xl:h-[750px]">
      {isMobile ? <ProductMobile /> : <ProductDesktop />}
      <div className="flex flex-col gap-20 p-5 md:w-[350px] xl:w-[500px] xl:-mt-24">
        {MainData.map((product) => (
          <ProductCard key={product.id} productData={product} />
        ))}
      </div>
    </div>
  );
}
