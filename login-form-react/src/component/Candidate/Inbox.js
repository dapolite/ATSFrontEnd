import React from 'react';
import CandidateSidebar from './Sidebar/Sidebar'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card, { CardBody } from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Inbox from './Inbox/Inbox'

export default class ViewProfile extends React.Component{
    render(){
        return(
            <Row className="no-gutters">  
                <CandidateSidebar />
                <Col>
                    <Inbox/>
                </Col>        
            </Row>
        )
    }
}