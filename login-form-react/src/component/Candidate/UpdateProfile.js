import React from 'react';
import './UpdateProfile.css';
import CandidateSidebar from './Sidebar/Sidebar'
import Searchbar from '../Searchbar/Searchbar'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card, { CardBody } from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import AuthenticationService from '../Service/AuthenticationService'
import Axios from 'axios';



export default class UpdateProfile extends React.Component{


    constructor() {
        super();
        this.state = {
            candidate_fname: '',
            candidate_lname: '',
            candidate_address: '',
            candidate_about: '',
            candidate_profpic: '',
            username: '',
            phoneno: '',
            dob: '',
            candidateloc_city: '',
            candidateloc_state: '',
            candidateloc_country: '',
            email: '',
            password: '',
            accountisactive: ''
        };
        this.updateProfile=this.updateProfile.bind(this);
        this.changeHandler=this.changeHandler.bind(this);
      }
    
      componentDidMount(){
        const userid=this.props.match.params.uid;
        if(userid){
            this.findUserById(userid);
        }

    }



    findUserById = (userid) =>{
        Axios.get(`http://localhost:8080/api/candidates/candidate/${userid}`)
        .then(response=>{
            if(response.data != null){
                this.setState({
                    candidate_fname : response.data.candidate_fname,
                    candidate_lname : response.data.candidate_lname,
                    candidate_address : response.data.candidate_address,
                    candidate_about : response.data.candidate_about,
                    candidate_profpic : response.data.candidate_profpic,
                    username : response.data.username,
                    phoneno : response.data.phoneno,
                    dob : response.data.dob,
                    candidateloc_city : response.data.candidateloc_city,
                    candidateloc_state : response.data.candidateloc_state,
                    candidateloc_country : response.data.candidateloc_country,
                    email : response.data.email,
                    password : response.data.password,
                    accountisactive : response.data.accountisactive
                });
            }
        }).catch((error)=>{
            console.log("error"+error);
        });
    }

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
      };

    updateProfile  = event =>{
        event.preventDefault();
        const userid=this.props.match.params.uid;
        const profile = {
            candidate_fname : this.state.candidate_fname,
            candidate_lname : this.state.candidate_lname,
            candidate_address : this.state.candidate_address,
            candidate_about : this.state.candidate_about,
            candidate_profpic : this.state.candidate_profpic,
            phoneno : this.state.phoneno,
            email : this.state.email,
            password : this.state.password,
          };

          const config = {
            headers: {
              'Content-Type': 'application/json'
            }
          };

          Axios.put(`http://localhost:8080/api/candidates/updatecandidate/${userid}`,profile,config)
          .then(res => {
          if(res.data!=null){
            console.log(res.data);
            console.log(profile);
            console.log(res);
            alert("Candidate Updated");
            this.props.history.push(`/ViewCandidateProfile/${userid}`);
          }
        })

    }



    render(){

        const {candidate_fname,candidate_lname,candidate_address,candidate_about,candidate_profpic,phoneno,email}=this.state

        return(
            <Row className="no-gutters">  
                <CandidateSidebar />           
                <Col className="resume-page">

                    <Col>
                        <br/>
                        <Row>
                            <Col>
                                <Searchbar/>
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <Card className="border-0" style={{ width: '15rem' }}>
                                    <Card.Img className="thumbprof" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0vBS3WCCCBV9W43wW17Y3vqn_cCuEi8MJ9-DyNPGdaizAmKK7" />
                                    <Card.Body>
                                        <Button variant="primary">Change</Button>
                                    </Card.Body>
                                </Card>
                            </Col>  
                            <Col>
                            </Col>      
                        </Row>
                        <br></br>
                        <Card className="view-profile-page border-0">
                        <form  onSubmit={this.updateProfile}>   
                            <Row>
                                <Col  xs={3} className="text-left" >
                                    <h5>First Name</h5>
                                </Col>
                                <Col md={{ span: 3, offset: 3 }} className="text-left" >
                                <input type="text" className="form-control" name="candidate_fname" placeholder="First Name" value={candidate_fname} onChange={this.changeHandler} required />
                                </Col>
                            </Row><br/>
                            <Row >
                                <Col  xs={3} className="text-left">
                                    <h5>Last Name</h5>
                                </Col>
                                <Col  md={{ span: 3, offset: 3 }} className="text-left" >
                                <input type="text" className="form-control" name="candidate_lname" placeholder="Last Name" value={candidate_lname} onChange={this.changeHandler} required />
                                </Col>
                            </Row><br/>
                            <Row >
                                <Col  xs={3} className="text-left">
                                    <h5>Email</h5>
                                </Col>
                                <Col  md={{ span: 3, offset: 3 }} className="text-left">
                                <input type="text" pattern="^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$" className="form-control" name="email" placeholder="Email Address" value={email} onChange={this.changeHandler} required />
                                </Col>
                            </Row><br/>
                            <Row >
                                <Col  xs={3} className="text-left">
                                    <h5>Phone</h5>
                                </Col>
                                <Col  md={{ span: 3, offset: 3 }} className="text-left">
                                <input type="tel" pattern="[0-9]{5}[0-9]{5}" className="form-control" name="phoneno" placeholder="Phone Number" value={phoneno} onChange={this.changeHandler} required />
                                </Col>
                            </Row><br/>
                            <Row>
                                <Col  xs={3} className="text-left">
                                    <h5>Address</h5>
                                </Col>
                                <Col  md={{ span: 3, offset: 3 }} className="text-left">
                                <textarea type="text" className="form-control" name="candidate_address" placeholder="Address" value={candidate_address} onChange={this.changeHandler} required />
                                </Col>
                            </Row><br/>  
                            <Row >
                                <Col  xs={3} className="text-left">
                                    <h5>About Me</h5>
                                </Col>
                                <Col  md={{ span: 5, offset: 3 }} className="text-left">
                                <textarea type="text" className="form-control" name="candidate_about" placeholder="About" value={candidate_about} onChange={this.changeHandler} required />
                                </Col>
                            </Row><br/>
                            <Button type="submit" variant="primary">Save Profile</Button>
                            </form>    
                        </Card>
                        <br/><br/>
                    </Col>     
                         
                </Col>        
            </Row>
        )
    }
}