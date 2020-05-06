import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Post from "./pages/post/Post";

import BlogProvider from "./context/blogProvider";

import "./App.css";

const App = () => {
  return (
    <BlogProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:postId" component={Post} />
        </Switch>
      </Router>
    </BlogProvider>
  );
};

export default App;
