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
                <div className="sidebar-link" onClick={() => history.push('/PostNewJobs')}><img src={email} className="homes-img" alt="email.png"></img>Post New Jobs</div>
                <hr className="line-color"></hr>
                <div className="sidebar-link" onClick={() => history.push('/')}><img src={off} className="homes-img" alt="off.png"></img>Log Out</div>
            </div>
            </div>
        )
    }
}