import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3Modal from "web3modal";
import { ethers } from "ethers";

const web3Modal = new Web3Modal({
  network: "goerli", 
  providerOptions: {} 
});

function App() {
  
  useEffect(() => {
    async function init() {
      const instance = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(instance);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      const balance = await provider.getBalance(address);
      const ensAddress = await provider.lookupAddress(address);
      
      console.log(ethers);
      console.log(instance);
      console.log(address);
      console.log(balance, `${ethers.utils.formatEther(balance)}ETH`);
      console.log(ensAddress);
      
    };

    init();
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
