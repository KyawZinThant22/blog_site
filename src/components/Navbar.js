
import { Link } from "react-router-dom";

const Navbar = () => {

    

    return ( 
        <nav className="navbar">
            <Link to="/" className="header">Thone Nya Blog</Link>

            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" className="create--blog">Create Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;