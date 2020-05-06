import React from "react";
import { Link } from "react-router-dom";

import penImg from "../../assets/pen.png";

import "./post-card.style.css";

const PostCard = ({ image, title, author, id, date }) => {
  return (
    <div className="post-card">
      <div className="card">
        <div className="info">
          <h1 className="info-title">{title}</h1>
          <h3 className="author">
            <span>
              <img className="pen-img" src={penImg} alt="" />
            </span>{" "}
            {author}
          </h3>
        </div>
        <div className="image">
          <img src={image} alt="" />
        </div>
        <h3 className="date">{date}</h3>
        <Link to={`/${id}`}>
          <button className="btn">More</button>
        </Link>{" "}
      </div>
    </div>
  );
};

export default PostCard;
