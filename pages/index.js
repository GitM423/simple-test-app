import React, { Component } from "react";

import { withRouter } from "next/router";

import Layout from "../components/Layout/Layout.component.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout>
        <div>
          <h1>This is Home</h1>
        </div>
      </Layout>
    );
  }
}

export default withRouter(Home);
