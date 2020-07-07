import React from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar/Sidebar';
import Searchbar from '../Searchbar/Searchbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import AuthenticationServiceRec from '../Service/AuthenticationServiceRec'
import Axios from 'axios'
import {Inject,ScheduleComponent, Day, Week, WorkWeek, Month, Agenda} from '@syncfusion/ej2-react-schedule'

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
    };

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
                        <Row style={{"padding" : "2%"}}>
                            <ScheduleComponent currentView="Month">
                                <Inject services={[ Day, Week, WorkWeek, Month, Agenda ]} />
                            </ScheduleComponent>
                        </Row>
                    </Col>
                </Col>
            </Row>
        )
    }
}