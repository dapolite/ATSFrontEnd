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
    candidate_fname: '',
    candidate_lname: '',
    candidate_address: '',
    candidate_about: '',
    candidate_profpic: '',
    username: '',
    phoneno: '',
    dob: '',
    candidateloc_city: '',
    candidateloc_state: '',
    candidateloc_country: '',
    email: '',
    password: '',
    cpassword: '',
    accountisactive: ''
    };
    this.handleSubmit=this.handleSubmit.bind(this);
    this.changeHandler=this.changeHandler.bind(this);
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
        
    const {password,cpassword} = this.state;

    if(password !== cpassword)
    {
      alert("Passwords don't match");
    }
    else
    {
      
      const candidate = {
        candidate_fname : this.state.candidate_fname,
        candidate_lname : this.state.candidate_lname,
        candidate_address : this.state.candidate_address,
        candidate_about : this.state.candidate_about,
        candidate_profpic : this.state.candidate_profpic,
        username : this.state.username,
        phoneno : this.state.phoneno,
        dob : this.state.dob,
        candidateloc_city : this.state.candidateloc_city,
        candidateloc_state : this.state.candidateloc_state,
        candidateloc_country : this.state.candidateloc_country,
        email : this.state.email,
        password : this.state.password,
        accountisactive : true
      };

      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      axios.post("http://localhost:8080/api/Candidate",candidate,config)
      .then(res => {
      if(res.data!=null){
        console.log(res.data);
        console.log(candidate);
        console.log(res);
        alert("Candidate Added");
        alert(candidate);
        history.push('/LoginFormJobSeeker');
      }
    })
    }
    event.preventDefault();
  }

  render(){
    const {candidate_fname,candidate_lname,candidate_address,candidate_about,candidate_profpic,username,phoneno,dob,candidateloc_city,candidateloc_state,candidateloc_country,email,password}=this.state
    return(
      <div>
        <div>
          <img src={leftside} className="leftside-logo" alt="leftside.jpg"></img>
        </div>
        <div>
        <form className="needs-validation demoForm1" id="regForm" onSubmit={this.handleSubmit}>
          <img src={SUDH_logo_1} className="sudh-logo" alt="SUDH_logo_1.png"></img>
          <h5 class="h5" align="center">Please complete to create your account</h5><br></br>
          <Row>
            <p>Upload Your Profile Picture:</p>
          </Row>
          <br/>
          <Row>
            <Col>
              <input type="text" className="form-control" name="candidate_fname" placeholder="First Name" value={candidate_fname} onChange={this.changeHandler} required />
            </Col>

            <Col>
              <input type="text" className="form-control" name="candidate_lname" placeholder="Last Name" value={candidate_lname} onChange={this.changeHandler} required />
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <input type="text" className="form-control" name="username" placeholder="Username" value={username} onChange={this.changeHandler} required />
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <textarea type="text" className="form-control" name="candidate_address" placeholder="Address" value={candidate_address} onChange={this.changeHandler} required />
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <textarea type="text" className="form-control" name="candidate_about" placeholder="About" value={candidate_about} onChange={this.changeHandler} required />
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
            <input type="tel" pattern="[0-9]{5}[0-9]{5}" className="form-control" name="phoneno" placeholder="Phone Number" value={phoneno} onChange={this.changeHandler} required />
            </Col>

            <Col>
            <input type="date" className="form-control" name="dob" placeholder="Date Of Birth" value={dob} onChange={this.changeHandler} required />
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
            <input type="text" className="form-control" name="candidateloc_city" placeholder="City" value={candidateloc_city} onChange={this.changeHandler} required />
            </Col>

            <Col>
            <input type="text" className="form-control" name="candidateloc_state" placeholder="State" value={candidateloc_state} onChange={this.changeHandler} required />
            </Col>

            <Col>
            <input type="text" className="form-control" name="candidateloc_country" placeholder="Country" value={candidateloc_country} onChange={this.changeHandler} required />
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <input type="text" pattern="^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$" className="form-control" name="email" placeholder="Email Address" value={email} onChange={this.changeHandler} required />
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <input type="password" className="form-control" name="password" placeholder="Password" value={password} onChange={this.changeHandler} required />
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
