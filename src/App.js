import React from 'react'
import { ReactDOM } from 'react-dom';
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
import Error1 from './Components/Error/Error1';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";

//  Admin
import Adheader from './Components/Admin/Include/Adheader';
import Adfooter from './Components/Admin/Include/Adfooter';
import Logedin from './Components/Admin/Credentials/Logedin';
import Dashboard from './Components/Admin/Main/Dashboard';

const Other = ({ match }) => (
  <React.Fragment>
    <Header/>
      <Route path={`${match.path}`}/>
      <Route exact path={`${match.path}/midcity`}>
        <Content/>
      </Route>
      <Route exact path={`${match.path}/midcity/about`}>
        <About />
      </Route>
      <Route exact path={`${match.path}/midcity/blog1`}>
        <Blog />
      </Route>
      <Route path={`${match.path}/midcity/contact1`}>
        <Contact />
      </Route>
      <Route path={`${match.path}/midcity/blogdetails1`}>
        <BlogDetails />
      </Route>
      <Route path={`${match.path}/midcity/service1`}>
        <Service />
      </Route>
      <Route path={`${match.path}/midcity/team1`}>
        <Team />
      </Route>
      <Route path={`${match.path}/midcity/project1`}>
        <Project />
      </Route>
      <Route path={`${match.path}/midcity/projectdetails1`}>
        <ProjectDetails />
      </Route>
      <Route component={Error1} />
    <Footer/>
  </React.Fragment>
);

const Admin  = ({ match }) => (
  <React.Fragment>
    <Adheader/>
      <Route path={`${match.path}/admin`}>
        <Logedin />
      </Route>
      <Route path={`${match.path}/dashboard`}>
        <Dashboard />
      </Route>
    <Adfooter/>
  </React.Fragment>
);


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/other" component={Other} />
      <Route path="/admin" component={Admin} />
    </Switch>
  </BrowserRouter>
);




const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;

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

