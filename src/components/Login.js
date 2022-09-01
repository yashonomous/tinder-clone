import React, { useState } from "react";
import { Button, Fade, Modal } from "@material-ui/core";
import "../styles/Login.css";
import { makeStyles } from "@material-ui/core/styles";
import { ChatBubbleRounded } from "@material-ui/icons";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../commons/firebase";
import { useStateValue } from "../commons/StateProvider";
import { actionTypes } from "../commons/reducer";
import { useNavigate } from "react-router-dom";
import HamMenuDrawer from "./HamMenuDrawer";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Login() {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const [modalStyle] = React.useState(getModalStyle);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [{ user, windowSize }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const handleClose = () => {
    setOpenModal(false);
    setShowMoreOptions(false);
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: res.user,
        });
      })
      .then(() => {
        navigate("/home");
      });
  };

  //   console.log(windowSize);

  return (
    <div className="login">
      <div className="login__gradient"></div>
      <header className="login__header">
        <div className="login__headerContainer">
          <div className="login__headerLeft">
            <div className="login__headerLogo">
              <img src="/tinder_logo.png" alt="tinder logo" />
            </div>
            {windowSize.width >= 900 ? (
              <div className="login__actionLinks">
                <h3>products</h3>
                <h3>learn</h3>
                <h3>safety</h3>
                <h3>support</h3>
                <h3>download</h3>
              </div>
            ) : (
              <h1>wid</h1>
            )}
          </div>
          <div className="login__headerRight">
            {windowSize.width >= 900 ? (
              <>
                <h3>english</h3>
                <Button
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  log in
                </Button>
              </>
            ) : (
              <HamMenuDrawer setOpenModal={setOpenModal} />
            )}
          </div>
        </div>
      </header>

      <section className="login__center">
        <h1>start something epic</h1>
        {/* <div className="login__createAccButton"> */}
        <Button>create account</Button>
        {/* </div> */}
      </section>

      <Modal open={openModal} onClose={handleClose} closeAfterTransition>
        <Fade in={openModal}>
          <div style={modalStyle} className={classes.paper}>
            <div className="login__loginContainer">
              <div className="login__tinderLogo">
                <img
                  src="https://i.pinimg.com/originals/c0/59/3c/c0593cff936104990a9dcf6d41cc9d36.png"
                  alt="logo"
                />
              </div>
              <h2>get started</h2>
              <div className="login__withGoogle">
                <img src="https://blog.hubspot.com/hubfs/image8-2.jpg" alt="" />
                <Button onClick={signInWithGoogle}>login with google</Button>
              </div>

              {showMoreOptions && (
                <div className="login__withFacebook">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png"
                    alt=""
                  />
                  <Button>login with facebook</Button>
                </div>
              )}

              {showMoreOptions && (
                <div className="login__withNumber">
                  <ChatBubbleRounded />
                  <Button>login with number</Button>
                </div>
              )}

              <div>
                <h3
                  onClick={() => {
                    setShowMoreOptions(true);
                  }}
                >
                  {showMoreOptions ? "trouble logging in?" : "more options"}
                </h3>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default Login;
