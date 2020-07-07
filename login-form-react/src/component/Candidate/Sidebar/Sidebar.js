import React, { Component } from 'react';
import './Sidebar.css';
import homes from '../homes.png';
import user from '../user.png';
import portfolio from '../portfolio.png';
import SUDH_logo_1 from '../SUDH_logo_1.png';
import off from '../off.png';
import tickmark from '../tickmark.png'
import resume from '../resume.png'
import history from '../../history'
import favourite from '../star.png'
import settings from '../settings.png'
import Row from 'react-bootstrap/Row';
import AuthenticationService from '../../Service/AuthenticationService'
import { Link, withRouter } from 'react-router-dom';
import Axios from 'axios';

export default class Sidebar extends React.Component {

    constructor(props){
        super();
    
        this.state = {
           userid: '',
           };
    }

    render(){
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        const username=AuthenticationService.getLoggedInUserName();
        Axios.get(`http://localhost:8080/api/Candidate/getId/${username}`)
        .then((response)=>{
            this.setState({userid:response.data})
        });

        return (
            <Row className="no-gutters">
                <div className="sidebar sidebar-container">
                    <div><img src={SUDH_logo_1} className="sudh-logo" alt="SUDH_logo_1.png"></img></div><br/>
                    <div className="sidebar-link" onClick={() => history.push(`/CandidateDashboard/${this.state.userid}`)}><img src={homes} className="homes-img" alt="homes.png"></img>Dashboard</div><br/>
                    <div className="sidebar-link" onClick={() => history.push(`/ViewCandidateProfile/${this.state.userid}`)}><img src={user} className="homes-img" alt="homes.png"></img>View Profile</div><br/>
                    <div className="sidebar-link" onClick={() => history.push(`/CandidateResume/${this.state.userid}`)}><img src={resume} className="homes-img" alt="resume.png"></img>Resume</div><br/>
                    <div className="sidebar-link" onClick={() => history.push(`/CandidateJobs`)}><img src={portfolio} className="homes-img" alt="portfolio.png"></img>Jobs</div><br/>
                    <div className="sidebar-link" onClick={() => history.push(`/CandidateAppliedJobs/${this.state.userid}`)}><img src={tickmark} className="homes-img" alt="tickmark.png"></img>Applied Jobs</div><br/>
                    <div className="sidebar-link" onClick={() => history.push(`/CandidateFavourites/${this.state.userid}`)}><img src={favourite} className="homes-img" alt="tickmark.png"></img>Favourites</div><br/>
                    <hr className="line-color"></hr>
                    <div className="sidebar-link"><img src={settings} className="homes-img" alt="settings.png"></img>Settings</div><br/>
                    {isUserLoggedIn && <div className="sidebar-link" onClick={AuthenticationService.logout}><img src={off} className="homes-img" alt="off.png"></img>Logout</div>}

                </div>
            </Row>
        )
    }
}