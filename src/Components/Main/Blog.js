import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div>
      <div className="clearfix" />
      {/* Start breadcrumb
    ============================================= */}
      <div
        className="site-breadcrumb-title"
        style={{ background: "url(assets/img/breadcrumb/breadcrumb.jpg)" }}
      >
        <h2>Blog Page</h2>
      </div>
      {/*  End breadcrumb */}
      <div className="single-area de-padding clearfix">
        {/* Start Single
		============================================= */}
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="single-blog">
                <div className="single-content">
                  <div className="single-page-img">
                    <img src="assets/img/singlepost/single.jpg" alt="thumb" />
                  </div>
                  <Link to="single.html">
                    <h2 className="single-content-title">
                      Four ways cheer yourself Blue Monday!
                    </h2>
                  </Link>
                  <div className="single-page-meta-content">
                    <ul>
                      <li>
                        <div className="single-meta-box single-admin-meta">
                          <img src="assets/img/singlepost/40.png" alt="thumb" />
                          <div className="single-admin-bio">
                            <h5>By: John R Peter</h5>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="single-meta-box single-meta-tags">
                          <Link to="#">Investment,</Link>
                          <Link to="#">tips</Link>
                        </div>
                      </li>
                      <li>
                        <div className="single-meta-box single-meta-date">
                          <i className="fas fa-calendar-alt" />
                          <div className="single-admin-bio">
                            <h5> Jan 20, 2019</h5>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="single-meta-box single-meta-comments">
                          <i className="far fa-comment" />
                          <div className="single-admin-bio">
                            <h5>Comments: 2</h5>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="single-content-text">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolor magna
                      ali Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodot consequa.
                      Duis aute irures dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatuo Excepteur sint
                      occcat cupidatat nonm proident, sunt in culpa qui officia
                      deserunt mollit ani laborumLorer ipsum dolorlamco laboris
                      nisi u aliquip ex ea commodo consequat. Duis autei irure
                      dolor in reprehenderit voluptate velit esugiat nulla
                      pariatur.
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      ali Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi
                    </p>
                  </div>
                  <div className="blog-single-btn">
                    <Link to="single.html" className="theme-btn">
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="single-content">
                  <div className="single-page-img">
                    <img src="assets/img/singlepost/single2.jpg" alt="thumb" />
                  </div>
                  <Link to="single.html">
                    <h2 className="single-content-title">
                      Four ways cheer yourself Blue Monday!
                    </h2>
                  </Link>
                  <div className="single-page-meta-content">
                    <ul>
                      <li>
                        <div className="single-meta-box single-admin-meta">
                          <img src="assets/img/singlepost/40.png" alt="thumb" />
                          <div className="single-admin-bio">
                            <h5>By: John R Peter</h5>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="single-meta-box single-meta-tags">
                          <Link to="#">Investment,</Link>
                          <Link to="#">tips</Link>
                        </div>
                      </li>
                      <li>
                        <div className="single-meta-box single-meta-date">
                          <i className="fas fa-calendar-alt" />
                          <div className="single-admin-bio">
                            <h5> Jan 20, 2019</h5>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="single-meta-box single-meta-comments">
                          <i className="far fa-comment" />
                          <div className="single-admin-bio">
                            <h5>Comments: 2</h5>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="single-content-text">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolor magna
                      ali Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodot consequa.
                      Duis aute irures dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatuo Excepteur sint
                      occcat cupidatat nonm proident, sunt in culpa qui officia
                      deserunt mollit ani laborumLorer ipsum dolorlamco laboris
                      nisi u aliquip ex ea commodo consequat. Duis autei irure
                      dolor in reprehenderit voluptate velit esugiat nulla
                      pariatur.
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      ali Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi
                    </p>
                  </div>
                  <div className="blog-single-btn">
                    <Link to="single.html" className="theme-btn">
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="single-content">
                  <div className="single-page-img">
                    <img src="assets/img/singlepost/single3.jpg" alt="thumb" />
                  </div>
                  <Link to="single.html">
                    <h2 className="single-content-title">
                      Four ways cheer yourself Blue Monday!
                    </h2>
                  </Link>
                  <div className="single-page-meta-content">
                    <ul>
                      <li>
                        <div className="single-meta-box single-admin-meta">
                          <img src="assets/img/singlepost/40.png" alt="thumb" />
                          <div className="single-admin-bio">
                            <h5>By: John R Peter</h5>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="single-meta-box single-meta-tags">
                          <Link to="#">Investment,</Link>
                          <Link to="#">tips</Link>
                        </div>
                      </li>
                      <li>
                        <div className="single-meta-box single-meta-date">
                          <i className="fas fa-calendar-alt" />
                          <div className="single-admin-bio">
                            <h5> Jan 20, 2019</h5>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="single-meta-box single-meta-comments">
                          <i className="far fa-comment" />
                          <div className="single-admin-bio">
                            <h5>Comments: 2</h5>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="single-content-text">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolor magna
                      ali Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodot consequa.
                      Duis aute irures dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatuo Excepteur sint
                      occcat cupidatat nonm proident, sunt in culpa qui officia
                      deserunt mollit ani laborumLorer ipsum dolorlamco laboris
                      nisi u aliquip ex ea commodo consequat. Duis autei irure
                      dolor in reprehenderit voluptate velit esugiat nulla
                      pariatur.
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      ali Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi
                    </p>
                  </div>
                  <div className="blog-single-btn">
                    <Link to="single.html" className="theme-btn">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="pagination-wrapper">
                <div className="pagination">
                  <Link className="prev page-numbers" to="javascript:;">
                    prev
                  </Link>
                  <span aria-current="page" className="page-numbers current">
                    1
                  </span>
                  <Link className="page-numbers" to="javascript:;">
                    2
                  </Link>
                  <Link className="page-numbers" to="javascript:;">
                    3
                  </Link>
                  <Link className="page-numbers" to="javascript:;">
                    4
                  </Link>
                  <Link className="page-numbers" to="javascript:;">
                    5
                  </Link>
                  <Link className="next page-numbers" to="javascript:;">
                    next
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <Linkside className="sidebar">
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
              </Linkside>
            </div>
          </div>
        </div>
        {/* End Single*/}
      </div>
    </div>
  );
}
