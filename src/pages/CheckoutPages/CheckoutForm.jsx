import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { server } from "../../App";
import { CartContext } from "../../store/CartStore-context";
import { useContext, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { UserContext } from "../../store/User-context";

const stripePromise = loadStripe(
  "pk_test_51OXzJbSHKjSZN29ow9OrF60bUiJUu2G3fZFIHOENkOwqzo5B1MSvIUPEEJ1ZhWkyVlpAsdqyVMKZwLRijrDYs4ah00S1cCYi2K"
);

const CheckoutForm = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);
  const { cartProductList } = useContext(CartContext);
  const { payment, setPayment } = useContext(UserContext);

  const body = {
    products: cartProductList,
  };

  if (payment === true) {
    // Create a Checkout Session as soon as the page loads
    fetch(`${server}/users/create-checkout-session`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        setPayment(false);
        setLoading(false);
      });
  }

  return (
    <div id="checkout">
      {loading ? (
        <div
          style={{
            top: 0,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#000000"]}
          />
        </div>
      ) : (
        // Render the EmbeddedCheckoutProvider and EmbeddedCheckout when the data is fetched
        clientSecret && (
          <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={{ clientSecret }}
          >
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        )
      )}
    </div>
  );
};

export default CheckoutForm;
