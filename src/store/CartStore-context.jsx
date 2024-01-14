import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartProductList, setCartProductList] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

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
  const addToCart = (product, id) => {
    let newProduct = { ...product, amount: 1 };
    const ProductFound = cartProductList.find((item) => {
      return item.id === parseInt(id);
    });
    if (ProductFound) {
      const newCart = cartProductList.map((item) => {
        if (item.id === parseInt(id)) {
          return { ...item, amount: ProductFound.amount + 1 };
        } else {
          return item;
        }
      });
      setCartProductList(newCart);
    } else {
      setCartProductList([...cartProductList, newProduct]);
    }
  };

  //increases the quantity of product
  const incrementProduct = (product, id) => {
    addToCart(product, id);
  };

  //decreases the quantity of product
  const decrementProduct = (product, id) => {
    if (product.amount <= 1) {
      removeFromCart(id);
      return;
    }
    let newCart = cartProductList.map((item) => {
      if (item.id === id) {
        return { ...item, amount: product.amount - 1 };
      } else {
        return item;
      }
    });
    setCartProductList(newCart);
  };

  //makes the cart empty
  const emptyCart = () => {
    setCartProductList([]);
  };

  //removes a product from cart
  const removeFromCart = (id) => {
    let newCart = cartProductList.filter((item) => {
      return item.id !== id;
    });
    setCartProductList(newCart);
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
