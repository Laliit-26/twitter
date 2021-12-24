import React,{useContext} from 'react';
import '../styles/TwitterHome.css';
import TwitterLeftSide from './TwitterLeftSide';
import TwitterMiddle from './TwitterMiddle';
import TwitterRightSide from './TwitterRightSide';


function TwitterHome() {
   
    // console.log(user.data);
    return (
        <div className="home">
            <div className='left'> <TwitterLeftSide /></div>
           <div className='middle'> <TwitterMiddle /></div>
            <div className='right'><TwitterRightSide /></div>
        </div>
    );
}

export default TwitterHome;