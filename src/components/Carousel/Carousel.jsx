import Products from "../Products/Products";
import "./Carousel.css";

const Carousel = () => {
  return (
    <>
      <div className="carousel-main-div">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/hoka-zinal-13085-1643565794.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img
                src="https://images.unsplash.com/photo-1524282745852-a463fa495a7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGNsb3RoZXxlbnwwfHwwfHx8MA%3D%3D"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="carousel-tag">
          Empower your style, embrace{" "}
          <span style={{ color: "rgb(41 122 184)" }}>convenience</span>. Elevate
          your shopping experience with us, where every click brings you closer
          to the <span style={{ color: "rgb(41 122 184)" }}>extraordinary</span>
          . Welcome to a world where your desires meet{" "}
          <span style={{ color: "rgb(41 122 184)" }}>effortless</span>{" "}
          elegance—shop seamlessly, live beautifully.
        </div>
      </div>
      <Products />
    </>
  );
};

export default Carousel;
