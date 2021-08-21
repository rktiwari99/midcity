import React from "react";
// import { Link } from "react-router-dom";

export default function Project() {
  return (
    <div>
      <div className="clearfix" />
      {/* Start breadcrumb
    ============================================= */}
      <div
        className="site-breadcrumb-title"
        style={{ background: "url(assets/img/breadcrumb/breadcrumb.jpg)" }}
      >
        <h2>Project Page</h2>
      </div>
      {/*  End breadcrumb */}
      <div className="single-area clearfix">
        {/* Start Project
		============================================= */}
        <div className="contact-area de-padding">
          <div className="row">
            <div className="col-xl-8 offset-xl-2">
              <div className="site-title text-center">
                <span className="hero-p1">Cases &amp; Projects</span>
                <h2>Create and make dream</h2>
              </div>
            </div>
          </div>
          <div className="project-wrapper grid-4">
            <div className="project-box">
              <img src="assets/img/portfolio/proj-1.png" alt="thumb" />
              <div className="project-info">
                <span>Business Strategy</span>
                <h4>Award-winning work</h4>
              </div>
            </div>
            <div className="project-box">
              <img src="assets/img/portfolio/proj-2.png" alt="thumb" />
              <div className="project-info">
                <span>Business Strategy</span>
                <h4>Award-winning work</h4>
              </div>
            </div>
            <div className="project-box">
              <img src="assets/img/portfolio/proj-3.png" alt="thumb" />
              <div className="project-info">
                <span>Business Strategy</span>
                <h4>Award-winning work</h4>
              </div>
            </div>
            <div className="project-box">
              <img src="assets/img/portfolio/proj-4.png" alt="thumb" />
              <div className="project-info">
                <span>Business Strategy</span>
                <h4>Award-winning work</h4>
              </div>
            </div>
            <div className="project-box">
              <img src="assets/img/portfolio/proj-5.png" alt="thumb" />
              <div className="project-info">
                <span>Business Strategy</span>
                <h4>Award-winning work</h4>
              </div>
            </div>
            <div className="project-box">
              <img src="assets/img/portfolio/proj-6.png" alt="thumb" />
              <div className="project-info">
                <span>Business Strategy</span>
                <h4>Award-winning work</h4>
              </div>
            </div>
            <div className="project-box">
              <img src="assets/img/portfolio/proj-7.png" alt="thumb" />
              <div className="project-info">
                <span>Business Strategy</span>
                <h4>Award-winning work</h4>
              </div>
            </div>
            <div className="project-box">
              <img src="assets/img/portfolio/proj-8.png" alt="thumb" />
              <div className="project-info">
                <span>Business Strategy</span>
                <h4>Award-winning work</h4>
              </div>
            </div>
          </div>
        </div>
        {/* End Project*/}
      </div>
    </div>
  );
}
