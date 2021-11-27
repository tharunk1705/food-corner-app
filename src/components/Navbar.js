import leaf from "../assets/leaf.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const burgerMenuClickHandler = () => {
    const navMenu = document.getElementById("navMenu");
    if (navMenu.classList.contains("hidden")) {
      navMenu.classList.remove("hidden");
    } else {
      navMenu.classList.add("hidden");
    }
  };

  return (
    <div className="nav">
      <div className="leftSide">
        <Link to="/">
          <div className="leftSideChildren">
            <img className="w-8 h-8" src={leaf} alt="Leaf Logo" />
            <h2 className="mx-2  text-secondary">Foodie Corner</h2>
          </div>
        </Link>
      </div>
      <div className="burgerMenu md:hidden flex items-center flex-row-reverse">
        <svg
          className="w-6 text-secondary mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          onClick={burgerMenuClickHandler}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </div>
      <div className="rightSide hidden md:block text-secondary" id="navMenu">
        <div className="navList">
          <Link className="navListItem " to="/">
            Home
            <svg
              className="w-5 inline-block ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>
          </Link>
          <Link
            className="navListItem hover:border-b-4 hover:border-secondary"
            to="/menu"
          >
            Menu
            <svg
              className="w-5 inline-block ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              ></path>
            </svg>
          </Link>
          <Link
            className="navListItem hover:border-b-4 hover:border-secondary"
            to="/about"
          >
            About
            <svg
              className="w-5 inline-block ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </Link>
          <Link
            className="navListItem hover:border-b-4 hover:border-secondary"
            to="/contact"
          >
            Contact
            <svg
              className="w-5 inline-block ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
