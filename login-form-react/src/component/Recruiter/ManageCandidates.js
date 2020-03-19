import React from 'react';
import './ManageCandidates.css';
import Sidebar from './Sidebar/Sidebar';
import Searchbar from '../Searchbar/Searchbar'
import CandidateItems from '../CandidateItems/CandidateItems';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';


export default class ManageCandidates extends React.Component{
    render(){
        return(
            <Row className="no-gutters">  
                <Sidebar />              
                <Col>
                    <Col className="container-fluid ">
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
                        <Row>
                            <Col className="col-3">
                                <Card className="container">
                                    <Card.Body>
                                        <Dropdown>
                                            <Row>
                                                <Col>
                                                    <DropdownButton className="mcfilters" variant="light" id="dropdown-item-button" title="Category">
                                                        <Dropdown.Item as="button">Action</Dropdown.Item>
                                                        <Dropdown.Item as="button">Another action</Dropdown.Item>
                                                        <Dropdown.Item as="button">Something else</Dropdown.Item>
                                                    </DropdownButton>
                                                </Col>
                                            </Row>
                                            <br/>
                                            <Row>
                                                <Col>
                                                    <DropdownButton variant="light" id="dropdown-item-button" title="Location">
                                                        <Dropdown.Item as="button">Part Time</Dropdown.Item>
                                                        <Dropdown.Item as="button">Full Time</Dropdown.Item>
                                                        <Dropdown.Item as="button">Temperory</Dropdown.Item>
                                                        <Dropdown.Item as="button">Permanent</Dropdown.Item>
                                                        <Dropdown.Item as="button">Freelance</Dropdown.Item>
                                                    </DropdownButton>
                                                </Col> 
                                            </Row>
                                            <br/>
                                            <Row>
                                                <Col>
                                                    <DropdownButton variant="light" id="dropdown-item-button" title="Experience">
                                                        <Dropdown.Item as="button">Part Time</Dropdown.Item>
                                                        <Dropdown.Item as="button">Full Time</Dropdown.Item>
                                                        <Dropdown.Item as="button">Temperory</Dropdown.Item>
                                                        <Dropdown.Item as="button">Permanent</Dropdown.Item>
                                                        <Dropdown.Item as="button">Freelance</Dropdown.Item>
                                                    </DropdownButton>
                                                </Col> 
                                            </Row>
                                            <br/>
                                            <Row>
                                                <Col>
                                                    <DropdownButton variant="light" id="dropdown-item-button" title="Gender">
                                                        <Dropdown.Item as="button">Part Time</Dropdown.Item>
                                                        <Dropdown.Item as="button">Full Time</Dropdown.Item>
                                                        <Dropdown.Item as="button">Temperory</Dropdown.Item>
                                                        <Dropdown.Item as="button">Permanent</Dropdown.Item>
                                                        <Dropdown.Item as="button">Freelance</Dropdown.Item>
                                                    </DropdownButton>
                                                </Col> 
                                            </Row>
                                            <br/>
                                            <Row>
                                                <Col>
                                                    <DropdownButton variant="light" id="dropdown-item-button" title="Job Type">
                                                        <Dropdown.Item as="button">Part Time</Dropdown.Item>
                                                        <Dropdown.Item as="button">Full Time</Dropdown.Item>
                                                        <Dropdown.Item as="button">Temperory</Dropdown.Item>
                                                        <Dropdown.Item as="button">Permanent</Dropdown.Item>
                                                        <Dropdown.Item as="button">Freelance</Dropdown.Item>
                                                    </DropdownButton>
                                                </Col> 
                                            </Row>  
                                            <br/>
                                            <Row>
                                                <Col>
                                                    <DropdownButton variant="light" id="dropdown-item-button" title="Skills">
                                                        <Dropdown.Item as="button">Part Time</Dropdown.Item>
                                                        <Dropdown.Item as="button">Full Time</Dropdown.Item>
                                                        <Dropdown.Item as="button">Temperory</Dropdown.Item>
                                                        <Dropdown.Item as="button">Permanent</Dropdown.Item>
                                                        <Dropdown.Item as="button">Freelance</Dropdown.Item>
                                                    </DropdownButton>
                                                </Col> 
                                            </Row>
                                            <br/>
                                            <Row>
                                                <Col>
                                                    <DropdownButton variant="light" id="dropdown-item-button" title="Qualification">
                                                        <Dropdown.Item as="button">Part Time</Dropdown.Item>
                                                        <Dropdown.Item as="button">Full Time</Dropdown.Item>
                                                        <Dropdown.Item as="button">Temperory</Dropdown.Item>
                                                        <Dropdown.Item as="button">Permanent</Dropdown.Item>
                                                        <Dropdown.Item as="button">Freelance</Dropdown.Item>
                                                    </DropdownButton>
                                                </Col> 
                                            </Row>    
                                        </Dropdown>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="mc1 border-0">
                                    <Card.Body>
                                        <CandidateItems/>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Col>
            </Row>
        )
    }
}