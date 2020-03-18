import React from "react";
import SimpleForm from "../../components/SimpleForm";
import API from "../../API";

class Login extends React.Component {
  submit = values => {
    // print the form values to the console
    API.sendToken(values.email_s);
  };
  render() {
    return <SimpleForm onSubmit={this.submit} />;
  }
}
export default Login;
