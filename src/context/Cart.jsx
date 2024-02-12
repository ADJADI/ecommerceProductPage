import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );
  const [productQuantities, setProductQuantities] = useState({});
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const addToCart = async (item) => {
    try {
      const storedCartItems =
        JSON.parse(localStorage.getItem("cartItems")) || [];
      const isItemInCart = storedCartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (isItemInCart) {
        const updatedCartItems = storedCartItems.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + productQuantities[item.id],
              }
            : cartItem
        );
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
      } else {
        const newItem = { ...item, quantity: productQuantities[item.id] || 1 };
        const updatedCartItems = [...storedCartItems, newItem];
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
      // Handle error
    }
  };

  const removeFromCart = (item) => {
    if (item && item.id) {
      // Check if item is defined and has an 'id' property
      const updatedCartItems = cartItems.filter(
        (cartItem) => cartItem.id !== item.id
      );
      setCartItems(updatedCartItems);
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    if (cartItems && cartItems.length > 0) {
      const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      return totalItems;
    } else {
      return 0; // Cart is empty
    }
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleIncreaseQuantity = (productId) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
  };

  const handleDecreaseQuantity = (productId) => {
    setProductQuantities((prevQuantities) => {
      const newQuantity = (prevQuantities[productId] || 0) - 1;
      return {
        ...prevQuantities,
        [productId]: newQuantity > 0 ? newQuantity : 0,
      };
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartIsOpen,
        setCartIsOpen,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
        productQuantities,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
