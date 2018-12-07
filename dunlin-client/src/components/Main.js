import React,{Component} from 'react';
import './Main.css';
import MainProfileSidebar from "./MainProfileSidebar";
import Navbar from "./Navbar";
import MainMessageBody from "./MainMessageBody";

class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            loading:true,
            messages: []
        }
    }
    componentDidMount(){
        fetch("http://192.168.0.7:3001/api/messages")
        .then(res=> res.json())
        .then(messages=>{
            this.setState({
                messages
            });
            console.log(messages);
        })
        .catch(err=>{
            console.log(err);
        });
    }
    render(){
        return[
            <Navbar key='nav' user={this.props.user} loggedin={this.props.loggedin}/>,
            <div key='main' className='main-body'>
                <MainProfileSidebar key='profile-bar' user={this.props.user}/>
                <MainMessageBody key='message-body' messages={this.state.messages}/>
            </div>

        ]
    }
}

export default Main;