import React, { Component } from 'react';
import './Sidebar.css';
import homes from '../homes.png';
import user from '../user.png';
import man from '../man.png';
import tickmark from '../tickmark.png';
import portfolio from '../portfolio.png';
import email from '../email.png';
import SUDH_logo_1 from '../SUDH_logo_1.png';
import off from '../off.png';
import history from '../../history';
import Axios from 'axios'
import AuthenticationServiceRec from '../../Service/AuthenticationServiceRec';

export default class Sidebar extends React.Component {

    constructor(props){
        super();
    
        this.state = {
           userid: ''
           };
    }


    logoutFunc = event =>{
        AuthenticationServiceRec.logout();
        history.push('/');
    }

    render(){

        const isUserLoggedIn = AuthenticationServiceRec.isUserLoggedIn();
        const username=AuthenticationServiceRec.getLoggedInUserName();
        Axios.get(`http://localhost:8080/api/Recriuter/getId/${username}`)
        .then((response)=>{
            this.setState({userid:response.data})
        });


        return (
            <div className="row no-gutters">
            <div className="sidebar sidebar-container">
                <div><img src={SUDH_logo_1} className="sudh-logo" alt="SUDH_logo_1.png"></img></div><br/>
                <div className="sidebar-link" onClick={() => history.push(`/Dashboard/${this.state.userid}`)}><img src={homes} className="homes-img" alt="homes.png"></img>Dashboard</div><br/>
                <div className="sidebar-link" onClick={() => history.push(`/ViewProfile/${this.state.userid}`)}><img src={user} className="homes-img" alt="user.png"></img>View Profile</div><br/>
                <div className="sidebar-link" onClick={() => history.push(`/ManageCandidates/${this.state.userid}`)}><img src={man} className="homes-img" alt="man.png"></img>Manage Candidates</div><br/>
                <div className="sidebar-link" onClick={() => history.push(`/ShortlistedCandidates/${this.state.userid}`)}><img src={tickmark} className="homes-img" alt="tickmark.png"></img>Shortlisted Candidates</div><br/>
                <div className="sidebar-link" onClick={() => history.push(`/ManageJobs/${this.state.userid}`)}><img src={portfolio} className="homes-img" alt="portfolio.png"></img>Manage Jobs</div><br/>
                <div className="sidebar-link" onClick={() => history.push(`/PostNewJobs/${this.state.userid}`)}><img src={email} className="homes-img" alt="email.png"></img>Post New Jobs</div>
                <hr className="line-color"></hr>
                <div className="sidebar-link" onClick={this.logoutFunc}><img src={off} className="homes-img" alt="off.png"></img>Log Out</div>
            </div>
            </div>
        )
    }
}