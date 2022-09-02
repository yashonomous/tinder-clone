import { IconButton } from "@material-ui/core";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { useStateValue } from "./commons/StateProvider";
import useWindowDimensions from "./commons/useWindowDimension";
import Chats from "./components/Chats";
import ChatScreen from "./components/ChatScreen";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  const [{ user }] = useStateValue();

  useWindowDimensions();

  return (
    <div className="app">
      {/* <Header /> */}

      <Routes>
        <Route
          path="/chats"
          element={Object.keys(user).length ? <Chats /> : <Login />}
        />
        <Route
          path="/chats/:person"
          element={Object.keys(user).length ? <ChatScreen /> : <Login />}
        />
        <Route
          path="/"
          element={Object.keys(user).length ? <Home /> : <Login />}
        />
        <Route
          path="/home"
          element={Object.keys(user).length ? <Home /> : <Login />}
        />

        <Route path="/login" element={<Login />} />
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
