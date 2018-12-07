import React, { Component } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Main from "./Main";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        email: '',
        username: '',
        password: '',
        redirect: false,
        loggedin: false,
        err:'',
        user: {}
    };
    this.handleFormDataChange = this.handleFormDataChange.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleSignin = this.handleSignin.bind(this);
  }

  handleFormDataChange(e){
      e.preventDefault();
      this.setState({[e.target.name]: e.target.value});
  }

  handleSignup(e){
      e.preventDefault();
      const {email,username,password} = this.state;
      fetch("http://192.168.0.7:3001/api/auth/signup",
          {
              method : "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body : JSON.stringify({
                  username,
                  email,
                  password
              })
          })
          .then((res)=>{
              return res.json();
          })
          .then((user)=>{
              this.setState({
                    email: '',
                    username: '',
                    password: '',
                    redirect: true,
                    loggedin: true,
                    user: user
              });
              console.log(user);
          }).catch(function(err){
              console.log(err);
          });
  }

  handleSignin(e){
       e.preventDefault();
      const {email,password} = this.state;
      fetch("http://192.168.0.7:3001/api/auth/signin",
          {
              method : "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body : JSON.stringify({
                  email,
                  password
              })
          })
          .then((res)=>{
              if(!res.ok){
                  this.setState({
                    email: '',
                    password: '',
                  });
                  throw Error(res.status);
              }
              return res.json();
          })
          .then((user)=>{
              this.setState({
                    email: '',
                    password: '',
                    redirect: true,
                    loggedin: true,
                    user: user
              });
          }).catch(function(err){
              console.log(err);
          });

  }

  render() {
    const {email, username, password,redirect,loggedin, user} = this.state;
    return (
        <Switch key="routes">
            <Route exact path="/" render={(props)=>(
                  <Home {...props}
                        redirect={redirect}/>
            )}/>
            <Route exact path="/signup" render={(props)=> (
                 <SignUp   {...props}
                           handleChange={this.handleFormDataChange}
                           email={email}
                           username={username}
                           password={password}
                           redirect={redirect}
                           handleSubmit={this.handleSignup}/>
            )}/>
            <Route exact path="/signin" render={(props)=> (
                <Login  {...props}
                        handleChange={this.handleFormDataChange}
                        email={email}
                        password={password}
                        redirect={redirect}
                        loggedin={loggedin}
                        user={user}
                        handleSubmit={this.handleSignin}/>
            )}/>
            <Route exact path="/messages" render={(props=>(
                <Main   {...props}
                        user={user}
                        loggedin={loggedin}/>
            ))}/>
        </Switch>
    );
  }
}

export default App;
