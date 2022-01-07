import './NavBar.scss';
import { Link } from "react-router-dom";


export default function NavBar(){
    return(
        <div className="navbar">
            <Link className={"nav-item"} to="/Main">Main</Link>
            <Link className={"nav-item"} to="/AddItem">AddItem</Link>
            <Link className={"nav-item"} to="/ShoppingList">ShoppingList</Link>
        </div>
    )
}