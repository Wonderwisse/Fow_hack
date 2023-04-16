import Head from "next/head";
import { useState, useEffect } from "react";
import * as fcl from "@onflow/fcl";
import AuthedState from "./homepage";
import "@/flow/config";
import home_page from "./homepage";

export default function Home() {
  const [user, setUser] = useState({ loggedIn: null });
  const [name, setName] = useState("");
  const [transactionStatus, setTransactionStatus] = useState(null); // NEW

  useEffect(() => fcl.currentUser.subscribe(setUser), []);

  const UnauthenticatedState = () => {
    return (
      <div>
        <button id="LogBtn" onClick={fcl.logIn}>
          Connect Wallet
        </button>
        <button id="SignBtn" onClick={fcl.signUp}>
          Sign Up
        </button>
      </div>
    );
  };

  const AuthedState = () => {
    return <div>{home_page()}</div>;
  };

  return (
    <div id="main">
      <Head>
        <title>AgroLink</title>
        <meta name="description" content="My first web3 app on Flow!" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <h1 id="Heading">AgroLink</h1>
      {user.loggedIn ? <AuthedState /> : <UnauthenticatedState />}
    </div>
  );
}

/*
function login() {
  return (
    <div class="login-container">
      <h1 className="login-header">Login</h1>
      <form className="login-form">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required />
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default login;
*/
