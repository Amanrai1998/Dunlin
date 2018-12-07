import React from 'react';
import './MainProfileSidebar.css';

const MainProfileSidebar = ({user})=>{
    return(
      <div className='profile-bar'>
          <img src={user.profileUrl} alt="profile-img"/>
          <button>Choose Image</button>
          <hr/>
          <h3>{user.username}</h3>
          <h4>Followers: <span>0</span></h4>
          <h4>Following: <span>0</span></h4>
      </div>
    );
};

export default MainProfileSidebar;