import { createContext, useContext, useEffect, useState } from "react";
import { server } from "../App";
import toast from "react-hot-toast";
import { UserContext } from "./User-context";
import { Navigate } from "react-router-dom";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [refresh, setRefresh] = useState(false);
  const [cartProductList, setCartProductList] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const { isAuthenticated } = useContext(UserContext);
  useEffect(() => {
    const fetchCartProducts = async () => {
      if (!isAuthenticated) return setCartProductList([]);
      try {
        const response = await fetch(`${server}/cart/cartProducts`, {
          method: "GET",
          credentials: "include",
        });
        const json = await response.json();
        setCartProductList(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCartProducts();
  }, [refresh, isAuthenticated]);

  //counts amount of items in cart
  useEffect(() => {
    let itemCount = 0;
    cartProductList.forEach((element) => {
      itemCount += element.amount;
    });
    setItemAmount(itemCount);
  }, [cartProductList]);

  //counts total price of the products in cart
  useEffect(() => {
    let priceCount = 0;
    cartProductList.forEach((element) => {
      priceCount += element.price * element.amount;
    });
    setTotalPrice(priceCount);
  }, [cartProductList]);

  //Adds a product to cart
  const addToCart = async (_id) => {
    try {
      const response = await fetch(`${server}/cart/addToCart/${_id}`, {
        method: "POST",
        credentials: "include",
      });

      const json = await response.json();

      if (json.success) {
        toast.success(json.message);
        setRefresh((prev) => !prev);
      } else {
        toast.error(json.message);
      }
    } catch (error) {
      toast.error("Some Error occured !");
    }
  };

  //increases the quantity of product
  const incrementProduct = (_id) => {
    addToCart(_id);
  };

  //decreases the quantity of product
  const decrementProduct = async (_id) => {
    try {
      const response = await fetch(`${server}/cart/amount/${_id}/decrement`, {
        method: "PUT",
        credentials: "include",
      });

      const json = await response.json();

      if (json.success) {
        toast.success(json.message);
        setRefresh((prev) => !prev);
      } else {
        toast.error(json.message);
      }
    } catch (error) {
      toast.error("Some Error Occured !");
    }
  };

  //makes the cart empty
  const emptyCart = async () => {
    try {
      const response = await fetch(`${server}/cart/clear-cart`, {
        method: "DELETE",
        credentials: "include",
      });

      const json = await response.json();

      if (json.success) {
        toast.success(json.message);
        setRefresh((prev) => !prev);
      } else {
        toast.error("Some Error Occured !");
      }
    } catch (error) {
      toast.error("Some Error Occured !");
    }
  };

  //removes a product from cart
  const removeFromCart = async (_id) => {
    const response = await fetch(`${server}/cart/deleteCartItem/${_id}`, {
      method: "DELETE",
      credentials: "include",
    });

    const json = await response.json();

    if (json.success) {
      toast.success(json.message);
      setRefresh((prev) => !prev);
    } else {
      toast.error(json.message);
    }
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cartProductList,
        itemAmount,
        totalPrice,
        incrementProduct,
        removeFromCart,
        decrementProduct,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
