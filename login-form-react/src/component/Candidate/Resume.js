import React from 'react';
import './Resume.css';
import CandidateSidebar from './Sidebar/Sidebar'
import Searchbar from '../Searchbar/Searchbar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import Axios from 'axios'; 
import history from '../history'


import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


export default class Resume extends React.Component{

    constructor(props){
        super(props);
            this.state = { 
                users: [] ,
                resumes:[],
                skills:[],
                experiences:[],
                educations:[]
            };
    }

  componentDidMount(){
    const canId=this.props.match.params.uid;
    console.log(canId)
    Axios.get(`http://localhost:8080/api/Candidate/get/${canId}`)
    .then((response)=>(
        this.setState({ users : response.data,resumes:response.data.candidateResumes,skills:response.data.skills,experiences: response.data.experiences,educations:response.data.educations })
    ));
}

 render(){
    const canId=this.props.match.params.uid;
     console.log(this.state.users)
        return(
            <Row className="no-gutters">
                <CandidateSidebar/>
                <Col className="resume-page1">
                    <Col>
                        <Row>
                            <Col>
                            </Col>
                        </Row>
                        <br/><br/>
                        <Row>
                            <Col>
                                <div>
                                    <Button>Upload Resume</Button>
                                    <span className="or-buttons">OR</span>
                                    <Button onClick={()=>{history.push(`/CandidateResumeSubmitEdit/${canId}`)}}>Upload Resume Manually</Button>
                                </div>
                            </Col>
                        </Row>
                        <br/>
                        <hr/>
                        <br/>
                        {this.state.resumes.map((resume)=>
                            <div>
                                <Row>
                                    <Col>
                                    
                                        <div className="resume1">
                                            <h4 className="input13">Full Name</h4>
                                        </div>

                                        <div className="resume2">
                                            <p className="two">{resume.candidate_fullname}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <br/><br/>
                                <Row>
                                    <Col>
                                        <div className="resume1">
                                            <h4 className="input13">Skills</h4>
                                        </div>
                                        {this.state.skills.map((skill)=>
                                            <Card className="resume2 border-0">
                                                <Row>
                                                <Col>
                                                <p>{skill.skillName}</p>
                                                </Col>
                                                </Row>
                                                <br/>
                                            </Card>
                                    )}
                                    </Col>
                                </Row>
                                <br/><br/>
                                <Row>
                                    <Col>
                                        <div className="resume1">
                                            <h4 className="input13">About You</h4>
                                        </div>
                                
                                        <div className="resume3">
                                            <p className="two">{resume.candidate_about}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <br/><br/>
                                <Row>
                                <Col>
                                    <div className="resume1">
                                        <h4 className="input13">Personal Details</h4>
                                    </div>

                                    <Card className="resume2 border-0">
                                        <Row>
                                            <Col>
                                                <div>
                                                    <p className="two">Father's Name:{resume.candidate_fathername}</p>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div>
                                                    <p className="two">Mother's Name:{resume.candidate_mothername}</p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <br/>
                                        <Row>
                                            <Col>
                                                <div>
                                                    <p className="two">Gender:{resume.candidate_sex}</p>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div>
                                                    <p className="two">Nationality:{resume.candidate_nationality}</p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <br/>
                                        <Row>
                                            <Col>
                                                <div>
                                                    <p className="two">Date Of Birth:{resume.candidate_dob}</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            </Row>
                            <br/><br/>
                            {this.state.educations.map((education)=>
                                <Row >
                                    <Col>
                                        <div className="resume1">
                                            <h4 className="input13">Education</h4>
                                        </div>
                                        <Card  className="resume2 border-0">
            
                                        <Row>
                                            <Col>
                                                <div>
                                                <p className="two">{education.nameOfInstitute}</p>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div>
                                                <p className="two">{education.locationOfInstitute}</p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <br/>
                                        <Row>
                                            <Col>
                                                    <p className="two">{education.qualificationDegree}</p>
                                            </Col>
                                            <Col>
                        
                                                    <p className="two">{education.cgpa}</p>
                        
                                            </Col>
                                            <Col>
                        
                                                    <p className="two">{education.yearOfPassing}</p>
                        
                                            </Col>
                                            
                                        </Row>
                                        
                                    
                                    </Card>
                                    </Col>
                                </Row>
                        )}
                                <br/><br/>
                                <Row>
                                {this.state.experiences.map((experience)=>
                                    <Col>
                                        <div className="resume1">
                                            <h4 className="input13">Work Experience</h4>
                                        </div>

                                        <Card className="resume2 border-0">
                                            <Row>
                                                <Col>
                                                    <div>
                                                        <p className="two">{experience.jobTitle}</p>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div>
                                                        <p className="two">{experience.startDate}</p>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div>
                                                        <p className="two">{experience.endDate}</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <br/>
                                            <Row>   
                                                <Col>
                                                    <p className="two">{experience.experienceCompanyname}</p>
                                                </Col>

                                                <Col>
                                                    <p className="two">{experience.experienceyears}</p>
                                                </Col>
                                            </Row>
                                            <br/>
                                            <Row>
                                                <Col>
                                                    <div>
                                                        <p className="two">{experience.experienceJobdesc}</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                    )}
                                </Row>
                        
                            </div>
                            )}
                    </Col>
                </Col>
            </Row>
        )
    }
}