import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand"href="/">{props.tittle}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page"href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"href="/TiffinProviderlist">Tiffin</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"href="/SignUp">SignUp</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"href="/Login">LogIn</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"href="/">{props.aboutText}</a>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}
Navbar.propTypes={tittle:PropTypes.string,
                    aboutText:PropTypes.string}

// src/components/NavBar.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const NavBar = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/TiffinProvider">Tiffin Provider</Link>
//         </li>
        
//         <li>
//           <Link to="/Login">Login</Link>
//         </li>
//         <li>
//           <Link to="/Signup">Signup</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default NavBar;

