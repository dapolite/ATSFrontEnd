import React, { Component } from 'react';
import './ForgotPassword.css';

import leftside from './leftside.jpg';
import forgot from './forgot.png';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default class ForgotPassword extends Component {
  
  render () {
    return (
       <div>
         <div>
          <img src={leftside} className="leftside-logo" alt="leftside.jpg"></img>
         </div>
         <div>
          <form className="fp-form">
            <img src={forgot} className="fp-logo" alt="forgot.png" /><br/><br/>
            <h5>RESET PASSWORD !</h5>
            <br/>
            <Row>
                <Col>
                    <input type="password" pattern="^(?=.*\d).{4,20}$" className="fp" name="password" placeholder="New Password" /*value={this.state.password} onChange={this.changeHandler}*/ required />
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    <input type="password" pattern="^(?=.*\d).{4,20}$" className="fp" name="password" placeholder="Confirm New Password" /*value={this.state.password} onChange={this.changeHandler}*/ required />
                </Col>
            </Row>
            <br/><br/>
            <Row>
                <Col>
                    <button type="submit" className="button1">Login</button>
                </Col>
            </Row>
           </form>
         </div>
       </div>
    )
  }
}