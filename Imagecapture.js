import axios from "axios";
import React, { Component } from "react";
import Navbar from "./Navbar";
import { ContextCreator } from "./Context";
import { BrowserRouter, Route, Link } from "react-router-dom";

class Imagecapture extends Component {
  render() {
    return (
      <center>
        <ContextCreator.Consumer>
          {(Context) => {
            return (
              <>
                <Navbar />
                <h2 className="text-dark mt-5">
                  <b>
                    <em>Authenticate Your Identity </em>
                  </b>
                </h2>
                <h4 className="text-dark">
                  Name : <em className="text-primary">{Context.name}</em>
                </h4>
                <h4 className="text-dark">VoterID :{Context.VoterId} </h4>
                <h4 className="text-dark">
                  status : <em className="text-success">Logged In</em>
                </h4>
                <img className="mt-5" src="/face_.png" alt="" /> <br />
                <button
                  onClick={Context.face_verification}
                  className="btn btn-primary"
                >
                  Capture Image
                </button>{" "}
                <br /> <br/>
                {Context.face_verified && (
                  <>
                  {alert(`kindly copy your sceret key ${Context.key} `)}
                  <Link to="/Ballotmodule">
                    <button className="btn btn-success">NEXT</button>
                  </Link>
                  </>
                )}
              </>
            );
          }}
        </ContextCreator.Consumer>
      </center>
    );
  }
}

export default Imagecapture;
