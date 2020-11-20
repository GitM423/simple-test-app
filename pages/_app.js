import { useEffect, useState } from "react";

import App from "next/app";
import Router from "next/router";
import UserContext from "../components/Context/UserContext.component.js";
import netlifyAuth from "../components/Auth/NetlifyAuth.component.js";

const MyApp = ({ Component, pageProps }) => {
  let [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated);
  let [user, setUser] = useState(null);

  useEffect(() => {
    netlifyAuth.initialize((user) => {
      setLoggedIn(!!user);
      setUser(user);
    });
  }, [loggedIn]);

  let login = () => {
    netlifyAuth.authenticate((user) => {
      setLoggedIn(!!user);
      setUser(user);
      netlifyAuth.closeModal();
    });
  };

  let logout = () => {
    netlifyAuth.signout(() => {
      setLoggedIn(false);
      setUser(null);
    });
  };

  return (
    <UserContext.Provider
      value={{
        user: user,
        login: login,
        logout: logout,
      }}
    >
      <Component {...pageProps} />
    </UserContext.Provider>
  );
};

export default MyApp;
