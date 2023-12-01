import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Carousel from "./components/Carousel/Carousel.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";
import ProductListProdiver from "./store/Product-context.jsx";
import CartContextProvider from "./store/CartStore-context.jsx";
import Category from "./components/Category/Category.jsx";
import SearchResults from "./components/SearchResults/SearchResults.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Carousel />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/categories/:category",
        element: <Category />,
      },
      {
        path: "/search-results",
        element: <SearchResults />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartContextProvider>
      <ProductListProdiver>
        <RouterProvider router={router} />
      </ProductListProdiver>
    </CartContextProvider>
  </React.StrictMode>
);
