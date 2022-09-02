import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState, useMemo, useRef } from "react";
import TinderCard from "react-tinder-card";
import { db } from "../commons/firebase";
import "../styles/Cards.css";
import Footer from "./Footer";

function Cards() {
  const [people, setPeople] = useState([]);
  const [currentIndex, setCurrentIndex] = useState();
  const [lastDirection, setLastDirection] = useState();
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(people.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const canGoBack = currentIndex < people.length - 1;

  const canSwipe = currentIndex >= 0;

  useEffect(() => {
    if (!people.length) {
      let usersQuery = query(collection(db, "users"));

      onSnapshot(usersQuery, (snapshot) => {
        setPeople(
          snapshot.docs.map((doc) => ({
            userID: doc.id,
            userData: doc.data(),
          }))
        );
        if (!currentIndex) {
          console.log("leng ", snapshot.docs.length);
          setCurrentIndex(snapshot.docs.length - 1);
        }
      });
    }
  }, []);

  console.log(people);

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const swiped = (direction, nameToDelete, index) => {
    console.log("curr idx", currentIndex);

    setLastDirection(direction);
    // debugger;
    updateCurrentIndex(currentIndex - index - 1);
  };

  const swipe = async (dir) => {
    console.log("swipe");
    // debugger;
    if (canSwipe && currentIndex < people.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };

  return (
    <>
      <div className="cards">
        {people.map((person, idx) => (
          <TinderCard
            ref={childRefs[idx]}
            className="cards__card"
            key={person.userID}
            onSwipe={(dir) => swiped(dir, person.userData.name, idx)}
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

      <Footer swipe={swipe} />
    </>
  );
}

export default Cards;
