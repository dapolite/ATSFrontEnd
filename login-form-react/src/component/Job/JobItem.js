import React from 'react';
import Clock from 'react-live-clock';
import './JobItem.css';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card, { CardBody } from 'react-bootstrap/Card'


export default class JobItem extends React.Component{
    render(){
        return(
            <Row className="v1jb">
                <Col>
                    <Row>
                        <Col>
                            <Row>
                                <h6 className="col-spaced1 row-spaced">JS Developer</h6>
                            </Row>
                        <Row>
                        <Col>
                                <div className="row">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-square col-spaced1"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                                <p>UX Designer</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-square col-spaced1"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                                <p>UX Designer</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Row>
            <Row>
                <Col>
                    <Row className="itemjb">
                        <p className="col-spaced12">Applied</p>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col className="itemjb">
                    <Row>
                        <p className="col-spaced12">16 September 2020</p>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col className="itemjb">
                    <Row>
                        <p className="col-spaced12">Active</p>
                    </Row>
                </Col>
            </Row>
            </Row>
            <Row className="itemjb">
                <Col>
                <a href="#" className="download col-spacedjb"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></a>
                </Col>
                <Col>
                <a href="#" class="inbox"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a>
                </Col>
                <Col>
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></a>
                </Col>
            </Row>
        
    </Row>
        )
    }
}