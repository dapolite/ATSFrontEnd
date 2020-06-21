import React from 'react';
import Clock from 'react-live-clock';
import './JobItem.css';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card, { CardBody } from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'


export default class JobItem extends React.Component{
    render(){
        return(
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Jobs</th>
                        <th>Deadline</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}