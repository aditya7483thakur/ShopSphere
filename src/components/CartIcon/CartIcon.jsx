import { useContext } from "react";
import { BsCart2 } from "react-icons/bs";
import { CartContext } from "../../store/CartStore-context";

const CartIcon = () => {
  const { itemAmount } = useContext(CartContext);

  return (
    <button
      className="btn bg-transparent"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
      style={{
        color: "white",
        fontSize: "100%",
        padding: "0px",
        marginTop: "-10px",
      }}
    >
      <BsCart2 />
      <span
        className="badge rounded-pill text-bg-danger"
        style={{
          fontSize: "10px",
          position: "absolute",
          top: "12px",
          right: "-5px",
        }}
      >
        {itemAmount}
      </span>
    </button>
  );
};
export default CartIcon;
