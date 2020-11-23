// modules

import { useContext } from "react";
import Link from "next/link";

// components

import UserContext from "../../components/Context/UserContext.component";

// content

const Header = () => {
  const { user, login, logout } = useContext(UserContext);
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/test">
              <a>Test</a>
            </Link>
          </li>
          <li>
            <Link href="/auth">
              <a>Auth</a>
            </Link>
          </li>
          <li>
            <Link href="/user">
              <a>User</a>
            </Link>
          </li>
        </ul>
      </nav>

      {!user ? (
        <button className="btn" onClick={login}>
          Login
        </button>
      ) : (
        <button className="btn" onClick={logout}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
