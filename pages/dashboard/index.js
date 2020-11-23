import { useContext, useEffect, useState } from "react";

import { withRouter } from "next/router";

import UserContext from "../../components/Context/UserContext.component";
import Layout from "../../components/Layout/Layout.component";

const Dashboard = () => {
  const { loggedIn, user } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      Router.push("/");
    }
  }, [user]);

  return (
    <Layout>
      <p>
        Hello, <strong>{user?.user_metadata.full_name}</strong>
      </p>
      <p>Welcome to our app</p>
    </Layout>
  );
};

export default withRouter(Dashboard);
