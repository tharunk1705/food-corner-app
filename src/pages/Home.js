import "../styles/Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <div className="headerContainer">
        <h1 className="text-6xl text-white font-bold m-1">Foodie Corner</h1>
        <p className="text-3xl font-bold text-white  m-1">
          Indian food at a click.
        </p>
        <Link to="/">
          <button className="bg-white px-2 py-2 rounded-lg m-1 text-secondary font-bold uppercase">
            Order Now!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
