import React from 'react';
import './Message.css';

const Message = ({message})=>{
    return(
       <div className='message'>
           <img src={message.userId.profileUrl} alt="profile-img"/>
           <div className='message-text'>
                <p>{message.text}</p>
                <span><a href="">{message.userId.username}</a></span>
           </div>
       </div>
    );
};

export default Message;