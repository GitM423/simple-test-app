import { useContext } from "react";

import { withRouter } from "next/router";

import UserContext from "../../components/Context/UserContext.component";
import Layout from "../../components/Layout/Layout.component";

const Dashboard = (props) => {
  return (
    <Layout>
      <p>
        Hello, <strong>{props.user.user_metadata.full_name}</strong>
      </p>
      <p>Welcome to our app</p>
    </Layout>
  );
};

export async function getStaticProps() {
  const { user } = useContext(UserContext);
  if (!user) {
    Router.push("/");
  } else {
    return { props: { user } };
  }
}

export default withRouter(Dashboard);
