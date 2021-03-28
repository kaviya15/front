import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ContextCreator } from "./Context";
export class Generateotp extends Component {
  render() {
    return (
      <center>
        <ContextCreator.Consumer>
          {(context) => {
            return (
              <>
                <Navbar />
                <form
                  onSubmit={context.submitOTP}
                  className="mt-5 form-validate" style={{height:"47rem"}}
                >
                  <div className="form-group">
                    <label htmlFor="">Enter the OTP</label>
                    <input
                      type="tel"
                      style={{ width: "20rem" }}
                      placeholder="Entetr OTP..."
                      className="form-control mt-5"
                      required
                      value={context.otp}
                      onChange={context.updateOTP}
                    />
                  </div>

                  <button className="btn btn-primary">submit</button>
                </form>
                <Footer />
              </>
            );
          }}
        </ContextCreator.Consumer>
      </center>
    );
  }
}

export default Generateotp;
