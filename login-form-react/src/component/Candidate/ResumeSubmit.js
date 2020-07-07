import React from 'react';
import './ResumeSubmit.css';
import CandidateSidebar from './Sidebar/Sidebar'
import Searchbar from '../Searchbar/Searchbar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import axios from 'axios'; 


import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


export default class Resume extends React.Component{

    constructor(props){
        super(props);
        this.state = {country: '', region: ''};
        this.state = {country1: '', region1: ''};
        this.state={
            candidate_fullname:'',
            candidate_fathername:'',
            candidate_mothername:'',
            candidate_nationality:'',
            candidate_gender:'',
            candidate_address:'',
            qualification:'',
            experience:'',
            skill:'',
            jobcategory:'',
            resumedetails:[],
            nameOfInstitute: "", locationOfInstitute: "", qualificationDegree: "", cgpa: "", yearOfPassing:"",
            jobTitle: "", startDate: "", endDate: "", experienceCompanyname: "", experienceyears:"", experienceJobdesc:"" ,
            education: [{nameOfInstitute: "", locationOfInstitute: "", qualificationDegree: "", cgpa: "", yearOfPassing:""}],
            experience:[{jobTitle: "", startDate: "", endDate: "", experienceCompanyname: "", experienceyears:"", experienceJobdesc:"" }]
        }
       this.handleSubmit = this.handleSubmit.bind(this);
       this.changeHandler=this.changeHandler.bind(this);
    }

    state = { 
        selectedFile: null,
        showing : true,
        showingfile:true
     };

    selectCountry(val){
        this.setState({country: val});
    }

 /*   addEducation(){
        this.setState(prevState => ({ 
            education: [...prevState.education, {nameOfInstitute: "", locationOfInstitute: "", qualificationDegree: "", cgpa: "", yearOfPassing:""}]
        }))
      }

      
    addExperience(){
        this.setState(prevState => ({ 
            experience: [...prevState.experience, {jobTitle: "", startDate: "", endDate: "", experienceCompanyname: "", experienceyears:"", experienceJobdesc:"" }]
        }))
      }

    removeExperience(i){
        let experience = [...this.state.experience];
        experience.splice(i, 1);
        this.setState({ experience });
     }

     removeEducaion(i){
        let education = [...this.state.education];
        education.splice(i, 1);
        this.setState({ education });
     }

*/
    selectRegion(val){
        this.setState({region: val});
    }

    selectCountry1(val){
        this.setState({country1: val});
    }

    selectRegion1(val){
        this.setState({region1: val});
    }

    onFileChange = event => { 
        this.setState({ selectedFile: event.target.files[0] });    
    };

    changeHandler = (event) => {
        console.log(event.target.value)
      this.setState({ [event.target.name]: event.target.value  })
   }

   /*educationHandler = (event,i) =>
    {
        this.state.education[i]=event.target.value
        let education = [...this.state.education];
        education[i] = {...education[i], [name]:value};
        this.setState({education})
        console.log(education)
    }*/
   handleSubmit = event =>{
       event.preventDefault();

   }

/*   componentDidMount(){
    const canId=this.props.match.params.uid;
    Axios.get(`http://localhost:8080/api/Candidate/candidate/${canId}`)
    .then((response)=>(
        console.log(response.data),
        this.setState({ resumedetails : response.data })
    ));
}*/



    onFileUpload = () => { 
        const formData = new FormData(); 
        formData.append( 
 
          this.state.selectedFile
        ); 
       console.log(formData)
        console.log(this.state.selectedFile);    
        axios.post("api/uploadfile", formData); 
      }; 

      onFileChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
            selectedFile: e.target.files[0]
        });
        const formData = new FormData();
        formData.append('file', this.state.selectedFile);
        fetch('http://localhost:8080/upload', {
            method: 'post',
            body: formData
        }).then(res => {
            if(res.ok) {
                console.log(res.data);
                alert("File uploaded successfully.")
            }
        });
    };

      fileData = () => { 
     
        if (this.state.selectedFile) { 
            
          return ( 
            <div> 
              <h2>File Details:</h2> 
              <p>File Name: {this.state.selectedFile.name}</p> 
              <p>File Type: {this.state.selectedFile.type}</p> 
              <p> 
                Last Modified:{" "} 
                {this.state.selectedFile.lastModifiedDate.toDateString()} 
              </p> 
            </div> 
          ); 
        } else { 
          return ( 
            <div> 
              <br /> 
              <h4>Choose before Pressing the Upload button</h4> 
            </div> 
          ); 
        } 
      }; 

     /* createEdu(){
          return this.state.education.map((ed, i) => (
            <Card key={i} className="resume2 border-0">
            
                <Row>
                    <Col>
                        <div>
                        <input className="input1-noi" placeholder="Name Of Institute" name="nameOfInstitute" value={ed.nameOfInstitute||''} onChange={(event)=>this.educationHandler.bind(event, i)}></input>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <input className="input1-loi" placeholder="Location Of Institute" name="locationOfInstitute" value={ed.locationOfInstitute||''} onChange={this.educationHandler.bind(this, i)}></input>
                        </div>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                            <input className="input1-qua" placeholder="Qualification Degree" name="qualificationDegree" value={ed.qualificationDegree||''} onChange={this.educationHandler.bind(this, i)}></input>
                    </Col>
                    <Col>

                            <input type="number" className="input1-cgpa" placeholder="Precentage / CGPA" name="cgpa" value={ed.cgpa||''} onChange={this.educationHandler.bind(this, i)}></input>

                    </Col>
                    <Col>

                            <input type="number" className="input1-yop" placeholder="Year Of Passing" name="yearOfPassing" value={ed.yearOfPassing||''} onChange={this.educationHandler.bind(this, i)}></input>

                    </Col>
                    
                </Row>
                
            
            </Card>
            ))
      }*/

      /*createEx(){
        {this.state.experience.map((ex, i) => (
            <Row key={i}>
                <Col>
                    <div className="titles-headers">
                        <h4>Work Experience</h4>
                        <Button className="add-more" onClick={this.addExperience.bind(this)}> Add More</Button>
                    </div>
                    <Card className="resume2 border-0">
                        <Row>
                            <Col>
                                <div>
                                    <input className="input1-noi" placeholder="Job Title" name="jobTitle" value={ex.jobTitle||''} onChange={this.changeHandler.bind(this, i)}></input>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <input type="date" className="input-type-date-duration" name="startDate" value={ex.startDate||''} onChange={this.changeHandler.bind(this, i)}/>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <input type="date" className="input-type-date-duration1" name="endDate" value={ex.endDate||''} onChange={this.changeHandler.bind(this, i)}/>
                                </div>
                            </Col>
                        </Row>
                        <br/>
                        <Row>   
                            <Col>
                                <input className="input1-noi" placeholder="Job Company" name="experienceCompanyname" value={ex.experienceCompanyname||''} onChange={this.changeHandler.bind(this, i)}></input>
                            </Col>

                            <Col>
                                <input className="input1-noi" placeholder="Experience Years" name="experienceyears" value={ex.experienceyears||''} onChange={this.changeHandler.bind(this, i)}></input>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <div>
                                    <textarea className="input1" placeholder="Description (Optional)" name="experienceJobdesc" value={ex.experienceJobdesc||''} onChange={this.changeHandler.bind(this, i)}> </textarea>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            ))}
      }*/

       /*viewResume(){
                       <form  onSubmit={this.handleSubmit}>
                            <div>
                                <Row>
                                    <Col>
                                        <div className="titles-headers">
                                            <h4>Full Name</h4>
                                        </div>

                                        <div className="resume2">
                                            <p className="input1" >{this.state.resumedetails.candidate_fullname}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <br/><br/>
                                <Row>
                                    <Col>
                                        <div className="titles-headers">
                                            <h4>Information</h4>
                                        </div>
                                
                                        <Dropdown>
                                            <Card className="resume2 border-0">
                                                <Row>
                                                <Col>
                                                <p>Job Category: </p>
                                                </Col>
                                                    <Col>
                                                        <p className="input-type-date1">
                                                        </p>
                                                    </Col>
                                                    <Col>
                                                    <p>Skills: </p>
                                                    </Col>
                                                    <Col>
                                                        <select className="input-type-date1" name="skill" value={skill} onChange={this.changeHandler}>
                                                            <option value="Java">Java</option>
                                                            <option value="Python">Python</option>
                                                            <option value="button">Something else</option>
                                                        </select>
                                                    </Col> 
                                                </Row>                                    
                                                <br/>
                                                <Row>
                                                <Col>
                                                <p>Experience: </p>
                                                </Col>
                                                    <Col>
                                                        <select className="input-type-date1" variant="light" name="Experience" value={experience} onChange={this.changeHandler}>
                                                            <option value="Fresher">Fresher</option>
                                                            <option value="2 Years">2 Years</option>
                                                            <option value="3 Years">3 Years</option>
                                                            <option value="4 Years">4 Years</option>
                                                        </select>
                                                    </Col>
                                                </Row>
                                                <br/>
                                                <Row>
                                                    <Col>
                                                    <p>Qualification: </p>
                                                    </Col>
                                                    <Col>
                                                        <select className="input-type-date1" variant="light"  name="Qualification" value={qualification} onChange={this.changeHandler}>
                                                        <option value="SSC">SSC</option>
                                                        <option value="HSC">HSC</option>
                                                        <option value="UG/Diploma">UG/Diploma</option>
                                                        <option value="PG/Diploma ">PG/Diploma</option>
                                                        </select>
                                                    </Col>

                                                    <Col>
                                                        <CountryDropdown className="input-type-date1 coun-drop border-0" variant="light" id="dropdown-item-button" value={country} onChange={(val) => this.selectCountry(val)} />
                                                    </Col>
                                                </Row>
                                                <br/>
                                                <Row>
                                                    <Col>
                                                        <RegionDropdown className="input-type-date1 reg-drop border-0" variant="light" id="dropdown-item-button" country={country} value={region} onChange={(val) => this.selectRegion(val)} />
                                                    </Col>
                                                </Row>
                                                <br/>
                                            </Card>
                                        </Dropdown>
                                    </Col>
                                </Row>
                                <br/><br/>
                                <Row>
                                    <Col>
                                        <div className="titles-headers">
                                            <h4>About You</h4>
                                        </div>
                                
                                        <div className="resume3">
                                            <textarea className="input1" placeholder="About You"></textarea>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                <Col>
                                    <div className="titles-headers">
                                        <h4>Personal Details</h4>
                                    </div>

                                    <Card className="resume2 border-0">
                                        <Row>
                                            <Col>
                                                <div>
                                                    <p className="input1-noi" placeholder="Father's Name"  ></p>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div>
                                                    <p className="input1-loi" placeholder="Mother's Name" name="candidate_mothername" value={candidate_mothername} onChange={this.changeHandler}></p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <br/>
                                        <Row>
                                            <Col>
                                                <div>
                                                    <p className="input1" placeholder="Nationality" name="candidate_nationality" value={candidate_nationality} onChange={this.changeHandler}></p>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div>
                                                    <input className="input1" placeholder="Sex" name="candidate_gender" value={candidate_gender} onChange={this.changeHandler}></input>
                                                </div>
                                            </Col>
                                        </Row>
                                        <br/>
                                        <Row>
                                            <Col>
                                                <div>
                                                    <textarea className="input1" placeholder="Address" name="candidate_address" value={candidate_address} onChange={this.changeHandler}></textarea>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            </Row><br/><br/>


                                <br/><br/><br/>
                                
                                <Row >
                                    <Col>
                                        <div className="titles-headers">
                                            <h4>Education</h4>
                                            <Button className="add-more" onClick={this.addEducation.bind(this)}>Add More</Button>
                                            </div>
                                            <Card  className="resume2 border-0">
                
                                            <Row>
                                                <Col>
                                                    <div>
                                                    <input className="input1-noi" placeholder="Name Of Institute" name="nameOfInstitute" value={nameOfInstitute} onChange={this.changeHandler}></input>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div>
                                                        <input className="input1-loi" placeholder="Location Of Institute" name="locationOfInstitute" value={locationOfInstitute} onChange={this.changeHandler}></input>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <br/>
                                            <Row>
                                                <Col>
                                                        <input className="input1-qua" placeholder="Qualification Degree" name="qualificationDegree" value={qualificationDegree} onChange={this.changeHandler}></input>
                                                </Col>
                                                <Col>
                            
                                                        <input type="number" className="input1-cgpa" placeholder="Precentage / CGPA" name="cgpa" value={cgpa} onChange={this.changeHandler}></input>
                            
                                                </Col>
                                                <Col>
                            
                                                        <input type="number" className="input1-yop" placeholder="Year Of Passing" name="yearOfPassing" value={yearOfPassing} onChange={this.changeHandler}></input>
                            
                                                </Col>
                                                
                                            </Row>
                                            
                                        
                                        </Card>
                                        </Col>
                                    </Row>
                                    
                                    <br/><br/><br/>
    
                                    <Row>
                                        <Col>
                                            <div className="titles-headers">
                                                <h4>Work Experience</h4>
                                                <Button className="add-more" onClick={this.addExperience.bind(this)} >Add More</Button>
                                            </div>
    
                                            <Card className="resume2 border-0">
                                                <Row>
                                                    <Col>
                                                        <div>
                                                            <input className="input1-noi" placeholder="Job Title" name="jobTitle" value={jobtitle} onChange={this.changeHandler}></input>
                                                        </div>
                                                    </Col>
                                                    <Col>
                                                        <div>
                                                            <input type="date" className="input-type-date-duration" name="startDate" value={startDate} onChange={this.changeHandler}/>
                                                        </div>
                                                    </Col>
                                                    <Col>
                                                        <div>
                                                            <input type="date" className="input-type-date-duration1" name="endDate" value={endDate} onChange={this.changeHandler}/>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <br/>
                                                <Row>   
                                                    <Col>
                                                        <input className="input1-noi" placeholder="Job Company" name="experienceCompanyname" value={experienceCompanyname} onChange={this.changeHandler}></input>
                                                    </Col>
    
                                                    <Col>
                                                        <input className="input1-noi" placeholder="Experience Years" name="experienceyears" value={experienceyears} onChange={this.changeHandler}></input>
                                                    </Col>
                                                </Row>
                                                <br/>
                                                <Row>
                                                    <Col>
                                                        <div>
                                                            <textarea className="input1" placeholder="Description (Optional)" name="experienceJobdesc" value={experienceJobdesc} onChange={this.changeHandler}> </textarea>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>
                                </form>
      }*/

    render(){
        const {country,region,qualification,experience,skill,jobcategory,education,country1,region1,candidate_fullname,candidate_fathername,candidate_mothername,candidate_nationality,candidate_gender,candidate_address,nameOfInstitute, locationOfInstitute, qualificationDegree, cgpa, yearOfPassing,
        jobtitle, startDate, endDate, experienceCompanyname , experienceyears, experienceJobdesc} = this.state;
        const { showing,showingfile } = this.state;
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
                            </Col>
                        </Row>
                        <br/>
                        <hr/>
                        <br/>
                            <form  onSubmit={this.handleSubmit}>
                            <div>
                                <Row>
                                    <Col>
                                        <div className="titles-headers">
                                            <h4>Full Name</h4>
                                        </div>

                                        <div className="resume2">
                                            <input className="input1" placeholder="Please Enter Your Name" name="candidate_fullname" value={candidate_fullname} onChange={this.changeHandler}></input>
                                        </div>
                                    </Col>
                                </Row>
                                <br/><br/>
                                <Row>
                                    <Col>
                                        <div className="titles-headers">
                                            <h4>Information</h4>
                                        </div>
                                
                                        <Dropdown>
                                            <Card className="resume2 border-0">
                                                <Row>
                                                <Col>
                                                <p>Job Category: </p>
                                                </Col>
                                                    <Col>
                                                        <select className="input-type-date1" name="jobpostcategory" value={jobcategory} onChange={this.changeHandler}>
                                                            <option value="Computer">Computer</option>
                                                            <option value="Banking">Banking</option>
                                                            <option value="Teaching">Teaching</option>
                                                        </select>
                                                    </Col>
                                                    <Col>
                                                    <p>Skills: </p>
                                                    </Col>
                                                    <Col>
                                                        <select className="input-type-date1" name="skill" value={skill} onChange={this.changeHandler}>
                                                            <option value="Java">Java</option>
                                                            <option value="Python">Python</option>
                                                            <option value="button">Something else</option>
                                                        </select>
                                                    </Col> 
                                                </Row>                                    
                                                <br/>
                                                <Row>
                                                <Col>
                                                <p>Experience: </p>
                                                </Col>
                                                    <Col>
                                                        <select className="input-type-date1" variant="light" name="Experience" value={experience} onChange={this.changeHandler}>
                                                            <option value="Fresher">Fresher</option>
                                                            <option value="2 Years">2 Years</option>
                                                            <option value="3 Years">3 Years</option>
                                                            <option value="4 Years">4 Years</option>
                                                        </select>
                                                    </Col>
                                                </Row>
                                                <br/>
                                                <Row>
                                                    <Col>
                                                    <p>Qualification: </p>
                                                    </Col>
                                                    <Col>
                                                        <select className="input-type-date1" variant="light"  name="Qualification" value={qualification} onChange={this.changeHandler}>
                                                        <option value="SSC">SSC</option>
                                                        <option value="HSC">HSC</option>
                                                        <option value="UG/Diploma">UG/Diploma</option>
                                                        <option value="PG/Diploma ">PG/Diploma</option>
                                                        </select>
                                                    </Col>

                                                    <Col>
                                                        <CountryDropdown className="input-type-date1 coun-drop border-0" variant="light" id="dropdown-item-button" value={country} onChange={(val) => this.selectCountry(val)} />
                                                    </Col>
                                                </Row>
                                                <br/>
                                                <Row>
                                                    <Col>
                                                        <RegionDropdown className="input-type-date1 reg-drop border-0" variant="light" id="dropdown-item-button" country={country} value={region} onChange={(val) => this.selectRegion(val)} />
                                                    </Col>
                                                </Row>
                                                <br/>
                                            </Card>
                                        </Dropdown>
                                    </Col>
                                </Row>
                                <br/><br/>
                                <Row>
                                    <Col>
                                        <div className="titles-headers">
                                            <h4>About You</h4>
                                        </div>
                                
                                        <div className="resume3">
                                            <textarea className="input1" placeholder="About You"></textarea>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                <Col>
                                    <div className="titles-headers">
                                        <h4>Personal Details</h4>
                                    </div>

                                    <Card className="resume2 border-0">
                                        <Row>
                                            <Col>
                                                <div>
                                                    <input className="input1-noi" placeholder="Father's Name" name="candidate_fathername" value={candidate_fathername} onChange={this.changeHandler} ></input>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div>
                                                    <input className="input1-loi" placeholder="Mother's Name" name="candidate_mothername" value={candidate_mothername} onChange={this.changeHandler}></input>
                                                </div>
                                            </Col>
                                        </Row>
                                        <br/>
                                        <Row>
                                            <Col>
                                                <div>
                                                    <input className="input1" placeholder="Nationality" name="candidate_nationality" value={candidate_nationality} onChange={this.changeHandler}></input>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div>
                                                    <input className="input1" placeholder="Sex" name="candidate_gender" value={candidate_gender} onChange={this.changeHandler}></input>
                                                </div>
                                            </Col>
                                        </Row>
                                        <br/>
                                        <Row>
                                            <Col>
                                                <div>
                                                    <textarea className="input1" placeholder="Address" name="candidate_address" value={candidate_address} onChange={this.changeHandler}></textarea>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            </Row><br/><br/>


                                <br/><br/><br/>
                                
                                <Row >
                                    <Col>
                                        <div className="titles-headers">
                                            <h4>Education</h4>
                                            <Button className="add-more" /*onClick={this.addEducation.bind(this)}*/>Add More</Button>
                                        </div>
                                        <Card  className="resume2 border-0">
            
                                        <Row>
                                            <Col>
                                                <div>
                                                <input className="input1-noi" placeholder="Name Of Institute" name="nameOfInstitute" value={nameOfInstitute} onChange={this.changeHandler}></input>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div>
                                                    <input className="input1-loi" placeholder="Location Of Institute" name="locationOfInstitute" value={locationOfInstitute} onChange={this.changeHandler}></input>
                                                </div>
                                            </Col>
                                        </Row>
                                        <br/>
                                        <Row>
                                            <Col>
                                                    <input className="input1-qua" placeholder="Qualification Degree" name="qualificationDegree" value={qualificationDegree} onChange={this.changeHandler}></input>
                                            </Col>
                                            <Col>
                        
                                                    <input type="number" className="input1-cgpa" placeholder="Precentage / CGPA" name="cgpa" value={cgpa} onChange={this.changeHandler}></input>
                        
                                            </Col>
                                            <Col>
                        
                                                    <input type="number" className="input1-yop" placeholder="Year Of Passing" name="yearOfPassing" value={yearOfPassing} onChange={this.changeHandler}></input>
                        
                                            </Col>
                                            
                                        </Row>
                                        
                                    
                                    </Card>
                                    </Col>
                                </Row>
                                
                                <br/><br/><br/>
                                <Row>
                                    <Col>
                                        <div className="titles-headers">
                                            <h4>Work Experience</h4>
                                            <Button className="add-more" /*onClick={this.addExperience.bind(this)}*/ >Add More</Button>
                                        </div>

                                        <Card className="resume2 border-0">
                                            <Row>
                                                <Col>
                                                    <div>
                                                        <input className="input1-noi" placeholder="Job Title" name="jobTitle" value={jobtitle} onChange={this.changeHandler}></input>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div>
                                                        <input type="date" className="input-type-date-duration" name="startDate" value={startDate} onChange={this.changeHandler}/>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div>
                                                        <input type="date" className="input-type-date-duration1" name="endDate" value={endDate} onChange={this.changeHandler}/>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <br/>
                                            <Row>   
                                                <Col>
                                                    <input className="input1-noi" placeholder="Job Company" name="experienceCompanyname" value={experienceCompanyname} onChange={this.changeHandler}></input>
                                                </Col>

                                                <Col>
                                                    <input className="input1-noi" placeholder="Experience Years" name="experienceyears" value={experienceyears} onChange={this.changeHandler}></input>
                                                </Col>
                                            </Row>
                                            <br/>
                                            <Row>
                                                <Col>
                                                    <div>
                                                        <textarea className="input1" placeholder="Description (Optional)" name="experienceJobdesc" value={experienceJobdesc} onChange={this.changeHandler}> </textarea>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                </Row>


                                <input type="file" onChange={this.onFileChange} /> 
                                <Button onClick={this.onFileUpload}>Upload Resume</Button><br/>
                                <hr/>
                                <button type="submit" class="res-btn btn-danger">Submit</button><br/><br/>
                                
                                {this.fileData()} 
                            </div>
                            </form>

                    </Col>
                </Col>
            </Row>
        )
    }
}