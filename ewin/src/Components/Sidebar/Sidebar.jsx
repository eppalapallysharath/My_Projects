import React, { useRef, useState } from "react";
import logo from "./../../Media files/logo.svg";
import projectIcon from "../../Media files/ic_projects.svg";
import installationIcon from "../../Media files/ic_installations.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { Overlay, Tooltip } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Actions/Action";
import accountIcon from "../../Media files/accountImg.png";
import "../index.css";

export const Sidebar = ({ children }) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const accountinfo = useSelector((state) => state.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    sessionStorage.clear();
    navigate("/");
  };

  const sidebarItems = [
    {
      title: "My Projects",
      icon: projectIcon,
      link: "/myProjects",
    },
    {
      title: "My Installations",
      icon: installationIcon,
      link: "/myInstallations",
    },
  ];
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <NavLink className="sidebar-logo" to="/home">
          <img src={logo} alt="logo" />
        </NavLink>
        <div className="sidebar-item">
          {sidebarItems.map((item, index) => (
            <NavLink to={item.link} key={index} className="sidebar-link">
              <div>
              <img src={item.icon} alt="icon" />
              </div>
              <div>{item.title}</div>
            </NavLink>
          ))}
        </div>
        <div className="sidebarAccount">
          <div ref={target} onClick={() => setShow(!show)}>
            <div className="account">
              <img src={accountIcon} alt="account icon" width="40px" />{" "}
              <p> Hi! {accountinfo?.first_name}</p>
              <Overlay target={target.current} show={show} placement="right">
                {(props) => (
                  <Tooltip {...props}>
                    <span onClick={handleLogout}>
                      Logout
                    </span>
                  </Tooltip>
                )}
              </Overlay>
            </div>
          </div>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};
