import React, { Component } from 'react';
import './RegisterFormRecruiterSecondPage.css';
import leftside from './leftside.jpg';
import SUDH_logo_1 from './SUDH_logo_1.png';
import linkedin_icon_flat from './linkedin_icon_flat.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import history from '../history';
import AuthenticationServiceRec from '../Service/AuthenticationServiceRec'

export default class RegisterFormRecruiter extends Component{
    constructor(props){
      super(props);
      this.state = {
        companyname: '',
        companydesc: '',
        companyestdate: '',
        companywebsite: '',
        companypic: '',
        companyaddress: ''
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler = event => {
      this.setState({ [event.target.name]: event.target.value });
    };
    
      handleSubmit =event => {

        const company = {
          companyname: this.state.companyname,
          companydesc:this.state.companydesc,
          companyestdate:this.state.companyestdate,
          companywebsite:this.state.companywebsite,
          companypic:this.state.companypic,
          companyaddress:this.state.companyaddress
        };

        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        };

        const username=AuthenticationServiceRec.getLoggedInUserName();
        console.log(username)
        const user=sessionStorage.getItem('userId');
        console.log(user)

        axios.post(`http://localhost:8080/api/companydetails/${user}`,company,config)
        .then(res => {
        if(res.data!=null){
          console.log(res.data);
          console.log(company);
          console.log(res);
          alert("Company Added");
          alert(company);
        }
      })

      history.push('/LoginFormRecruiter');
      event.preventDefault();
      }
    
      render(){
        const {companyname,companydesc,companyestdate,companywebsite,companypic,companyaddress}=this.state
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
                  <input type="text" className="form-control" name="companyname" placeholder="Company Name" value={companyname} onChange={this.changeHandler} required />
                  <div className="invalid-feedback">
                    Please Enter Your Company Name
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </Col>
              </Row>
              <br/>
              <Row>
                <Col>
                  <input type="date" className="form-control" name="companyestdate" placeholder="Company Establishment Date" value={companyestdate} onChange={this.changeHandler} required />
                  <div className="invalid-feedback">
                    Please Enter Your Company's Established Date
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </Col>

                <Col>
                <input type="url" className="form-control" name="companywebsite" placeholder="https://www.xxx.xxx" value={companywebsite} onChange={this.changeHandler} required />
                  <div className="invalid-feedback">
                    Please Enter Your Company's Website
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </Col>
              </Row>
              <br/>
              <Row>
                <Col>
                  <textarea rows="5" type="text" className="form-control" name="companydesc" placeholder="Company Description" value={companydesc} onChange={this.changeHandler} required />
                  <div className="invalid-feedback">
                    Please Enter Your Company Description
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </Col>
              </Row>
              <br/>
              <Row>
                <Col>
                  <textarea rows="5" type="text" className="form-control" name="companyaddress" placeholder="Company Address" value={companyaddress} onChange={this.changeHandler} required />
                  <div className="invalid-feedback">
                    Please Enter Your Company's Address
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </Col>
              </Row>
              <br/>
              <button type="submit" className="button1-rfsp">Sign Up</button><br/><br/>

              
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