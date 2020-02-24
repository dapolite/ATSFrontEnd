import React from 'react';
import Clock from 'react-live-clock';
import './ViewProfile.css';
import man from '../assets/man.png';
import user from '../assets/user.png';
import cast from '../assets/cast.png';
import google_plus from '../assets/google_plus.png';
import linkedin from '../assets/linkedin.png';
import facebook from '../assets/facebook.png';
import locked from '../assets/locked.png';

export default class ViewProfile extends React.Component{
    render(){
        return(
            <div>
                <div className="vp">
                    <div>
                        <Clock className="clock" format={'HH:mm:ss'} ticking={true} timezone={'ASIA/Pacific'}/>
                    </div>

                    <img src={man} className="vp1" alt="man.png"></img><br/><br/><br/><br/>
                    <img src={user} className="vp2" alt="user.png"></img>
                    <span><b className="vp4">BASIC INFO</b></span><br/><br/><br/>
                    <div>
                        <span className="companyname"><b>Company Name</b></span><br/>
                        <hr className="hr1"/>
                    </div><br/>

                    <div>
                        <span className="companyname"><b>Username</b></span><br/>
                        <hr className="hr1"/>
                    </div><br/>

                    <div>
                        <span className="companyname"><b>Email Address</b></span><br/>
                        <hr className="hr1"/>
                    </div><br/>

                    <div>
                        <span className="companyname"><b>Phone Number</b></span><br/>
                        <hr className="hr1"/>
                    </div><br/>

                    <div>
                        <span className="companyname"><b>Address</b></span><br/>
                        <hr className="hr1"/>
                    </div><br/>

                    <div>
                        <span className="companyname"><b>Category</b></span><br/>
                        <hr className="hr1"/>
                    </div><br/><br/><br/>

                    <img src={cast} className="vp2" alt="cast.png"></img>
                    <span><b className="vp4">SOCIAL NETWORKS</b></span><br/><br/><br/>

                    <div>
                        <span className="companyname"><b>Social Links</b></span><br/>
                        <img src={google_plus} className="vp3" alt="google_plus.png"></img>
                        <hr className="hr1"/>
                        <img src={linkedin} className="vp3" alt="linkedin.png"></img>
                        <hr className="hr1"/>
                        <img src={facebook} className="vp3" alt="facebook.png"></img>
                        <hr className="hr1"/>
                    </div><br/><br/><br/>

                    <img src={locked} className="vp2" alt="locked.png"></img>
                    <span><b className="vp4">CHANGE PASSWORD</b></span><br/><br/><br/>

                    <div>
                        <span className="companyname"><b>Current Password</b></span><br/>
                        <hr className="hr1"/>
                    </div><br/>

                    <div>
                        <span className="companyname"><b>New Password</b></span><br/>
                        <hr className="hr1"/>
                    </div><br/>

                    <div>
                        <span className="companyname"><b>Re-Type Password</b></span><br/>
                        <hr className="hr1"/>
                    </div><br/><br/><br/>

                    <button type="submit" className="vp5">Save</button>

                </div>
            </div>
        )
    }
}