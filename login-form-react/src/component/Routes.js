import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import RegisterForm from './RegisterForm';
import RegsiterStart from './RegisterStart';
import LoginForm from './LoginForm';
import Sidebar from './Sidebar';
import history from './history';
import Dashboard from './Dashboard';
import ViewProfile from './ViewProfile';
import ManageCandidates from './ManageCandidates';
import ShortlistedCandidates from './ShortlistedCandidates';
import ManageJobs from './ManageJobs';
import Calendar from './Calendar';
import PostNewJobs from './PostNewJobs';
 
export default class Routes extends Component{
    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={LoginForm} />
                    <Route path="/RegisterForm" component={RegisterForm} />
                    <Route path="/RegisterStart" component={RegsiterStart} />
                    <Route path="/Sidebar" component={Sidebar} />
                    <Route path="/ViewProfile" component={ViewProfile} />
                    <Route path="/Dashboard" component={Dashboard} />
                    <Route path="/ManageCandidates" component={ManageCandidates} />
                    <Route path="/ShortlistedCandidates" component={ShortlistedCandidates} />
                    <Route path="/ManageJobs" component={ManageJobs} />
                    <Route path="/Calendar" component={Calendar} />
                    <Route path="/PostNewJobs" component={PostNewJobs} />
                </Switch>
            </Router>
        )
    }
}