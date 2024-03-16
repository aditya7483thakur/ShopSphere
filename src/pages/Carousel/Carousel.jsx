import "./Carousel.css";
import { FaAnglesDown } from "react-icons/fa6";
import { Hits, useInstantSearch } from "react-instantsearch";
import { Hit } from "../../components/Hit/Hit";

const Carousel = () => {
  const handleScroll = () => {
    // Scroll down by 100 pixels when the button is clicked
    window.scrollTo({
      top: window.scrollY + 650,
      behavior: "smooth",
    });
  };

  //used this hoook to extract nbhits by which i found that how many items are related to
  // to the search and if nbhits is 0 that means nothing found by the search
  const { results } = useInstantSearch();

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
      {results.nbHits === 0 ? (
        <div
          className="d-flex align-items-center
          justify-content-center"
          style={{ minHeight: "40vh", marginBottom: "5rem" }}
        >
          <h1 className="text-center">No match found 🔍</h1>
        </div>
      ) : (
        <Hits hitComponent={Hit} />
      )}
    </>
  );
};

export default Carousel;
