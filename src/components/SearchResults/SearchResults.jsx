import { useContext } from "react";
import { ProductListContext } from "../../store/Product-context";
import Product from "../Product/Product";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const queryValue = queryParams.get("query");
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
