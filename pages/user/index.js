import { useContext } from "react";

import { withRouter } from "next/router";

import UserContext from "../../components/Context/UserContext.component";
import Layout from "../../components/Layout/Layout.component";
// import UserContext from "../components/UserContext";

const User = () => {
  const { user, login, logout } = useContext(UserContext);
  console.log(user);
  return (
    <Layout>
      <p>
        Hello, <strong>{user?.user_metadata.full_name}</strong>
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
};

export default withRouter(User);
