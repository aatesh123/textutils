import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

//props are the things we pass in components these are coming from app.js
export default function Navbar(props) {
    return (
      //  1* point 1 is when we pass object like in this mode={mode} is coming form app.js we use this syntax
      // 2 point is when we pass string like in this title="MyApp" is coming   we use syntax
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>

            </ul>
            <div className={` mx-3 form-check form-switch text-${props.mode==='light'?'dark':'light'}` }>
           <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
           <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`enable Dark mode`}</label>
            </div>
  
          </div>
        </div>
      </nav>
    )
}

Navbar.prototypes ={
    title: PropTypes.string.isRequired
}
Navbar.defaultProps ={
    title: 'set title here'
}
