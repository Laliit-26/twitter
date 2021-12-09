import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import PublicIcon from "@mui/icons-material/Public";
import ImageIcon from "@mui/icons-material/Image";
import GifBoxIcon from "@mui/icons-material/GifBox";
import PollIcon from "@mui/icons-material/Poll";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import './Twitter.css'
function TwitterMiddle() {
  return (
    <>
      <div className="middle"
        style={{ width: "43%", border: "1px solid #eff3f4", height: "100vh" }}
      >
        <h1
          // style={{
          //   margin: ".8rem 0rem",
          //   height: "53px",
          //   padding: "0rem 1.0rem",
          //   fontSize: "1.4rem",
          //   fontWeight: "650",
          //   borderBottom: "1px solid #eff3f4",
          //   color: "rgba(0, 0, 0, 0.849)",
          // }}
        >
          Home
        </h1>
        <div style={{ display: "flex", color: "rgb(29, 155, 240)" }}>
          <div>
            <PersonIcon style={{ fontSize: 50 }} />
          </div>
          <div style={{ marginLeft: "10px" }}>
            <input
              type="text"
              placeholder="What's happening?"
              style={{ border: "none" }}
            />
            <h6 style={{ color: "rgb(29, 155, 240)" }}>
              <PublicIcon />
              Everyone can reply
            </h6>
            <hr />

            <ImageIcon
              style={{ color: "rgb(29, 155, 240)", marginLeft: "5px" }}
            />
            <GifBoxIcon
              style={{ color: "rgb(29, 155, 240)", marginLeft: "5px" }}
            />
            <PollIcon
              style={{ color: "rgb(29, 155, 240)", marginLeft: "5px" }}
            />
            <EmojiEmotionsIcon
              style={{ color: "rgb(29, 155, 240)", marginLeft: "5px" }}
            />
            <EventAvailableIcon
              style={{ color: "rgb(29, 155, 240)", marginLeft: "5px" }}
            />

            <button
              style={{
                marginLeft: "19rem",
                backgroundColor: "rgb(29, 155, 240)",
                color: "white",
                width: "6rem",
                borderRadius: "35px",
                height: "2rem",
                border: "none",
              }}
            >
              Tweet
            </button>
          </div>
        </div>
        <hr />
        <h6 style={{ textAlign: "center" }}> Show 27 Tweet</h6>
        <hr />
        <div style={{ display: "flex" }}>
          <div>
            <PersonIcon style={{ fontSize: 50 }} />
          </div>
          <div>
            <h6>NDTV</h6>

            <p>
              #BREAKING | Chinese property company Kaisa defaults on $400
              million debt: Fitch
            </p>
            <h5>(AFP News Agency)</h5>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <ChatBubbleOutlineIcon />
              <KeyboardReturnIcon />
              <FavoriteBorderIcon />
              <IosShareIcon />
            </div>
        
          </div>
        </div>
        <hr />
        <div style={{ display: "flex" }}>
          <div>
            <PersonIcon style={{ fontSize: 50 }} />
          </div>
          <div>
            <h6>NDTV</h6>

            <p>
              #BREAKING | Chinese property company Kaisa defaults on $400
              million debt: Fitch
            </p>
            <h5>(AFP News Agency)</h5>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <ChatBubbleOutlineIcon />
              <KeyboardReturnIcon />
              <FavoriteBorderIcon />
              <IosShareIcon />
            </div>
        
          </div>
        </div>
        <hr/>
        <div style={{ display: "flex" }}>
          <div>
            <PersonIcon style={{ fontSize: 50 }} />
          </div>
          <div>
            <h6>NDTV</h6>

            <p>
              #BREAKING | Chinese property company Kaisa defaults on $400
              million debt: Fitch
            </p>
            <h5>(AFP News Agency)</h5>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <ChatBubbleOutlineIcon />
              <KeyboardReturnIcon />
              <FavoriteBorderIcon />
              <IosShareIcon />
            </div>
        
          </div>
        </div>
        <hr/>
      </div>
    </>
  );
}

export default TwitterMiddle;
