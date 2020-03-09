import React from 'react';
import Sidebar from '../Recruiter/Sidebar/Sidebar';
import Searchbar from '../Searchbar/Searchbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Calendar from 'react-calendar';

export default class Dashboard extends React.Component{
    render(){
        return(
            <Row className="no-gutters">  
                <Sidebar />              
                <Col>
                    <Col>
                        <Calendar/>
                    </Col>
                </Col>
            </Row>
        )
    }
}