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
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import JobFavItem from '../JobFavouriteItem/JobfavouriteItem'

export default class Favourites extends React.Component{
    render(){
        const total=28;
        const firstjob=1;
        const lastjob=12;

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
                                        <Row>
                                            <Col>
                                                <DropdownButton id="dropdown-item-button" title="Dropdown button">
                                                    <Dropdown.Item as="button">Action</Dropdown.Item>
                                                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                                                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                                                </DropdownButton>
                                            </Col>
                                            <Col>
                                                <h6>Showing {firstjob}–{lastjob} of {total} Jobs</h6>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <br></br> 
                        <Col>
                            <JobFavItem/>
                            <JobFavItem/>
                            <JobFavItem/>
                        </Col>
                    </Col>
                </Col>
            </Row>
        )
    }
}