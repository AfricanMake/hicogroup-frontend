import React, { Component } from "react";
import HelloWorldService from "../api/hello-world/HelloWorldService.js";

class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "user",
    };
    
    
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleChange(event) {
   
    this.setState({
      [event.target.name]: event.target.value,
    });
  }


  loginClicked() {

    HelloWorldService.executeHelloWorldService(
      this.state.username
    )
      .then((response) => {
       
        console.log(response.data)

         this.props.history.push(`/welcome/${this.state.username}`);
      })
      .catch(() => {
        this.setState({ showSuccessMessage: false });
        this.setState({ hasLoginFailed: true });
      });
  }
  render() {
    return (
      <div>
        <h1>Login</h1>
        <div className="container">
     
          {this.state.hasLoginFailed && (
            <div className="alert alert-warning">An error occurred!</div>
          )}
          {this.state.showSuccessMessage && <div>Login Sucessful</div>}
          
          User Name:{" "}
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
         <br/>
         <br/>
          <button className="btn btn-success" onClick={this.loginClicked}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default LoginComponent;