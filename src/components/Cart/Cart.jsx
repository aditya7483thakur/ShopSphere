import CartProduct from "../CartProduct/CartProduct";
import { RiDeleteBinLine } from "react-icons/ri";
import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../store/CartStore-context";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const { cartProductList, itemAmount, totalPrice, emptyCart } =
    useContext(CartContext);

  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51OXzJbSHKjSZN29ow9OrF60bUiJUu2G3fZFIHOENkOwqzo5B1MSvIUPEEJ1ZhWkyVlpAsdqyVMKZwLRijrDYs4ah00S1cCYi2K"
    );

    const body = {
      products: cartProductList,
    };

    const response = await fetch("http://localhost:4000/users/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
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
          <button className="cart-btn" onClick={makePayment}>
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
