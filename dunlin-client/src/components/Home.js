import React from "react";
import {Redirect} from 'react-router-dom'
import './Home.css';

const Home= (props)=>{
    if(props.redirect){
        return <Redirect to='/messages'/>
    }
    return(
        <div key='home' className='home-body'>
            <div className='info'>
                <h1><i className="fa fa-feather"> </i> DUNLIN</h1>
                <h3>Share your thoughts with the world</h3>
            </div>
            <div className='auth-btn'>
                <button onClick={()=>{props.history.push("/signup")}}>Sign Up</button>
                <button onClick={()=>{props.history.push("/signin")}}>Log in</button>
            </div>
        </div>
    )
};

export default Home;