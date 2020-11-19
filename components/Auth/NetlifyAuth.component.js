import { useEffect, useState } from "react";
import netlifyAuth from "../netlifyAuth.js";

let [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated);

useEffect(() => {
  netlifyAuth.initialize((user) => {
    setLoggedIn(!!user);
  });
}, [loggedIn]);
