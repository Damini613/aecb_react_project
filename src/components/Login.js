import React, { Component } from "react";

import history from "../history";
import { connect } from "react-redux";
// import  withRouter from "react-router";

import { useNavigate } from "react-router-dom";

import {
  Button,
  Card,
  Checkbox,
  Container,
  Divider,
  Form,
  Label,
  Message
} from "semantic-ui-react";
import "../../src/styles.css";

import Navbar from "./Navbar";

const mapStateToProps = (state) => {
  return {
    languageFlag: state.reducers.languageFlag
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dataToDashboard: (name, props) => {
      props.navigate("/dashboard");

      // event.preventDefault();
      dispatch({ type: "login_data", name: name });
    }
  };
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      isDisabled: true
    };
  }

  handleUsername = (event) => {
    this.setState(
      {
        name: event.target.value
      },
      () => {
        this.state.name !== "" && this.state.password !== ""
          ? this.setState({ isDisabled: false })
          : this.setState({ isDisabled: true });
      }
    );
  };

  handlePassword = (event) => {
    this.setState(
      {
        password: event.target.value
      },
      () => {
        this.state.name !== "" && this.state.password !== ""
          ? this.setState({ isDisabled: false })
          : this.setState({ isDisabled: true });
      }
    );
  };

  submitLoginInfo = (event) => {
    // return (
    //   <div>
    // alert(`${this.state.name} and my pass is ${this.state.password}`);
    //     {/* <Link to="/dashboard"> </Link> */}
    //     {event.preventDefault()}
    //   </div>
    // );
    // console.log("form submitted");

    // history.push("/dashboard");
    // window.history.pushState({state: "", title: "", urlPath: "/dashboard"});
    // console.log(history);
    this.props.navigate("/dashboard");

    event.preventDefault();
  };

  //  his= () => useHistory;

  // goToDashboard(e) {
  //   history.push("/dashboard");
  // }

  render() {
    const languageFlag = this.props.languageFlag;

    let title = languageFlag ? "Login" : "تسجيل الدخول";

    let textalign = languageFlag ? "left" : "right";

    let username = languageFlag ? "username" : "اسم المستخدم";
    let password = languageFlag ? "password" : "شعار";

    return (
      <div>
        <Container textAlign={textalign} className="containeInfo">
          {/* <Navbar /> */}
          {/* <Form className="formStyle" onSubmit={(e) => this.submitLoginInfo(e)}> */}
          <Form className="formStyle">
            {/* <Message className="messageBackground">Login</Message> */}
            {/* <Label className="labelBackground">Login</Label> */}
            <Navbar />
            <h1 className="loginText">{title}</h1>
            <Divider />
            <Form.Field>
              <label className="labelText">{username}</label>
              <input
                style={{ textAlign: textalign }}
                value={this.state.name}
                onChange={this.handleUsername}
                placeholder={username}
              />
            </Form.Field>
            <Form.Field>
              <label className="labelText">{password}</label>
              <input
                style={{ textAlign: textalign }}
                value={this.state.password}
                onChange={this.handlePassword}
                placeholder={password}
              />
            </Form.Field>
            {/* <Link to="/dashboard"> */}
            <Button
              onClick={() =>
                this.props.dataToDashboard(this.state.name, this.props)
              }
              disabled={this.state.isDisabled}
              type="submit"
            >
              {title}
            </Button>
            {/* <Button active='{...this.state.valid}' type="submit">Login</Button> */}
            {/* </Link> */}
          </Form>
        </Container>
      </div>
    );
  }
}

function WithNavigate(props) {
  let useNav = useNavigate();

  return <Login {...props} navigate={useNav} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(WithNavigate);
