import React from 'react'
import { BrowserRouter as Switch, Route, BrowserRouter } from "react-router-dom";
// import { ReactDOM } from 'react-dom';
//  User
import Header from './Components/User/Include/header';
import { Footer } from './Components/User/Include/Footer';
import Content from './Components/User/Main/Content';
import About from './Components/User/Main/About';
import Service from './Components/User/Main/Service';
import Contact from './Components/User/Main/Contact';
import Blog from './Components/User/Main/Blog';
import BlogDetails from './Components/User/Main/BlogDetails';
import Team from './Components/User/Main/Team';
import Project from './Components/User/Main/Project';
import ProjectDetails from './Components/User/Main/ProjectDetails';
// import Error1 from './Components/Error/Error1';

//  Admin
import Adheader from './Components/Admin/Include/Adheader';
import Adfooter from './Components/Admin/Include/Adfooter';
import Logedin from './Components/Admin/Credentials/Logedin';
import Dashboard from './Components/Admin/Main/Dashboard';

const Other = ({ match }) => (
  // console.log(match),
  <React.Fragment>
    <Header/>
      <Route exact path={`${match.path}`} render={ Content }/>
      <Route exact path={`${match.path}/about`} render={ About }/>
      <Route exact path={`${match.path}/blog1`} render={ Blog }/>
      <Route exact path={`${match.path}/contact1`} render={ Contact }/>
      <Route exact path={`${match.path}/blogdetails1`} render={ BlogDetails }/>
      <Route exact path={`${match.path}/service1`} render={ Service }/>
      <Route exact path={`${match.path}/team1`} render={ Team }/>
      <Route exact path={`${match.path}/project1`} render={ Project }/>
      <Route exact path={`${match.path}/projectdetails1`} render={ ProjectDetails }/>
    <Footer/>
  </React.Fragment>
);

const Admin  = ({ match }) => (
  <React.Fragment>
    <Adheader/>
      {/* { match.pathname!=='/' && <Adheader/> } */}
      {/* {location.pathname!=='/' ? <Header/>:null} */}
        <Route exact path={`${match.path}/`} render={ Logedin }/>
      {/* { match.pathname!=='/' && <Adfooter/> } */}
      <Route exact path={`${match.path}/dashboard`} render={ Dashboard }/>
      
    <Adfooter/>
  </React.Fragment>
);

// const Error = ({ match }) => (
//   <React.Fragment>
//     <Route render={Error1} />
//   </React.Fragment>
// )

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/midcity" component={Other} />
      <Route path="/admin" component={Admin} />
      {/* <Route component={Error} /> */}
    </Switch>
  </BrowserRouter>
);



export default App;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

// function App() {
//   return (
//     <>
//     <Router>
//       <Header/>
//         <Switch>
//           <Route exact path="/midcity/">
//             <Content/>
//           </Route>
//           <Route exact path="/midcity/about">
//             <About />
//           </Route>
//           <Route exact path="/midcity/blog">
//             <Blog />
//           </Route>
//           <Route path="/midcity/contact">
//             <Contact />
//           </Route>
//           <Route path="/midcity/blogdetails">
//             <BlogDetails />
//           </Route>
//           <Route path="/midcity/service">
//             <Service />
//           </Route>
//           <Route path="/midcity/team">
//             <Team />
//           </Route>
//           <Route path="/midcity/project">
//             <Project />
//           </Route>
//           <Route path="/midcity/projectdetails">
//             <ProjectDetails />
//           </Route>
//         </Switch>
//       <Footer/>
//     </Router>
//     </>
//   );
// }

