import { useContext } from "react";
import { ProductListContext } from "../../store/Product-context";
import Product from "../Product/Product";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const { search } = useLocation();
  console.log(search);
  const queryParams = new URLSearchParams(search);
  console.log(queryParams);
  const queryValue = queryParams.get("query");
  console.log(queryValue);

  const { productList } = useContext(ProductListContext);
  return (
    <>
      <div className="products-heading">{queryValue}</div>
      <div className="products-container">
        {productList.map(
          (item) =>
            item.title.toLowerCase().includes(queryValue.toLowerCase()) && (
              <Product key={item.id} item={item}></Product>
            )
        )}
      </div>
    </>
  );
};
export default SearchResults;
