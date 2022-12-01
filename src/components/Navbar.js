// Its a component we made for our website
import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


// props are being used
export default function navbar(props) {
  return (
    // firstly below we made it a javascript and then use the props to set the state here 
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-4`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.redred}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Red background</label>
          </div>
          {/* We know the mode is light as we set as default, here we use the ternary operators to build a logic to change the text into light or dark */}
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            {/* Enable is the logic we used in app.js and then passsed it as a prop here */}
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.Enable} />
            <label className="form-check-label" htmlor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>

          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}


// This are the proptypes, in it we define what type the prop is, so that mistakenly we cannot put any other type
navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
}

// This is the default prop of the component, if no value is provided then is will be its default prop
navbar.defaultProps = {
  title: "TitleisDefault",
  aboutText: "About",
};