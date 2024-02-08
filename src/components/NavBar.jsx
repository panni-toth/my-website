import { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./NavBar.css";
import './Button.css';
import Logo from "../images/PanniLogo.PNG";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <nav className="nav" style={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 1 }}>
      <div className="nav-container">
        <Link to="/">
            <img src={Logo} alt='Panni Toth logo' className="small-logo" onClick={closeNav}></img></Link>
        <button className="nav-toggle" onClick={toggleNav}>
          <span className="toggle-icon">&#9776;</span>
        </button>
        <ul className={`nav-ul ${isOpen ? 'open' : ''}`}>
          <CustomLink to="/fashion" className="navbar-button" onClick={toggleNav}>Fashion Design</CustomLink>
          <CustomLink to="/prints" className="navbar-button" onClick={toggleNav}>Print Design</CustomLink>
          <CustomLink to="/web-design" className="navbar-button" onClick={toggleNav}>Web Design</CustomLink>
          <CustomLink to="/front-end" className="navbar-button" onClick={toggleNav}>Front End Development</CustomLink>
          <CustomLink to="/projects" className="navbar-button" onClick={toggleNav}>Other Projects</CustomLink>
          <CustomLink to="/about" className="navbar-button" onClick={toggleNav}>About</CustomLink>
        </ul>
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  );
}

export default NavBar;
