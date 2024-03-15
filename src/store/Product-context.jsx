import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { server } from "../App";
import { UserContext } from "./User-context";

export const ProductListContext = createContext();

//fetching products from api
const ProductListProdiver = ({ children }) => {
  const { isAuthenticated } = useContext(UserContext);
  const [productList, setProductList] = useState([]);

  const fetchProducts = async () => {
    let data;
    if (isAuthenticated) {
      data = await fetch(`${server}/products`);
    } else {
      data = await fetch(`https://fakestoreapi.com/products`);
    }
    let products = await data.json();
    setProductList(products);
  };

  useEffect(() => {
    fetchProducts();
  }, [isAuthenticated]);

  return (
    <ProductListContext.Provider value={{ productList }}>
      {children}
    </ProductListContext.Provider>
  );
};

export default ProductListProdiver;
