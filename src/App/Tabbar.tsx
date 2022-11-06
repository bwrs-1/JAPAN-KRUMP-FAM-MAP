import React from "react";
import { Link } from "react-router-dom";
import "./Tabbar.scss";

import {
  FaList,
  FaHome,
  FaSearch,
  FaCamera,
  FaStickyNote,
} from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";
import { IconButton } from "@material-ui/core";

const Content = () => {

  // ボタンカラー用 定数
  const theme = "default";

  return (
    <div className="tabbar">
      <ul>
        <li>
          <Link to="/">
            <IconButton color={theme} aria-label="Map">
              <FaHome />
            </IconButton>
            <div className="text">Map</div>
          </Link>
        </li>
        <li>
          <Link to="/list">
            <IconButton color={theme} aria-label="list">
              <FaList />
            </IconButton>
            <div className="text">List</div>
          </Link>
        </li>
        <li>
          <Link to="/category">
            <IconButton color={theme} aria-label="category">
              <FaSearch />
            </IconButton>
            <div className="text">Category</div>
          </Link>
        </li>
        <li>
          <Link to="/images">
            <IconButton color={theme} aria-label="images">
              <FaCamera />
            </IconButton>
            <div className="text">Search</div>
          </Link>
        </li>
        <li>
          <Link to="/knowledge">
            <IconButton color={theme} aria-label="knowledge">
              <FaStickyNote />
            </IconButton>
            <div className="text">Knowledge</div>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <IconButton color={theme} aria-label="about">
              <AiOutlineAppstore />
            </IconButton>
            <div className="text">About</div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Content;
