import React, { Component } from "react";
import Link from "next/link";

class Header extends Component {
  render() {
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
      </header>
    );
  }
}

export default Header;
