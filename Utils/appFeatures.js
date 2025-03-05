import { ethers } from "ethers";
import web3modal from "web3modal";

import {
  BooTokenAddress,
  BooTokenABI,
  LifeTokenAddress,
  LifeTokenABI,
  SingleSwapAddress,
  SingleSwapABI,
  MultipleSwapAddress,
  MultipleSwapABI,
  IWETHAddress,
  IWETHABI
} from "../context/constants";

// CHECK IF WALLET IS CONNECTED
export const checkWalletConnected = async () => {
  try {
    if (!window.ethereum) {
      return console.log("Install Wallet");

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      const firstAccount = accounts[0];
      return firstAccount;
    }
  } catch (error) {
    console.log("Wallet Not Yet Installed");
  }
};

// CONNECT WALLET
export const connectWallet = async () => {
  try {
    if (!window.ethereum) {
      return console.log("Install Wallet");

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const firstAccount = accounts[0];
      return firstAccount;
    }
  } catch (error) {
    console.log("Something Went Wrong", error);
  }
};

// FETCH BOOTOKEN
export const fetchBooContract = ( signerOrProvider ) => new ethers.Contract( BooTokenAddress, BooTokenABI,signerOrProvider )

// BOOTOKEN CONNECTING WITH CONTRACTS
export const connectWithBooToken = async () => {
  try {
    const web3modal = new web3modal();
    const connection = web3modal.connect();
    const provider = new ethers.providers.web3Provder(connection);
    const signer = provider.getSigner();
    const contract = fetchBooContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

// FETCH LIFETOKEN
export const fetchLifeContract = ( signerOrProvider ) => new ethers.Contract( LifeTokenAddress, LifeTokenABI, signerOrProvider )

// LIFETOKEN CONNECTING WITH CONTRACTS
export const connectWithLifeToken = async () => {
  try {
    const web3modal = new web3modal();
    const connection = web3modal.connect();
    const provider = new ethers.providers.web3Provder(connection);
    const signer = provider.getSigner();
    const contract = fetchLifeContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};


// FETCH SingleSwap
export const fetchSingleSwapContract = ( signerOrProvider ) => new ethers.Contract( SingleSwapAddress, SingleSwapABI, signerOrProvider )

// SingleSwap CONNECTING WITH CONTRACTS
export const connectWithSingleSwap = async () => {
  try {
    const web3modal = new web3modal();
    const connection = web3modal.connect();
    const provider = new ethers.providers.web3Provder(connection);
    const signer = provider.getSigner();
    const contract = fetchSingleSwapContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

// // FETCH MultipleSwap
// export const fetchMultipleSwapContract = ( signerOrProvider ) => new ethers.Contract( MultipleSwapAddress, MultipleSwapABI, signerOrProvider )

// // MultipleSwap CONNECTING WITH CONTRACTS
// export const connectWithMultipleSwap = async () => {
//   try {
//     const web3modal = new web3modal();
//     const connection = web3modal.connect();
//     const provider = new ethers.providers.web3Provder(connection);
//     const signer = provider.getSigner();
//     const contract = fetchMultipleSwapContract(signer);
//     return contract;
//   } catch (error) {
//     console.log(error);
//   }
// };


// FETCH IWETH
export const fetchIWETHContract = ( signerOrProvider ) => new ethers.Contract( IWETHAddress, IWETHABI, signerOrProvider )

// IWETH CONNECTING WITH CONTRACTS
export const connectWithIWETH = async () => {
  try {
    const web3modal = new web3modal();
    const connection = web3modal.connect();
    const provider = new ethers.providers.web3Provder(connection);
    const signer = provider.getSigner();
    const contract = fetchIWETHContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};


const DAIAddress = "0xE76FbC3C71499e0C522F21ad1520825BB7Be6714";

// FETCH DAI
export const fetchDAIContract = ( signerOrProvider ) => new ethers.Contract( DAIAddress, IWETHABI, signerOrProvider )

// DAI CONNECTING WITH CONTRACTS
export const connectWithDAI = async () => {
  try {
    const web3modal = new web3modal();
    const connection = web3modal.connect();
    const provider = new ethers.providers.web3Provder(connection);
    const signer = provider.getSigner();
    const contract = fetchDAIContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};