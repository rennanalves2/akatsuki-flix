import { Link } from "react-router-dom";
import "./header.css";

function Header() {
    return (
        <header>
            <h1><Link to="/">Akatsuki members</Link></h1>
        </header>
    )
}

export default Header;