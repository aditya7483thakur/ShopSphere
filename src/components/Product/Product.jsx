import { useContext } from "react";
import "./Product.css";
import { FaStar } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import { CartContext } from "../../store/CartStore-context";

const Product = ({ item }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card card-container">
      <div className="product-img-outerDiv">
        <Link to={`/product/${item.id}`}>
          <div className="product-img-innerDiv">
            <img
              src={item.image}
              className="card-img-top"
              alt="..."
              style={{ width: "8rem" }}
            />
          </div>
        </Link>
        <div className="view-product">
          <Link to={`/product/${item.id}`}>
            <MdOutlineRemoveRedEye />
          </Link>
        </div>
      </div>
      <hr
        style={{
          marginTop: "0",
          marginBottom: "10px",
          borderBottom: "3px solid rgb(0,0,0)",
        }}
      />
      <div className="card-body " style={{ paddingTop: "0" }}>
        <h5 className="product-title">
          <b> {item.title}</b>
        </h5>

        <div className="product-rest-info">
          <p className="ratings">
            {item.rating.rate} <FaStar style={{ color: "red" }} />
          </p>
          <p className="product-price">${item.price}</p>
        </div>
        <button className="add-to-cart" onClick={() => addToCart(item._id)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default Product;
