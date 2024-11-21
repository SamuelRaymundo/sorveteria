import "./NavBar.css";

const NavBar = () => {

    return (
        <nav className="nav">
            <ul className="nav-links">
                <li><a href="/">Quem somos</a></li>
                <li><a href="/register">Crie uma conta</a></li>
                <li><a href="/product">Nossos produtos</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;

