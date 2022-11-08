import React from "react";
import { Link } from "react-router-dom";
import "./Tabbar.scss";

import { FaList, FaHome, FaSearch, FaStickyNote } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Grid,
  IconButton,
  makeStyles,
  Paper,
} from "@material-ui/core";

import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Content = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className="test"
      >
        <BottomNavigationAction
          component={Link}
          to="/"
          label="Recents"
          icon={<RestoreIcon />}
          value="1"
        />
        <BottomNavigationAction
          component={Link}
          to="/list"
          label="Favorites"
          icon={<FavoriteIcon />}
          value="2"
          />
        <BottomNavigationAction
          component={Link}
          to="/category"
          label="Nearby"
          icon={<LocationOnIcon />}
          value="3"
          />
        <BottomNavigationAction
          component={Link}
          to="/knowledge"
          label="Favorites"
          icon={<FavoriteIcon />}
          value="4"
          />
        <BottomNavigationAction
          component={Link}
          to="/about"
          label="Nearby"
          icon={<LocationOnIcon />}
          value="5"
        />
      </BottomNavigation>
    // <div className="tabbar">

    //   <Paper elevation={4}>
    //     <Grid container spacing={2} justifyContent="center" alignItems="center">
    //       {/* <ul>
    //         <li> */}
    //       <Grid item xs>
    //         <Link to="/">
    //           <IconButton color={theme} aria-label="Map">
    //             {/* <MapIcon /> */}
    //             <FaHome />
    //           </IconButton>
    //           {/* <div className="text">Map</div> */}
    //         </Link>
    //       </Grid>
    //       {/* </li>
    //         <li> */}
    //       <Grid item xs>
    //         <Link to="/list">
    //           <IconButton color={theme} aria-label="list">
    //             <FaList />
    //           </IconButton>
    //           {/* <div className="text">List</div> */}
    //         </Link>
    //       </Grid>
    //       {/* </li>
    //         <li> */}
    //       <Grid item xs>
    //         <Link to="/category">
    //           <IconButton color={theme} aria-label="category">
    //             <FaSearch />
    //           </IconButton>
    //           {/* <div className="text">Search</div> */}
    //         </Link>
    //       </Grid>
    //       {/* </li>
    //         <li> */}
    //       <Grid item xs>
    //         <Link to="/knowledge">
    //           <IconButton color={theme} aria-label="knowledge">
    //             <FaStickyNote />
    //           </IconButton>
    //           {/* <div className="text">Knowledge</div> */}
    //         </Link>
    //       </Grid>
    //       {/* </li>
    //         <li> */}
    //       <Grid item xs>
    //         <Link to="/about">
    //           <IconButton color={theme} aria-label="about">
    //             <AiOutlineAppstore />
    //           </IconButton>
    //           {/* <div className="text">About</div> */}
    //         </Link>
    //       </Grid>
    //       {/* </li>
    //       </ul> */}
    //     </Grid>
    //   </Paper>
    // </div>
  );
};

export default Content;
