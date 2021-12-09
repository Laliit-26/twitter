import React from 'react';
import logo from "../assets/icon.png";
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MailIcon from '@mui/icons-material/Mail';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './Twitter.css'




function TwitterLeftSide(props) {
    return (
        <div className="left" >
           
           <img  style={{marginLeft:"10px",width:'18%',height:'3%'}}src={logo} alt="Twiter" />
          <div style={{marginTop:"1.5rem"}}><HomeIcon style={{marginRight:"25x",width: "2em"}}/>Home</div>
          <div style={{marginTop:"1.5rem"}}><TagIcon style={{marginRight:"25x",width: "2em"}}/>Explore</div>
          <div style={{marginTop:"1.5rem"}}><NotificationsActiveIcon style={{marginRight:"25x",width: "2em"}}/>Notifications</div>
          <div style={{marginTop:"1.5rem"}}><MailIcon style={{marginRight:"25x",width: "2em"}}/>Messages</div>
          <div style={{marginTop:"1.5rem"}}><BookmarkIcon style={{marginRight:"25x",width: "2em"}}/>Bookmarks</div>
          <div style={{marginTop:"1.5rem"}}><ListAltIcon style={{marginRight:"25x",width: "2em"}}/>Lists</div>
          <div style={{marginTop:"1.5rem"}}><PersonIcon style={{marginRight:"25x",width: "2em"}}/>Profile</div>
          <div style={{marginTop:"1.5rem"}}><MoreHorizIcon style={{marginRight:"25x",width: "2em"}}/>More</div>
        <button style={{marginTop:"1rem",backgroundColor:"rgb(29, 155, 240)",color:"white",width:"12rem",borderRadius:"35px",height:"3rem",border:"none"}}>Tweet</button>
        </div>
    );
}

export default TwitterLeftSide;