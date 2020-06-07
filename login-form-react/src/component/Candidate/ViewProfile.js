import React from 'react';
import './ViewProfile.css';
import CandidateSidebar from './Sidebar/Sidebar'
import Searchbar from '../Searchbar/Searchbar'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card, { CardBody } from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default class ViewProfile extends React.Component{

    handleSubmit = event => {
        document.getElementById("myP1").contentEditable = true;
        document.getElementById("myP2").contentEditable = true;
        document.getElementById("myP3").contentEditable = true;
        document.getElementById("myP4").contentEditable = true;
        document.getElementById("myP5").contentEditable = true;
        document.getElementById("myP6").contentEditable = true;

        document.getElementById("spbtn").style.visibility = "visible";
    }

    handleSubmit1 = event => {
        document.getElementById("myP1").contentEditable = false;
        document.getElementById("myP2").contentEditable = false;
        document.getElementById("myP3").contentEditable = false;
        document.getElementById("myP4").contentEditable = false;
        document.getElementById("myP5").contentEditable = false;
        document.getElementById("myP6").contentEditable = false;

        document.getElementById("spbtn").style.visibility = "hidden";
    }

    render(){
        const cname="Dhruva Shaiva"
        const uname="dhruvashaiva"
        const email="dhunchi1999@email.com"
        const phone="9428219522"
        const address="Panchavati, Gorwa"
        const aboutme="I'm a Student Of M.S. University"

        return(
            <Row className="no-gutters">  
                <CandidateSidebar />              
                <Col className="resume-page">
                    <Col>
                        <br/>
                        <Row>
                            <Col>
                                <Searchbar/>
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <Card className="border-0" style={{ width: '15rem' }}>
                                    <Card.Img className="thumbprof" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0vBS3WCCCBV9W43wW17Y3vqn_cCuEi8MJ9-DyNPGdaizAmKK7" />
                                    <Card.Body>
                                        <Button variant="primary">Change</Button>
                                    </Card.Body>
                                </Card>
                            </Col>  
                            <Col>
                                <Button onClick={this.handleSubmit} variant="primary" className="viewprofilecandupdatebutton">Update Profile</Button>
                            </Col>      
                        </Row>
                        <br></br>
                        <Card className="view-profile-page border-0">
                            <Row>
                                <Col  xs={3} className="text-left" >
                                    <h5>Name</h5>
                                </Col>
                                <Col md={{ span: 3, offset: 3 }} className="text-left" >
                                    <h5 id="myP1">{cname}</h5>
                                </Col>
                            </Row><br/>
                            <Row >
                                <Col  xs={3} className="text-left">
                                    <h5>Username</h5>
                                </Col>
                                <Col  md={{ span: 3, offset: 3 }} className="text-left" >
                                    <h5 id="myP2">{uname}</h5>
                                </Col>
                            </Row><br/>
                            <Row >
                                <Col  xs={3} className="text-left">
                                    <h5>Email</h5>
                                </Col>
                                <Col  md={{ span: 3, offset: 3 }} className="text-left">
                                    <h5 id="myP3">{email}</h5>
                                </Col>
                            </Row><br/>
                            <Row >
                                <Col  xs={3} className="text-left">
                                    <h5>Phone</h5>
                                </Col>
                                <Col  md={{ span: 3, offset: 3 }} className="text-left">
                                    <h5 id="myP4">{phone}</h5>
                                </Col>
                            </Row><br/>
                            <Row>
                                <Col  xs={3} className="text-left">
                                    <h5>Address</h5>
                                </Col>
                                <Col  md={{ span: 3, offset: 3 }} className="text-left">
                                    <h5 id="myP5">{address}</h5>
                                </Col>
                            </Row><br/>  
                            <Row >
                                <Col  xs={3} className="text-left">
                                    <h5>About Me</h5>
                                </Col>
                                <Col  md={{ span: 5, offset: 3 }} className="text-left">
                                    <h5 id="myP6">{aboutme}</h5>
                                </Col>
                            </Row><br/>
                        </Card>
                        <Button onClick={this.handleSubmit1} id="spbtn" className="saveprofilebtn" variant="primary">Save Profile</Button>
                        <br/><br/>
                    </Col>                       
                </Col>  
            </Row>
        )
    }
}