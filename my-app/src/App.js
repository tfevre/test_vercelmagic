import logo from './logo.svg';
import './App.css';
import { Magic } from "magic-sdk"
import { ethers } from "ethers";
import { useState } from 'react'




function App() {
  const [address, setAddress] = useState("");

  const test = async () => {
    // polgyon mainnet
    const magic = new Magic('pk_live_8F0ADCBF77CB2612', {
      network: {
          rpcUrl: 'https://matic-mumbai.chainstacklabs.com', // or https://matic-mumbai.chainstacklabs.com for testnet
          chainId: 80001 // or 80001 for polygon testnet
      }
    });


    const provider = await magic.wallet.getProvider();


    const web3Provider = new ethers.providers.Web3Provider(provider);


    const accounts = await magic.wallet.connectWithUI();
    setAddress(accounts[0]);
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={test}>{address !== "" ? address : "Connect Wallet"}</button>
      </header>
    </div>
  );
}

export default App;
