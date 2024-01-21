import { useContext } from "react";
import "./Carousel.css";
import { UserContext } from "../../store/User-context";
import { Navigate } from "react-router-dom";
import { FaAnglesDown } from "react-icons/fa6";
import Product from "../../components/Product/Product";
import { ProductListContext } from "../../store/Product-context";

const Carousel = () => {
  const { isAuthenticated } = useContext(UserContext);
  const { productList } = useContext(ProductListContext);

  const handleScroll = () => {
    // Scroll down by 100 pixels when the button is clicked
    window.scrollTo({
      top: window.scrollY + 650,
      behavior: "smooth",
    });
  };

  if (!isAuthenticated) return <Navigate to={"/login"} />;

  return (
    <>
      <header className="header">
        <div className="section__container header__container" id="home">
          <h1>
            Elevate Your Lifestyle: Experience Effortless Modernity with
            ShopSphere
          </h1>
          <p>
            Embrace the perfect blend of minimalism and modern charm as you
            explore our curated selection of fashion, electronics, and jewelry.
          </p>

          <div onClick={handleScroll} className="scroll-button">
            <FaAnglesDown />
          </div>
        </div>
      </header>
      <div className="products-heading">Our Products</div>
      <div className="products-container">
        {productList.map((item) => (
          <Product key={item.id} item={item}></Product>
        ))}
      </div>
    </>
  );
};

export default Carousel;
