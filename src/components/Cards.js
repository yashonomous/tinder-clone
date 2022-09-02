import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import { db } from "../commons/firebase";
import "../styles/Cards.css";

function Cards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    let usersQuery = query(collection(db, "users"));

    onSnapshot(usersQuery, (snapshot) => {
      setPeople(
        snapshot.docs.map((doc) => ({
          userID: doc.id,
          userData: doc.data(),
        }))
      );
    });
  }, []);

  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };

  return (
    <>
      <div className="cards">
        {people.map((person) => (
          <TinderCard
            className="cards__card"
            key={person.userID}
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen("fooBar")}
            preventSwipe={["up", "down"]}
          >
            <div
              className="cards_cardImage"
              style={{ backgroundImage: `url(${person.userData.photoUrl})` }}
            >
              <h1>{person.userData.name}</h1>
            </div>
          </TinderCard>
        ))}
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default Cards;
