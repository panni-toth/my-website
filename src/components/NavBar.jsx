import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">Panni Toth</Link>
            <ul className="nav-ul">
                <CustomLink to="/fashion">Fashion Design</CustomLink>
                <CustomLink to="/prints">Print Design</CustomLink>
                <CustomLink to="/web-design">Web Design</CustomLink>
                <CustomLink to="/front-end">Front End Development</CustomLink>
                <CustomLink to="/projects">Other Projects</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
   const resolvedPath = useResolvedPath(to)
   const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
              <Link to={to} {...props}>{children}</Link>
         </li>
    )
}

export default NavBar;