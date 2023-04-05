import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../Context/AuthContext'

function Header() {
  let { user, logoutUser } = useContext(AuthContext)
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top shadow">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            {user ? (
              <span class="navbar-text" id='logout' onClick={logoutUser}>
                Logout
              </span>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            )}
          </ul>
          {user && <span class="navbar-text" onClick={logoutUser}>
                Hello {user.username}</span>}
        </div>
      </div>
    </nav>
    /* <div>
      
      <Link to="/">Home</Link>
      <span> | </span>
      {user ? (
        <p onClick={logoutUser}>Logout</p>
      ) : (
        <Link to="/login">Login</Link>
      )}

      {user && <p>Hello {user.username}</p>}
      
    </div> */
  )
}

export default Header