import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Button,
  Card,
  Checkbox,
  Divider,
  Form,
  Label,
  Message,
  Image,
  Icon,
  Container,
  Popup
} from "semantic-ui-react";
import "../../src/styles.css";

const mapStateToProps = (state) => {
  return {
    languageFlag: state.reducers.languageFlag,
    apiData: state.apiReducer.apiData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLanguageChange: () => {
      dispatch({ type: "Arabic" });
    },

    handleContactUs: () => {
      dispatch({ type: "REQUEST_API" });
    }
  };
};

class Navbar extends Component {
  // handleLanguageChange() {
  //   return;
  // }

  render() {
    let navAlign = this.props.languageFlag ? "initial" : "row-reverse";

    return (
      <div>
        <div className="navbarContainer" style={{ flexDirection: navAlign }}>
          <Image
            src="https://onlineuat.aecb.gov.ae/public/img/aecb_logo.svg"
            size="small"
          />
          <div className="navbarContainer" style={{ flexDirection: navAlign }}>
            {/* <h1>api data {this.props.apiData}</h1> */}

            <Button
              size="mini"
              onClick={this.props.handleContactUs}
              basic
              color="yellow"
            >
              {this.props.languageFlag ? "Contact Us" : "اتصل بنا"}
              <Icon name="angle right"></Icon>
            </Button>
            {/* <a className="linkText" onClick={()=>this.handleLanguageChange}>English</a> */}
            <label
              className="linkText"
              onClick={this.props.handleLanguageChange}
            >
              {this.props.languageFlag ? "الإنكليزية" : "English"}
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
