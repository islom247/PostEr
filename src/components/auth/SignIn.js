import React, { Component } from "react";
import {connect} from "react-redux";
import {signIn} from "../../store/actions/authActions";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    event.target.reset();
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white" autoComplete="off">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Log In</button>
          </div>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapDispatchToProps)(SignIn);
