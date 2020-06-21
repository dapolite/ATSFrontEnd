import React from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar/Sidebar';
import Searchbar from '../Searchbar/Searchbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import AuthenticationServiceRec from '../Service/AuthenticationServiceRec'
import Axios from 'axios'
import {Bar} from 'react-chartjs-2';
import {MDBContainer} from 'mdbreact';

export default class Dashboard extends React.Component{

    constructor(props){
        super();
    
        this.state = {
           user: '',
           };
    }

    componentDidMount(){
        const username=AuthenticationServiceRec.getLoggedInUserName();
        const userId=this.props.match.params.uid;
        console.log(userId);
        const { match: { params } } = this.props;
        Axios.get(`http://localhost:8080/api/Recruiter/getId/${username}`)
        .then(res=>sessionStorage.setItem('userId',res.data));
    }


    state = {
        dataBar:{
            datasets:[
                {
                    label: "Total Candidates",
                    data: [26],
                    backgroundColor: [
                        "rgba(98,  182, 239,0.4)"
                    ],
                    borderWidth: 2,
                    borderColor: [
                        "rgba(98,  182, 239,0.4)"
                    ]
                }
            ]
        },
        barChartOptions: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes:[
                    {
                        barPercentage: 1,
                        gridLines: {
                            display: true,
                            color: "rgba(0, 0, 0, 0.1)"
                        }
                    }
                ],
                yAxes: [
                    {
                        gridLines: {
                            display: true,
                            color: "rgba(0, 0, 0, 0.1)"
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            }
        }
    }

    state1 = {
        dataBar1:{
            datasets:[
                {
                    label: "Total Shortlisted Candidates",
                    data: [23],
                    backgroundColor: [
                        "rgba(255,255,0,0.3)"
                    ],
                    borderWidth: 2,
                    borderColor: [
                        "rgba(255,255,0,0.3)"
                    ]
                }
            ]
        },
        barChartOptions1: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes:[
                    {
                        barPercentage: 1,
                        gridLines: {
                            display: true,
                            color: "rgba(0, 0, 0, 0.1)"
                        }
                    }
                ],
                yAxes: [
                    {
                        gridLines: {
                            display: true,
                            color: "rgba(0, 0, 0, 0.1)"
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            }
        }
    }

    state2 = {
        dataBar2:{
            datasets:[
                {
                    label: "Jobs Posted",
                    data: [40],
                    backgroundColor: [
                        "rgba(255,0,0,0.3)"
                    ],
                    borderWidth: 2,
                    borderColor: [
                        "rgba(255,0,0,0.3)"
                    ]
                }
            ]
        },
        barChartOptions2: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes:[
                    {
                        barPercentage: 1,
                        gridLines: {
                            display: true,
                            color: "rgba(0, 0, 0, 0.1)"
                        }
                    }
                ],
                yAxes: [
                    {
                        gridLines: {
                            display: true,
                            color: "rgba(0, 0, 0, 0.1)"
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            }
        }
    }
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
                                <Card className="border-0">
                                    <Card.Body>
                                        <MDBContainer>
                                            <Bar data={this.state.dataBar} options= {this.state.barChartOptions}/>
                                        </MDBContainer>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="border-0">
                                    <Card.Body>
                                        <MDBContainer>
                                            <Bar data={this.state1.dataBar1} options= {this.state1.barChartOptions1}/>
                                        </MDBContainer>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="border-0">
                                    <Card.Body>
                                        <MDBContainer>
                                            <Bar data={this.state2.dataBar2} options= {this.state2.barChartOptions2}/>
                                        </MDBContainer>
                                    </Card.Body>
                                </Card>
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
                        </Row>
                    </Col>
                </Col>
            </Row>
        )
    }
}