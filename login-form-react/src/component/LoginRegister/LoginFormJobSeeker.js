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
import AuthenticationService from '../Service/AuthenticationService'
import Modal from 'react-bootstrap/Modal'; 
import Button from 'react-bootstrap/Button';
import Axios from 'axios';

class Form extends Component {
  constructor(props){
    super(props);

    this.state = {
      uname: '',
      password: '',
      email1: '',
      uname: '',
      id:'',
      values: [],
       };
       this.handleSubmit=this.handleSubmit.bind(this);
       this.changeHandler=this.changeHandler.bind(this);
  }


  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const id='';
    AuthenticationService
    .executeBasicAuthenticationService(this.state.email, this.state.password)
    .then(() => {
        AuthenticationService.registerSuccessfulLogin(this.state.email, this.state.password)
        Axios.get(`http://localhost:8080/api/candidates/getId/${this.state.email}`)
        .then((response)=>{
          this.setState({id:response.data})
          console.log(this.state.id)
          this.props.history.push(`/CandidateDashboard/${this.state.id}`)
        })
    }).catch(() => {
        this.setState({ showSuccessMessage: false })
        this.setState({ hasLoginFailed: true })
    })
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