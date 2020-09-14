import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { register } from "./../serviceWorker";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"), //minimum 5 characters
    name: Joi.string().required().label("Name"),
  };

  doSubmit = () => {
    //call server
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Resgister")}
        </form>{" "}
      </div>
    );
  }
}

export default RegisterForm;
