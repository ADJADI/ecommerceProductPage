import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/Cart";
import deleted from "../../assets/images/icon-delete.svg";

export default function ShoppingCart() {
  const { cartItems, setCartIsOpen, removeFromCart, getCartTotal } =
    useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    setIsEmpty(cartItems.length === 0);
  }, [cartItems]);

  const handleCartButton = () => {
    setIsOpen(!isOpen);
  };

  const closeCart = () => {
    setCartIsOpen(false);
  };

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  return (
    <div className={`flex ${closeCart ? "block" : "hidden"}`}>
      <button className="relative" onClick={handleCartButton}>
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="#69707D"
          />
        </svg>
        <div className="absolute -top-3 -right-3  w-auto px-2 rounded-xl bg-Orange text-white text-xs flex justify-center items-center">
          {getCartTotal()}
        </div>
      </button>
      {isOpen && (
        <div className="shadow-xl">
          <div className="w-full h-[290px] flex flex-col top-16 absolute left-0 z-40 p-2 text-lg md:w-[400px] md:right-0 md:left-auto">
            <div className="w-full items-center bg-white rounded-t-xl">
              <span className="border-b h-16 flex items-center pl-5 font-semibold ">
                <h2 className="">Cart</h2>
              </span>
            </div>
            <div
              className={`bg-white h-full rounded-b-xl shadow-xl drop-shadow-2xl   ${
                cartItems.length > 2 ? "overflow-y-scroll" : ""
              }`}
            >
              <section
                className={`h-full p-5 flex flex-col gap-3  justify-around ${
                  cartItems.length > 2 ? "my-20" : ""
                }`}
              >
                {cartItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between "
                  >
                    <div className="flex gap-3 justify-between items-center ">
                      <div className="">
                        <img
                          className="w-12 h-full rounded-md"
                          src={item.smallScreenUrls[index + 1]}
                          alt=""
                        />
                      </div>
                      <div className="text-xs xs:text-[16px]  text-Darkgrayishblue">
                        <h3>{item.title} </h3>
                        <div className="flex ">
                          <h4>
                            {(
                              item.initialPrice -
                              (item.initialPrice * item.discount) / 100
                            ).toFixed(2)}
                          </h4>
                          <h4> x {item.quantity}</h4>
                          <h4 className="ml-2 font-bold text-black">
                            $
                            {(
                              item.initialPrice -
                              (item.initialPrice * item.discount) / 100
                            ).toFixed(2) * item.quantity}
                          </h4>
                        </div>
                      </div>
                    </div>

                    <button
                      className="px-4 py-2 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                      onClick={() => handleRemoveFromCart(item)}
                    >
                      <img src={deleted} alt="" />
                    </button>
                  </div>
                ))}
                {isEmpty ? (
                  <div className="h-full">
                    <span className="font-semibold text-Darkgrayishblue flex items-center justify-center h-full">
                      Your cart is empty.
                    </span>
                  </div>
                ) : (
                  <div className="flex ">
                    <span className="flex items-center justify-center p-5 rounded-xl bg-Orange text-white text-sm w-full">
                      Checkout
                    </span>
                  </div>
                )}
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
