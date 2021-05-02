
import {Link} from "react-router-dom";


function Nav() {
    return(
        
            <ul className="nav py-2">
                <li className="nav-item">
                    <Link className="nav-link active text-white" to="/home">Accueil</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active text-white" to="/research">Recherche</Link>
                </li>              
            </ul>
        
    );
}

export default Nav;