import { useContext } from "react";

import UserContext from "../../components/Context/UserContext.component";
import Layout from "../../components/Layout/Layout.component";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <Layout>
      <p>
        Hello, <strong>{user?.user_metadata.full_name}</strong>
      </p>
      <p>Welcome to our app</p>
    </Layout>
  );
};

export default Dashboard;
