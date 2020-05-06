import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import BlogContext from "../../context/blogContext";
import { useParams } from "react-router-dom";

import Fade from "react-reveal/Fade";

import icon from "../../assets/icon.png";
import postImg from "../../assets/pen-img.png";

import "./post.style.css";

const Post = () => {
  const blogContext = useContext(BlogContext);
  const { getPost, currentBlogPost } = blogContext;

  let { postId } = useParams();

  useEffect(() => {
    getPost(postId);
  }, []);

  return (
    <div className="post">
      <img className="icon" src={icon} alt="" />
      <h1 className="title m">Carpe Diem</h1>
      {currentBlogPost ? (
        <React.Fragment>
          <Fade bottom>
            <div className="post-img">
              <img src={currentBlogPost.image} alt="" />
            </div>
          </Fade>
          <div className="content">
            <h2 className="title xs">{currentBlogPost.category}</h2>
            <span>
              <img src={postImg} alt="" />
            </span>
            <h2 className="title s">{currentBlogPost.title}</h2>
            <p className="text" align="justify">
              {currentBlogPost.content}
            </p>
          </div>
        </React.Fragment>
      ) : (
        <div className="loading">Loading</div>
      )}
      <Link to="">
        <button className="btn xl">Home</button>
      </Link>
    </div>
  );
};

export default Post;
