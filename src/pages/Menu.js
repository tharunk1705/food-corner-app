import MenuList from "../data/data";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menuTitle">
        <h2>Our Menu</h2>
        <hr className="my-4" />
      </div>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              id={menuItem.id}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
