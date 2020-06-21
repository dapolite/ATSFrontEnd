import React from 'react';
import './ViewProfile.css';
import CandidateSidebar from './Sidebar/Sidebar'
import Searchbar from '../Searchbar/Searchbar'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card, { CardBody } from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import AuthenticationService from '../Service/AuthenticationService'
import history from '../history'
import Axios from 'axios';


export default class ViewProfile extends React.Component{

    constructor() {
        super();
        this.state = { users: [] };
      }
    

    componentDidMount(){
        
        const username=AuthenticationService.getLoggedInUserName();
        console.log(username)
        const user=sessionStorage.getItem('userId');
        console.log(user)
        Axios.get(`http://localhost:8080/api/candidates/${username}`)
        .then((res)=>
            this.setState({ users:res.data })
        );
    }

    gotoedit(){
        //this.history.push(`/EditCandidateProfile/${userid}`)
    }



    render(){
    
        const userid=this.props.match.params.uid;
        console.log(userid);

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
                                <Button onClick={()=>{history.push(`/EditCandidateProfile/${userid}`)}} variant="primary" className="viewprofilecandupdatebutton">Update Profile</Button>
                            </Col>      
                        </Row>
                        <br></br>
                        <Card className="view-profile-page border-0">
                            <Row>
                                <Col  xs={3} className="text-left" >
                                    <h5>Name</h5>
                                </Col>
                                <Col md={{ span: 3, offset: 3 }} className="text-left" >
                                    <h5 id="myP1">{this.state.users.candidate_fname} {this.state.users.candidate_lname}</h5>
                                </Col>
                            </Row><br/>
                            <Row >
                                <Col  xs={3} className="text-left">
                                    <h5>Username</h5>
                                </Col>
                                <Col  md={{ span: 3, offset: 3 }} className="text-left" >
                                    <h5 id="myP2">{this.state.users.username}</h5>
                                </Col>
                            </Row><br/>
                            <Row >
                                <Col  xs={3} className="text-left">
                                    <h5>Email</h5>
                                </Col>
                                <Col  md={{ span: 3, offset: 3 }} className="text-left">
                                    <h5 id="myP3">{this.state.users.email}</h5>
                                </Col>
                            </Row><br/>
                            <Row >
                                <Col  xs={3} className="text-left">
                                    <h5>Phone</h5>
                                </Col>
                                <Col  md={{ span: 3, offset: 3 }} className="text-left">
                                    <h5 id="myP4">{this.state.users.phoneno}</h5>
                                </Col>
                            </Row><br/>
                            <Row>
                                <Col  xs={3} className="text-left">
                                    <h5>Address</h5>
                                </Col>
                                <Col  md={{ span: 3, offset: 3 }} className="text-left">
                                    <h5 id="myP5">{this.state.users.candidate_address}</h5>
                                </Col>
                            </Row><br/>  
                            <Row >
                                <Col  xs={3} className="text-left">
                                    <h5>About Me</h5>
                                </Col>
                                <Col  md={{ span: 5, offset: 3 }} className="text-left">
                                    <h5 id="myP6">{this.state.users.candidate_about}</h5>
                                </Col>
                            </Row><br/>
                        </Card>
                        <br/><br/>
                    </Col>                       
                </Col>  
            </Row>
        )
    }
}