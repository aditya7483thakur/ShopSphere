import "./ProductDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductListContext } from "../../store/Product-context";
import { CartContext } from "../../store/CartStore-context";
import { UserContext } from "../../store/User-context";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const { isAuthenticated } = useContext(UserContext);
  const navigate = useNavigate();

  const handleAddToCart = (_id) => {
    console.log(_id);
    if (!isAuthenticated) {
      toast.error("Login first");
      navigate("/login");
    } else {
      addToCart(_id);
    }
  };

  let { id } = useParams();

  const { productList } = useContext(ProductListContext);

  const product = productList.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return <div className="not-found">Product Not found</div>;
  }

  return (
    <>
      <div className="FullProduct-container">
        <div className="left-container">
          <div className="left-image-container">
            <img src={product.image} alt="" />
          </div>
        </div>
        <div className="right-container">
          <div className="right-container-title">{product.title}</div>
          <div className="right-container-price">${product.price}</div>
          <div className="right-container-description">
            {product.description}
          </div>
          <div className="product-details-btns">
            <button
              className="product-details-btn"
              onClick={() => handleAddToCart(product._id)}
            >
              Add to cart
            </button>
            <button
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
              className="product-details-btn"
            >
              View cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
