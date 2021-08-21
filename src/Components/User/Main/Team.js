import React from "react";
import { Link } from "react-router-dom";

export default function Team() {
  return (
    <div>
      <div className="clearfix" />
      {/* Start breadcrumb
    ============================================= */}
      <div
        className="site-breadcrumb-title"
        style={{ background: "url(assets/img/breadcrumb/breadcrumb.jpg)" }}
      >
        <h2>Team Page</h2>
      </div>
      {/*  End breadcrumb */}
      <div className="single-area clearfix">
        {/* Start Team
		============================================= */}
        <div className="team-area tm-page bg de-padding">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 offset-xl-2">
                <div className="site-title text-center">
                  <span className="hero-p1">Team Member</span>
                  <h2>
                    Our business Consulting Company that can{" "}
                    <span> Product Employ</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="team-wrapper grid-3">
              <div className="team-box">
                <div className="team-img">
                  <img src="assets/img/team/01.jpg" alt="thumb" />
                </div>
                <div className="team-info">
                  <h4>Sarrison Samuel</h4>
                  <span>Marketing Officer</span>
                  <ul className="team-social">
                    <li>
                      <Link to="#">
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-box">
                <div className="team-img">
                  <img src="assets/img/team/02.jpg" alt="thumb" />
                </div>
                <div className="team-info">
                  <h4>Warrison Samuel</h4>
                  <span>CEO &amp; Founder</span>
                  <ul className="team-social">
                    <li>
                      <Link to="#">
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-box">
                <div className="team-img">
                  <img src="assets/img/team/03.jpg" alt="thumb" />
                </div>
                <div className="team-info">
                  <h4>Harrison Samuel</h4>
                  <span>Support Membar</span>
                  <ul className="team-social">
                    <li>
                      <Link to="#">
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Team*/}
      </div>
    </div>
  );
}
