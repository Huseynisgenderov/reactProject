import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const addToCart = (id) => {
    const findProduct = data.find((data) => data.id === id);
    setCart((prev) => {
      return [...prev, findProduct];
    });
  };

  return (
    <CartContext.Provider
      value={{
        data,
        setData,
        cart,
        addToCart,
        setCart,
        totalPrice,
        setTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
