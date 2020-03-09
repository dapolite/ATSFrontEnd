import React from 'react';
import Clock from 'react-live-clock';
import './ManageJobs.css';
import Sidebar from './Sidebar/Sidebar';
import Searchbar from '../Searchbar/Searchbar';
import JobItem from '../Job/JobItem';
import HeaderItems from '../Header/HeaderItems';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default class ManageJobs extends React.Component{
    render(){
        return(
            <Row className="no-gutters">  
                <Sidebar />              
                <Col>
                    <Col className="container-fluid">
                        <br/>
                        <Row>
                            <Col>
                                <Searchbar/>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <HeaderItems/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card className="border-0">
                                    <Card.Body>
                                        <JobItem />
                                        <JobItem />
                                        <JobItem />
                                        <JobItem />
                                        <JobItem />
                                        <JobItem />
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