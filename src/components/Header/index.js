import { Link } from "react-router-dom";
import "./header.css";

function Header() {
    return (
        <header>
            <h1><Link to="/">Akatsuki members</Link></h1>
            <span><Link to="/favorites">My characters</Link></span>
        </header>
    )
}

export default Header;