import { useState, useEffect } from "react";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const [, dispatch] = useStateValue();

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
      console.log(getWindowDimensions());
      dispatch({
        type: actionTypes.SET_WINDOW_SIZE,
        size: getWindowDimensions(),
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
