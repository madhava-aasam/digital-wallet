import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DigitalWalletService from "./services/DigitalWalletService";
import AddTransaction from "./components/AddTransaction";
import TransactionsList from "./components/TransactionsList";
import Login from './components/Login';
import { useState } from "react";

function App() {
  const [balance, setBalance] = useState('0.00');
  const [userName, setUserName] = useState('');

  const getUserInfo = async () => {
    const resp = await DigitalWalletService.getUserInfo();
    sessionStorage.setItem('name', resp.data.user.name);
    sessionStorage.setItem('balance', resp.data.user.wallet_balance )
    setUserName(resp.data.user.name)
    setBalance(resp.data.user.wallet_balance)
  }

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          Digital Wallet
        </a>
        <div className="navbar-nav mr-auto">
        <li className="nav-item">
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              
              New Transaction
            </Link>
          </li>
         <li className="nav-item">
            <Link to={"/transactions"} className="nav-link">
              Wallet Transactions
            </Link>
          </li>
        </div>
        <div style={{color: '#ffffff', fontSize: "1.6rem", display:"flex", justifyContent:"space-between"}}>
          User name: <span style={{marginRight: "3rem"}}> {sessionStorage.getItem('name')}</span>
          Wallet balance: <span> {sessionStorage.getItem('balance')}</span>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Login setUser={getUserInfo} />} />
          <Route path="/login" element={<Login setUser={getUserInfo}/>} />
          <Route path="/transactions" element={<TransactionsList/>} />
          <Route path="/add" element={<AddTransaction updateUserInfo= {getUserInfo}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
