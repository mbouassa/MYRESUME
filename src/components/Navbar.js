import React from 'react'
import {Link} from 'react-router-dom';
const Navbar = () => {
    return(
        <nav>
      <h1>
        <Link to="/"><i></i> Codedec</Link>
      </h1>
      <ul>
        <li><Link to="/Resume">About Us</Link></li>
      </ul>
    </nav>   
    )
}
export default Navbar;