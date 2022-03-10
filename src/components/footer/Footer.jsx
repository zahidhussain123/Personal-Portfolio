import "./footer.css";
import { GrFacebook } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Z_RD
      </a>

      <ul className="permalinks">
        <li>
          {" "}
          <a href="#">Home</a>
        </li>
        <li>
          {" "}
          <a href="#about">About</a>
        </li>
        <li>
          {" "}
          <a href="#experience">Experience</a>
        </li>
        <li>
          {" "}
          <a href="#services">Services</a>
        </li>
        <li>
          {" "}
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          {" "}
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          {" "}
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.facebook.com/profile.php?id=100008183141262"
          target="_blank"
        >
          <GrFacebook />
        </a>
        <a href="https://www.instagram.com/zahidhussain1948" target="_blank">
          <GrInstagram />
        </a>
        <a href="https://github.com/zahidhussain123" target="_blank">
          <FaGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Z_RD.All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
