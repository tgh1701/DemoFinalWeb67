import "./sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/Report";
import {Link} from "react-router-dom";
import React, {useState} from "react";

export default function Sidebar() {
  const [activeSidebar, setActiveSidebar] = useState("Home");

  const handleSidebarClick = (sidebar) => {
    setActiveSidebar(sidebar);
  };

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li
                className={`sidebarListItem ${
                  activeSidebar === "Home" ? "active" : ""
                }`}
                onClick={() => handleSidebarClick("Home")}
              >
                <LineStyleIcon className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li
              className={`sidebarListItem ${
                activeSidebar === "Analytics" ? "active" : ""
              }`}
              onClick={() => handleSidebarClick("Analytics")}
            >
              <TimelineIcon className="sidebarIcon" />
              Analytics
            </li>
            <li
              className={`sidebarListItem ${
                activeSidebar === "Sales" ? "active" : ""
              }`}
              onClick={() => handleSidebarClick("Sales")}
            >
              <TrendingUpIcon className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li
                className={`sidebarListItem ${
                  activeSidebar === "Users" ? "active" : ""
                }`}
                onClick={() => handleSidebarClick("Users")}
              >
                <PermIdentityIcon className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li
                className={`sidebarListItem ${
                  activeSidebar === "Products" ? "active" : ""
                }`}
                onClick={() => handleSidebarClick("Products")}
              >
                <StorefrontIcon className="sidebarIcon" />
                Products
              </li>
            </Link>
            <li
              className={`sidebarListItem ${
                activeSidebar === "Transactions" ? "active" : ""
              }`}
              onClick={() => handleSidebarClick("Transactions")}
            >
              <AttachMoneyIcon className="sidebarIcon" />
              Transactions
            </li>
            <li
              className={`sidebarListItem ${
                activeSidebar === "ReportIcons" ? "active" : ""
              }`}
              onClick={() => handleSidebarClick("ReportIcons")}
            >
              <BarChartIcon className="sidebarIcon" />
              ReportIcons
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li
              className={`sidebarListItem ${
                activeSidebar === "Mail" ? "active" : ""
              }`}
              onClick={() => handleSidebarClick("Mail")}
            >
              <MailOutlineIcon className="sidebarIcon" />
              Mail
            </li>
            <li
              className={`sidebarListItem ${
                activeSidebar === "Feedback" ? "active" : ""
              }`}
              onClick={() => handleSidebarClick("Feedback")}
            >
              <DynamicFeedIcon className="sidebarIcon" />
              Feedback
            </li>
            <li
              className={`sidebarListItem ${
                activeSidebar === "Messages" ? "active" : ""
              }`}
              onClick={() => handleSidebarClick("Messages")}
            >
              <ChatBubbleOutlineIcon className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li
              className={`sidebarListItem ${
                activeSidebar === "Manage" ? "active" : ""
              }`}
              onClick={() => handleSidebarClick("Manage")}
            >
              <WorkOutlineIcon className="sidebarIcon" />
              Manage
            </li>
            <li
              className={`sidebarListItem ${
                activeSidebar === "StaffAnalytics" ? "active" : ""
              }`}
              onClick={() => handleSidebarClick("StaffAnalytics")}
            >
              <TimelineIcon className="sidebarIcon" />
              Analytics
            </li>
            <li
              className={`sidebarListItem ${
                activeSidebar === "StaffReportIcons" ? "active" : ""
              }`}
              onClick={() => handleSidebarClick("StaffReportIcons")}
            >
              <ReportIcon className="sidebarIcon" />
              ReportIcons
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
