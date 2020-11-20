import React, { Component } from "react";

import UserContext from "../../components/Context/UserContext.component";
import Layout from "../../components/Layout/Layout.component";
// import UserContext from "../components/UserContext";

class User extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { user, login, logout } = this.context;

    return (
      <Layout>
        <p>
          Hello, <strong>{user}</strong>
        </p>
        <p>Welcome to our app</p>
        <button className="btn" onClick={login}>
          Login
        </button>
        <button className="btn" onClick={logout}>
          Logout
        </button>
      </Layout>
    );
  }
}

export default User;
