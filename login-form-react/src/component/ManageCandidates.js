import React from 'react';
import Clock from 'react-live-clock';
import './ManageCandidates.css';
import search from '../assets/search.png';

export default class ManageCandidates extends React.Component{
    render(){
        return(
            <div>
                <div className="mc">
                    <div>
                        <div>
                            <Clock className="clock" format={'HH:mm:ss'} ticking={true} timezone={'ASIA/Pacific'}/>
                            <img src={search} className="mc2" alt="search.png"></img><span className="mc1">Search...</span>
                            <span>Category</span>
                            <span>Location</span>
                            <span>Experience</span>
                            <span>Gender</span>
                            <span>Job Type</span>
                            <span>Skills</span>
                            <span>Qualification</span>
                        </div><br/><br/>

                        <div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}