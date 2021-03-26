import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {

  render() {
    let links = (
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/sign-up">
          Signup
        </Link>
      </li>
    );
    let signInSignOut = (
      <form className="d-flex">
        <input
          className="form-control me-2 header-signin"
          onChange={this.handleChange}
          type="text"
          name="email"
          value={this.state.student.email}
          placeholder="Email"
        />
        <input
          className="form-control me-2 header-signin"
          type="password"
          onChange={this.handleChange}
          name="password"
          value={this.state.student.password}
          placeholder="password"
        />
        <button
          className="btn btn-outline-danger"
          onClick={this.login}
          type="button"
          onClick={this.login}
        >
          Sign in
        </button>
      </form>
    );

    if (localStorage.getItem("loggedInUser")) {
      signInSignOut = (
        <button
          className="btn btn-outline-danger"
          onClick={this.signOut}
          type="button"
          onClick={this.login}
        >
          Sign out
        </button>
      );

      links = (
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">
            Home
          </Link>
        </li>
      );
    }

    return (
      <div className="mb-5">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Student Portal
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                {links}
                <li className="nav-item">
                  <Link className="nav-link" to="/about-us">
                    About Us
                  </Link>
                </li>
              </ul>
              {signInSignOut}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
