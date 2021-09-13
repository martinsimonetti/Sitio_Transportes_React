import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <ul className="holder">
                <li><Link to="/" className="activo">Home</Link></li>
                <li><Link to="/nosotros">Nosotros</Link></li>
                {/* <Li><link to="/">Servicios</Link></li> */}
                {/* <Li><link to="/">Galería</Link></li> */}
                <li><Link to="/novedades">Novedades</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;