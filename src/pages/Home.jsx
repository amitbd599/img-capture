import React from "react";
import MasterLayout from "../layout/MasterLayout";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <MasterLayout>
        {/* Home Inner layout */}
        <section className="hero">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="intro">
                  <h2 className="title">
                    Capture your <br /> won <span>picture and video</span>
                  </h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio blanditiis consequuntur itaque libero temporibus
                    inventore sint atque molestiae eos accusantium! Lorem ipsum
                    dolor, sit amet consectetur adipisicing elit. Distinctio
                    blanditiis consequuntur itaque libero temporibus inventore
                    sint atque molestiae eos accusantium!
                  </p>
                  <div className="list">
                    <ul>
                      <li>
                        <FaArrowAltCircleRight /> Easy to capture your image.
                      </li>
                      <li>
                        <FaArrowAltCircleRight /> Easy to capture your Video.
                      </li>
                      <li>
                        <FaArrowAltCircleRight /> Easy to capture your Video.
                      </li>
                    </ul>
                  </div>
                  <button>Get Started</button>
                </div>
              </div>
              <div className="col-md-5">
                <div className="profile-img">
                  <img src="/img/profile.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* We offer */}
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="offer">
                <h2 className="sub-title">What We Offer</h2>
                <h3 className="title">
                  Access professionally curated digital assets.
                </h3>
              </div>

              <div className="capture">
                <div className="img-body">
                  <img className="img-fluid" src="/img/webcam-1.jpg" alt="" />
                  <h2>
                    <a href="/capture-photo">Capture Photo</a>
                  </h2>
                </div>
                <div className="img-body">
                  <img className="img-fluid" src="/img/webcam-2.jpg" alt="" />
                  <h2>
                    <a href="/capture-video">Capture Video</a>
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
                  Access professionally curated <br /> digital assets.
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="feature-item">
                <div className="img_wrap">
                  <img
                    className="img-fluid"
                    src="/img/feature-illustration-1-dark.svg"
                    alt="img"
                  />
                </div>
                <h3 className="item_title">Versatile Typography Options</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-item">
                <div className="img_wrap">
                  <img
                    className="img-fluid"
                    src="/img/feature-illustration-2-dark.svg"
                    alt="img"
                  />
                </div>
                <h3 className="item_title">Versatile Typography Options</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-item">
                <div className="img_wrap">
                  <img
                    className="img-fluid"
                    src="/img/feature-illustration-3-dark.svg"
                    alt="img"
                  />
                </div>
                <h3 className="item_title">Versatile Typography Options</h3>
              </div>
            </div>
          </div>
        </div>
      </MasterLayout>
    </>
  );
};

export default Home;
