import React from 'react';
import './ViewProfile.css';
import CandidateSidebar from './Sidebar/Sidebar'
import Searchbar from '../Searchbar/Searchbar'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card, { CardBody } from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import AuthenticationService from '../Service/AuthenticationService'

export default class ViewProfile extends React.Component{

    constructor(props){
        super(props);
    
        this.state = {
           user: '',
           profileDetails:[]
           };
    }

    async componentDidMount(){
        const username=AuthenticationService.getLoggedInUserName();

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
                        </Row>
                        <br></br>
                        <Card className="view-profile-page border-0">
                            <Row>
                                <Col  xs={3} className="text-left" >
                                    <h5>Name</h5>
                                </Col>
                                <Col md={{ span: 3, offset: 3 }} className="text-left" >
                                    <h5>{cname}</h5>
                                </Col>
                            </Row><br/>
                            <Row >
                                <Col  xs={3} className="text-left">
                                    <h5>Username</h5>
                                </Col>
                                <Col  md={{ span: 3, offset: 3 }} className="text-left" >
                                    <h5 className="text-left">{uname}</h5>
                                </Col>
                            </Row><br/>
                            <Row >
                                <Col  xs={3} className="text-left">
                                    <h5>Email</h5>
                                </Col>
                                <Col  md={{ span: 3, offset: 3 }} className="text-left">
                                    <h5>{email}</h5>
                                </Col>
                            </Row><br/>
                            <Row >
                                <Col  xs={3} className="text-left">
                                    <h5>Phone</h5>
                                </Col>
                                <Col  md={{ span: 3, offset: 3 }} className="text-left">
                                    <h5>{phone}</h5>
                                </Col>
                            </Row><br/>
                            <Row>
                                <Col  xs={3} className="text-left">
                                    <h5>Address</h5>
                                </Col>
                                <Col  md={{ span: 3, offset: 3 }} className="text-left">
                                    <h5>{address}</h5>
                                </Col>
                            </Row><br/>  
                            <Row >
                                <Col  xs={3} className="text-left">
                                    <h5>About Me</h5>
                                </Col>
                                <Col  md={{ span: 5, offset: 3 }} className="text-left">
                                    <h5>{aboutme}</h5>
                                </Col>
                            </Row><br/>
                        </Card>
                    </Col>                       
                </Col>  
            </Row>
        )
    }
}