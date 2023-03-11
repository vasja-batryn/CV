import { Link } from "react-router-dom"

export const Navbar = () => {
    return(
        <nav>
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </nav>
    )
}