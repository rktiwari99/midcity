import React from 'react'
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
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Header/>
        <Switch>
          <Route exact path="/midcity/">
            <Content/>
          </Route>
          <Route exact path="/midcity/about">
            <About />
          </Route>
          <Route exact path="/midcity/blog">
            <Blog />
          </Route>
          <Route path="/midcity/contact">
            <Contact />
          </Route>
          <Route path="/midcity/blogdetails">
            <BlogDetails />
          </Route>
          <Route path="/midcity/service">
            <Service />
          </Route>
          <Route path="/midcity/team">
            <Team />
          </Route>
          <Route path="/midcity/project">
            <Project />
          </Route>
          <Route path="/midcity/projectdetails">
            <ProjectDetails />
          </Route>
        </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
