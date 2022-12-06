import Header from "../Header";
import Footer from "../Footer";
import {Link} from "react-router-dom";
import "../../styles/Error.css";

const Error = () => {
    return (
        <>
            <Header/>
            <div className="body error">
                <div className="error__title"><span>404</span></div>
                <div className="detail"><span>Oups! La page que vous demandez n'existe pas.</span></div>
                <Link to="/" className="link__home">Retourner sur la page d’accueil</Link>
            </div>
            <Footer />
        </>
    )
}

export default Error;