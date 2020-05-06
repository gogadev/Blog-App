import React from "react";

import Hero from "../../components/hero/Hero";
import PostList from "../../components/post-list/PostList";

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <PostList />
    </React.Fragment>
  );
};

export default Home;
