import React, { Component } from "react";

import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Checkbox,
  Divider,
  Form,
  Label,
  Message,
  Input,
  Container
} from "semantic-ui-react";
import "../../src/styles.css";
import { connect } from "react-redux";

import Navbar from "./Navbar";

const mapStateToProps = (state) => {
  return {
    languageFlag: state.reducers.languageFlag,
    uname: state.loginReducers.name
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLanguageChange: () => {
      dispatch({ type: "Arabic" });
    }
  };
};

//*********************** */

//  const languageFlag = true;

class Dashboard extends Component {
  dashboardSubmit = () => {
    alert(`form submitted ${this.props.uname}`);
  };

  render() {
    // console.log(this.props.uname);

    const languageFlag = this.props.languageFlag;

    let title = languageFlag ? "Dashboard" : "لوحه القياده";

    let textalign = languageFlag ? "left" : "right";

    let username = languageFlag ? "username" : "اسم المستخدم";
    let mobilenumber = languageFlag ? "Mobile Number" : "رقم الهاتف المحمول";

    let titleLogin = languageFlag ? "Login" : "تسجيل الدخول";
    let submit = languageFlag ? "Submit" : "إرسال";
    return (
      <div>
        {/* <Card> */}
        <Container textAlign={textalign} className="containeInfo">
          {/* <Navbar /> */}
          {/* <Form className="formStyle" onSubmit={this.dashboardSubmit}> */}
          <Form className="formStyle">
            {/* <Message className="messageBackground">Login</Message> */}
            {/* <Label className="labelBackground">Login</Label> */}
            <Navbar />
            <h1 className="loginText">{title}</h1>
            <Divider />
            <Form.Field>
              <label className="labelText">
                {username} : {this.props.uname}
              </label>
            </Form.Field>
            <Form.Field>
              <label className="labelText">{mobilenumber}</label>
              <div>
                <Input type="text" placeholder="XXXX">
                  <Label basic content="971"></Label>
                  <input style={{ textAlign: textalign }} />
                </Input>
              </div>
            </Form.Field>
            <Button onClick={this.dashboardSubmit} type="submit">
              {submit}
            </Button>
            <Link to="/">{titleLogin}</Link>
          </Form>
        </Container>
        {/* </Card> */}
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
