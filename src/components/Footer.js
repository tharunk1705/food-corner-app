import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://www.github.com/tharunk1705"
          target="blank"
          className="icon github"
        >
          <FontAwesomeIcon className="" icon={faGithub} />
        </a>
        <a
          href="https://www.instagram.com/the__.dark.__knight/"
          target="blank"
          className="icon insta"
        >
          <FontAwesomeIcon className="" icon={faInstagram} />
        </a>
        <a
          href="https://www.twitter.com/tharunk1705"
          target="blank"
          className="icon twitter"
        >
          <FontAwesomeIcon className="" icon={faTwitter} />
        </a>
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
