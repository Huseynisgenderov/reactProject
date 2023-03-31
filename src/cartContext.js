import { createContext, useState, useEffect } from "react";
import axios from "axios";

//swal
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

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
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Added to the card'
    })
  
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
