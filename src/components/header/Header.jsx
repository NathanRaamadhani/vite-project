import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { usePocket } from "../../contexts/PocketContexts";

const Header = () => {
  const { logout } = usePocket();
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <img src="/vite.svg" alt="" />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/about">
                About
              </a>
            </li>
          </ul>

          <button
            className="btn btn-outline-success my-2 my-sm-0"
            onClick={(e) => {
              e.preventDefault();
              logout();
            }}
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
