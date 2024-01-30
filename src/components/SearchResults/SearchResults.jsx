import { useContext } from "react";
import { ProductListContext } from "../../store/Product-context";
import Product from "../Product/Product";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  // useLocation provides information about the current URL.
  // const { search } = useLocation() extracts the query string from the URL, which includes parameters.
  const { search } = useLocation();

  // URLSearchParams is a JavaScript API that makes it easy to work with query parameters.
  //  It provides methods to manipulate the query string. (makes the object of query string)
  const queryParams = new URLSearchParams(search);

  // queryParams.get() allows you to retrieve the value of a specific query parameter.
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
