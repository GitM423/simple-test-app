import { useContext, useEffect, useState } from "react";

import { withRouter } from "next/router";

import UserContext from "../../components/Context/UserContext.component";
import Layout from "../../components/Layout/Layout.component";

const Dashboard = async () => {
  const { loggedIn, user } = useContext(UserContext);

  await useEffect(() => {
    if (!loggedIn) {
      Router.push("/");
    }
  }, [loggedIn]);

  return (
    <Layout>
      <p>
        Hello, <strong>{loggedIn && user?.user_metadata.full_name}</strong>
      </p>
      <p>Welcome to our app</p>
    </Layout>
  );
};

export default withRouter(Dashboard);
