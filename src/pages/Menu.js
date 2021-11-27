import MenuList from "../data/data";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import { Link } from "react-router-dom";

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
      <div className="flex justify-center items-center">
        <Link to="/cart">
          <button className="bg-white font-bold rounded-lg my-2  text-secondary py-3 px-5 text-xl">
            Go to Cart
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
        </Link>
      </div>
    </div>
  );
};

export default Menu;
