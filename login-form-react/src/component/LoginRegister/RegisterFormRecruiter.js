import React, { Component } from 'react';
import './RegisterFormRecruiter.css';
import leftside from './leftside.jpg';
import SUDH_logo_1 from './SUDH_logo_1.png';
import history from '../history';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

export default class RegisterFormRecruiter extends Component{

  constructor(props){
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      user_name: '',
      phoneno: '',
      dateofbirth: '',
      email: '',
      password: '',
      cpassword: ''
    };
    this.handleSubmit=this.handleSubmit.bind(this);
    this.changeHandler=this.changeHandler.bind(this);
  }

  changeHandler = event => {
      this.setState({ [event.target.name]: event.target.value });
    };

  handleSubmit =event => {
        
      const recruiter = {
        firstname: this.state.firstname,
        lastname:this.state.lastname,
        user_name:this.state.user_name,
        phoneno:this.state.phoneno,
        dateofbirth:this.state.dateofbirth,
        email:this.state.email,
        password:this.state.password
      };

      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      axios.post("http://localhost:8080/api/Recruiter",recruiter,config)
      .then(res => {
        if(res.data!=null){
          console.log(res.data);
          console.log(recruiter);
          console.log(res);
          alert("Rec Added");
          alert(recruiter);
        }

      })
      
      event.preventDefault();
      //history.push('/RegisterFormRecruiterSecondPage')
    }
  
    
    render(){
        const {firstname,lastname,user_name,phoneno,dateofbirth,email,password}=this.state
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
                  <input type="text" className="form-control" name="firstname" placeholder="First Name" value={firstname} onChange={this.changeHandler} required />
                  <div className="invalid-feedback">
                    Please Enter Your First Name
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </Col>
    
                <Col>
                  <input type="text" className="form-control" name="lastname" placeholder="Last Name" value={lastname} onChange={this.changeHandler} required />
                  <div className="invalid-feedback">
                    Please Enter Your Last Name
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </Col>
              </Row>
              <br/>
              <Row>
                <Col>
                  <input type="text" className="form-control" name="user_name" placeholder="Username" value={user_name} onChange={this.changeHandler} required />
                  <div className="invalid-feedback">
                    Please Enter Your User Name
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </Col>
              </Row>
              <br/>
              <Row>
                <Col>
                <input type="tel" pattern="[0-9]{5}[0-9]{5}" className="form-control" name="phoneno" placeholder="Phone Number" value={phoneno} onChange={this.changeHandler} required />
                  <div className="invalid-feedback">
                    Please Enter Your Mobile Number
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </Col>
    
                <Col>
                <input type="date" className="form-control" name="dateofbirth" placeholder="Date Of Birth" value={dateofbirth} onChange={this.changeHandler} required />
                  <div className="invalid-feedback">
                    Please Enter Your Enter Your Date Of Birth
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </Col>
              </Row>
              <br/>
              <Row>
                <Col>
                  <input type="text" pattern="^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$" className="form-control" name="email" placeholder="Email Address" value={email} onChange={this.changeHandler} required />
                  <div className="invalid-feedback">
                    Please Enter Your Email Address
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </Col>
              </Row>
              <br/>
              <Row>
                <Col>
                  <input type="password" className="form-control" name="password" placeholder="Password" value={password} onChange={this.changeHandler} required />
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
    
              <button type="submit" className="button1">Next</button><br/><br/>
            </form>
            </div>
          </div>
        )
      }
}