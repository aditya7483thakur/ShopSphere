import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Carousel from "./pages/Carousel/Carousel.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
import ProductListProdiver from "./store/Product-context.jsx";
import CartContextProvider from "./store/CartStore-context.jsx";
import Category from "./components/Category/Category.jsx";
import SearchResults from "./components/SearchResults/SearchResults.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import UserWrapper from "./store/User-context.jsx";
import UserDetails from "./pages/UserDetails/UserDetails.jsx";
import CheckoutForm from "./pages/CheckoutPages/CheckoutForm.jsx";
import Return from "./pages/CheckoutPages/Return.jsx";
import About from "./pages/About/About.jsx";
import Success from "./pages/CheckoutPages/Success.jsx";
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
        path: "/about",
        element: <About />,
      },
      {
        path: "/search-results",
        element: <SearchResults />,
      },
      {
        path: "/user-details",
        element: <UserDetails />,
      },
      {
        path: "/check",
        element: <CheckoutForm />,
      },
      {
        path: "/return",
        element: <Return />,
      },

      {
        path: "/success",
        element: <Success />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserWrapper>
      <CartContextProvider>
        <ProductListProdiver>
          <RouterProvider router={router} />
        </ProductListProdiver>
      </CartContextProvider>
    </UserWrapper>
  </React.StrictMode>
);
