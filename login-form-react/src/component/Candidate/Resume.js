import React from 'react';
import './Resume.css';
import CandidateSidebar from './Sidebar/Sidebar'
import Searchbar from '../Searchbar/Searchbar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default class Resume extends React.Component{
    render(){
        return(
            <Row className="no-gutters">
                <CandidateSidebar/>
                <Col className="resume-page1">
                    <Col>
                        <Row>
                            <Col>
                                <Searchbar/>
                            </Col>
                        </Row><br/><br/>
                        <Row>
                            <Col>
                                <div className="resume1">
                                    <input className="input13" placeholder="Full Name" readOnly></input>
                                </div>
                                
                                <div className="resume2">
                                    <input className="input1" placeholder="Please Enter Your Name"></input>
                                </div>
                            </Col>
                        </Row>
                        <br/><br/>
                        <Row>
                            <Col>
                                <div className="resume1">
                                    <input className="input13" placeholder="Information" readOnly></input>
                                </div>
                                
                                <div className="resume2">
                                    <input className="input1" placeholder="Information"></input>
                                </div>
                            </Col>
                        </Row>
                        <br/><br/>
                        <Row>
                            <Col>
                                <div className="resume1">
                                    <input className="input13" placeholder="About You" readOnly></input>
                                </div>
                                
                                <div className="resume3">
                                    <input className="input12" placeholder="About You"></input>
                                </div>
                            </Col>
                        </Row>
                        <br/><br/>
                        <Row>
                            <Col>
                                <div className="resume1">
                                    <input className="input13" placeholder="Education" readOnly></input>
                                </div>
                                
                                <div className="resume2">
                                    <input className="input1" placeholder="Name Of Institute"></input>
                                </div><br/><br/><br/>
                                <div className="resume2">
                                    <input className="input1" placeholder="Location Of Institute"></input>
                                </div><br/><br/><br/>
                                <div className="resume2">
                                    <input className="input1" placeholder="Qualification"></input>
                                </div><br/><br/><br/>
                                <div className="resume2">
                                    <input className="input1" placeholder="Precentage / CGPA"></input>
                                </div><br/><br/><br/>
                                <div className="resume2">
                                    <input className="input1" placeholder="Year Of Passing"></input>
                                </div><br/><br/><br/><br/>
                            </Col>
                        </Row>
                        <br/><br/>
                        <Row>
                            <Col>
                                <div className="resume1">
                                    <input className="input13" placeholder="Work Experience" readOnly></input>
                                </div>
                                
                                <div className="resume2">
                                    <input className="input1" placeholder="Company Name"></input>
                                </div><br/><br/><br/>
                                <div className="resume2">
                                    <input className="input1" placeholder="Duration"></input>
                                </div><br/><br/><br/>
                                <div className="resume2">
                                    <input className="input12" placeholder="Description (Optional)"></input>
                                </div>
                            </Col>
                        </Row>
                        <br/><br/>
                        <Row>
                            <Col>
                                <div className="resume1">
                                    <input className="input13" placeholder="Social Media" readOnly></input>
                                </div>
                                
                                <div className="resume2">
                                    <input className="input1" placeholder="Please Select A Link"></input>
                                </div>
                            </Col>
                        </Row>
                        <br/><br/>
                        <Row>
                            <Col>
                                <div className="resume1">
                                    <input className="input13" placeholder="Personal Details" readOnly></input>
                                </div>
                                
                                <div className="resume2">
                                    <input className="input1" placeholder="Father's Name"></input>
                                </div><br/><br/><br/>
                                <div className="resume2">
                                    <input className="input1" placeholder="Mother's Name"></input>
                                </div><br/><br/><br/>
                                <div className="resume2">
                                    <input className="input1" placeholder="Nationality"></input>
                                </div><br/><br/><br/>
                                <div className="resume2">
                                    <input className="input1" placeholder="Sex"></input>
                                </div><br/><br/><br/>
                                <div className="resume2">
                                    <input className="input12" placeholder="Address"></input>
                                </div>
                            </Col>
                        </Row><br/><br/>
                    </Col>
                    <button type="button" class="res-btn btn-danger">Submit</button><br/><br/>
                </Col>
            </Row>
        )
    }
}