import { useState, useEffect } from "react";
import * as fcl from "@onflow/fcl";
import "@/flow/config";
import { useRouter } from "next/router";
import Link from "next/link";

const AppBar = () => {
  const [user, setUser] = useState({ loggedIn: null });
  const [name, setName] = useState("");
  const [transactionStatus, setTransactionStatus] = useState(null); // NEW

  useEffect(() => fcl.currentUser.subscribe(setUser), []);
  return (
    <header className="header">
      <ul className="navbar_ul">
        <li>
          <a href="#" className="home h">
            HOME
          </a>
        </li>
        <li>
          <Link  href="purchases"  className="transaction h">Transaction</Link>
            
        </li>
        <li>
          <div class="search-bar-container">
            <input type="text" class="search-bar-input" placeholder="search" />
          </div>
        </li>
        <li>
          <a href="loginpage" className="connect-wallet h">
            Connect Wallet
          </a>
        </li>
        <li>
          <a href="#" className="profile">
            <img src="/profilelogo.svg" id="profile-pic" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/cart.svg" id="cart-logo" />
          </a>
        </li>
        <li>
          <button onClick={fcl.unauthenticate} className="logout-button">
            Log Out
          </button>
        </li>
      </ul>
    </header>
  );
};

export default AppBar;
