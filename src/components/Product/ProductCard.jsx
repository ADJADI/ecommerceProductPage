import { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import minus from "../../assets/images/icon-minus.svg";
import plus from "../../assets/images/icon-plus.svg";
import MainData from "../home/MainData";
import { CartContext } from "../../context/Cart";
const ProductCard = ({ productData }) => {
  const {
    cartItems,
    addToCart,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    productQuantities,
  } = useContext(CartContext);

  const handleAddToCart = () => {
    const quantity = productQuantities[productData.id] || 0;
    if (quantity > 0) {
      addToCart(productData);
    }
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-5 xl:gap-10" key={productData.id}>
        <div className="flex flex-col gap-2 xl:gap-6 ">
          <h3 className="text-xs font-semibold text-Orange">SNEAKER COMPANY</h3>
          <h2 className="text-3xl font-semibold xl:text-4xl">
            {productData.title}
          </h2>
          <p className=" text-Darkgrayishblue text-sixteen xl:text-md">
            {productData.description}
          </p>
        </div>
        <div className="flex flex-col xs:flex-row justify-between sm:flex-row md:flex-col md:items-start md:gap-0">
          <div className="flex items-center gap-3 ">
            <span className="text-3xl font-semibold">
              $
              {(
                productData.initialPrice -
                (productData.initialPrice * productData.discount) / 100
              ).toFixed(2)}
            </span>

            <span className="text-Orange font-semibold px-2 bg-PaleOrange rounded-md">
              {productData.discount}%
            </span>
          </div>

          <span className="line-through opacity-50">
            ${productData.initialPrice}
          </span>
        </div>
        <div className="w-full flex flex-col gap-5 md:flex-row">
          <div className="flex justify-around items-center w-full bg-Lightgrayishblue rounded-xl h-14 shadow-sm md:w-52">
            <button onClick={() => handleDecreaseQuantity(productData.id)}>
              <img src={minus} alt="" className="p-4" />
            </button>
            <span className=" bg-Lightgrayishblue w-auto text-center font-semibold ">
              {productQuantities[productData.id] || 0}
            </span>

            <button onClick={() => handleIncreaseQuantity(productData.id)}>
              <img src={plus} alt="" className="   p-4" />
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center gap-5 rounded-xl bg-Orange h-14  shadow-PaleOrange drop-shadow-sm shadow-xl md:w-60"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-5 fill-white"
            >
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill-rule="nonzero"
              />
            </svg>
            <span className="font-semibold text-white">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  productData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    initialPrice: PropTypes.string.isRequired,
    discount: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
