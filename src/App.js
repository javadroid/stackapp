import logo from "./logo.svg";
import "./App.css";
import * as MicroStacks from "@micro-stacks/react";
import React from "react";
import { WalletConnectButton } from "./components/WalletConnectButton";
import PayContract from "./components/PayContract";

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <h2>React + Stacks.js 👋</h2>
      <MicroStacks.ClientProvider
        appName="My sick app"
        appIconUrl="APP_ICON.png"
        network="testnet"
      >
        <WalletConnectButton />
        <PayContract/>
      </MicroStacks.ClientProvider>
    </header>
  </div>
  );
}

export default App;
