import React from "react";
import { Link } from "react-router-dom";

import Roll from "react-reveal/Roll";

import "./navbar.style.css";

const Navbar = () => {
  return (
    <nav>
      <Roll top>
        <Link to="/">
          <h1 className="title">Milla's World</h1>
        </Link>
      </Roll>
    </nav>
  );
};

export default Navbar;
