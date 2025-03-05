import React, { useState, useEffect, createContext } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

export const SwapTokenContext = createContext();

export const SwapTokenContextProvider = ({ children }) => {
  const swap = "Welcome To My Swap Page";

  // STATE MANAGEMENT
  const [account, setAccount] = useState("");
  const [ether, setEther] = useState("");
  const [networkConnect, setNetworkConnect] = useState("");
  const [weth9, setWeth9] = useState("");
  const [dai, setDai] = useState("");
  const [tokenData, setTokenData] = useState("");

  // FETCH WALLET DATA
  const fetchData = async () => {
    try {
      if (typeof window.ethereum === "undefined") {
        console.log("MetaMask is not installed!");
        return;
      }

      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      if (!connection) throw new Error("No wallet connection found");

      const provider = new ethers.BrowserProvider(connection); // ethers v6+
      const signer = await provider.getSigner();
      const userAccount = await signer.getAddress();
      setAccount(userAccount);

      // Ensure provider is correctly handling requests
      const balance = await provider.getBalance(userAccount);
      if (!balance) throw new Error("Failed to fetch balance");

      const ethValue = ethers.formatEther(balance); // Correct conversion
      setEther(ethValue);

      console.log("Connected:", userAccount);
      console.log("Balance:", ethValue);
    } catch (error) {
      console.error("Wallet connection error:", error);
    }
  };

  // USE EFFECT
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SwapTokenContext.Provider
      value={{ swap, account, ether, networkConnect, weth9, dai, tokenData, fetchData }}
    >
      {children}
    </SwapTokenContext.Provider>
  );
};
