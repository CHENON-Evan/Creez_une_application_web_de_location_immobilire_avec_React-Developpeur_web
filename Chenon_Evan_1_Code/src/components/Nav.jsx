import "../styles/Nav.css"
import {Link} from "react-router-dom";

function Nav() {
    return (
        <div className='nav'>
            <Link to="/" className="home">Accueil</Link>
            <Link to="/about" className="about">A propos</Link>
        </div>
    )
}

export default Nav;