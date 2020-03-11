import React, { Component } from 'react';
import './Sidebar.css';
import homes from '/mnt/d/WSL-Ubuntu/login-form-react/src/assets/homes.png';
import user from '/mnt/d/WSL-Ubuntu/login-form-react/src/assets/user.png';
import man from '/mnt/d/WSL-Ubuntu/login-form-react/src/assets/man.png';
import tickmark from '/mnt/d/WSL-Ubuntu/login-form-react/src/assets/tickmark.png';
import portfolio from '/mnt/d/WSL-Ubuntu/login-form-react/src/assets/portfolio.png';
import calendar from '/mnt/d/WSL-Ubuntu/login-form-react/src/assets/calendar.png';
import email from '/mnt/d/WSL-Ubuntu/login-form-react/src/assets/email.png';
import SUDH_logo_1 from '/mnt/d/WSL-Ubuntu/login-form-react/src/assets/SUDH_logo_1.png';
import off from '/mnt/d/WSL-Ubuntu/login-form-react/src/assets/off.png';
import history from '/mnt/d/WSL-Ubuntu/login-form-react/src/component/history.js';

export default class Sidebar extends React.Component {
    render(){
        return (
            <div className="row no-gutters">
            <div className="sidebar sidebar-container">
                <div><img src={SUDH_logo_1} className="sudh-logo" alt="SUDH_logo_1.png"></img></div><br/>
                <div className="sidebar-link" onClick={() => history.push('/Dashboard')}><img src={homes} className="homes-img" alt="homes.png"></img>Dashboard</div><br/>
                <div className="sidebar-link" onClick={() => history.push('/ViewProfile')}><img src={user} className="homes-img" alt="user.png"></img>View Profile</div><br/>
                <div className="sidebar-link" onClick={() => history.push('/ManageCandidates')}><img src={man} className="homes-img" alt="man.png"></img>Manage Candidates</div><br/>
                <div className="sidebar-link" onClick={() => history.push('/ShortlistedCandidates')}><img src={tickmark} className="homes-img" alt="tickmark.png"></img>Shortlisted Candidates</div><br/>
                <div className="sidebar-link" onClick={() => history.push('/ManageJobs')}><img src={portfolio} className="homes-img" alt="portfolio.png"></img>Manage Jobs</div><br/>
                <div className="sidebar-link" onClick={() => history.push('/Calendars')}><img src={calendar} className="homes-img" alt="calendar.png"></img>Calendar</div><br/>
                <div className="sidebar-link" onClick={() => history.push('/PostNewJobs')}><img src={email} className="homes-img" alt="email.png"></img>Post New Jobs</div>
                <hr className="line-color"></hr>
                <div className="sidebar-link" onClick={() => history.push('/')}><img src={off} className="homes-img" alt="off.png"></img>Log Out</div>
            </div>
            </div>
        )
    }
}