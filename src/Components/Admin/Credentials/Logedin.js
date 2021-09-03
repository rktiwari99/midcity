import React from 'react'

export default function Logedin() {
    return (
       <div>
  {/* Loader starts*/}
  <div className="loader-wrapper">
    <div className="loader loader-7">
      <div className="line line1" />
      <div className="line line2" />
      <div className="line line3" />
    </div>
  </div>
  {/* Loader ends*/}
  {/* page-wrapper Start*/}
  <div className="page-wrapper">
    <div className="container-fluid p-0">
      {/* login page with video background start*/}
      <div className="auth-bg-video">
        <video id="bgvid" poster="../assets/admin/images/other-images/coming-soon-bg.jpg" playsInline autoPlay muted loop>
          <source src="../assets/admin/video/Tunnel.mp4" type="video/mp4" />
          {/* <source src="http://admin.pixelstrap.com/creative/assets/admin/video/auth-bg.mp4" type="video/mp4" /> */}
        </video>
        <div className="authentication-box">
          <div className="mt-4">
            <div className="card-body">
              <div className="cont text-center">
                <div> 
                  <form className="theme-form">
                    <h4>LOGIN</h4>
                    <h6>Enter your Username and Password</h6>
                    <div className="form-group">
                      <label className="col-form-label pt-0">Your Name</label>
                      <input className="form-control" type="text" required />
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Password</label>
                      <input className="form-control" type="password" required />
                    </div>
                    <div className="checkbox p-0">
                      <input id="checkbox1" type="checkbox" />
                      <label htmlFor="checkbox1">Remember me</label>
                    </div>
                    <div className="form-group form-row mt-3 mb-0">
                      <button className="btn btn-primary btn-block" type="submit">LOGIN</button>
                    </div>
                    <div className="login-divider" />
                    <div className="social mt-3">
                      <div className="form-row btn-showcase">
                        <div className="col-md-4 col-sm-6">
                          <button className="btn social-btn btn-fb">Facebook</button>
                        </div>
                        <div className="col-md-4 col-sm-6">
                          <button className="btn social-btn btn-twitter">Twitter</button>
                        </div>
                        <div className="col-md-4 col-sm-6">
                          <button className="btn social-btn btn-google">Google + </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="sub-cont">
                  <div className="img">
                    <div className="img__text m--up">
                      <h2>New User?</h2>
                      <p>Sign up and discover great amount of new opportunities!</p>
                    </div>
                    <div className="img__text m--in">
                      <h2>One of us?</h2>
                      <p>If you already has an account, just sign in. We've missed you!</p>
                    </div>
                    <div className="img__btn"><span className="m--up">Sign up</span><span className="m--in">Sign in</span></div>
                  </div>
                  <div>
                    <form className="theme-form">
                      <h4 className="text-center">NEW USER</h4>
                      <h6 className="text-center">Enter your Username and Password For Signup</h6>
                      <div className="form-row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <input className="form-control" type="text" placeholder="First Name" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input className="form-control" type="text" placeholder="Last Name" />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <input className="form-control" type="text" placeholder="User Name" />
                      </div>
                      <div className="form-group">
                        <input className="form-control" type="password" placeholder="Password" />
                      </div>
                      <div className="form-row">
                        <div className="col-sm-4">
                          <button className="btn btn-primary" type="submit">Sign Up</button>
                        </div>
                        <div className="col-sm-8">
                          <div className="text-left mt-2 m-l-20">Are you already user?&nbsp;&nbsp;<a className="btn-link text-capitalize" href="login.html">Login</a></div>
                        </div>
                      </div>
                      <div className="form-divider" />
                      <div className="social mt-3">
                        <div className="form-row btn-showcase">
                          <div className="col-sm-4">
                            <button className="btn social-btn btn-fb">Facebook</button>
                          </div>
                          <div className="col-sm-4">
                            <button className="btn social-btn btn-twitter">Twitter</button>
                          </div>
                          <div className="col-sm-4">
                            <button className="btn social-btn btn-google">Google +</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* login page with video background end*/}
    </div>
  </div>
</div>

    )
}
