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

import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


export default class Resume extends React.Component{

    constructor(props){
        super(props);
        this.state = {country: '', region: ''};
    }

    state = { showing : true };

    selectCountry(val){
        this.setState({country: val});
    }

    selectRegion(val){
        this.setState({region: val});
    }

    render(){
        const {country,region} = this.state;
        const { showing } = this.state;
        return(
            <Row className="no-gutters">
                <CandidateSidebar/>
                <Col className="resume-page1">
                    <Col>
                        <Row>
                            <Col>
                                <Searchbar/>
                            </Col>
                        </Row>
                        <br/><br/>
                        <Row>
                            <Col>
                                <div>
                                    <Button>Upload Resume</Button>
                                    <span className="or-buttons">OR</span>
                                    <Button onClick={() => this.setState({ showing : !showing })}>Upload Resume Manually</Button>
                                </div>
                            </Col>
                        </Row>
                        <br/>
                        <hr/>
                        <br/>
                        { showing
                            ?
                            <div>
                                <Row>
                                    <Col>
                                        <div className="titles-headers">
                                            <h4>Full Name</h4>
                                        </div>

                                        <div className="resume2">
                                            <input className="input1" placeholder="Please Enter Your Name"></input>
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
                                                        <DropdownButton className="input-type-date1" variant="light" id="dropdown-item-button" title="Job Category">
                                                            <Dropdown.Item as="button">Action</Dropdown.Item>
                                                            <Dropdown.Item as="button">Another action</Dropdown.Item>
                                                            <Dropdown.Item as="button">Something else</Dropdown.Item>
                                                        </DropdownButton>
                                                    </Col>

                                                    <Col>
                                                        <DropdownButton className="input-type-date1" variant="light" id="dropdown-item-button" title="Skills">
                                                            <Dropdown.Item as="button">Action</Dropdown.Item>
                                                            <Dropdown.Item as="button">Another action</Dropdown.Item>
                                                            <Dropdown.Item as="button">Something else</Dropdown.Item>
                                                        </DropdownButton>
                                                    </Col> 
                                                </Row>                                    
                                                <br/>
                                                <Row>
                                                    <Col>
                                                        <DropdownButton className="input-type-date1" variant="light" id="dropdown-item-button" title="Job Type">
                                                            <Dropdown.Item as="button">Part Time</Dropdown.Item>
                                                            <Dropdown.Item as="button">Full Time</Dropdown.Item>
                                                            <Dropdown.Item as="button">Temperory</Dropdown.Item>
                                                            <Dropdown.Item as="button">Permanent</Dropdown.Item>
                                                            <Dropdown.Item as="button">Freelance</Dropdown.Item>
                                                        </DropdownButton>
                                                    </Col> 

                                                    <Col>
                                                        <input type="number" className="input-type-date" placeholder="Salary Range" />
                                                    </Col>
                                                </Row>
                                                <br/>
                                                <Row>
                                                    <Col>
                                                        <DropdownButton className="input-type-date1" variant="light" id="dropdown-item-button" title="Experience">
                                                            <Dropdown.Item as="button">Less than 1 Year</Dropdown.Item>
                                                            <Dropdown.Item as="button">2 Years</Dropdown.Item>
                                                            <Dropdown.Item as="button">3 Years</Dropdown.Item>
                                                            <Dropdown.Item as="button">4 Years</Dropdown.Item>
                                                            <Dropdown.Item as="button">Over 5 Years</Dropdown.Item>
                                                        </DropdownButton>
                                                    </Col>

                                                    <Col>
                                                        <DropdownButton className="input-type-date1" variant="light" id="dropdown-item-button" title="Qualification">
                                                    
                                                        </DropdownButton>
                                                    </Col>
                                                </Row>
                                                <br/>
                                                <Row>
                                                    <Col>
                                                        <DropdownButton className="input-type-date1" variant="light" id="dropdown-item-button" title="Gender">
                                                            <Dropdown.Item as="button">Male</Dropdown.Item>
                                                            <Dropdown.Item as="button">Female</Dropdown.Item>
                                                        </DropdownButton>
                                                    </Col>

                                                    <Col>
                                                        <input type="date" className="input-type-date"/>
                                                    </Col> 
                                                </Row>
                                                <br/>
                                                <Row>
                                                    <Col>
                                                        <CountryDropdown className="input-type-date1 coun-drop border-0" variant="light" id="dropdown-item-button" value={country} onChange={(val) => this.selectCountry(val)} />
                                                    </Col>

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
                                <br/><br/><br/>
                                <Row>
                                    <Col>
                                        <div className="titles-headers">
                                            <h4>Education</h4>
                                            <Button className="add-more" >Add More</Button>
                                        </div>
                                
                                        <Card className="resume2 border-0">
                                            <Row>
                                                <Col>
                                                    <div>
                                                        <input className="input1-noi" placeholder="Name Of Institute"></input>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div>
                                                        <input className="input1-loi" placeholder="Location Of Institute"></input>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <br/>
                                            <Row>
                                                <Col>
                                                    <div>
                                                        <input className="input1-qua" placeholder="Qualification"></input>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div>
                                                        <input type="number" className="input1-cgpa" placeholder="Precentage / CGPA"></input>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div>
                                                        <input type="number" className="input1-yop" placeholder="Year Of Passing"></input>
                                                    </div>
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
                                            <Button className="add-more" >Add More</Button>
                                        </div>

                                        <Card className="resume2 border-0">
                                            <Row>
                                                <Col>
                                                    <div>
                                                        <input className="input1-noi" placeholder="Company Name"></input>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div>
                                                        <input type="date" className="input-type-date-duration"/>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div>
                                                        <input type="date" className="input-type-date-duration1"/>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <br/>
                                            <Row>
                                                <Col>
                                                    <CountryDropdown className="input-type-date1 coun-drop1" variant="light" id="dropdown-item-button" value={country} onChange={(val) => this.selectCountry(val)} />
                                                </Col>

                                                <Col>
                                                    <RegionDropdown className="input-type-date1 reg-drop1" variant="light" id="dropdown-item-button" country={country} value={region} onChange={(val) => this.selectRegion(val)} />
                                                </Col>
                                            </Row>
                                            <br/>
                                            <Row>
                                                <Col>
                                                    <div>
                                                        <textarea className="input1" placeholder="Description (Optional)"></textarea>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                </Row>
                                <br/><br/><br/>
                                <Row>
                                    <Col>
                                        <div className="titles-headers">
                                            <h4>Social Media</h4>
                                            <Button className="add-more" >Add More</Button>
                                        </div>
                                
                                        <div className="resume2">
                                            <input className="input1" placeholder="Please Select A Link"></input>
                                        </div>
                                    </Col>
                                </Row>
                                <br/><br/><br/>
                                <Row>
                                    <Col>
                                        <div className="titles-headers">
                                            <h4>Personal Details</h4>
                                        </div>

                                        <Card className="resume2 border-0">
                                            <Row>
                                                <Col>
                                                    <div>
                                                        <input className="input1-noi" placeholder="Father's Name"></input>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div>
                                                        <input className="input1-loi" placeholder="Mother's Name"></input>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <br/>
                                            <Row>
                                                <Col>
                                                    <div>
                                                        <input className="input1-noi" placeholder="Nationality"></input>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div>
                                                        <input className="input1-loi" placeholder="Sex"></input>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <br/>
                                            <Row>
                                                <Col>
                                                    <div>
                                                        <textarea className="input1" placeholder="Address"></textarea>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                </Row><br/><br/>
                                <button type="button" class="res-btn btn-danger">Submit</button><br/><br/>
                            </div>
                            :null
                        }
                    </Col>
                </Col>
            </Row>
        )
    }
}