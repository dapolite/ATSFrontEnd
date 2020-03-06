import React, { Component } from 'react';
import './RegisterFormRecruiterSecondPage.css';
import leftside from '/mnt/d/WSL-Ubuntu/login-form-react/src/assets/leftside.jpg';
import SUDH_logo_1 from '/mnt/d/WSL-Ubuntu/login-form-react/src/assets/SUDH_logo_1.png';
import linkedin_icon_flat from '/mnt/d/WSL-Ubuntu/login-form-react/src/assets/linkedin_icon_flat.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import history from '../history';

export default class RegisterFormRecruiter extends Component{
    state = {
        companyname: '',
        companydescription: '',
        companyestdate: '',
        companywebsite: '',
        companylogo: '',
        companyaddress: ''
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
                  <input type="text" className="form-control" name="companyname" placeholder="Company Name" value={this.state.companyname} onChange={this.changeHandler} required />
                  <div className="invalid-feedback">
                    Please Enter Your Company Name
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </Col>
              </Row>
              <br/>
              <Row>
                <Col>
                  <input type="text" className="form-control" name="companyestdate" placeholder="Company Establishment Date" value={this.state.companyestdate} onChange={this.changeHandler} required />
                  <div className="invalid-feedback">
                    Please Enter Your Company's Established Date
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </Col>

                <Col>
                <input type="url" className="form-control" name="companywebsite" placeholder="https://www.xxx.xxx" value={this.state.companywebsite} onChange={this.changeHandler} required />
                  <div className="invalid-feedback">
                    Please Enter Your Company's Website
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </Col>
              </Row>
              <br/>
              <Row>
                <Col>
                  <textarea rows="5" type="text" className="form-control" name="companydescription" placeholder="Company Description" value={this.state.companydescription} onChange={this.changeHandler} required />
                  <div className="invalid-feedback">
                    Please Enter Your Company Description
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </Col>
              </Row>
              <br/>
              <Row>
                <Col>
                  <textarea rows="5" type="text" className="form-control" name="companyaddress" placeholder="Company Address" value={this.state.companyaddress} onChange={this.changeHandler} required />
                  <div className="invalid-feedback">
                    Please Enter Your Company's Address
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </Col>
              </Row>
              <br/>
              <button onClick={() => history.push('/RegisterFormRecruiterSecondPage')} type="submit" className="button1-rfsp">Next</button><br/><br/>

              
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