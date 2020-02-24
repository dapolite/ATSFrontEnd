import React, { Component } from 'react';
import './Sidebar.css';
import homes from '../assets/homes.png';
import user from '../assets/user.png';
import man from '../assets/man.png';
import tickmark from '../assets/tickmark.png';
import portfolio from '../assets/portfolio.png';
import calendar from '../assets/calendar.png';
import email from '../assets/email.png';
import SUDH_logo_1 from '../assets/SUDH_logo_1.png';
import off from '../assets/off.png';
import Dashboard from './Dashboard';
import history from './history';

export default class Sidebar extends React.Component {
    render(){
        return (
            <div className="row no-gutters">
                <div className="sidebar sidebar-container">
                    <div><img src={SUDH_logo_1} className="sudh-logo" alt="SUDH_logo_1.png"></img></div><br/>
                    <div className="sidebar-link"><img src={homes} className="homes-img" alt="homes.png"></img>Dashboard</div><br/>
                    <div id="demo" className="sidebar-link" onClick={() => history.push('/ViewProfile')}><img src={user} className="homes-img" alt="user.png"></img>View Profile</div><br/>
                    <div className="sidebar-link" onClick={() => history.push('/ManageCandidates')}><img src={man} className="homes-img" alt="man.png"></img>Manage Candidates</div><br/>
                    <div className="sidebar-link" onClick={() => history.push('/ShortlistedCandidates')}><img src={tickmark} className="homes-img" alt="tickmark.png"></img>Shortlisted Candidates</div><br/>
                    <div className="sidebar-link" onClick={() => history.push('/ManageJobs')}><img src={portfolio} className="homes-img" alt="portfolio.png"></img>Manage Jobs</div><br/>
                    <div className="sidebar-link" onClick={() => history.push('/Calendar')}><img src={calendar} className="homes-img" alt="calendar.png"></img>Calendar</div><br/>
                    <div className="sidebar-link" onClick={() => history.push('/PostNewJobs')}><img src={email} className="homes-img" alt="email.png"></img>Post New Jobs</div>
                    <hr className="line-color"></hr>
                    <div className="sidebar-link"><img src={off} className="homes-img" alt="off.png"></img>Log Out</div>
                </div>

                <div className="content bottomDiv">
                    <Dashboard/>
                </div>
            </div>
        )
    }
}