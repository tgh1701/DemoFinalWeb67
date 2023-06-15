import React from "react";
import "./topbar.css";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">HIENQLO.</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <LogoutIcon />
          </div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
