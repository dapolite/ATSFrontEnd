import React from 'react';
import './Dashboard.css';
import CandidateSidebar from './Sidebar/Sidebar'
import Searchbar from '../Searchbar/Searchbar'
import JobListItem from '../JobListItem/JobListItem';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card, { CardBody } from 'react-bootstrap/Card'
import AuthenticationService from '../Service/AuthenticationService'
import Axios from 'axios'


export default class Dashboard extends React.Component{


    constructor(props){
        super();
    
        this.state = {
           user: '',
           };
    }


    componentDidMount(){
        const username=AuthenticationService.getLoggedInUserName();
        const userId=this.props.match.params.uid;
        console.log(userId);
        const { match: { params } } = this.props;
        Axios.get(`http://localhost:8080/api/candidates/getId/${username}`)
        .then(res=>sessionStorage.setItem('userId',res.data));
    }

    render(){

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
                                <Card>
                                    <Card.Body>
                                        <Card.Subtitle className="mb-2 text-muted">Number</Card.Subtitle>
                                        <Card.Text>content.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <Card.Subtitle className="mb-2 text-muted">Number</Card.Subtitle>
                                        <Card.Text>content.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <Card.Subtitle className="mb-2 text-muted">Number</Card.Subtitle>
                                        <Card.Text>content.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <br></br> 
                        <Col>
                            <JobListItem/>
                            <JobListItem/>
                            <JobListItem/>
                        </Col>
                    </Col>
                </Col>
            </Row>
        )
    }
}