import { useEffect, useState } from "react";

import { withRouter } from "next/router";

import netlifyAuth from "../../components/Auth/NetlifyAuth.component.js";
import Layout from "../../components/Layout/Layout.component.js";

const Auth = () => {
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
    <Layout>
      {loggedIn ? (
        <div>
          You are logged in!
          {user && <>Welcome {user?.user_metadata.full_name}!</>}
          <br />
          <button onClick={logout}>Log out here.</button>
        </div>
      ) : (
        <button onClick={login}>Log in here.</button>
      )}
    </Layout>
  );
};

export default withRouter(Auth);
