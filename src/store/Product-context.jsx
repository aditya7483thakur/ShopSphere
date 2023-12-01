import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ProductListContext = createContext();

const ProductListProdiver = ({ children }) => {
  const [productList, setProductList] = useState([]);

  const fetchProducts = async () => {
    let data = await fetch("https://fakestoreapi.com/products");
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
