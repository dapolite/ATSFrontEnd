import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Inboxdata.css';
import Button from 'react-bootstrap/Button'
import CandidateSidebar from '../Sidebar/Sidebar'
import history from '../../history';

import Inbox from '../Inbox/Inbox'

export default class Inboxdata extends React.Component{
    render(){
        return(
            <Row className="no-gutters">
                <div>
                    <CandidateSidebar/>
                </div>
                <Col md="auto">
                    <Inbox/>
                </Col>
                <Col>
                    <Card className="second-card">
                        Inbox
                    </Card>
                </Col>
            </Row>
        )
    }
}