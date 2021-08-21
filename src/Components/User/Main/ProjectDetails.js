import React from "react";
import { Link } from "react-router-dom";

export default function ProjectDetails() {
  return (
    <div className="clearfix" >
      {/* Start breadcrumb
        ============================================= */}
      <div className="site-breadcrumb-title" style={{ background: "url(assets/img/breadcrumb/breadcrumb.jpg)" }}>
        <h2>Project Details</h2>
      </div>
      {/*  End breadcrumb */}
      <div className="single-area de-padding clearfix">
        {/* Start Single
		============================================= */}
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="single-content">
                <div className="single-page-img">
                  <img src="assets/img/singlepost/single.jpg" alt="thumb" />
                </div>
                <h2 className="single-content-title">
                  Four ways cheer yourself Blue Monday!
                </h2>
                <div className="single-content-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    ali Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irures dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat nonm proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborumLorem ipsum dolor.
                  </p>
                  <div className="project-opt grid-2">
                    <div className="project-opt-box">
                      <i className="flaticon-source" />
                      <h4>PPC Advertising</h4>
                      <p>
                        Create, publish, and romoteng ontent to generate more
                      </p>
                    </div>
                    <div className="project-opt-box">
                      <i className="flaticon-folder" />
                      <h4>Cloud</h4>
                      <p>
                        Create, publish, and romoteng ontent to generate more
                      </p>
                    </div>
                    <div className="project-opt-box">
                      <i className="flaticon-idea-1" />
                      <h4>monitoring</h4>
                      <p>
                        Create, publish, and romoteng ontent to generate more
                      </p>
                    </div>
                    <div className="project-opt-box">
                      <i className="flaticon-technical-support" />
                      <h4>Project Creation</h4>
                      <p>
                        Create, publish, and romoteng ontent to generate more
                      </p>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    ali Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irures dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat nonm proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborumLorem ipsum dolor.
                  </p>
                </div>
                <div className="single-content-share">
                  <h5>Share:</h5>
                  <ul className="team-social">
                    <li>
                      <Link to="#">
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fas fa-envelope" />
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
            <div className="col-xl-4">
              <aside className="sidebar">
                {/*Search*/}
                <div className="sidebar-widget search">
                  <form>
                    <input type="text" placeholder="Search" />
                    <button className="sub-btn">
                      <i className="fas fa-search" />
                    </button>
                  </form>
                </div>
                {/*Recent Post*/}
                <div className="sidebar-widget recent-post">
                  <h4 className="widget-title">Recent Posts</h4>
                  <div className="recent-post-content">
                    <div className="recent-post-single">
                      <div className="recent-post-img">
                        <img
                          src="assets/img/singlepost/post-1.png"
                          alt="thumb"
                        />
                      </div>
                      <div className="recent-post-info">
                        <span>jan 06 2020</span>
                        <h5>Ye on properly handsome returned throwing am</h5>
                      </div>
                    </div>
                    <div className="recent-post-single">
                      <div className="recent-post-img">
                        <img
                          src="assets/img/singlepost/post-2.png"
                          alt="thumb"
                        />
                      </div>
                      <div className="recent-post-info">
                        <span>jan 06 2020</span>
                        <h5>
                          without wishing he of picture no exposed talking
                        </h5>
                      </div>
                    </div>
                    <div className="recent-post-single">
                      <div className="recent-post-img">
                        <img
                          src="assets/img/singlepost/post-3.png"
                          alt="thumb"
                        />
                      </div>
                      <div className="recent-post-info">
                        <span>jan 06 2020</span>
                        <h5>
                          Offered say visited elderly and. Waited period are
                        </h5>
                      </div>
                    </div>
                    <div className="recent-post-single">
                      <div className="recent-post-img">
                        <img
                          src="assets/img/singlepost/post-4.png"
                          alt="thumb"
                        />
                      </div>
                      <div className="recent-post-info">
                        <span>jan 06 2020</span>
                        <h5>
                          Herself too improve winding ask expense Spending
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Categories*/}
                <div className="sidebar-widget cate">
                  <h4 className="widget-title">Categories</h4>
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="fas fa-tags" />
                        Success Stories
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fas fa-tags" />
                        Gym Personal Trainer
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fas fa-tags" />
                        Workout
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fas fa-tags" />
                        Excercies
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fas fa-tags" />
                        Healthy Living
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fas fa-tags" />
                        Nutrition &amp; Weight Loss
                      </Link>
                    </li>
                  </ul>
                </div>
                {/*Tags*/}
                <div className="sidebar-widget Tags">
                  <h4 className="widget-title">Tags</h4>
                  <ul>
                    <li>
                      <Link to="#">Graphic Design</Link>
                    </li>
                    <li>
                      <Link to="#">Web Design</Link>
                    </li>
                    <li>
                      <Link to="#">HTML</Link>
                    </li>
                    <li>
                      <Link to="#">Graphic Design</Link>
                    </li>
                    <li>
                      <Link to="#">Graphic Design</Link>
                    </li>
                    <li>
                      <Link to="#">Web Design</Link>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
        {/* End Single*/}
      </div>
    </div>
  );
}
