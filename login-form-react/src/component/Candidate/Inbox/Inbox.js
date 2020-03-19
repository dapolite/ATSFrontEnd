import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Inbox.css';
import Button from 'react-bootstrap/Button'

import history from '../../history';

export default class Inbox extends React.Component{
    render(){
        return(
            <Row className="no-gutters">
                <Col md="2">
                    <Card className="first-card">
                        <Row>
                            <Button className="compose">Compose</Button>
                        </Row>
                        <hr/>
                        <Row>
                            <button className="btn btn-primary-outline" onClick={() => history.push('/CandidateInboxdata')}>Inbox</button>
                        </Row>
                        <br/>
                        <Row>
                            <button className="btn btn-primary-outline" onClick={() => history.push('/CandidateSentdata')}>Sent</button>
                        </Row>
                        <br/>
                        <Row>
                            <button className="btn btn-primary-outline" onClick={() => history.push('/CandidateDraftsdata')}>Drafts</button>
                        </Row>
                        <br/>
                        <Row>
                            <button className="btn btn-primary-outline" onClick={() => history.push('/CandidateTrashdata')}>Trash</button>
                        </Row>
                        <br/>
                        <Row>
                            <button className="btn btn-primary-outline" onClick={() => history.push('/CandidateImportantdata')}>Important</button>
                        </Row>
                        <br/>
                        <Row>
                            <button className="btn btn-primary-outline" onClick={() => history.push('/CandidateSpamdata')}>Spam</button>
                        </Row>
                        <br/>
                        <Row>
                            <button className="btn btn-primary-outline" onClick={() => history.push('/CandidateStarreddata')}>Starred</button>
                        </Row>
                    </Card>
                </Col>
            </Row>
        )
    }
}