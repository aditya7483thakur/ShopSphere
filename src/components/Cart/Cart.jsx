import CartProduct from "../CartProduct/CartProduct";
import { RiDeleteBinLine } from "react-icons/ri";
import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../store/CartStore-context";
import SearchResults from "../SearchResults/SearchResults";

const Cart = () => {
  const { cartProductList, itemAmount, totalPrice, emptyCart } =
    useContext(CartContext);

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
              <CartProduct key={item.id} item={item}></CartProduct>
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
          <button className="cart-btn">Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
