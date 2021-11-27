import { useRef, useState } from "react";
import { toast } from "react-toastify";

const MenuItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;

    const enteredAmountNumber = +enteredAmount;

    amountInputRef.current.value = 1;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
    toast.success("Added to cart", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col p-3 justify-between items-center"
    >
      <label htmlFor="amount" className="text-secondary">
        Amount
      </label>
      <input
        className="border mb-2 border-gray-400 text-center p-2 focus:outline-none px-4 py-1 rounded-lg w-full"
        ref={amountInputRef}
        label="Amount"
        type="number"
        min="1"
        max="5"
        step="1"
        defaultValue="1"
      />
      <button className="bg-secondary px-4 py-2 text-white font-bold rounded-lg transition transform duration-100 focus:scale-110 hover:bg-green-600 focus:shadow-inner cursor-pointer">
        Add to cart
      </button>
      {!amountIsValid && <p>Please enter a valid amount!</p>}
    </form>
  );
};

export default MenuItemForm;
