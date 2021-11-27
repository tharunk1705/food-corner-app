import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
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
        <Link to="/" className="icon github">
          <FontAwesomeIcon className="" icon={faGithub} />
        </Link>
        <Link to="/" className="icon insta">
          <FontAwesomeIcon className="" icon={faInstagram} />
        </Link>
        <Link to="/" className="icon twitter">
          <FontAwesomeIcon className="" icon={faTwitter} />
        </Link>
        <a
          href="https://www.linkedin.com/in/tharunk1705/"
          target="blank"
          className="icon linkedin"
        >
          <FontAwesomeIcon className="" icon={faLinkedin} />
        </a>
      </div>
      <p className="text-lg text-secondary font-bold mt-2">
        &copy; 2021 FoodieCorner.com
      </p>
    </div>
  );
};

export default Footer;
