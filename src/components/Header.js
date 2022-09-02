import React, { useState, useEffect } from "react";
import { ArrowBackIos, ForumRounded, PersonRounded } from "@material-ui/icons";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import "../styles/Header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useStateValue } from "../commons/StateProvider";
import { auth } from "../commons/firebase";
import { signOut } from "firebase/auth";
import { actionTypes } from "../commons/reducer";

function Header() {
  const [isChatScreen, setIsChatScreen] = useState(false);
  const [isChatsScreen, setIsChatsScreen] = useState(false);
  const [isHomeScreen, setIsHomeScreen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [{ user }, dispatch] = useStateValue();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.endsWith("chats")) {
      setIsChatsScreen(true);
    } else {
      setIsChatsScreen(false);
    }

    if (location.pathname.includes("chats/")) {
      setIsChatScreen(true);
    } else {
      setIsChatScreen(false);
    }

    if (location.pathname === "/") {
      setIsHomeScreen(true);
    } else {
      setIsHomeScreen(false);
    }
  }, [location]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignout = () => {
    setAnchorEl(null);
    signOut(auth).then(() => {
      // console.log("logged out");
      dispatch({
        type: actionTypes.SET_USER,
        user: {},
      });
      navigate("/login");
    });
  };

  return (
    <div className="header">
      <div className="header__profileIcon">
        <IconButton>
          {isChatsScreen ? (
            <Link to="/">
              <ArrowBackIos style={{ color: "grey", fontSize: "3rem" }} />
            </Link>
          ) : isChatScreen ? (
            <Link to="/chats">
              <ArrowBackIos style={{ color: "grey", fontSize: "3rem" }} />
            </Link>
          ) : (
            <PersonRounded
              onClick={handleClick}
              style={{ color: "grey", fontSize: "3rem" }}
            />
          )}
        </IconButton>
        {isHomeScreen && <h3>{user.displayName}</h3>}
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          getContentAnchorEl={null}
        >
          <MenuItem onClick={handleSignout}>logout</MenuItem>
        </Menu>
      </div>
      <div className="header__tinderLogo">
        <Link to="/">
          <img
            className="header__tinderLogoImage"
            src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png"
            alt="tinder logo"
          />
        </Link>
      </div>
      <div className="header__chatsIcon">
        <Link to="/chats">
          <IconButton>
            <ForumRounded style={{ color: "grey", fontSize: "3rem" }} />
          </IconButton>
        </Link>
      </div>
    </div>
  );
}

export default Header;
