import React from 'react';
import './Jobs.css';
import CandidateSidebar from './Sidebar/Sidebar'
import Searchbar from '../Searchbar/Searchbar'
import JobListItem from '../JobListItem/JobListItem';
import JobItem from '../Job/JobItem'
import Item from '../CandidateItem/CandidateItem'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card, { CardBody } from 'react-bootstrap/Card'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import JobFavItem from '../JobFavouriteItem/JobfavouriteItem'
import { InputGroup, FormControl, Button} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import history from '../history';
import Axios from 'axios'
import {faFastBackward, faStepBackward, faStepForward, faFastForward} from '@fortawesome/free-solid-svg-icons'

export default class Favourites extends React.Component{

    constructor(props){
        super();
        this.state = {
            jobs: [],
            currentPage : 1,
            jobsPerPage : 5
        };
    }

    openJob = (jobId) =>{
        console.log(jobId)
        history.push('/ViewJob/'+jobId);
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
        if(this.state.currentPage < Math.ceil(this.state.jobs.length / this.state.jobsPerPage)){
            this.setState({
                currentPage : Math.ceil(this.state.jobs.length / this.state.jobsPerPage)    
            });
        }
    };

    nextPage = () => {
        if(this.state.currentPage < Math.ceil(this.state.jobs.length / this.state.jobsPerPage)){
            this.setState({
                currentPage : this.state.currentPage + 1
            });
        }
    };

    componentDidMount(){
        Axios.get(`http://localhost:8080/api/jobspost`)
        .then((response)=>
            this.setState({ jobs:response.data }),
        );
    }


    render(){
        const {jobs, currentPage, jobsPerPage} = this.state;
        const lastIndex = currentPage * jobsPerPage;
        const firstIndex = lastIndex - jobsPerPage;
        const currentJobs = jobs.slice(firstIndex, lastIndex);
        const totalPages = jobs.length / jobsPerPage;

        const pageNumCss = {
            width : "45px",
            border : "1px solid #17A2B8",
            color : "17A2B8",
            textAlign : "center",
            fontWeight : "bold" 
        };

        return(
            <Row className="no-gutters">  
                <CandidateSidebar />              
                <Col className="resume-page">
                    <Col>
                        <br/>
                        <Row>
                            <Col>
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                        </Row><br/>
                        <Row>
                            <Col>
                            </Col>
                        </Row>
                        <br></br> 
                        <Col>
                        {
                            currentJobs.map((job) =>(
                            <div className="row v1jbl" key={job.jobpostid}>
                            
                            <div className="col-6">
            
                                <div className="row">
                                <img className="thumbjbl" src="https://www.pngitem.com/pimgs/m/78-788231_icon-blue-company-icon-png-transparent-png.png"/>
                                    <div className="col">
                                        <div className="row">
                                            <h6 className="col-spaced1 row-spaced">{job.jobposttitle}</h6>
                                        </div>
                                    <div className="row">
                                    <div className="col">
            
                                            <div className="row">
                                            {
                                            job.jobLocations.map((location)=>
                                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="col-spacedjbl"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>{location.joblocationcity}</a>
            
                                            )}
                                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="col-spacedjbl"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>Oppo</a>
                                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="col-spacedjbl"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>Temporary</a>
                                            
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
            
                            </div>
            
                        </div>
                        <div className="col itemjbl col-md-offset">
                            <div className="">
                            </div>
                        </div>
            
                        </div>
                        ))
                    
                                            }            
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