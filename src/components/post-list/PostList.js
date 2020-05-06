import React, { useContext, useEffect } from "react";
import BlogContext from "../../context/blogContext";

import PostCard from "../post-card/PostCard";

import image from "../../assets/image.png";

import "./post-list.style.css";

const PostList = () => {
  const blogContext = useContext(BlogContext);
  const { getPosts, blogPosts, loading } = blogContext;

  useEffect(() => {
    getPosts();
  }, []);

  console.log(blogPosts);

  return (
    <div className="post-list">
      <h1 className="post-title">
        Recent Posts{" "}
        <span>
          <img className="span-img" src={image} alt="" />
        </span>
      </h1>
      <div className="list">
        {!loading ? (
          <div className="items">
            {blogPosts &&
              blogPosts.map((post, id) => {
                return (
                  <PostCard
                    key={id}
                    title={post.title}
                    image={post.image}
                    date={post.date}
                    author={post.author}
                    id={post.id}
                  />
                );
              })}
          </div>
        ) : (
          <div className="loading">Loading...</div>
        )}
      </div>
    </div>
  );
};

export default PostList;
