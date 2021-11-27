import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../store/cart-context";
import "../styles/Cart.css";
import CartItem from "../components/CartItem";
const Cart = () => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const navigate = useNavigate();
  const checkoutHandler = () => {
    alert(
      "Before proceeding we would like to inform you that this is a dummy application. So don't expect a delivery anytime soon! 😅😜"
    );
    navigate("/");
  };
  return (
    <div className="cart">
      <div className="cartTitle">
        <h1>Cart</h1>
        <h1>
          <span className="font-sans font-bold mr-2">&#8377;</span>
          {totalAmount}
        </h1>
      </div>
      <hr className="my-4" />
      {cartCtx.items.length === 0 ? (
        <h1 className="text-xl font-bold text-white text-center">
          No Items found!
        </h1>
      ) : (
        <>
          <div className="cartList">
            {cartCtx.items.map((item, index) => {
              return <CartItem key={index} item={item} />;
            })}
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={checkoutHandler}
              className="bg-white font-bold rounded-lg my-2  text-secondary py-3 px-5 text-xl"
            >
              Checkout
              <svg
                className="w-6 h-6 inline-block ml-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
