import React from 'react';
import './Dashboard.css';
import CandidateSidebar from './Sidebar/Sidebar'
import Searchbar from '../Searchbar/Searchbar'
import JobListItem from '../JobListItem/JobListItem';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card, { CardBody } from 'react-bootstrap/Card'
import AuthenticationService from '../Service/AuthenticationService'
import Axios from 'axios'
import { InputGroup, FormControl, Button} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import history from '../history';
import {faFastBackward, faStepBackward, faStepForward, faFastForward, faSearch, faTimes} from '@fortawesome/free-solid-svg-icons'


export default class Dashboard extends React.Component{


    constructor(props){
        super();
    
        this.state = {
           user: '',
           noOfJobs:'',
           noOfJobSeeker:'',
           noOfRecruiter:'',
           jobs:[],
           currentPage : 1,
           jobsPerPage : 5,
           search:''
           };
    }


    componentDidMount(){
        const username=AuthenticationService.getLoggedInUserName();
        const userId=this.props.match.params.uid;
        console.log(userId);
        const { match: { params } } = this.props;
        Axios.get(`http://localhost:8080/api/candidates/getId/${username}`)
        .then(res=>sessionStorage.setItem('userId',res.data));
        Axios.get(`http://localhost:8080/api/jobspost`)
        .then((response)=>
            this.setState({ 
                noOfJobs:response.data.length ,
                jobs:response.data
            }),
                
        );
        Axios.get(`http://localhost:8080/api/Candidate/candidatelist`)
        .then((response)=>
        this.setState({ 
            noOfJobSeeker:response.data.length ,
        }),
            
    );
        Axios.get(`http://localhost:8080/api/Recruiter/recruiterlist`)
        .then((response)=>
        this.setState({ 
            noOfRecruiter:response.data.length ,
        }),
            
    );


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

search=()=>{
    Axios.get(`http://localhost:8080/api/jobspost/search?search=${this.state.search}`)
    .then((response)=>
        this.setState({ 
            noOfJobs:response.data.length ,
            jobs:response.data
        }))
}

  searchChange = event => {
    this.setState({ [event.target.name] : event.target.value })
  };

  cancelSearch = () => {
    this.setState({ "search" : '' })
  };

    render(){
        const {jobs, currentPage, jobsPerPage,search} = this.state;
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

        console.log(currentJobs)
        return(

            <Row className="no-gutters">  
                <CandidateSidebar />              
                <Col className="resume-page">
                    <Col>
                        <br/>
                        <Row>
                            <Col>
                            <InputGroup>
                            <FormControl placeholder="Search" name="search" value={search} onChange={this.searchChange}/>
                            <InputGroup.Append>
                              <Button size="sm" variant="outline-info" type="button" onClick={this.search}>
                                <FontAwesomeIcon icon={faSearch}/>
                              </Button>
                              <Button size="sm" variant="outline-danger" type="button" onClick={this.cancelSearch}>
                                <FontAwesomeIcon icon={faTimes}/>
                              </Button>
                            </InputGroup.Append>
                            </InputGroup>
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <Card.Subtitle className="mb-2 text-muted">Total Number of Jobs</Card.Subtitle>
                                        <Card.Text>{this.state.noOfJobs}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <Card.Subtitle className="mb-2 text-muted">Total Number Of Recruiters</Card.Subtitle>
                                        <Card.Text>{this.state.noOfRecruiter}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <Card.Subtitle className="mb-2 text-muted">Total Number Of JobSeekers</Card.Subtitle>
                                        <Card.Text>{this.state.noOfJobSeeker}</Card.Text>
                                    </Card.Body>
                                </Card>
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
                                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="col-spacedjbl"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>{job.jobpostcompanyname}</a>
                                            {
                                                job.jobType.map((type)=>
                                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="col-spacedjbl"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>{type.jobtypename}</a>
                                             )}
                                            
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
            
                            </div>
            
                        </div>
                        <div className="col itemjbl col-md-offset">
                            <div className="">
                            <Button className="float-right" variant="danger" onClick={this.openJob.bind(this,job.jobpostid)}>View Job</Button>
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