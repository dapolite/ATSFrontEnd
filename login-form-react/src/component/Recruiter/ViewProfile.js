import React from 'react';
import './ViewProfile.css'
import Sidebar from './Sidebar/Sidebar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class ViewProfile extends React.Component{
    render(){
        return(
            <Row className="no-gutters">
                <Sidebar/>
                <Col className="resume-page1">
                    <Col>
                        <Row>
                        <img className="thumb" src="https://themerail.com/html/oficiona/dashboard/images/user-1.jpg"/>
                        </Row><br/>
                        <Row>
                            <h3>Basic Info</h3>
                        </Row><br/>
                        <Row>
                            <Col>
                                <div className="resume1">
                                    <input className="input13" placeholder="Company Name" readOnly></input>
                                </div>
                                
                                <div className="resume2">
                                    <input className="input1" placeholder="Please enter your company name"></input>
                                </div>
                            </Col>
                        </Row>
                        <br/><br/>
                        <Row>
                            <Col>
                                <div className="resume1">
                                    <input className="input13" placeholder="Username" readOnly></input>
                                </div>
                                
                                <div className="resume2">
                                    <input className="input1" placeholder="Please enter your username"></input>
                                </div>
                            </Col>
                        </Row>
                        <br/><br/>
                        <Row>
                            <Col>
                                <div className="resume1">
                                    <input className="input13" placeholder="Email Address" readOnly></input>
                                </div>
                                
                                <div className="resume2">
                                    <input className="input1" placeholder="Please enter your email address"></input>
                                </div>
                            </Col>
                        </Row>
                        <br/><br/>
                        <Row>
                            <Col>
                                <div className="resume1">
                                    <input className="input13" placeholder="Mobile Number" readOnly></input>
                                </div>
                                
                                <div className="resume2">
                                    <input className="input1" placeholder="Please enter your phone number"></input>
                                </div>
                            </Col>
                        </Row>
                        <br/><br/>
                        <Row>
                            <Col>
                                <div className="resume1">
                                    <input className="input13" placeholder="Address" readOnly></input>
                                </div>
                                
                                <div className="resume2">
                                    <input className="input12" placeholder="Please enter your address"></input>
                                </div>
                            </Col>
                        </Row>
                        <br/><br/>
                        <Row>
                            <Col>
                                <div className="resume1">
                                    <input className="input13" placeholder="Category" readOnly></input>
                                </div>
                                
                                <div className="resume2">
                                    <input className="input1" placeholder="Please enter a category"></input>
                                </div>
                            </Col>
                        </Row><br/><br/>
                        <Row>
                            <h3>Social Networks</h3>
                        </Row><br/>
                        <Row>
                            <Col>
                                <div className="resume1">
                                    <input className="input13" placeholder="Social Links" readOnly></input>
                                </div>
                                
                                <div className="resume2">
                                    <input className="input1" placeholder="google.com/username"></input>
                                </div><br/><br/><br/>
                                <div className="resume2">
                                    <input className="input1" placeholder="linkedin.com/username"></input>
                                </div><br/><br/><br/>
                                <div className="resume2">
                                    <input className="input1" placeholder="facebook.com/username"></input>
                                </div>
                            </Col>
                        </Row>
                        <br/><br/>
                        <Row>
                            <h3>Change Password</h3>
                        </Row><br/>
                        <Row>
                            <Col>
                                <div className="resume1">
                                    <input className="input13" placeholder="Currenty Password" readOnly></input>
                                </div>
                                
                                <div className="resume2">
                                    <input className="input1" placeholder="Please enter your current password"></input>
                                </div>
                            </Col>
                        </Row>
                        <br/><br/>
                        <Row>
                            <Col>
                                <div className="resume1">
                                    <input className="input13" placeholder="New Password" readOnly></input>
                                </div>
                                
                                <div className="resume2">
                                    <input className="input1" placeholder="Please enter new password"></input>
                                </div>
                            </Col>
                        </Row>
                        <br/><br/>
                        <Row>
                            <Col>
                                <div className="resume1">
                                    <input className="input13" placeholder="Re-Type Password" readOnly></input>
                                </div>
                                
                                <div className="resume2">
                                    <input className="input1" placeholder="Please re-type the password"></input>
                                </div>
                            </Col>
                        </Row><br/><br/>
                    </Col><br/>
                    <button type="button" class="res-btn btn-danger">Submit</button><br/><br/>
                </Col>
            </Row>
        )
    }
}