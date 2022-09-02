import React from "react";
import "../styles/Chats.css";
import Header from "./Header";
import Message from "./Message";

function Chats() {
  return (
    <>
      {" "}
      <Header />
      <div className="chats">
        <Message
          avatarUrl={
            "https://imageio.forbes.com/specials-images/imageserve/605e22fe6df966b3fcbd3e15/0x0.jpg"
          }
          matchName={"jack ma"}
          message={"message"}
        />

        <Message
          avatarUrl={
            "https://assets.entrepreneur.com/content/3x2/2000/20150224165308-jeff-bezos-amazon.jpeg"
          }
          matchName={"jeff bezos"}
          message={"message"}
        />

        <Message
          avatarUrl={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
          }
          matchName={"elon musk"}
          message={"message"}
        />
      </div>
    </>
  );
}

export default Chats;
