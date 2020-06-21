import React from 'react';
import './ManageCandidates.css';
import Sidebar from './Sidebar/Sidebar';
import Searchbar from '../Searchbar/Searchbar'
import CandidateItems from '../CandidateItems/CandidateItems';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Axios from 'axios';
import {InputGroup, FormControl, Button} from 'react-bootstrap'
import { Table } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFastBackward, faStepBackward, faStepForward, faFastForward} from '@fortawesome/free-solid-svg-icons'

export default class ManageCandidates extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            cand : [],
            currentPage : 1,
            candidatesPerPage : 10
        };
    }

    componentDidMount(){
        const user = sessionStorage.getItem('userId');
        console.log(user)
        Axios.get(`http://localhost:8080/api/candidateresume`)
        .then((response) => 
            this.setState( { cand:response.data } ),
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
        if(this.state.currentPage < Math.ceil(this.state.cand.length / this.state.candidatesPerPage)){
            this.setState({
                currentPage : Math.ceil(this.state.cand.length / this.state.candidatesPerPage)    
            });
        }
    };

    nextPage = () => {
        if(this.state.currentPage < Math.ceil(this.state.cand.length / this.state.candidatesPerPage)){
            this.setState({
                currentPage : this.state.currentPage + 1
            });
        }
    };

    render(){

        const {cand, currentPage, candidatesPerPage} = this.state;
        const lastIndex = currentPage * candidatesPerPage;
        const firstIndex = lastIndex - candidatesPerPage;
        const currentCandidates = cand.slice(firstIndex, lastIndex);
        const totalPages = cand.length / candidatesPerPage;

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
                    <Col className="container-fluid ">
                        <br/>
                        <Row>
                            <Col md="4">
                                <Searchbar/>
                            </Col>
                            <Col md="auto">
                                <select className="selectdrop-mc">
                                    <option value="" disabled selected>Experience</option>
                                    <option value="1">Less Than 1 Year</option>
                                    <option value="2">2 Years</option>
                                    <option value="3">3 Years</option>
                                    <option value="4">4 Years</option>
                                    <option value="5">More Than 5 Years</option>
                                </select>
                            </Col>

                            <Col md="auto">
                                <select className="selectdrop-mc">
                                    <option value="" disabled selected>Location</option>
                                    <option value="1">Vadodara</option>
                                    <option value="2">Ahmedabad</option>
                                    <option value="3">Mumbai</option>
                                    <option value="4">Surat</option>
                                </select>
                            </Col>

                            <Col md="auto">
                                <select className="selectdrop-mc">
                                    <option value="" disabled selected>Qualification</option>
                                    <option value="1">SSC</option>
                                    <option value="2">HSC</option>
                                    <option value="3">Under Graduate</option>
                                    <option value="4">Post Graduate</option>
                                    <option value="5">Diploma</option>
                                </select>
                            </Col>

                            <Col md="auto">
                                <select className="selectdrop-mc">
                                    <option value="" disabled selected>Skills</option>
                                    <option value="1">Part Time</option>
                                    <option value="2">Full Time</option>
                                    <option value="3">Permanent</option>
                                    <option value="4">Temporary</option>
                                </select>
                            </Col>

                            <Col>
                                <Button style={{"float" : "right"}}>Search</Button>
                            </Col>
                        </Row>
                        <br></br>
                        {/* <Row>
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <Card.Subtitle className="mb-2 text-muted">Number</Card.Subtitle>
                                        <Card.Text>content.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <Card.Subtitle className="mb-2 text-muted">Number</Card.Subtitle>
                                        <Card.Text>content.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                            <Card>
                                    <Card.Body>
                                        <Card.Subtitle className="mb-2 text-muted">Number</Card.Subtitle>
                                        <Card.Text>content.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <br></br>  */}
                        <Col>
                            <Table bordered hover striped variant="light">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Experience</th>
                                        <th>Location</th>
                                        <th>Skills</th>
                                        <th>Shortlist Candidates</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    currentCandidates.map((cands, index) => 
                                    (
                                        <tr key={index}>
                                            <td>{cands.candidate_fullname}</td>
                                            <td>{cands.candidate_exp}</td>
                                            <td>{cands.candidate_address}</td>
                                            <td>{cands.candidate_info}</td>
                                            <td><Button>Shortlist Candidate</Button></td>
                                            <td>
                                                    <Row>
                                                        <Col>
                                                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></a>
                                                        </Col>
                                                        <Col>
                                                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a>
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
                                    <br/><br/>
                            </Col>
                    </Col>
                </Col>
            </Row>
        )
    }
}