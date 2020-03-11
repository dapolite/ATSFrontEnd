import React, { Component } from 'react';
import './RegisterStart.css';
import SUDH_logo_1 from './SUDH_logo_1.png';
import leftside from './leftside.jpg';
import recruitment from './recruitment.png';
import man from './man.png';
import history from '../history';

class Form extends Component {
  render () {
    return (
        <div>
          <div>
            <img src={leftside} className="leftside-logo" alt="leftside.jpg"></img>
          </div>
          <div>
            <form className="demoForm">
              <img src={SUDH_logo_1} className="sudh-logo" alt="SUDH_logo_1.png"></img>
              <h5 class="h5" align="center">Let's get Started</h5><br/>
              <p>PLease Select Which Type Of User You Are</p>
              <div>
                <div className="recruitment-logo">
                  <img src={recruitment} alt="recruitment.png" onClick={() => history.push('/RegisterFormRecruiter')}></img>
                  <p>Recruiter</p>
                </div>

                <div  className="man-logo">
                  <img src={man} alt="man.png" onClick={() => history.push('/RegisterFormCandidate')}></img>
                  <p>Job Seeker</p>
                </div>
              </div><br/><br/>
              <p>Already have an account?<span className="tab-space"><a href="/">Log In</a></span></p>
            </form>
          </div>
        </div>
    )
  }
}

export default Form;
