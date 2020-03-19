import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import CandidateSidebar from '../Sidebar/Sidebar'
import history from '../../history';

import Inbox from '../Inbox/Inbox'

export default class Starreddata extends React.Component{
    render(){
        return(
            <Row className="no-gutters">
                <Col  md="auto">
                    <CandidateSidebar/>
                </Col>

                <Col>
                    <Inbox/>
                </Col> 

                <Col>
                    <Card className="second-card">
                        Starred
                    </Card>
                </Col>    
            </Row>
        )
    }
}