import React from 'react';
import Clock from 'react-live-clock';
import './ManageJobs.css';
import Sidebar from './Sidebar/Sidebar';
import Searchbar from '../Searchbar/Searchbar';
import JobItem from '../Job/JobItem';
import HeaderItems from '../Header/HeaderItems';
import Axios from 'axios'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Table } from 'react-bootstrap';
import {Card, InputGroup, FormControl, Button} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFastBackward, faStepBackward, faStepForward, faFastForward} from '@fortawesome/free-solid-svg-icons'

export default class ManageJobs extends React.Component{

    constructor(props){
        super();
        this.state = {
            managejobs: [],
            currentPage : 1,
            jobsPerPage : 5
        };
    }

    componentDidMount(){
        const user=sessionStorage.getItem('userId');    
        console.log(user)
        Axios.get(`http://localhost:8080/api/jobspost`)
        .then((response)=>
            this.setState({ managejobs:response.data }),
        );
    }

    changePage = event => {
        this.setState({
            [event.target.name] : parseInt(event.target.value)
        });
    };

    firstPage = () => {
        if(this.state.currentPage > 1){
            this.setState({
                currentPage : 1
            });
        }
    };

    prevPage = () => {
        if(this.state.currentPage > 1){
            this.setState({
                currentPage : this.state.currentPage - 1
            });
        }
    };

    lastPage = () => {
        if(this.state.currentPage < Math.ceil(this.state.managejobs.length / this.state.jobsPerPage)){
            this.setState({
                currentPage : Math.ceil(this.state.managejobs.length / this.state.jobsPerPage)    
            });
        }
    };

    nextPage = () => {
        if(this.state.currentPage < Math.ceil(this.state.managejobs.length / this.state.jobsPerPage)){
            this.setState({
                currentPage : this.state.currentPage + 1
            });
        }
    };

    render(){

        const {managejobs, currentPage, jobsPerPage} = this.state;
        const lastIndex = currentPage * jobsPerPage;
        const firstIndex = lastIndex - jobsPerPage;
        const currentJobs = managejobs.slice(firstIndex, lastIndex);
        const totalPages = managejobs.length / jobsPerPage;

        const pageNumCss = {
            width : "45px",
            border : "1px solid #17A2B8",
            color : "17A2B8",
            textAlign : "center",
            fontWeight : "bold" 
        };

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
                        <Col>
                            <Table bordered hover striped variant="light">
                                <thead>
                                    <tr>
                                        <th>Jobs</th>
                                        <th>Location</th>
                                        <th>Job Type</th>
                                        <th>Deadline</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        currentJobs.map((mjobs, index) =>
                                         (
                                            <tr key={index}>
                                                <td>{mjobs.jobposttitle}</td>
                                                <td>{mjobs.jobpostlocation}</td>
                                                <td>{mjobs.jobposttype}</td>
                                                <td>{mjobs.jobpostdeadline}</td>
                                                <td>
                                                    <Row>
                                                        <Col>
                                                            <a href="#" class="inbox"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a>
                                                        </Col>
                                                        <Col>
                                                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></a>    
                                                        </Col>
                                                    </Row>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                            <Card.Footer style={{"backgroundColor" : "white", "borderTop" : "white"}}>
                                <div style = {{"float" : "left"}}>
                                    Showing Page {currentPage} of {totalPages}
                                </div>
                                <div style = {{"float" : "right"}}>
                                    <InputGroup size="sm">
                                        <InputGroup.Prepend>
                                            <Button type="button" variant="outline-info" disabled={currentPage === 1 ? true : false} onClick={this.firstPage}>
                                                <FontAwesomeIcon icon={faFastBackward} />First
                                            </Button>
                                            <Button type="button" variant="outline-info" disabled={currentPage === 1 ? true : false} onClick={this.prevPage}>
                                                <FontAwesomeIcon icon={faStepBackward} />Prev
                                            </Button>
                                        </InputGroup.Prepend>
                                        <FormControl style={pageNumCss} name="currentPage" value={currentPage} onChange={this.changePage} />
                                        <InputGroup.Append>
                                            <Button type="button" variant="outline-info" disabled={currentPage === totalPages ? true : false} onClick={this.nextPage}>
                                                <FontAwesomeIcon icon={faStepForward} />Next
                                            </Button>
                                            <Button type="button" variant="outline-info" disabled={currentPage === totalPages ? true : false} onClick={this.lastPage}>
                                                <FontAwesomeIcon icon={faFastForward} />Last
                                            </Button>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </div>
                            </Card.Footer>
                        </Col>
                    </Col>
                </Col>
            </Row>
        )
    }
}