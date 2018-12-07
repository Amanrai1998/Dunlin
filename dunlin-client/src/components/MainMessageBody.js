import React from 'react';
import './MainMessageBody.css';
import Message from './Message';

const MainMessageBody = (props)=>{
    const messages= props.messages.map((message)=>
        <Message key={message._id} message={message}/>
    );
    return(
        <div key='message-body' className='message-body'>
            {messages}
        </div>
    );
};

export default MainMessageBody;