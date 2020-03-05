import React, { Component } from 'react';
import { FormErrors } from './RegisterFormErrors';
import './RegisterForm.css';
import leftside from '/mnt/d/WSL-Ubuntu/login-form-react/src/assets/leftside.jpg';
import SUDH_logo_1 from '/mnt/d/WSL-Ubuntu/login-form-react/src/assets/SUDH_logo_1.png';
import linkedin_icon_flat from '/mnt/d/WSL-Ubuntu/login-form-react/src/assets/linkedin_icon_flat.png';
import history from '../history';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Form extends Component{
  state = {
    fname: '',
    lname: '',
    uname: '',
    phonenumber: '',
    dateofbirth: '',
    email: '',
    password: '',
    cpassword: ''
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render(){
    return(
      <div>
        <div>
          <img src={leftside} className="leftside-logo" alt="leftside.jpg"></img>
        </div>
        <div>
        <form className="needs-validation demoForm1" onSubmit={this.submitHandler} noValidate>
          <img src={SUDH_logo_1} className="sudh-logo" alt="SUDH_logo_1.png"></img>
          <h5 class="h5" align="center">Please complete to create your account</h5><br></br>
          <Row>
            <Col>
              <input type="text" className="form-control" name="fname" placeholder="First Name" value={this.state.fname} onChange={this.changeHandler} required />
              <div className="invalid-feedback">
                Please Enter Your First Name
              </div>
              <div className="valid-feedback">Looks good!</div>
            </Col>

            <Col>
              <input type="text" className="form-control" name="lname" placeholder="Last Name" value={this.state.lname} onChange={this.changeHandler} required />
              <div className="invalid-feedback">
                Please Enter Your Last Name
              </div>
              <div className="valid-feedback">Looks good!</div>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <input type="text" className="form-control" name="uname" placeholder="Username" value={this.state.uname} onChange={this.changeHandler} required />
              <div className="invalid-feedback">
                Please Enter Your User Name
              </div>
              <div className="valid-feedback">Looks good!</div>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
            <input type="tel" pattern="[0-9]{5}[0-9]{5}" className="form-control" name="phonenumber" placeholder="Phone Number" value={this.state.phonenumber} onChange={this.changeHandler} required />
              <div className="invalid-feedback">
                Please Enter Your Mobile Number
              </div>
              <div className="valid-feedback">Looks good!</div>
            </Col>

            <Col>
            <input type="date" className="form-control" name="dateofbirth" placeholder="Date Of Birth" value={this.state.dateofbirth} onChange={this.changeHandler} required />
              <div className="invalid-feedback">
                Please Enter Your Enter Your Date Of Birth
              </div>
              <div className="valid-feedback">Looks good!</div>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <input type="text" pattern="^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$" className="form-control" name="email" placeholder="Email Address" value={this.state.email} onChange={this.changeHandler} required />
              <div className="invalid-feedback">
                Please Enter Your Email Address
              </div>
              <div className="valid-feedback">Looks good!</div>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <input type="password" className="form-control" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} required />
              <div className="invalid-feedback">
                Please Enter Your Password
              </div>
              <div className="valid-feedback">Looks good!</div>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <input type="password" className="form-control" name="cpassword" placeholder="Confirm Password" value={this.state.cpassword} onChange={this.changeHandler} required />
              <div className="invalid-feedback">
                Please Enter Your Password Again  
              </div>
              <div className="valid-feedback">Looks good!</div>
            </Col>
          </Row>
          <br/>

          <button type="submit" className="button1">Sign Up</button><br/><br/>

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
                <div className="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </Col>
          </Row><br/>
        </form>
        </div>
      </div>
    )
  }
}