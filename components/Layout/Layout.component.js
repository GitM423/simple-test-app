import React, { Component } from "react";
import Head from "next/head";

// Components
import Header from "./Header.component";

class Layout extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Test App</title>
        </Head>
        <Header />
        {this.props.children}
      </>
    );
  }
}

export default Layout;
