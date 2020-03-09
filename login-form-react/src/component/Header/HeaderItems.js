import React from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './HeaderItems.css';

export default class HeaderItems extends React.Component{
    render(){
        return(
            <Row className="v1jb">
                <Col>
                    <Row>
                        <Col>
                            <Row>
                                <h6 className="col-spaced12">Job Title</h6>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Row>
                    <Row>
                        <Col>
                            <Row>
                                <h6 className="col-spaced12">Applications</h6>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="itemjb-hit-deadline">
                            <Row>
                                <h6 className="col-spaced12">Deadline</h6>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="itemjb-hit-status">
                            <Row>
                                <h6 className="col-spaced12">Status</h6>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="itemjb-hit-action">
                            <Row>
                                <h6 className="col-spaced12">Action</h6>
                            </Row>
                        </Col>
                    </Row>
                </Row>
                {/* <Row className="itemjb">
                    <p>Action</h6>
                </Row> */}
            </Row>
        )
    }
}