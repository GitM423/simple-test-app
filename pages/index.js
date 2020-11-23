// modules
import { useContext } from "react";

import { withRouter } from "next/router";

// components
import UserContext from "../components/Context/UserContext.component";

import Layout from "../components/Layout/Layout.component.js";

// content

const Home = () => {
  // const { user, login, logout } = useContext(UserContext);
  return (
    <Layout>
      <p>Welcome to our app!</p>
      {/* {!user ? (
        <button className="btn" onClick={login}>
          Login
        </button>
      ) : (
        <button className="btn" onClick={logout}>
          Logout
        </button>
      )} */}
    </Layout>
  );
};

export default withRouter(Home);
