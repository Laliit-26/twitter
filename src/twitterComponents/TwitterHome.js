import React,{useState} from 'react';
import '../styles/TwitterHome.css';
import TwitterLeftSide from './TwitterLeftSide';
import TwitterMiddle from './TwitterMiddle';
import TwitterRightSide from './TwitterRightSide';


function TwitterHome() {
   const [follow, setfollow] = useState(false);
    return (
        <div className="home">
            <div className='left'> <TwitterLeftSide /></div>
           <div className='middle'> <TwitterMiddle follow={follow} /></div>
            <div className='right'><TwitterRightSide setfollow={setfollow}/></div>
        </div>
    );
}

export default TwitterHome;