import { useRef, useState } from "react";

const MenuItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;

    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col p-3 justify-between items-center"
    >
      <input
        className="border mb-2 border-gray-400 p-2 focus:outline-none px-3 py-2 rounded-lg w-3/5"
        ref={amountInputRef}
        label="Amount"
        type="number"
        min="1"
        max="5"
        ste="1"
        defaultValue="1"
      />
      <button className="bg-secondary px-3 py-2 text-white font-bold rounded-lg transition transform duration-100 focus:scale-110 hover:bg-green-600 focus:shadow-inner cursor-pointer">
        Add to cart
      </button>
      {!amountIsValid && <p>Please enter a valid amount!</p>}
    </form>
  );
};

export default MenuItemForm;
