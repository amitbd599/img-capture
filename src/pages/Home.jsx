import React from "react";
import MasterLayout from "../layout/MasterLayout";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <MasterLayout>
        {/* Home Inner layout */}
        <section className="hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="intro">
                  <h2 className="title">
                    Capture your <br /> own <span>picture and video</span>
                  </h2>

                  <p>
                    FixLab is a cutting-edge ReactJS tool designed for capturing
                    personal pictures and videos. Its intuitive interface offers
                    instant access to your device's camera, customizable
                    settings, and seamless navigation. With features like media
                    management, privacy protection, and cross-platform
                    compatibility, SnapMaster ensures a smooth and secure
                    capturing experience. Stay tuned for continuous updates and
                    enhancements to elevate your capturing experience further.
                  </p>
                  <div className="list">
                    <ul>
                      <li>
                        <FaArrowAltCircleRight /> Capture your photos instantly.
                      </li>
                      <li>
                        <FaArrowAltCircleRight /> Record your video instantly
                        with download.
                      </li>
                      <li>
                        <FaArrowAltCircleRight /> Audio Record.
                      </li>

                      <li>
                        <FaArrowAltCircleRight /> Easy Controls.
                      </li>
                    </ul>
                  </div>
                  <a href="#get">
                    <button>Get Started</button>
                  </a>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="profile-img">
                  <img className="img-fluid" src="/img/profile.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* We offer */}
        <div className="container" id="get">
          <div className="row">
            <div className="col-12">
              <div className="offer">
                <h2 className="sub-title">What We Offer</h2>
                <h3 className="title">
                  FixLab tools provide capture photos and record audio & videos
                </h3>
              </div>

              <div className="capture">
                <div className="img-body">
                  <img className="img-fluid" src="/img/webcam-1.jpg" alt="" />
                  <h2>
                    <Link to="/capture-photo">Capture Photo</Link>
                  </h2>
                </div>
                <div className="img-body">
                  <img className="img-fluid" src="/img/webcam-2.jpg" alt="" />
                  <h2>
                    <Link to="/capture-video">Capture Video</Link>
                  </h2>
                </div>
                <div className="img-body">
                  <img className="img-fluid" src="/img/webcam-3.jpg" alt="" />
                  <h2>
                    <Link to="/audio-recording">Record Audio</Link>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Feature */}
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="feature">
                <h2 className="sub-title">Our Main Feature</h2>
                <h3 className="title">
                  With FixLab, there's no delay in capturing the perfect shot
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="feature-item">
                <div className="img_wrap">
                  <img
                    className="img-fluid"
                    src="/img/feature-illustration-1-dark.svg"
                    alt="img"
                  />
                </div>
                <h3 className="item_title">
                  Real-time <br /> Preview
                </h3>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="feature-item">
                <div className="img_wrap">
                  <img
                    className="img-fluid"
                    src="/img/feature-illustration-2-dark.svg"
                    alt="img"
                  />
                </div>
                <h3 className="item_title">
                  Record Audio & video with download option
                </h3>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="feature-item">
                <div className="img_wrap">
                  <img
                    className="img-fluid"
                    src="/img/feature-illustration-3-dark.svg"
                    alt="img"
                  />
                </div>
                <h3 className="item_title">
                  Mobile <br /> Responsive
                </h3>
              </div>
            </div>
          </div>
        </div>
      </MasterLayout>
    </>
  );
};

export default Home;
