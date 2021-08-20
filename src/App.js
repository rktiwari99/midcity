import React from 'react'
import Header from './Components/Include/header';
import { Footer } from './Components/Include/Footer';
import Content from './Components/Main/Content';
import About from './Components/Main/About';
import Service from './Components/Main/Service';
import Contact from './Components/Main/Contact';
import Blog from './Components/Main/Blog';
import BlogDetails from './Components/Main/BlogDetails';
import Team from './Components/Main/Team';
import Project from './Components/Main/Project';
import ProjectDetails from './Components/Main/ProjectDetails';
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
