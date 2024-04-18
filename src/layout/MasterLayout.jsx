import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaPlus, FaTwitter } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Loader from "../components/Loader";
import { FaXmark } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";

const MasterLayout = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const sidebarControl = () => {
    setSidebar(!sidebar);
  };
  return (
    <section className="root">
      <Loader />
      {/* Header */}
      <header>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-4">
                <div className="logo">
                  <img src="/img/logo-inverse.png" alt="" />
                </div>
              </div>
              <div className="col-8">
                <nav className="main">
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
                <div className="menu-icon" onClick={sidebarControl}>
                  <FiMenu />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* sidebar */}
        <div className={`sidebar ${sidebar && "active"}`}>
          <nav>
            <div className="inner">
              <div className="logo">
                <img src="/img/logo-inverse.png" alt="" />
                <div className="close" onClick={sidebarControl}>
                  <FaXmark />
                </div>
              </div>
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
            </div>
          </nav>
        </div>
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
                <div className="col-xl-4">
                  <div>
                    <p>themesoft69 © 2024. All Rights Reserved.</p>
                  </div>
                </div>
                <div className="col-xl-4">
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
                <div className="col-xl-4">
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
