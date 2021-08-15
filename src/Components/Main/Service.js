import React from "react";
// import { Link } from "react-router-dom";

export default function Service() {
  return (
    <div>
      <div className="clearfix" />
      {/* Start breadcrumb
    ============================================= */}
      <div
        className="site-breadcrumb-title"
        style={{ background: "url(assets/img/breadcrumb/breadcrumb.jpg)" }}
      >
        <h2>Service Page</h2>
      </div>
      {/*  End breadcrumb */}
      <div className="single-area clearfix">
        {/* Start Why Choose
		============================================= */}
        <div className="wh-area de-padding">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 offset-xl-2">
                <div className="site-title text-center">
                  <span className="hero-p1">Best Service</span>
                  <h2>
                    Our Business Consultation Factory.
                    <br />
                    <span>Provied Service</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="wh-wrapper grid-3">
              <div className="wh-box">
                <div className="wh-icon">
                  <img
                    src="assets/img/service/service-icon-1.png"
                    alt="thumb"
                  />
                </div>
                <div className="wh-info">
                  <h4>Business Promotion</h4>
                  <p>
                    We take pride fighting for tre not big insurance companies
                    refu changing faster.
                  </p>
                </div>
              </div>
              <div className="wh-box wh-active">
                <div className="wh-icon">
                  <img
                    src="assets/img/service/service-icon-2.png"
                    alt="thumb"
                  />
                </div>
                <div className="wh-info">
                  <h4>Business Analysis</h4>
                  <p>
                    We take pride fighting for tre not big insurance companies
                    refu changing faster.
                  </p>
                </div>
              </div>
              <div className="wh-box">
                <div className="wh-icon">
                  <img
                    src="assets/img/service/service-icon-3.png"
                    alt="thumb"
                  />
                </div>
                <div className="wh-info">
                  <h4>High Quality Service</h4>
                  <p>
                    We take pride fighting for tre not big insurance companies
                    refu changing faster.
                  </p>
                </div>
              </div>
              <div className="wh-box">
                <div className="wh-icon">
                  <img
                    src="assets/img/service/service-icon-4.png"
                    alt="thumb"
                  />
                </div>
                <div className="wh-info">
                  <h4>Reports Analysis</h4>
                  <p>
                    We take pride fighting for tre not big insurance companies
                    refu changing faster.
                  </p>
                </div>
              </div>
              <div className="wh-box">
                <div className="wh-icon">
                  <img
                    src="assets/img/service/service-icon-5.png"
                    alt="thumb"
                  />
                </div>
                <div className="wh-info">
                  <h4>Project Reporting</h4>
                  <p>
                    We take pride fighting for tre not big insurance companies
                    refu changing faster.
                  </p>
                </div>
              </div>
              <div className="wh-box">
                <div className="wh-icon">
                  <img
                    src="assets/img/service/service-icon-6.png"
                    alt="thumb"
                  />
                </div>
                <div className="wh-info">
                  <h4>Market Research</h4>
                  <p>
                    We take pride fighting for tre not big insurance companies
                    refu changing faster.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Why Choose*/}
      </div>
    </div>
  );
}
