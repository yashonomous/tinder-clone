import React from "react";
import {
  ClearRounded,
  FavoriteRounded,
  FlashOnRounded,
  ReplayRounded,
  StarRounded,
} from "@material-ui/icons";
import "../styles/Footer.css";
import { IconButton } from "@material-ui/core";

function Footer({ swipe }) {
  return (
    <div className="footer">
      <div className="footer__refreshIcon">
        <IconButton>
          <ReplayRounded
            style={{
              color: "#F9B130",
              fontSize: "3rem",
            }}
          />
        </IconButton>
      </div>
      <div className="footer__dislikeIcon">
        <IconButton
          onClick={() => {
            swipe("left");
          }}
        >
          <ClearRounded style={{ color: "#FE3968", fontSize: "3rem" }} />
        </IconButton>
      </div>
      <div className="footer__superlikeIcon">
        <IconButton>
          <StarRounded style={{ color: "#3FC2FA", fontSize: "3rem" }} />
        </IconButton>
      </div>
      <div className="footer__likeIcon">
        <IconButton
          onClick={() => {
            swipe("right");
          }}
        >
          <FavoriteRounded style={{ color: "#29E1B6", fontSize: "3rem" }} />
        </IconButton>
      </div>
      <div className="footer__lightningIcon">
        <IconButton>
          <FlashOnRounded style={{ color: "#B64EF2", fontSize: "3rem" }} />
        </IconButton>
      </div>
    </div>
  );
}

export default Footer;
