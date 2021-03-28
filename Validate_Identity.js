import React from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import {ContextCreator} from './Context'
import Footer from './Footer'
import Failed from './Failed';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Otpmodule from './Otpmodule';
class ValidateIdentity extends React.Component {
    render() { 
        return (  
            <center>
                <ContextCreator.Consumer>
                    {
                    Context=>{
                        console.log(Context.verified);
                        return(
                            <>
                            {
                                Context.verified==""?  <>  <Navbar/>
                                <div style={{height:"47rem"}} className="container mt-5">
                                <form className="form-validate" onSubmit={Context.onSubmit}>
                                          <div className="form-group">
                                              <label htmlFor="Aadhar"> <h4> Enter Your Aadhar ID</h4></label>
                                              <input style={{width:'20rem'}} type="text" className="form-control" placeholder="Aadhar Number..." id="Aadhar" value={Context.AadharNo} onChange={Context.UpdateAadhar} required minLength="12" maxLength ="12"  />
                                          </div>
                                          <div className="form-group">
                                              <label htmlFor="voter"> <h4> Enter Your Voter ID</h4></label>
                                              <input  style={{width:'20rem'}}  type="text" className="form-control" placeholder="Voter Id..." id="voter" value = {Context.VoterID} onChange={Context.UpdateVoter} required minLength="10" maxLength ="10" />
                                          </div>
                                      <button type="submit" className="btn btn-success">Validate</button>
                                   </form>
                                   </div>
                                   {/* localStorage.getItem("verified") */}
                                   <Footer/> </> : Context.verified == false ? <>
                                   {alert("Not valid......")}
                                   <Failed/>
                                   </> :
                                    <>
                                    <Link to='/Otpmodule'>HERE</Link>
                                    {/* <Otpmodule/> */}
                                    </>
                        
                            }
                                  </>
                        )
                    }}
                </ContextCreator.Consumer>
               
                        </center>
                    );
                }
            }
 
export default ValidateIdentity;