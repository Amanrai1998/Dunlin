import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar= ({user,loggedin})=> {
    let links;
    if(loggedin){
        links = (<div className="auth-links">
                <img src={user.profileUrl} alt="profile-icon"/>
                <li>{user.username}</li>
                <li><Link to= "/" >logout</Link></li>
            </div>);
    }
    else{
        links = (<div className="auth-links">
                <li><Link to= "/signup" >Signup</Link></li>
                <li><Link to= "/signin" >Login</Link></li>
            </div>);
    }
    return(
        <nav>
            <li className="title"><i className="fa fa-feather"> </i><Link to= "/"><strong>Dunlin</strong></Link></li>
            {links}
        </nav>
    );
};

export default Navbar;