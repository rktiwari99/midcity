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
          <Route exact path="/">
            <Content/>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/blogdetails">
            <BlogDetails />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/projectdetails">
            <ProjectDetails />
          </Route>
        </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
