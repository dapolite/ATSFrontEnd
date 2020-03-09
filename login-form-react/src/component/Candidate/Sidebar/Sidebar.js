import React, { Component } from 'react';
import './Sidebar.css';
import homes from '/mnt/d/WSL-Ubuntu/login-form-react/src/assets/homes.png';
import user from '/mnt/d/WSL-Ubuntu/login-form-react/src/assets/user.png';
import portfolio from '/mnt/d/WSL-Ubuntu/login-form-react/src/assets/portfolio.png';
import calendar from '/mnt/d/WSL-Ubuntu/login-form-react/src/assets/calendar.png';
import email from '/mnt/d/WSL-Ubuntu/login-form-react/src/assets/email.png';
import SUDH_logo_1 from '/mnt/d/WSL-Ubuntu/login-form-react/src/assets/SUDH_logo_1.png';
import off from '/mnt/d/WSL-Ubuntu/login-form-react/src/assets/off.png';
import tickmark from '/mnt/d/WSL-Ubuntu/login-form-react/src/assets/tickmark.png'
import resume from '/mnt/d/WSL-Ubuntu/login-form-react/src/assets/resume.png'
import history from '/mnt/d/WSL-Ubuntu/login-form-react/src/component/history.js'
import favourite from '/mnt/d/WSL-Ubuntu/login-form-react/src/assets/star.png'
import settings from '/mnt/d/WSL-Ubuntu/login-form-react/src/assets/settings.png'

export default class Sidebar extends React.Component {
    render(){
        return (
            <div className="row no-gutters">
                <div className="sidebar sidebar-container">
                    <div><img src={SUDH_logo_1} className="sudh-logo" alt="SUDH_logo_1.png"></img></div><br/>

                    <div className="sidebar-link" onClick={() => history.push('/CandidateDashboard')}><img src={homes} className="homes-img" alt="homes.png"></img>Dashboard</div><br/>
                    <div className="sidebar-link" onClick={() => history.push('/ViewCandidateProfile')}><img src={user} className="homes-img" alt="homes.png"></img>View Profile</div><br/>
                    <div className="sidebar-link" onClick={() => history.push('/CandidateResume')}><img src={resume} className="homes-img" alt="resume.png"></img>Resume</div><br/>
                    <div className="sidebar-link" onClick={() => history.push('/CandidateJobs')}><img src={portfolio} className="homes-img" alt="portfolio.png"></img>Jobs</div><br/>
                    <div className="sidebar-link" onClick={() => history.push('/CandidateAppliedJobs')}><img src={tickmark} className="homes-img" alt="tickmark.png"></img>Applied Jobs</div><br/>
                    <div className="sidebar-link" onClick={() => history.push('/CandidateFavourites')}><img src={favourite} className="homes-img" alt="tickmark.png"></img>Favourites</div><br/>
                    <div className="sidebar-link" ><img src={calendar} className="homes-img" alt="calendar.png"></img>Calendar</div><br/>
                    <div className="sidebar-link" onClick={() => history.push('/PostNewJobs')}><img src={email} className="homes-img" alt="email.png"></img>Inbox</div>
                    <hr className="line-color"></hr>
                    <div className="sidebar-link"><img src={settings} className="homes-img" alt="settings.png"></img>Settings</div><br/>
                    <div className="sidebar-link" onClick={() => history.push('/')}><img src={off} className="homes-img" alt="off.png"></img>Log Out</div>
                </div>
            </div>
        )
    }
}