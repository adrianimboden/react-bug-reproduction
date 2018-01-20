import React, { Component } from "react";
import "./App.css";

import { InputGroup, FormControl, Form, Button } from "react-bootstrap";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      after_submit: false,
      email: "",
      token: ""
    };
    this.on_click_login = this.on_click_login.bind(this);
    this.on_email_change = this.on_email_change.bind(this);
    this.on_verify_token = this.on_verify_token.bind(this);
  }
  on_click_login(e) {
    this.setState((_prev, _props) => {
      return { after_submit: true };
    });
    e.preventDefault();
  }
  on_email_change(evt) {
    let email = evt.target.value;
    this.setState((_prev, _props) => {
      return { email: email };
    });
  }
  on_verify_token(e) {
    e.preventDefault();
  }
  render() {
    const state_logged_out = (
      <Form onSubmit={this.on_click_login}>
        <InputGroup>
          <InputGroup.Addon>@</InputGroup.Addon>
          <FormControl
            type="email"
            className="mail_input"
            onChange={this.on_email_change}
            value={this.state.email}
          />
        </InputGroup>
      </Form>
    );

    const state_sent_login_token = (
      <Form onSubmit={this.on_verify_token}>
        <InputGroup>
          <InputGroup.Addon>@</InputGroup.Addon>
          <FormControl disabled type="text" value={this.state.email} />
        </InputGroup>
        <InputGroup>
          <InputGroup.Addon>Token</InputGroup.Addon>
          <FormControl
            type="text"
            className="token_input"
            value={this.state.token}
          />
        </InputGroup>
      </Form>
    );

    return this.state.after_submit ? state_sent_login_token : state_logged_out;
  }
}

export default App;
