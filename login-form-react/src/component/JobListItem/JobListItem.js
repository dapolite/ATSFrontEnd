import React from 'react';
import Clock from 'react-live-clock';
import './JobListItem.css';
import Button from 'react-bootstrap/Button';
import Axios from 'axios'
import history from '../history';



export default class JobListItem extends React.Component{

    constructor(props) {
        super(props);
        this.state = { jobs: [] };
      }
    

    componentDidMount(){
        const user=sessionStorage.getItem('userId');
        console.log(user)
        Axios.get(`http://localhost:8080/api/jobspost`)
        .then((response)=>
            this.setState({ jobs:response.data })
        );
    }

    openJob = (jobId) =>{
        history.push('/ViewJob/'+jobId);
    }

    render(){
        return(
                this.state.jobs.map((job) =>(
                
                <div className="row v1jbl" key={job.jobpostid}>
                
                <div className="col-6">

                    <div className="row">
                    <img className="thumbjbl" src="data:image/jpeg;base64,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"/>
                        <div className="col">
                            <div className="row">
                                <h6 className="col-spaced1 row-spaced">{job.jobpostname}</h6>
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
                <Button className="float-right" variant="danger" onClick={this.openJob.bind(this,job.jobpostid)}>View Job</Button>
                </div>
            </div>

            </div>
            ))
        
            
        )
            }
}