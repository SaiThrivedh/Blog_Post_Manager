import "../css/navbar.css"
import { Link } from "react-router-dom"
import { Home, LogIn, Info, Phone } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Blog CMS</h2>

      <div className="nav-links">
        <Link to="/" className="nav-link">
          <Home size={16} />
          Home
        </Link>

        <Link to="/about" className="nav-link">
          <Info size={16} />
          About
        </Link>

        <Link to="/contact" className="nav-link">
          <Phone size={16} />
          Contact
        </Link>

        <Link to="/login" className="nav-link">
          <LogIn size={16} />
          Login
        </Link>
      </div>
    </nav>
  )
}