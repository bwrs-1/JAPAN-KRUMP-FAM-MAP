import React from "react";
import { Link } from "react-router-dom";
import './Tabbar.scss'

import { FaList, FaHome, FaSearch, FaCamera, FaStickyNote } from "react-icons/fa"
import { AiOutlineAppstore } from "react-icons/ai"

const Content = () => {
  return (
    <div className="tabbar">
      <ul>
        <li><Link to="/"><div className="icon"><FaHome /></div><div className="text">Map</div></Link></li>
        <li><Link to="/list"><div className="icon"><FaList /></div><div className="text">List</div></Link></li>
        <li><Link to="/category"><div className="icon"><FaSearch /></div><div className="text">Category</div></Link></li>
        <li><Link to="/images"><div className="icon"><FaCamera /></div><div className="text">Search</div></Link></li>
        <li><Link to="/knowledge"><div className="icon"><FaStickyNote /></div><div className="text">Knowledge</div></Link></li>
        <li><Link to="/about"><div className="icon"><AiOutlineAppstore /></div><div className="text">About</div></Link></li>
      </ul>
    </div>
  );
};

export default Content;
