import { Favorite, FavoriteBorderOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import "../styles/ChatScreen.css";
import Header from "./Header";

function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      photoUrl:
        "https://imageio.forbes.com/specials-images/imageserve/605e22fe6df966b3fcbd3e15/0x0.jpg",
      message: "hey :)",
    },
    {
      message: "how's you?)",
    },
    {
      photoUrl:
        "https://imageio.forbes.com/specials-images/imageserve/605e22fe6df966b3fcbd3e15/0x0.jpg",
      message: "i'm good. wbu??)",
    },
  ]);

  return (
    <>
      <Header />
      <div className="chatscreen">
        <div className="chatscreen__matchedOn">
          <p>you matched with name on ab//12//12</p>
        </div>

        {messages.map((message, i) => (
          <div key={i}>
            <div className="chatscreen__messageDate">
              <p>ab//12//12 4:19 PM</p>
            </div>
            <div className="chatscreen__message">
              <div
                className={`chatscreen__avatar ${
                  !message.photoUrl && "myMessage"
                }`}
              >
                {message.photoUrl && (
                  <img src={message.photoUrl} alt="avatar" />
                )}
              </div>
              <div
                className={`chatscreen__messageContainer ${
                  !message.photoUrl && "myMessage"
                }`}
              >
                {/* <div className="chatscreen__messageBackground"> */}{" "}
                <p>{message.message}</p>
                {/* </div> */}
              </div>
              {message.photoUrl && (
                <div className="chatscreen__heartIcon">
                  <FavoriteBorderOutlined />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ChatScreen;
