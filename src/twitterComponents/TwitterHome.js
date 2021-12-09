import React from 'react';
import TwitterLeftSide from './TwitterLeftSide';
import TwitterMiddle from './TwitterMiddle';
import TwitterRightSide from './TwitterRightSide';

function TwitterHome(props) {
    return (
        <div className="home" >
            <TwitterLeftSide/>
            <TwitterMiddle/>
            <TwitterRightSide/>
            
        </div>
    );
}

export default TwitterHome;