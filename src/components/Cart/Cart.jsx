import CartProduct from "../CartProduct/CartProduct";
import { RiDeleteBinLine } from "react-icons/ri";
import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../store/CartStore-context";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { UserContext } from "../../store/User-context";

const Cart = () => {
  const { cartProductList, itemAmount, totalPrice, emptyCart } =
    useContext(CartContext);
  const { setPayment } = useContext(UserContext);
  const navigate = useNavigate();

  const makePayment = async () => {
    if (cartProductList.length === 0) {
      return toast("Add Items to cart!", {
        icon: "🛍️",
      });
    }

    setPayment(true);
    navigate("/check");
  };

  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            SHOPPING CART({itemAmount})
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="scrollable-div">
          <div className="offcanvas-body">
            {cartProductList.map((item) => (
              <CartProduct key={item._id} item={item}></CartProduct>
            ))}
          </div>
        </div>
        <div className="cart-total-div">
          <div className="cart-total">
            <div>Total: ${totalPrice.toFixed(2)}</div>
            <button onClick={emptyCart}>
              <RiDeleteBinLine />
            </button>
          </div>
          <button className="cart-btn" onClick={makePayment}>
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
