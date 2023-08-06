import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          {/* <Link className="navbar-brand" to="/">
            {props.title}
          </Link> */}
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
                <a className="nav-link active" aria-current="page" href="#">
                  {props.Hometxt}
                </a>
                {/* <Link className="nav-link active" aria-current="page" to="/">
                  {props.Hometxt}
                </Link> */}
              </li>
              {/* <a className="nav-link" href="/about">
                {props.aboutText}
              </a> */}
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li> */}
            </ul>
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              } mx-2`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable Dark Mode
              </label>
            </div>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

NavBar.defaultProps = { title: "default title", aboutText: "default about" };