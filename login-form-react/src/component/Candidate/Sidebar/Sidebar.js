import React, { Component } from 'react';
import './Sidebar.css';
import homes from '../homes.png';
import user from '../user.png';
import portfolio from '../portfolio.png';
import calendar from '../calendar.png';
import email from '../email.png';
import SUDH_logo_1 from '../SUDH_logo_1.png';
import off from '../off.png';
import tickmark from '../tickmark.png'
import resume from '../resume.png'
import history from '../../history'
import favourite from '../star.png'
import settings from '../settings.png'
import Row from 'react-bootstrap/Row';

export default class Sidebar extends React.Component {
    render(){
        return (
            <Row className="no-gutters">
                <div className="sidebar sidebar-container">
                    <div><img src={SUDH_logo_1} className="sudh-logo" alt="SUDH_logo_1.png"></img></div><br/>
                    <div className="sidebar-link" onClick={() => history.push('/CandidateDashboard')}><img src={homes} className="homes-img" alt="homes.png"></img>Dashboard</div><br/>
                    <div className="sidebar-link" onClick={() => history.push('/ViewCandidateProfile')}><img src={user} className="homes-img" alt="homes.png"></img>View Profile</div><br/>
                    <div className="sidebar-link" onClick={() => history.push('/CandidateResume')}><img src={resume} className="homes-img" alt="resume.png"></img>Resume</div><br/>
                    <div className="sidebar-link" onClick={() => history.push('/CandidateJobs')}><img src={portfolio} className="homes-img" alt="portfolio.png"></img>Jobs</div><br/>
                    <div className="sidebar-link" onClick={() => history.push('/CandidateAppliedJobs')}><img src={tickmark} className="homes-img" alt="tickmark.png"></img>Applied Jobs</div><br/>
                    <div className="sidebar-link" onClick={() => history.push('/CandidateFavourites')}><img src={favourite} className="homes-img" alt="tickmark.png"></img>Favourites</div><br/>
                    <div className="sidebar-link" ><img src={calendar} className="homes-img" alt="calendar.png"></img>Calendar</div><br/>
                    <div className="sidebar-link" onClick={() => history.push('/CandidateInbox')}><img src={email} className="homes-img" alt="email.png"></img>Inbox</div>
                    <hr className="line-color"></hr>
                    <div className="sidebar-link"><img src={settings} className="homes-img" alt="settings.png"></img>Settings</div><br/>
                    <div className="sidebar-link" onClick={() => history.push('/')}><img src={off} className="homes-img" alt="off.png"></img>Log Out</div>
                </div>
            </Row>
        )
    }
}