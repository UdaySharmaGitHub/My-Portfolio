import { NavLink } from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="navbar">
    <ul className="navbar-list">
      <li className="navbar-item">
        <NavLink to="/My-Portfolio/" className="navbar-link" >
          About
        </NavLink>
      </li>

      <li className="navbar-item">
        <NavLink to="/My-Portfolio/resume" className="navbar-link">
          Resume
        </NavLink>
      </li>

      <li className="navbar-item">
        <NavLink to="/My-Portfolio/portfolio" className="navbar-link">
          Portfolio
        </NavLink>
      </li>

      <li className="navbar-item">
        <NavLink to="/My-Portfolio/blogs" className="navbar-link">
          Blog
        </NavLink>
      </li>

      <li className="navbar-item">
        <NavLink to="/My-Portfolio/contact" className="navbar-link">
          Contact
        </NavLink>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar