import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link to="/" className="icon facebook">
          <FontAwesomeIcon className="" icon={faFacebookF} />
        </Link>
        <Link to="/" className="icon insta">
          <FontAwesomeIcon className="" icon={faInstagram} />
        </Link>
        <Link to="/" className="icon twitter">
          <FontAwesomeIcon className="" icon={faTwitter} />
        </Link>
        <Link to="/" className="icon linkedin">
          <FontAwesomeIcon className="" icon={faLinkedin} />
        </Link>
      </div>
      <p className="text-lg text-secondary font-bold mt-2">
        &copy; 2021 FoodCorner.com
      </p>
    </div>
  );
};

export default Footer;
