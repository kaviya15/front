import React, { Component } from "react";
import axios from "axios";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Thankyou from "./ThankYou";
class Polling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DMK: "",
      ADMK: "",
      congress: "",
      BJP: "",
      updates: "",
    };
  }
  checkstatus = () => {
    axios("http://localhost:4000/results")
      .then((res) => {
        this.setState({
          DMK: res.data.DMK,
          ADMK: res.data.ADMK,
          congress: res.data.congress,
          BJP: res.data.BJP,
          updates: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <center>
        <div className="mt-5">
          {this.state.updates && (
            <>
              <label className="pr-2" htmlFor="">
                <img width=" 200px" src="/dmk.png" alt="" /> <br />
                <b>
                  {" "}
                  <em style={{ fontSize: "20px" }} className="text-dark">
                    {" "}
                    DMK -{" "}
                    {this.state.DMK == 0 ? (
                      <em
                        style={{ fontSize: "20px" }}
                        className=" badge badge-warning text-dark"
                      >
                        zero
                      </em>
                    ) : (
                      <em cclassName=" badge badge-primary text-white">
                        {this.state.DMK}
                      </em>
                    )}
                  </em>
                </b>
              </label>
              <label className="pr-5" htmlFor="">
                <img width=" 160px" src="/cong.png" alt="" /> <br />
                <b>
                  {" "}
                  <em style={{ fontSize: "20px" }} className="text-dark">
                    {" "}
                    CONGRESS -
                    {this.state.congress == 0 ? (
                      <em
                        style={{ fontSize: "20px" }}
                        className=" badge badge-warning text-dark"
                      >
                        zero
                      </em>
                    ) : (
                      <em className="badge badge-primary text-white">
                        {this.state.congress}
                      </em>
                    )}{" "}
                  </em>
                </b>
              </label>
              <label className="pr-5" htmlFor="">
                <img width="150px" src="/bjp.png" alt="" /> <br />
                <b>
                  <em style={{ fontSize: "20px" }} className="text-dark">
                    {" "}
                    BJP -{" "}
                    {this.state.BJP == 0 ? (
                      <em
                        style={{ fontSize: "20px" }}
                        className=" badge badge-warning text-dark"
                      >
                        zero
                      </em>
                    ) : (
                      this.state.BJP
                    )}
                  </em>
                </b>
              </label>
              <label className="pr-2" htmlFor="">
                <img width=" 220px" src="/admk.png" alt="" /> <br />
                <b>
                  {" "}
                  <em style={{ fontSize: "20px" }} className="text-dark">
                    {" "}
                    ADMK -
                    {this.state.ADMK == 0 ? (
                      <em
                        style={{ fontSize: "20px" }}
                        className=" badge badge-warning text-dark"
                      >
                        zero
                      </em>
                    ) : (
                      this.state.ADMK
                    )}{" "}
                  </em>
                </b>
              </label>
              <br />
            </>
          )}
           <button onClick={this.checkmyvote} className="btn btn-primary mt-5">
            Check My Vote
          </button>
          <button onClick={this.checkstatus} className="btn btn-primary mt-5">
            Check Status
          </button>
        </div>
      </center>
    );
  }
}

export default Polling;
