import { useContext, useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Products.css";
import { ProductListContext } from "../../store/Product-context";

const Products = () => {
  const { productList } = useContext(ProductListContext);
  return (
    <>
      <div className="products-heading">Our Products</div>
      <div className="products-container">
        {productList.map((item) => (
          <Product key={item.id} item={item}></Product>
        ))}
      </div>
    </>
  );
};

export default Products;
