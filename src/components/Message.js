import React from "react";
import "../styles/Message.css";
import { Link } from "react-router-dom";

function Message({ avatarUrl, matchName, message }) {
  return (
    <Link
      to={`/chats/${matchName}`}
      style={{
        color: "black",
        textDecoration: "none",
      }}
    >
      <div className="message__chat">
        <div
          className="message__avatar"
          style={{
            background: `url(${avatarUrl})`,
          }}
        >
          {/* <img className="message__avatarImage" src={avatarUrl} alt="avatar" /> */}
        </div>
        <div className="message__info">
          <h2>{matchName}</h2>
          <h5>{message}</h5>
        </div>
      </div>
    </Link>
  );
}

export default Message;
