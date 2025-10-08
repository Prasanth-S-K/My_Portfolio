import { Link } from "react-scroll";
import "./index.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link
        to="home"
        smooth={true}
        duration={1000}
        offset={-70}
        activeClass="active"
        spy={true}
        easing="linear"
      >
        <h2 className="logo">My Portfolio</h2>
      </Link>
      <ul className="nav-links">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={1000}
            offset={-70}
            activeClass="active"
            spy={true}
            easing="linear"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={1000}
            offset={-70}
            activeClass="active"
            spy={true}
            easing="linear"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="certificates"
            smooth={true}
            duration={1000}
            offset={-70}
            activeClass="active"
            spy={true}
            easing="linear"
          >
            Certificates
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={1000}
            offset={-70}
            activeClass="active"
            spy={true}
            easing="linear"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={1000}
            offset={-70}
            activeClass="active"
            spy={true}
            easing="linear"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            offset={-70}
            activeClass="active"
            spy={true}
            easing="linear"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
