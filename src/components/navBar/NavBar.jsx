import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="site-title">MySite</div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/register">Log In</a></li>
        <li><a href="/product">Products</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
