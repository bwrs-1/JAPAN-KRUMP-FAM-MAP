import React from "react";
import { Link } from "react-router-dom";
import "./Tabbar.scss";

import MapSharpIcon from '@mui/icons-material/MapSharp';
import FormatListBulletedSharpIcon from '@mui/icons-material/FormatListBulletedSharp';
import { IconButton } from "@material-ui/core";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import MenuBookSharpIcon from '@mui/icons-material/MenuBookSharp';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';

const Content = () => {

  // ボタンカラー用 定数
  const primary = "#607d8b";

  return (
    <div className="">
      <ul>
        <li>
          <Link to="/">
            <IconButton aria-label="Map">
              <MapSharpIcon className={primary} />
            </IconButton>
          </Link>
        </li>
        <li>
          <Link to="/list">
            <IconButton aria-label="list">
              <FormatListBulletedSharpIcon className={primary} />
            </IconButton>
          </Link>
        </li>
        <li>
          <Link to="/category">
            <IconButton aria-label="category">
              <SearchSharpIcon className={primary} />
            </IconButton>
          </Link>
        </li>
        <li>
          <Link to="/knowledge">
            <IconButton aria-label="knowledge">
              <MenuBookSharpIcon className={primary} />
            </IconButton>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <IconButton aria-label="about">
              <InfoSharpIcon className={primary} />
            </IconButton>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Content;
