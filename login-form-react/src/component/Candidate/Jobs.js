import React from 'react';
import './Jobs.css';
import CandidateSidebar from './Sidebar/Sidebar'
import Searchbar from '../Searchbar/Searchbar'
import JobListItem from '../JobListItem/JobListItem';
import JobItem from '../Job/JobItem'
import Item from '../CandidateItem/CandidateItem'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card, { CardBody } from 'react-bootstrap/Card'

export default class Jobs extends React.Component{
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
                        </Row><br/>
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <Card.Subtitle className="mb-2 text-muted">Number</Card.Subtitle>
                                        <Card.Text>content.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row><br/>
                        <Row>
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
                        </Col>
                    </Col>
                </Col>
            </Row>
        )
    }
}