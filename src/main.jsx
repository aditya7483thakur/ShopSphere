import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Carousel from "./components/Carousel/Carousel.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
import ProductListProdiver from "./store/Product-context.jsx";
import CartContextProvider from "./store/CartStore-context.jsx";
import Category from "./components/Category/Category.jsx";
import SearchResults from "./components/SearchResults/SearchResults.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Success from "./pages/Success/Success.jsx";
import Cancel from "./pages/Cancel/Cancel.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
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
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/cancel",
        element: <Cancel />,
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
