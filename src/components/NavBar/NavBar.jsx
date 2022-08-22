import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Work</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
    </>
  )
}

export default NavBar
