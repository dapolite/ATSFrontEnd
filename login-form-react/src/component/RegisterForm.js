import React, { Component } from 'react';
import { RegisterFormErrors } from '../component/RegisterFormErrors';
import './RegisterForm.css';
import leftside from '../assets/leftside.jpg';
import SUDH_logo_1 from '../assets/SUDH_logo_1.png';
import linkedin_icon_flat from '../assets/linkedin_icon_flat.png';
import history from './history';

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmpassword:'',
      fname: '',
      sname:'',
      username:'',
      phnnumber:'',
      dateofbirth:'',
      formErrors: {email: '', password: ''},
      emailValid: false,
      fnameValid:false,
      lnameValid:false,
      passwordValid: false,
      formValid: false,
      usernameValid:false,
      phnnumberValid:false,
      dateofbirthValid:false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const { password, confirmpassword } = this.state;
    // perform all neccassary validations
    if (confirmpassword.value !== password.value) {
        alert("Passwords don't match");
    } else {
        // make API call
    }
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let lnameValid=this.state.lnameValid;
    let fnameValid=this.state.fnameValid;
    let usernameValid=this.state.usernameValid;
    let phnnumberValid=this.state.phnnumberValid;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let dateofbirthValid = this.state.dateofbirthValid;

    switch(fieldName) {
      case 'fname':
        fieldValidationErrors.fname = fnameValid ? '' : ' is invalid';
      case 'lname':
        fieldValidationErrors.lname = lnameValid ? '' : ' is invalid';
      case 'username':
        fieldValidationErrors.username = usernameValid ? '' : ' is invalid';
      case 'phnnumber':
        fieldValidationErrors.phnnumber = phnnumberValid ? '' : ' is invalid';
      case 'dateofbirth':
        fieldValidationErrors.dateofbirth = dateofbirthValid ? '' : ' is invalid';
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid,fnameValid: lnameValid,fnameValid: lnameValid,usernameValid:usernameValid,phnnumberValid:phnnumberValid,dateofbirthValid:dateofbirthValid,
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid && this.lnameValid && this.fnameValid && this.usernameValid && this.phnnumberValid && this.dateofbirthValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    return (
      <div>
        <div>
          <img src={leftside} className="leftside-logo" alt="leftside.jpg"></img>
        </div>
        <div>
          <form className="demoForm">
            <img src={SUDH_logo_1} className="sudh-logo" alt="SUDH_logo_1.png"></img>
            <h5 class="h5" align="center">Please complete to create your account</h5><br></br>
            <div>
              <div className={`form-group1 ${this.errorClass(this.state.formErrors.email)}`}>
                <input type="text" required className="form-control" name="fname"
                  placeholder="First Name"
                  value={this.state.fname}
                  onChange={this.handleUserInput}/>
              </div>

              <div className={`form-group2 ${this.errorClass(this.state.formErrors.email)}`}>
                <input type="text" required className="form-control" name="lname"
                  placeholder="Last Name"
                  value={this.state.lname}
                  onChange={this.handleUserInput} />
              </div>
            </div><br/><br/><br/>

            <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
              <input type="text" required className="form-control" name="username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleUserInput}  /><br/>
            </div>

            <div>
              <div className={`form-group3 ${this.errorClass(this.state.formErrors.email)}`}>
                <input type="tel" pattern="[0-9]{5}[0-9]{5}" required className="form-control" name="phnnumber"
                  placeholder="Phone Number"
                  value={this.state.phnnumber}
                  onChange={this.handleUserInput}  />
              </div>

              <div className={`form-group4 ${this.errorClass(this.state.formErrors.email)}`}>
                <input type="date" required className="form-control" name="dateofbirth"
                  placeholder="Date Of Birth"
                  value={this.state.dateofbirth}
                  onChange={this.handleUserInput}  />
              </div>
            </div><br/><br/><br/>

            <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
              <input type="email" required className="form-control" name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleUserInput}  /><br/>
            </div>

            <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
              <input type="password" className="form-control" name="password"
                placeholder="Password" required
                value={this.state.password}
                onChange={this.handleUserInput}  /> <br/>
            </div>

            <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
              <input type="password" required className="form-control" name="confirm-password"
                placeholder="Confirm Password" 
                value={this.state.password}
                onChange={this.handleUserInput}  />
            </div>

            <button type="submit" className="button1" onClick={() => history.push('/Sidebar')}>Sign Up</button><br/><br/>

            <div>
              <p><b>Or Login With</b></p>
              <img src={linkedin_icon_flat} className="linkedin-logo" alt="linkedin_icon_flat.png"></img>
            </div><br/><hr/>
            <label> 
              <input type="checkbox" name="remember"/>By checking this box, you agree Sudh Infosys <br/><b>Privacy Policy</b> and <b>Terms of use</b>
            </label>
          </form>
        </div>
      </div>
    )
  }
}

export default Form;