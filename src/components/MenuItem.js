import "../styles/MenuItem.css";
const MenuItem = ({ image, name, price }) => {
  return (
    <div className="menuItem">
      <img className="menuItemImage" src={image} alt="" />
      <div className="cardContent">
        <h2 className="menuItemTitle">{name}</h2>
        <div className="menuItemPrice">
          <span className="font-sans font-bold">&#8377;</span> {price}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
