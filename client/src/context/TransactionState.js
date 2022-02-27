import React, { useState, useEffect } from "react";
import transactionContext from "./transactionCntxt";
import Web3 from 'web3'
import detectEthereumProvider from "@metamask/detect-provider";
import { abi } from "../abi";
import Web3Modal from 'web3modal'
import { ethers } from 'ethers'

// const provider =  detectEthereumProvider();


const ContractAddress = "0xd134e011fcb46e5e2c4204cc6d24c85b02f25058";





const TransactionState = (props) => {
  const [currentAccount, setCurrentAccount] = useState();
  const host = "http://localhost:5000";
  const causesInitial = [];
  const donationsInitial = [];
  const [causes, setCauses] = useState(causesInitial);
  const [donations, setDonations] = useState(donationsInitial);
  const [payableContractHash, setpayableContractHash] = useState(null);
  const [payableContractAbi, setpayableContractAbi] = useState(null);
  const [payableContract, setpayableContract] = useState(null);
  const [reload, shouldReload] = useState(false);
  const [DNAmount, setDNamount] = useState(false);

  


  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
  });

  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();
      if (provider) {
        setAccountListener(provider);
        provider.request({ method: "eth_requestAccounts" });
        setWeb3Api({
          provider,
          web3: new Web3(provider),
        });
      } else {
        console.error("Please install MetaMask!");
      }
    };
    loadProvider();
  }, []);

  const setAccountListener = async (provider) => {
    const wait = await provider.on("accountsChanged", (accounts) => setCurrentAccount(accounts[0]));
    console.log(currentAccount);
    
  };

 
const web3 = new Web3(web3Api.provider); 

  const ContractInstance = new web3.eth.Contract(
    abi,
    ContractAddress,
  );


  //?
  

  const Payout = async () => {
    const web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
    })
    
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const timelock = new ethers.Contract(ContractAddress, abi, signer);
    const overrides = {
      value: ethers.utils.parseEther(`${DNAmount}`)
    }
    const Pay = await timelock.getFunds(overrides)
   
      reloadEffect();
  } 

  //?  Widhdraw funstion
  const Widdraw = async () => {
    const web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
    })
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const timelock = new ethers.Contract(ContractAddress, abi, signer);
    const Pay = await timelock.withdraw()
   
      reloadEffect();
  } 

  //?time function
  const Timer = async () => {
    const web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
    })
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const timelock = new ethers.Contract(ContractAddress, abi, signer);
    const Pay = await timelock.timeLeft()
      reloadEffect();
  } 




  // ?fetch causes
  const fetchCauses = async () => {
    //! API CALL
    const response = await fetch(`${host}/api/causes/fetchallcauses`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log(json);
    setCauses(json);
  };

  //? fetch donations
  const fetchdonations = async () => {
    //! API CALL
    const response = await fetch(`${host}/api/user/fetchdonnors`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log(json);
    setDonations(json);
  };

  //? Add Transaction
  const Addtransaction = async (Name , WalletID , TransactionHash , TransactionTo , TransactionAmount) => {
    //! API CALL
    const response = await fetch(`${host}/api/user/addtransaction`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        name : Name,
      walletId : WalletID,
      transactionhash: TransactionHash,
      transactionto: TransactionTo,
      transactionammount: TransactionAmount,
    }),
    });
    const json = await response.json();
    console.log(json);
  };

  // ?connect wallet function
  
  const reloadEffect = () => shouldReload(!reload);

 
 
     

  useEffect(() => {
    fetchdonations();
    fetchCauses();

  }, []);

  

  return (
    <transactionContext.Provider
      value={{
        Timer,
        currentAccount,
        payableContractHash,
        setpayableContractHash,
        Widdraw,
        causes,
        fetchCauses,
        donations,
        fetchdonations,
        payableContractAbi  ,
         setpayableContractAbi,
         Addtransaction ,
         payableContract, setpayableContract ,
         setDNamount,
         Payout,
      }}
    >
      {props.children}
    </transactionContext.Provider>
  );
};

export default TransactionState;
