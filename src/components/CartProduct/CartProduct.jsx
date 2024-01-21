import { CartContext } from "../../store/CartStore-context";
import "./CartProduct.css";
import { useContext } from "react";
import { RxCross1 } from "react-icons/rx";

const CartProduct = ({ item }) => {
  const { incrementProduct, removeFromCart, decrementProduct } =
    useContext(CartContext);
  return (
    <div className="card mb-3 cart-product-container">
      <div className="row g-0 d-flex justify-content-between">
        <div className="col-md-4 cart-product-img">
          <img src={item.image} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8 add-cart-product-content">
          <div className="card-body">
            <div className="body-content-top">
              <h5 className="card-title">{item.title}</h5>
              <div className="cross" onClick={() => removeFromCart(item._id)}>
                <RxCross1 />
              </div>
            </div>
            <div className="body-content-bottom">
              <div className="plus-minus-btn">
                <button onClick={() => decrementProduct(item._id)}>
                  <p>-</p>
                </button>

                <p>{item.amount}</p>
                <button onClick={() => incrementProduct(item._id)}>
                  <p>+</p>
                </button>
              </div>
              <div className="cart-product-price">
                <p style={{ color: "rgb(0,0,0,0.6)" }}>${item.price}</p>
                <p>${(item.price * item.amount).toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
