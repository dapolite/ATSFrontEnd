// import React, { Component } from 'react';
// import './LoginForm.css';
// import leftside from './leftside.jpg';
// import SUDH_logo_1 from './SUDH_logo_1.png';
// import linkedin_icon_flat from './linkedin_icon_flat.png';
// import history from '../history';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { Formik,Field,ErrorMessage } from 'formik'
// import * as EmailValidator from 'email-validator'
// import * as Yup from 'yup'

// import Popup from 'reactjs-popup';
// import forgot from './forgot.png';

// import Modal from 'react-bootstrap/Modal'; 
// import Button from 'react-bootstrap/Button';

// const loginSchema = Yup.object().shape({
//   password: Yup.string()
//     .min(8, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
//   email: Yup.string()
//     .email("Invalid email")
//     .required("Required")
// });

// class Form extends Component {
//   handleSubmit = (values, { setSubmitting }) => {
//     setTimeout(() => {
//       alert(JSON.stringify(values, null, 2));
//       setSubmitting(false);
//     }, 400);
//   };

  
//   render () {
//     return (
//        <div>
//          <div>
//           <img src={leftside} className="leftside-logo" alt="leftside.jpg"></img>
//          </div>
//          <div>
//          <Formik
//          initialValues={{ email: "", password: "" }}
//          validationSchema={loginSchema}
//          onSubmit={this.handleSubmit}
//        >
//          {({ isSubmitting }) => (
//           <Form className="demoForm1">
//            <img src={SUDH_logo_1} className="sudh-logo" alt="SUDH_logo_1.png"></img>
//            <h5>Welcome back! Login to your account</h5><br/>
//            <Row>
//             <Col>
//                 <Field className="form-control" type="email" name="email" />
//                 <ErrorMessage name="email" component="div" />
//             </Col>
//           </Row>
//           <br/>
//           <Row>
//             <Col>
//             <Field className="form-control" type="password" name="password" />
//             <ErrorMessage name="password" component="div" />
//             </Col>
//           </Row>
//           <br/>
//            <div>
//              <label className="remember-me"> 
//              <input type="checkbox" name="remember"/>Remember Me
//              </label>
//               <Popup trigger={<a href="#" className="ForgotPswd">Forgot Password?</a>} modal>
//                   <Modal.Dialog>
//                     <Modal.Body className="ev1">
//                     <img src={forgot} className="fpev-logo" alt="forgot.png" /><br/><br/>
//                       <br/>
//                       <button /*onClick={() => history.push('/ForgotPassword')}*/ type="submit" className="button1 fpev-btn" >Email Verification</button>
//                     </Modal.Body>
//                   </Modal.Dialog>
//               </Popup>
//            </div><br/><br/>
//            <div>
//             <button type="submit" className="btn btn-danger"  disabled={isSubmitting}>Login</button>
//              <button type="submit" className="btn btn-outline-danger" onClick={() => history.push('/RegisterStart')}>Sign up</button><br/><br/>
//            </div><br/>
//            <div>
//               <p><b>Or Login With</b></p>
//               <a href="#">
//                 <img src={linkedin_icon_flat} className="linkedin-logo" alt="linkedin_icon_flat.png"></img>
//               </a>
//             </div><hr/>
//             <Row>
//             <Col>
//               <div className="custom-control custom-checkbox pl-3">
//                 <input className="custom-control-input" type="checkbox" value="" id="invalidCheck" required />
//                 <label className="custom-control-label" htmlFor="invalidCheck">
//                   By checking this box, you agree Sudh Infosys <br/><b>Privacy Policy</b> and <b>Terms of use</b>
//                 </label>
//               </div>
//             </Col>
//           </Row><br/>
//            </Form>
//          )}
//          </Formik>
//          </div>
//        </div>
//     )
//   }
// }

// export default Form;

import React, { Component } from 'react';
import './LoginForm.css';
import leftside from './leftside.jpg';
import SUDH_logo_1 from './SUDH_logo_1.png';
import linkedin_icon_flat from './linkedin_icon_flat.png';
import history from '../history';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Popup from 'reactjs-popup';
import forgot from './forgot.png';

import Modal from 'react-bootstrap/Modal'; 
import Button from 'react-bootstrap/Button';

class Form extends Component {
  constructor(props){
    super();

    this.state = {
      email: '',
      password: '',
      email1: ''
    }
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit =event => {
    history.push('/Dashboard')
    event.preventDefault();
  }
  
  render () {
    return (
       <div>
         <div>
          <img src={leftside} className="leftside-logo" alt="leftside.jpg"></img>
         </div>
         <div>
          <form className="demoForm1" onSubmit={this.handleSubmit}>
           <img src={SUDH_logo_1} className="sudh-logo" alt="SUDH_logo_1.png"></img>
           <h5>Welcome back! Login to your account</h5><br/>
           <Row>
            <Col>
              <input type="text" pattern="^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$" className="form-control" name="email" placeholder="Email Address" value={this.state.email} onChange={this.changeHandler} required />
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <input type="password" pattern="^(?=.*\d).{4,20}$" className="form-control" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} required />
            </Col>
          </Row>
          <br/>
           <div>
             <label className="remember-me"> 
             <input type="checkbox" name="remember"/>Remember Me
             </label>
              <Popup trigger={<a href="#" className="ForgotPswd">Forgot Password?</a>} modal>
                  <Modal.Dialog>
                    <Modal.Body className="ev1">
                    <img src={forgot} className="fpev-logo" alt="forgot.png" /><br/><br/>
                      <input type="text" pattern="^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$" className="form-control" name="email1" placeholder="Email Address" value={this.state.email1} onChange={this.changeHandler} required />
                      <br/>
                      <button /*onClick={() => history.push('/ForgotPassword')}*/ type="submit" className="button1 fpev-btn" >Email Verification</button>
                    </Modal.Body>
                  </Modal.Dialog>
              </Popup>
           </div><br/><br/>
           <div>
            <button type="submit" className="btn btn-danger" /*onClick={() => history.push('/Dashboard')} disabled={!this.state.formValid}*/>Login</button>
             <button type="submit" className="btn btn-outline-danger" onClick={() => history.push('/RegisterStart')}>Sign up</button><br/><br/>
           </div><br/>
           <div>
              <p><b>Or Login With</b></p>
              <a href="#">
                <img src={linkedin_icon_flat} className="linkedin-logo" alt="linkedin_icon_flat.png"></img>
              </a>
            </div><hr/>
            <Row>
            <Col>
              <div className="custom-control custom-checkbox pl-3">
                <input className="custom-control-input" type="checkbox" value="" id="invalidCheck" required />
                <label className="custom-control-label" htmlFor="invalidCheck">
                  By checking this box, you agree Sudh Infosys <br/><b>Privacy Policy</b> and <b>Terms of use</b>
                </label>
              </div>
            </Col>
          </Row><br/>
           </form>
         </div>
       </div>
    )
  }
}

export default Form;