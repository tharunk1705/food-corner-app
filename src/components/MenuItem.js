import { useContext } from "react";
import CartContext from "../store/cart-context";
import "../styles/MenuItem.css";
import MenuItemForm from "./MenuItemForm";
const MenuItem = ({ id, image, name, price }) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      image: image,
      price: price,
    });
  };
  return (
    <div className="menuItem">
      <img className="menuItemImage" src={image} alt="" />
      <div className="cardContent">
        <h2 className="menuItemTitle">{name}</h2>
        <div className="grid grid-cols-2">
          <div className="menuItemPrice">
            <p>
              <span className="font-sans font-bold">&#8377;</span> {price}
            </p>
          </div>
          <MenuItemForm onAddToCart={addToCartHandler} />
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
