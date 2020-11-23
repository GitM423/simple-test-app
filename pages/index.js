// modules
import { useContext } from "react";

import { withRouter } from "next/router";

// components
import UserContext from "../components/Context/UserContext.component";

import Layout from "../components/Layout/Layout.component.js";

// content

const Home = () => {
  const { user, login, logout } = useContext(UserContext);
  return (
    <Layout>
      <p>Welcome to our app!</p>
      {!user ? (
        <button className="btn" onClick={login}>
          Login
        </button>
      ) : (
        <button className="btn" onClick={logout}>
          Logout
        </button>
      )}
    </Layout>
  );
};

// class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     return (
//       <Layout>
//         <div>
//           <h1>This is Home</h1>
//         </div>
//       </Layout>
//     );
//   }
// }

export default withRouter(Home);
