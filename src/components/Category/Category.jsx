import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductListContext } from "../../store/Product-context";
import Product from "../Product/Product";

const Category = () => {
  const { productList } = useContext(ProductListContext);

  const { category } = useParams();
  return (
    <>
      <div className="products-heading">{category}</div>
      <div className="products-container">
        {productList.map(
          (item) =>
            item.category === category && (
              <Product key={item.id} item={item}></Product>
            )
        )}
      </div>
    </>
  );
};

export default Category;
