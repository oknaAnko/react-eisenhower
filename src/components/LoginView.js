import React, { Component } from "react";

import { Button, FormGroup, ControlGroup, InputGroup } from "@blueprintjs/core";
import "../styles/LoginView.css";

class LoginView extends Component {
  state = {
    username: "",
    password: "",
    loginConfirmation: "",
    errors: {
      username: false,
      password: false,
    },
  };

  errorMessageFor = {
    username: "Nazwa użytkownika nie może zawierać spacji.",
    password:
      "Hasło musi mieć min. 5 znaków.",
    emptySpace: "To pole nie może być puste.",
  };


  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };


  validateLoginForm = () => {
    const { password, username } = this.state;

    let usernameIsOk = false;
    let passwordIsOk = false;
    let isCorrect = false;

    if (username.indexOf(" ") === -1 && username !== "") usernameIsOk = true;
    if (password.length >= 5 && password !== "") passwordIsOk = true;
    if (usernameIsOk && passwordIsOk) isCorrect = true;
    return {
      usernameIsOk,
      passwordIsOk,
      isCorrect,
    };
  };


  displayErrorMessageForUsername = () => {
    const { errors, username } = this.state;
    if (errors.username) {
      if (username === "") {
        return this.errorMessageFor.emptySpace
      } else {
        return this.errorMessageFor.username
      }
    } else { return null }
  };

  displayErrorMessageForPassword = () => {
    const { errors, password } = this.state;
    if (errors.password) {
      if (password === "") {
        return this.errorMessageFor.emptySpace
      } else {
        return this.errorMessageFor.password
      }
    } else { return null }
  };


  handleLoginClick = (e) => {
    e.preventDefault();
    const validationResult = this.validateLoginForm();
    console.log(validationResult);
    if (validationResult.isCorrect) {
      this.setState({
        username: "",
        password: "",
        loginConfirmation: "Zostałeś poprawnie zalogowany",
        errors: {
          username: false,
          password: false,
        },
      });
    } else {
      this.setState({
        errors: {
          username: !validationResult.usernameIsOk,
          password: !validationResult.passwordIsOk,
        },
      });
    }
  };

  handleLogoutClick = () => {
    this.setState({
      loginConfirmation: "",
    })
  };


  logoutButton = () => (
    <div>
      <div className="login-confirmation">
        <span>{this.state.loginConfirmation}</span>
      </div>
      <Button
        type="button"
        className="bp3-button bp3-intent-primary"
        icon="log-out"
        onClick={this.handleLogoutClick}
      >
        Wyloguj
    </Button>
    </div>
  );

  loginButton = () => (
    <Button
      type="submit"
      className="bp3-button bp3-intent-primary"
      icon="log-in"
    >
      Zaloguj
    </Button>
  );


  render() {
    const { username, password, loginConfirmation } = this.state;

    return (
      <div className="login-form">
        <form className="form" onSubmit={this.handleLoginClick}>
          <FormGroup
            label="Nazwa użytkownika lub adres e-mail *"
            labelFor="username"
          >
            <ControlGroup fill={false} vertical={false}>
              <InputGroup
                id="username"
                placeholder="wpisz"
                value={username}
                onChange={this.handleUsernameChange}
              />

              <div className="error-message">
                <span>
                  {this.displayErrorMessageForUsername()}
                </span>
              </div>
            </ControlGroup>
          </FormGroup>
          <FormGroup label="Hasło *" labelFor="password">
            <ControlGroup fill={false} vertical={false}>
              <InputGroup
                type="password"
                id="password"
                placeholder="wpisz"
                value={password}
                onChange={this.handlePasswordChange}
              />
              <div className="error-message">
                <span>
                  {this.displayErrorMessageForPassword()}
                </span>
              </div>
            </ControlGroup>
          </FormGroup>

          {Boolean(loginConfirmation)
            ? this.logoutButton()
            : this.loginButton()
          }

        </form>
      </div>
    );
  }
}

export default LoginView;
