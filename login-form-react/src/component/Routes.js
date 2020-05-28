import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import RegisterFormCandidate from './LoginRegister/RegisterFormCandidate';
import LoginStart from './LoginRegister/LoginStart';
import RegisterFormRecruiter from './LoginRegister/RegisterFormRecruiter';
import RegisterFormRecruiterSecondPage from './LoginRegister/RegisterFormRecruiterSecondPage';
import LoginFormRecruiter from './LoginRegister/LoginFormRecruiter';
import LoginFormJobSeeker from './LoginRegister/LoginFormJobSeeker';
import history from './history';
import ForgotPassword from './ForgotPassword/ForgotPassword';

import Dashboard from './Recruiter/Dashboard';
import ViewProfile from './Recruiter/ViewProfile';
import ManageCandidates from './Recruiter/ManageCandidates';
import ShortlistedCandidates from './Recruiter/ShortlistedCandidates';
import ManageJobs from './Recruiter/ManageJobs';
import PostNewJobs from './Recruiter/PostNewJobs';

import ViewCandidateProfile from './Candidate/ViewProfile'
import CandidateDashboard from './Candidate/Dashboard'
import CandidateAppliedJobs from './Candidate/AppliedJobs'
import CandidateFavourites from './Candidate/Favourites'
import CandidateJobs from './Candidate/Jobs'
import CandidateResume from './Candidate/Resume'
import CandidateSettings from './Candidate/Settings'

import AdminDashboard from './Admin/Dashboard'
import CandidateList from './Admin/CandidateList'
import CandidateProfile from './Admin/CandidateProfile'
import JobList from './Admin/JobList'
import RecruiterList from './Admin/RecruiterList'
import RecruiterProfile from './Admin/RecruiterProfile'
 
export default class Routes extends Component{
    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={LoginStart} />
                    <Route path="/LoginFormRecruiter" component={LoginFormRecruiter} />
                    <Route path="/LoginFormJobSeeker" component={LoginFormJobSeeker} />
                    <Route path="/RegisterFormRecruiter" component={RegisterFormRecruiter} />
                    <Route path="/RegisterFormRecruiterSecondPage" component={RegisterFormRecruiterSecondPage} />
                    <Route path="/ViewProfile" component={ViewProfile} />
                    <Route path="/Dashboard" component={Dashboard} />
                    <Route path="/ManageCandidates" component={ManageCandidates} />
                    <Route path="/ShortlistedCandidates" component={ShortlistedCandidates} />
                    <Route path="/ManageJobs" component={ManageJobs} />
                    <Route path="/PostNewJobs" component={PostNewJobs} />
                    
                    <Route path="/ViewCandidateProfile" component={ViewCandidateProfile} />
                    <Route path="/RegisterFormCandidate" component={RegisterFormCandidate} />
                    <Route path="/CandidateDashboard" component={CandidateDashboard} />
                    <Route path="/CandidateAppliedJobs" component={CandidateAppliedJobs} />
                    <Route path="/CandidateFavourites" component={CandidateFavourites} />
                    <Route path="/CandidateJobs" component={CandidateJobs} />
                    <Route path="/CandidateResume" component={CandidateResume} />
                    <Route path="/CandidateSettings" component={CandidateSettings} />

                    <Route path="/ForgotPassword" component={ForgotPassword} />

                    
                </Switch>
            </Router>
        )
    }
}