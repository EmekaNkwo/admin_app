import React from "react";
import "./topbar.css";
import { Avatar } from '@material-ui/core'

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Welcom</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
          <Avatar>A</Avatar>
          </div>
          <p>Admin</p>
          
          
        </div>
      </div>
    </div>
  );
}
