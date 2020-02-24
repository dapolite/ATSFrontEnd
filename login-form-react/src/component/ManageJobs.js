import React from 'react';
import Clock from 'react-live-clock';
import './ManageJobs.css';

export default class ManageJobs extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <Clock className="clock" format={'HH:mm:ss'} ticking={true} timezone={'ASIA/Pacific'}/>
                </div>

                <div className="mj" />
            </div>
        )
    }
}