import { useContext } from "react";
import "./Carousel.css";
import { UserContext } from "../../store/User-context";
import { FaAnglesDown } from "react-icons/fa6";
import { ProductListContext } from "../../store/Product-context";
import { Hits } from "react-instantsearch";
import { Hit } from "../../components/Hit/Hit";

const Carousel = () => {
  const handleScroll = () => {
    // Scroll down by 100 pixels when the button is clicked
    window.scrollTo({
      top: window.scrollY + 650,
      behavior: "smooth",
    });
  };

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
      <Hits hitComponent={Hit} />
    </>
  );
};

export default Carousel;
