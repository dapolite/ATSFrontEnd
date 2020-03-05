import React, { Component } from 'react';
import { LoginFormErrors } from './LoginFormErrors.js';
import './LoginForm.css';
import leftside from '/mnt/d/WSL-Ubuntu/login-form-react/src/assets/leftside.jpg';
import SUDH_logo_1 from '/mnt/d/WSL-Ubuntu/login-form-react/src/assets/SUDH_logo_1.png';
import linkedin_icon_flat from '/mnt/d/WSL-Ubuntu/login-form-react/src/assets/linkedin_icon_flat.png';
import history from '../history';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Form extends Component {
  state = {
    email: '',
    password: ''
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render () {
    return (
       <div>
         <div>
          <img src={leftside} className="leftside-logo" alt="leftside.jpg"></img>
         </div>
         <div>
          <form className="demoForm1">
           <img src={SUDH_logo_1} className="sudh-logo" alt="SUDH_logo_1.png"></img>
           <h5>Welcome back! Login to your account</h5><br/>
           <Row>
            <Col>
              <input type="text" pattern="^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$" className="form-control" name="email" placeholder="Email Address" value={this.state.email} onChange={this.changeHandler} required />
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
             <a href="#" className="ForgotPswd">Forgot Password?</a>
           </div><br/><br/>
           <div>
            <button type="submit" className="btn btn-danger" onClick="logg()" /*onClick={() => history.push('/Dashboard')} disabled={!this.state.formValid}*/>Login</button>
             <button type="submit" className="btn btn-outline-danger" onClick={() => history.push('/RegisterStart')}>Sign up</button><br/><br/>
           </div><br/>
           <div>
              <p><b>Or Login With</b></p>
              <a href="#">
                <img src={linkedin_icon_flat} className="linkedin-logo" alt="linkedin_icon_flat.png"></img>
              </a>
            </div><hr/>
            <Row>
            <Col>
              <div className="custom-control custom-checkbox pl-3">
                <input className="custom-control-input" type="checkbox" value="" id="invalidCheck" required />
                <label className="custom-control-label" htmlFor="invalidCheck">
                  By checking this box, you agree Sudh Infosys <br/><b>Privacy Policy</b> and <b>Terms of use</b>
                </label>
              </div>
            </Col>
          </Row><br/>
           </form>
         </div>
       </div>
    )
  }
}

export default Form;