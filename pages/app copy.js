import { useEffect, useState } from "react";

import App from "next/app";
import Router from "next/router";
import UserContext from "../components/Context/UserContext.component.js";
import netlifyAuth from "../components/Auth/NetlifyAuth.component.js";

export default class MyApp extends App {
  state = {
    loggedIn: netlifyAuth.isAuthenticated,
    user: null,
  };

  
  let [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated);
  let [user, setUser] = useState(null);

  useEffect(() => {
    netlifyAuth.initialize((user) => {
      setLoggedIn(!!user);
      setUser(user);
    });
  }, [loggedIn]);

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
      <UserContext.Provider
        value={{
          user: this.state.user,
          login: this.login,
          logout: this.logout,
        }}
      >
        <Component {...pageProps} />
      </UserContext.Provider>
    );
  }
}
