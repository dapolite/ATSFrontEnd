import React, { Component } from 'react';
import './LoginFormJobSeeker.css';
import leftside from './leftside.jpg';
import SUDH_logo_1 from './SUDH_logo_1.png';
import linkedin_icon_flat from './linkedin_icon_flat.png';
import history from '../history';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import Popup from 'reactjs-popup';
import forgot from './forgot.png';

import Modal from 'react-bootstrap/Modal'; 
import Button from 'react-bootstrap/Button';

class Form extends Component {
  constructor(props){
    super();

    this.state = {
      email: '',
      password: '',
      email1: '',
    };
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit =event => {
    event.preventDefault();
    axios.get('http://localhost:8080/api/candidates/candidatelist')
    .then((res) => {
      console.log(res.data);
      const user = res.data.username;
      const uid = res.data.userId;
      const password = res.data.password;
      console.log(user,password);
      const username = this.state.email;
      const passwordEntered = this.state.password;
      if(username === '' && passwordEntered === ''){
        document.getElementById('status').innerHTML = '<p>Please Enter A Valid Username and Password</p>';
      }else if(user === username && passwordEntered === password){
        document.getElementById('status').innerHTML = '';
        sessionStorage.setItem('UserName', this.state.email);
        sessionStorage.setItem('UserId', uid);
        history.push('/CandidateDashboard')
        console.log(user, password)
      }else{
          document.getElementById('status').innerHTML = '<p>Please Enter A Valid Username and Password</p>';
      }
    })
    .catch(error => {
      console.log(error);
    });
  }
  
  render () {
    return (
       <div>
         <div>
          <img src={leftside} className="leftside-logo" alt="leftside.jpg"></img>
         </div>
         <div>
          <form className="demoForm1" onSubmit={this.handleSubmit}>
           <img src={SUDH_logo_1} className="sudh-logo" alt="SUDH_logo_1.png"></img>
           <h5>Welcome back! Login to your account</h5><br/>
           <Row>
            <Col>
              <input type="text"  className="form-control" name="email" placeholder="Email Address" value={this.state.email} onChange={this.changeHandler} required />
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <input type="password" pattern="^(?=.*\d).{4,20}$" className="form-control" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} required />
            </Col>
          </Row>
          <br/>
           <div>
             <label className="remember-me"> 
             <input type="checkbox" name="remember"/>Remember Me
             </label>
              <Popup trigger={<a href="#" className="ForgotPswd">Forgot Password?</a>} modal>
                  <Modal.Dialog onSubmit={this.handleSubmit}>
                    <Modal.Body className="ev1">
                    <img src={forgot} className="fpev-logo" alt="forgot.png" /><br/><br/>
                      <input type="text" pattern="^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$" className="form-control" name="email1" placeholder="Email Address" value={this.state.email1} onChange={this.changeHandler} required />
                      <br/>
                      <button onClick={() => history.push('/ForgotPassword')} type="submit" className="button1 fpev-btn" >Email Verification</button>
                    </Modal.Body>
                  </Modal.Dialog>
              </Popup>
           </div><br/><br/>
           <div>
           <p id="status"></p>
            <button type="submit" className="btn btn-danger">Login</button>
             <button type="submit" className="btn btn-outline-danger" onClick={() => history.push('/RegisterFormCandidate')}>Sign up</button><br/><br/>
           </div><br/>
           <div>
              <p><b>Or Login With</b></p>
              <a href="#">
                <img src={linkedin_icon_flat} className="linkedin-logo" alt="linkedin_icon_flat.png"></img>
              </a>
            </div><br/>
           </form>
         </div>
       </div>
    )
  }
}

export default Form;