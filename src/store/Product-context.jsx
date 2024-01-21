import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { server } from "../App";

export const ProductListContext = createContext();

//fetching products from api
const ProductListProdiver = ({ children }) => {
  const [productList, setProductList] = useState([]);

  const fetchProducts = async () => {
    let data = await fetch(`${server}/products`);
    let products = await data.json();
    setProductList(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductListContext.Provider value={{ productList }}>
      {children}
    </ProductListContext.Provider>
  );
};

export default ProductListProdiver;
