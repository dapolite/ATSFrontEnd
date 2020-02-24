import React from 'react';
import Clock from 'react-live-clock';
import './Dashboard.css';

export default class Dashboard extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <Clock className="clock" format={'HH:mm:ss'} ticking={true} timezone={'ASIA/Pacific'}/>
                </div>

                <div className="dash" />
            </div>
        )
    }
}