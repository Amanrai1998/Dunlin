import React from 'react';
import {Redirect} from 'react-router-dom'
import Navbar from './Navbar';
import './Auth.css';

const Login = ({email, password, handleChange,handleSubmit,redirect,loggedin,user,err})=> {
    let error;
    if(redirect){
        return <Redirect to='/messages'/>
    }
    if(err){
        error = <div className='err'>{err}</div>;
    }
    return [
        <Navbar key='nav' loggedin={loggedin} user={user}/>,
        error,
        <div key='login' className="auth">
            <h2>Login</h2>
            <form className="auth-form" onSubmit={handleSubmit}>
                <input type="text" name="email" value={email} onChange={handleChange} placeholder="Email Address"/>
                <input type="password" name="password" value={password} onChange={handleChange}
                       placeholder="Password"/>
                <button>Login</button>
            </form>
        </div>
    ];
};

export default Login;