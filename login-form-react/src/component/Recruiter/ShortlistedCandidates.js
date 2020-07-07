import React from 'react';
import './ShortlistedCandidates.css';
import Sidebar from './Sidebar/Sidebar';
import Searchbar from '../Searchbar/Searchbar'
import CandidateItem from '../CandidateItem/CandidateItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Axios from 'axios'
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
            candidatesPerPage : 5
        }
    };

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

    componentDidMount(){
        const user = sessionStorage.getItem('userId');
        console.log(user)
        Axios.get(`http://localhost:8080/api/shortlistedcandidates`)
        .then((response) => 
            this.setState( { cand:response.data } ),
        );
    }

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
                            <Col>
                                <Searchbar/>
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <Table bordered hover striped variant="light">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Experience</th>
                                            <th>Location</th>
                                            <th>Skills</th>
                                            <th>Shortlisted Candidates</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            currentCandidates.map((cands, index) =>
                                            (
                                                <tr key={index}>
                                            <td>{cands.name}</td>
                                            <td>{cands.exp}</td>
                                            <td>{cands.loc}</td>
                                            <td>{cands.skills}</td>
                                            <td>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-circle col-spaced2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                                <p>Shortlisted</p>
                                            </td>
                                            <td>
                                                <Row>
                                                    <Col>
                                                        <a href="#" className="download col-spacedjb"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></a>
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
                                    <br/><br/>
                            </Col>
                        </Row>
                    </Col>
                </Col>
            </Row>
        )
    }
}