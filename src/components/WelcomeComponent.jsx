import React, { Component } from "react";
import HelloWorldService from "../api/hello-world/HelloWorldService.js";

class WelcomeComponent extends Component {
  constructor(props) {
    super(props);
    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
    this.state = {
      welcomeMessage: "",
    };
    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  render() {
    return (
      <>
        <h1></h1>
        <div className="container">
          {this.props.match.params.name}, says hello to the world! <br />
        </div>
        <br />
        <div className="container">
          
          <br />
          {/* <button
            onClick={this.retrieveWelcomeMessage}
            className="btn btn-success"
          >
            Get Welcome Message
          </button> */}
        </div>
        <div className="container">{this.state.welcomeMessage}</div>
      </>
    );
  }

  retrieveWelcomeMessage() {
   
    HelloWorldService.executeHelloWorldPathVariableService(
      this.props.match.params.name
    )
      .then((response) => this.handleSuccessfulResponse(response))
      .catch((error) => this.handleError(error));
  }

  handleSuccessfulResponse(response) {
    console.log(response);
    this.setState({ welcomeMessage: response.data.message });
  }

  handleError(error) {
    console.log(error.response);
    let errorMessage = "";
    if (error.message) errorMessage += error.message;

    if (error.response && error.response.data) {
      errorMessage += error.response.data.message;
    }
    this.setState({ welcomeMessage: errorMessage });
  }
}

export default WelcomeComponent;