import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => (
    <nav className = "nav nav-justified flex-row flex-sm-column">
        <Link className="nav-link flex-sm-fill" to="/">Home</Link>
        <Link className="nav-link flex-sm-fill" to="/Places">Places</Link>
        <Link className="nav-link flex-sm-fill" to="/">Living</Link>
    </nav>
)
// const Nav = () => (
//     <Col size="sm-12 md-12 lg-2">
//         <ul className="nav flex-column">
//             <li className="nav-item">
//                 <Link className="nav-link" to="/">
//                     Home
//                 </Link>
//             </li>
//             <li className="nav-item">
//                 <Link className="nav-link" to="/Places">
//                     Places
//                 </Link>
//             </li>
//             <li className="nav-item">
//                 <Link className="nav-link" to="/Living">
//                     Living
//                 </Link>
//             </li>
//         </ul>
//     </Col>
// );

export default Nav
