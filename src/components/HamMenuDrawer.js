import React from "react";
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import { Close, Menu } from "@material-ui/icons";
import "../styles/HamMenuDrawer.css";

function HamMenuDrawer({ setOpenModal }) {
  const [showDrawer, setShowDrawer] = React.useState(false);
  const [showSubMenu, setshowSubMenu] = React.useState({
    products: false,
    learn: false,
    safety: false,
    support: false,
    download: false,
  });

  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setshowSubMenu({
      ...showSubMenu,
      products: false,
    });
    setShowDrawer(!showDrawer);
  };

  return (
    <div className="hammenudrawer">
      <IconButton onClick={toggleDrawer()}>
        <Menu style={{ color: "white", fontSize: "2rem" }} />
      </IconButton>
      <Drawer anchor="right" open={showDrawer} onClose={toggleDrawer()}>
        <div
          className="hammenudrawer__menuContainer"
          role="presentation"
          // onClick={toggleDrawer()}
          // onKeyDown={toggleDrawer()}
          style={{ width: "100vw" }}
        >
          <div className="hammenudrawer__logo">
            <img
              src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png"
              alt="tinder logo"
            />
            <IconButton
              className="hammenudrawer__closeIcon"
              onClick={toggleDrawer()}
            >
              <Close />
            </IconButton>
          </div>
          <div className="hammenudrawer__menuItems">
            {["products", "learn", "safety", "support", "download"].map(
              (text, index) => (
                <div key={index}>
                  <div
                    className="hammenudrawer__menuItem"
                    onClick={() => {
                      setshowSubMenu({
                        ...showSubMenu,
                        [text]: !showSubMenu[text],
                      });
                    }}
                  >
                    <h3>{text}</h3>
                  </div>
                  {text === "products" && showSubMenu.products && (
                    <div className="hammenudrawer__productsItems">
                      <List>
                        <ListItem button key="premium features">
                          <ListItemText primary="premium features" />
                        </ListItem>
                        <ListItem button key="subscription tiers">
                          <ListItemText primary="subscription tiers" />
                        </ListItem>
                        <ListItem button key="swipe night">
                          <ListItemText primary="swipe night" />
                        </ListItem>
                      </List>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
          <div className="hammenudrawer__footer">
            <Button
              onClick={() => {
                setOpenModal(true);
              }}
            >
              log in
            </Button>
            <Button>english</Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default HamMenuDrawer;
