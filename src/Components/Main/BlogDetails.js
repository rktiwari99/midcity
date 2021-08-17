import React from "react";
import { Link } from "react-router-dom";

export default function BlogDetails() {
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
              <div className="single-content">
                <div className="single-page-img">
                  <img src="assets/img/singlepost/single.jpg" alt="thumb" />
                </div>
                <h2 className="single-content-title">
                  Four ways cheer yourself Blue Monday!
                </h2>
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
                        <a href="#">Investment,</a>
                        <a href="#">tips</a>
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
                  <p>
                    sit amet, consectetur adipisicielit sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Duis fvUt enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis
                  </p>
                  <p className="single-text-spec">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut lab et dolore magna ali
                    Ut enim ad minim veniam, quis nostrud exerci pteur
                    <span>Christian Weber</span>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    ali Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi
                  </p>
                  <h2 className="single-content-title">
                    Four ways cheer yourself Blue Monday!
                  </h2>
                  <p>
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
                <div className="single-content-tags">
                  <ul>
                    <li>
                      <a href="#">Responsive</a>
                    </li>
                    <li>
                      <a href="#">Modern</a>
                    </li>
                    <li>
                      <a href="#">Corporate</a>
                    </li>
                    <li>
                      <a href="#">Business</a>
                    </li>
                    <li>
                      <a href="#">Awesome</a>
                    </li>
                  </ul>
                </div>
                <div className="single-content-share">
                  <h5>Share:</h5>
                  <ul className="team-social">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-envelope" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="single-comments-section">
                  <h2 className="single-content-title">Comments</h2>
                  <div className="single-commentor">
                    <ul>
                      <li>
                        <div className="single-commentor-user">
                          <img
                            src="assets/img/singlepost/user-1.png"
                            alt="thumb"
                          />
                          <div className="single-commentor-user-bio">
                            <div className="single-commentor-user-bio-head">
                              <h6>
                                Diego Fou <span>jan 06 2019</span>
                              </h6>
                              <a href="#">
                                <i className="fas fa-reply-all" />
                                Reply
                              </a>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              utx gh labore et dolor magna ali Ut enim ad minim
                              veniam, quis nostrud exercitation .
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="single-commentor-user rlp">
                          <img
                            src="assets/img/singlepost/user-2.png"
                            alt="thumb"
                          />
                          <div className="single-commentor-user-bio">
                            <div className="single-commentor-user-bio-head">
                              <h6>
                                Fiego Fou <span>jan 06 2019</span>
                              </h6>
                              <a href="#">
                                <i className="fas fa-reply-all" />
                                Reply
                              </a>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              utx gh labore et dolor magna ali Ut enim ad minim
                              veniam, quis nostrud exercitation .
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="single-commentor-user">
                          <img
                            src="assets/img/singlepost/user-3.png"
                            alt="thumb"
                          />
                          <div className="single-commentor-user-bio">
                            <div className="single-commentor-user-bio-head">
                              <h6>
                                Hiego Fou <span>jan 06 2019</span>
                              </h6>
                              <a href="#">
                                <i className="fas fa-reply-all" />
                                Reply
                              </a>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              utx gh labore et dolor magna ali Ut enim ad minim
                              veniam, quis nostrud exercitation .
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="single-comments-section-form">
                    <h2 className="single-content-title">Leave a Reply</h2>
                    <form>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Your Name*"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Your Email*"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              rows={5}
                              placeholder="Your Comment*"
                              defaultValue={""}
                            />
                          </div>
                          <button type="submit">Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
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
                      <a href="#">
                        <i className="fas fa-tags" />
                        Success Stories
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-tags" />
                        Gym Personal Trainer
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-tags" />
                        Workout
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-tags" />
                        Excercies
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-tags" />
                        Healthy Living
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-tags" />
                        Nutrition &amp; Weight Loss
                      </a>
                    </li>
                  </ul>
                </div>
                {/*Tags*/}
                <div className="sidebar-widget Tags">
                  <h4 className="widget-title">Tags</h4>
                  <ul>
                    <li>
                      <a href="#">Graphic Design</a>
                    </li>
                    <li>
                      <a href="#">Web Design</a>
                    </li>
                    <li>
                      <a href="#">HTML</a>
                    </li>
                    <li>
                      <a href="#">Graphic Design</a>
                    </li>
                    <li>
                      <a href="#">Graphic Design</a>
                    </li>
                    <li>
                      <a href="#">Web Design</a>
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
