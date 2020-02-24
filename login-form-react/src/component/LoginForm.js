import React, { Component } from 'react';
import { LoginFormErrors } from './LoginFormErrors.js';
import './LoginForm.css';
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
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
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
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
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
          <form className="demoForm1">
          <img src={SUDH_logo_1} className="sudh-logo" alt="SUDH_logo_1.png"></img>
          <h5>Welcome back! Login to your account</h5><br/>
          <div className="panel panel-default">
            <LoginFormErrors formErrors={this.state.formErrors} />
          </div>
          <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
            <input type="email" required className="form-control" name="email" placeholder="Email" value={this.state.email} onChange={this.handleUserInput}/>
          </div>
          <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
            <input type="password" className="form-control" name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleUserInput}  />
          </div>
          <div>
            <label className="remember-me"> 
            <input type="checkbox" name="remember"/>Remember Me
            </label>
            <a href="#" className="ForgotPswd">Forgot Password?</a>
          </div><br/><br/>
          <div>
            <button type="submit" className="btn btn-danger" onClick={() => history.push('/Sidebar')} disabled={!this.state.formValid}>Login</button>
            <button type="submit" className="btn btn-outline-danger" onClick={() => history.push('/RegisterStart')}>Sign up</button><br/><br/>
          </div><br/>
          <p><b>Or Login With</b></p>
          <img src={linkedin_icon_flat} className="linkedin-logo" alt="linkedin_icon_flat.png"></img><br/><br/><hr/>
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