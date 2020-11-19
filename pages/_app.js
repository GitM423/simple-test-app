import React from "react";
import App, { Container } from "next/app";
import Router from "next/router";
import UserContext from "../components/Context/UserContext.component.js";
import netlifyAuth from "../components/Auth/NetlifyAuth.component.js";

export default class MyApp extends App {
  state = {
    loggedIn: netlifyAuth.isAuthenticated,
    user: null,
  };

  login = () => {
    netlifyAuth.authenticate((user) => {
      this.setState({
        loggedIn: !!user,
        user: user,
      });

      netlifyAuth.closeModal();
    });
  };

  logout = () => {
    netlifyAuth.signout(() => {
      this.setState({
        loggedIn: false,
        user: null,
      });
    });
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <UserContext.Provider
          value={{
            user: this.state.user,
            login: this.login,
            logout: this.logout,
          }}
        >
          <Component {...pageProps} />
        </UserContext.Provider>
      </Container>
    );
  }
}
