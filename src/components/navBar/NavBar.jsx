import "./NavBar.css"


const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
          <li>
              <a href="/">Home</a>
              <a href="/login">Log In</a>
              <a href="/product">Products</a>
          </li>
      </ul>
    </nav>
  )
}

export default NavBar