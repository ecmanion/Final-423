import {} from "./nav.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faShoppingCart, faHeart, faUser } from "@fortawesome/free-solid-svg-icons"

function Navigation (){
    return(
        <nav>
        <div className="navLeft">
            <h3>Welcome to Grocery List</h3>
        </div>
        <div className="navIcons">
            <div className="icons">
            <a className="anchor" href="signIn">Sign In</a>
            <FontAwesomeIcon icon={faUser} />
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faShoppingCart} />
            </div>
            <div className="searchBar">
                <h5 className="search">Search</h5>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
        </div>
        </nav>
    );
}

export default Navigation;