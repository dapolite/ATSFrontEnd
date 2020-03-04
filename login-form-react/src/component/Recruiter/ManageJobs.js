import React from 'react';
import Clock from 'react-live-clock';
import './ManageJobs.css';
import Sidebar from './Sidebar/Sidebar';
import Searchbar from '../Searchbar/Searchbar';
import JobItem from '../Job/JobItem'

export default class ManageJobs extends React.Component{
    render(){
        return(
            <div className="row no-gutters">  
            <Sidebar />              
            <div className="col">
            <div className="col container-fluid">
            <br/>
                <div className="row">
                        <div className="col">
                            <Searchbar/>
                        </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col">
                    <div className="card border-0">
                        <div className="card-body">
                            <JobItem />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        )
    }
}