import React, { Component } from "react";
import Layout from "../components/Layout/Layout.component";
import netlifyAuth from "../netlifyAuth.js";

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

export default Home;
