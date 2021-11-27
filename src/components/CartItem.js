import "../styles/CartItem.css";
const CartItem = (props) => {
  return (
    <div className="cartItem">
      <div className="">
        <img
          className="cartItemImage"
          src={props.item.image}
          alt={props.item.name}
        />
      </div>
      <div className="cartItemDetails">
        <h1 className="md:text-3xl font-bold">{props.item.name}</h1>
        <div className="cartItemPrice">
          <h3>
            {props.item.amount} X {props.item.price} ={" "}
            <span className="font-sans font-bold mr-2">&#8377;</span>
            {props.item.price * props.item.amount}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
