import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Loader from "../components/Loader";

const MasterLayout = (props) => {
  return (
    <section className="root">
      <Loader />
      {/* Header */}
      <header>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="logo">
                  <img src="/img/logo-inverse.webp" alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <nav>
                  <ul>
                    <li>
                      <NavLink
                        to="/"
                        className={(navData) => navData.isActive && "active"}
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/capture-photo"
                        className={(navData) => navData.isActive && "active"}
                      >
                        Capture Photo
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/capture-video"
                        className={(navData) => navData.isActive && "active"}
                      >
                        Capture Video
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </header>
      {/* Main body */}
      <main>{props.children}</main>
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div>
            <div className="info">
              <h2 className="title">
                Get the best blog stories <br /> into your inbox!
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                eaque.
              </p>
            </div>
            <hr />
            <div className="top-footer">
              <div className="row">
                <div className="col-md-4">
                  <div>
                    <p>themesoft69 © 2024. All Rights Reserved.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="menu">
                    <ul>
                      <li>
                        <Link to={"/"}>Home</Link>
                      </li>
                      <li>
                        <Link to={"/capture-photo"}>Capture Photo</Link>
                      </li>
                      <li>
                        <Link to={"/capture-video"}>Capture Video</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="social">
                    <ul>
                      <li>
                        <a href="#">
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FaLinkedinIn />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default MasterLayout;
