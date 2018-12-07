import React from "react";
import {Redirect} from 'react-router-dom'
import Navbar from './Navbar';
import './Auth.css';

const SignUp= ({email, username, profileUrl, password, handleChange, handleSubmit,redirect,user,loggedin})=>{
    if(redirect){
        return <Redirect to='/messages'/>
    }
    return[
        <Navbar key='nav' user={user} loggedin={loggedin}/>,
        <div key='signup' className="auth">
            <h2>Signup</h2>
            <form className="auth-form" onSubmit={handleSubmit}>
                <input type="text" name= "username" value={username} onChange={handleChange} placeholder="Username"/>
                <input type="text" name= "email" value={email} onChange={handleChange} placeholder="Email Address"/>
                <input type="password" name= "password" value={password} onChange={handleChange} placeholder="Password"/>
                <button>Sign Up</button>
            </form>
        </div>
    ];
};

export default SignUp;