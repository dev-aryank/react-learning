import logo from "../assets/logo.svg";

const Navbar = () => {
    return (
        <nav>
            <a href="#">
                <img src={logo} alt="" />
            </a>
            <ul id="menu-bar">
                <li id="menu-item">Features</li>
                <li id="menu-item">Pricing</li>
                <li id="menu-item">What's New</li>
            </ul>
            <div id="auth-container">
                <button>Login</button>
                <button>Sign up</button>
            </div>
        </nav>
    );
};

export default Navbar;
