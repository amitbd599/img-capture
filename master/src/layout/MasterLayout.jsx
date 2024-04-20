import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
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
              <div className="col-9 col-md-4">
                <div className="logo">
                  <Link to={"/"}>
                    <img src="/img/logo-inverse.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-3 col-md-8">
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
                    <li>
                      <NavLink
                        to="/audio-recording"
                        className={(navData) => navData.isActive && "active"}
                      >
                        Audio Recording
                      </NavLink>
                    </li>
                  </ul>
                </nav>
                <div className="menu-icon">
                  <FiMenu onClick={sidebarControl} />
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
                <li>
                  <NavLink
                    to="/audio-recording"
                    className={(navData) => navData.isActive && "active"}
                  >
                    Audio Recording
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
                So let's get started <br /> with FixLab
              </h2>
              <p>
                By using this application of ours, you can do all the multimedia
                tasks properly
              </p>
            </div>
            <div className="top-footer mt-3">
              <div className="row">
                <div className="col-xl-6">
                  <div>
                    <p>themesoft69 © 2024. All Rights Reserved.</p>
                  </div>
                </div>

                <div className="col-xl-6">
                  <div className="social">
                    <ul>
                      <li>
                        <Link to="#">
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <FaTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <FaLinkedinIn />
                        </Link>
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
