import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ContextCreator } from "./Context";
import Thankyou from "./ThankYou";
import ValidateIdentity from "./Validate_Identity";
import Failed from "./Failed";
class CastBalot extends Component {
  render() {
    return (
      <center>
        <ContextCreator.Consumer>
          {(context) => {
            return (
              <>
                {context.verify == "" ? (
                  <>
                    {" "}
                    <Navbar />{" "}
                    <h4 className="text-dark">
                      Name : <em className="text-primary">{context.name}</em>
                    </h4>
                    <h4 className="text-dark">VoterID :{context.VoterId} </h4>
                    <h4 className="text-dark">
                      status : <em className="text-success">Logged In</em>
                    </h4>
                    <form
                      style={{ height: "49.5rem" }}
                      onSubmit={context.castballot}
                    >
                      <label className="pr-2" htmlFor="">
                        <img width=" 200px" src="/dmk.png" alt="" /> <br />
                        <b>
                          <input
                            style={{ fontSize: "30px" }}
                            type="radio"
                            name="vote"
                            value="DMK"
                            onChange={context.onradiochange}
                          />{" "}
                          <em
                            style={{ fontSize: "20px" }}
                            className="text-dark"
                          >
                            {" "}
                            DMK
                          </em>
                        </b>
                      </label>
                      <label className="pr-2" htmlFor="">
                        <img width=" 160px" src="/cong.png" alt="" /> <br />
                        <b>
                          {" "}
                          <input
                            type="radio"
                            name="vote"
                            value="Congress"
                            onChange={context.onradiochange}
                          />{" "}
                          <em
                            style={{ fontSize: "20px" }}
                            className="text-dark"
                          >
                            {" "}
                            CONGRESS{" "}
                          </em>
                        </b>
                      </label>
                      <label htmlFor="">
                        <img width=" 150" src="/bjp.png" alt="" /> <br />
                        <b>
                          <input
                            type="radio"
                            name="vote"
                            value="BJP"
                            onChange={context.onradiochange}
                          />{" "}
                          <em
                            style={{ fontSize: "20px" }}
                            className="text-dark"
                          >
                            {" "}
                            BJP
                          </em>
                        </b>
                      </label>
                      <label className="pr-2" htmlFor="">
                        <img width=" 220px" src="/admk.png" alt="" /> <br />
                        <b>
                          {" "}
                          <input
                            type="radio"
                            name="vote"
                            value="ADMK"
                            onChange={context.onradiochange}
                          />{" "}
                          <em
                            style={{ fontSize: "20px" }}
                            className="text-dark"
                          >
                            {" "}
                            ADMK{" "}
                          </em>
                        </b>
                      </label>
                      <div className="pr-2" className="form-group mt-5">
                        <label htmlFor="voter">
                          {" "}
                          <h4> Enter Secret key to submit Vote</h4>
                        </label>
                        <input
                          style={{ width: "20rem" }}
                          type="text"
                          value={context.cast_key}
                          className="form-control"
                          placeholder="secret key...."
                          id="key"
                          onChange={context.keycheck}
                          required
                        />
                        <input type="submit" className="btn btn-info mt-2" />
                      </div>
                    </form>
                    <Footer />
                  </>
                ) : context.verify == true ? (
                  <Thankyou />
                ) : (
                  <Failed />
                )}
              </>
            );
          }}
        </ContextCreator.Consumer>
      </center>
    );
  }
}

export default CastBalot;
// constructor(props) {
//     super(props);
//     this.state = {
//         key:"",
//         candidate:"",
//         text:"",
//         verify:""
//      }

//}
// keycheck = (e)=>{this.setState({key:e.target.value}) }
// onradiochange=(e)=>{this.setState({candidate:e.target.value}) }

// castballot=(e)=>{
//     e.preventDefault()
//     let data_ = {
//         key:this.state.key,
//         candidate:this.state.candidate
//     }

//   axios({url:'http://localhost:4000/castVote',method:"POST",data:data_}).then(res=>{

//      if(res.data == 'Vote successfully Added!....'){
//          this.setState({verify:true,text:res.data})
//      }
//      else{
//         this.setState({verify:false,text:res.data})
//      }
//   })
// }
