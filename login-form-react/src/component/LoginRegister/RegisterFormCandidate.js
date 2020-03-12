import React, { Component } from 'react';
import './RegisterFormCandidate.css';
import leftside from './leftside.jpg';
import SUDH_logo_1 from './SUDH_logo_1.png';
import linkedin_icon_flat from './linkedin_icon_flat.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import history from '../history';

export default class RegisterFormCandidate extends Component{
  
  constructor(props){
    super(props);
    this.state = {
    fname: '',
    lname: '',
    uname: '',
    phonenumber: '',
    dateofbirth: '',
    city: '',
    state: '',
    country: '',
    email: '',
    password: '',
    cpassword: ''
    }
  }

  // submitHandler = event => {
  //   event.preventDefault();
  //   event.target.className += " was-validated";
  //   console.log(this.state);
  //   axios.post('https://jsonplaceholder.typicode.com/posts',{ mode: "no-cors" },this.state)
  //   .then(response => {
  //     console.log(response)
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  // }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit =event => {
    history.push('/CandidateDashboard')
    event.preventDefault();
  }

  render(){
    return(
      <div>
        <div>
          <img src={leftside} className="leftside-logo" alt="leftside.jpg"></img>
        </div>
        <div>
        <form className="needs-validation demoForm1" onSubmit={this.handleSubmit}>
          <img src={SUDH_logo_1} className="sudh-logo" alt="SUDH_logo_1.png"></img>
          <h5 class="h5" align="center">Please complete to create your account</h5><br></br>
          <Row>
            <Col>
              <input type="text" className="form-control" name="fname" placeholder="First Name" value={this.state.fname} onChange={this.changeHandler} required />
            </Col>

            <Col>
              <input type="text" className="form-control" name="lname" placeholder="Last Name" value={this.state.lname} onChange={this.changeHandler} required />
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <input type="text" className="form-control" name="uname" placeholder="Username" value={this.state.uname} onChange={this.changeHandler} required />
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
            <input type="tel" pattern="[0-9]{5}[0-9]{5}" className="form-control" name="phonenumber" placeholder="Phone Number" value={this.state.phonenumber} onChange={this.changeHandler} required />
            </Col>

            <Col>
            <input type="date" className="form-control" name="dateofbirth" placeholder="Date Of Birth" value={this.state.dateofbirth} onChange={this.changeHandler} required />
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
            <input type="text" className="form-control" name="city" placeholder="City" value={this.state.city} onChange={this.changeHandler} required />
            </Col>

            <Col>
            <input type="text" className="form-control" name="state" placeholder="State" value={this.state.state} onChange={this.changeHandler} required />
            </Col>

            <Col>
            <input type="text" className="form-control" name="country" placeholder="Country" value={this.state.country} onChange={this.changeHandler} required />
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <input type="text" pattern="^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$" className="form-control" name="email" placeholder="Email Address" value={this.state.email} onChange={this.changeHandler} required />
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <input type="password" className="form-control" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} required />
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <input type="password" className="form-control" name="cpassword" placeholder="Confirm Password" value={this.state.cpassword} onChange={this.changeHandler} required />
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
