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
import '../styles/TwitterLeftSide.css';




function TwitterLeftSide() {
    return (
        <div className='leftsideMain'>
           
            <img  className="leftsideLogo"src={logo} alt="Twiter" />
          <div className="leftsideHeading"><HomeIcon className='leftsideicons'/><span className='tagName'>Home</span></div>
          <div className="leftsideHeading"><TagIcon  className='leftsideicons' /><span className='tagName'>Explore</span></div>
          <div className="leftsideHeading"><NotificationsActiveIcon  className='leftsideicons'/><span className='tagName'>Notifications</span></div>
          <div className="leftsideHeading"><MailIcon  className='leftsideicons'/><span className='tagName'>Messages</span></div>
          <div className="leftsideHeading"><BookmarkIcon  className='leftsideicons'/><span className='tagName'>Bookmarks</span></div>
          <div className="leftsideHeading"><ListAltIcon  className='leftsideicons'/><span className='tagName'>Lists</span></div>
          <div className="leftsideHeading"><PersonIcon  className='leftsideicons'/><span className='tagName'>Profile</span></div>
          <div className="leftsideHeading"><MoreHorizIcon  className='leftsideicons'/><span className='tagName'>More</span></div>
        <button className='btn'>Tweet</button>
        </div>
    );
}

export default TwitterLeftSide;