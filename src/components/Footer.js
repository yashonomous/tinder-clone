import React from "react";
import {
  ClearRounded,
  FavoriteRounded,
  FlashOnRounded,
  ReplayRounded,
  StarRounded,
} from "@material-ui/icons";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__refreshIcon">
        <ReplayRounded
          style={{
            color: "#F9B130",
            fontSize: "3rem",
          }}
        />
      </div>
      <div className="footer__dislikeIcon">
        <ClearRounded style={{ color: "#FE3968", fontSize: "3rem" }} />
      </div>
      <div className="footer__superlikeIcon">
        <StarRounded style={{ color: "#3FC2FA", fontSize: "3rem" }} />
      </div>
      <div className="footer__likeIcon">
        <FavoriteRounded style={{ color: "#29E1B6", fontSize: "3rem" }} />
      </div>
      <div className="footer__lightningIcon">
        <FlashOnRounded style={{ color: "#B64EF2", fontSize: "3rem" }} />
      </div>
    </div>
  );
}

export default Footer;
