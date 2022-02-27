import React, { useState, useEffect } from "react";
import transactionContext from "./transactionCntxt";
import Web3 from 'web3'
import detectEthereumProvider from "@metamask/detect-provider";
import { abi } from "../abi";



const ContractAddress = "0x71714bAcfDc83A93A96f5113A705E8a934CC161e";

const ContractInstance = new Web3.eth.Contract(
  abi,
  ContractAddress
);
const provider = await detectEthereumProvider();



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

  // const [web3Api, setWeb3Api] = useState({
  //   provider: null,
  //   web3: null,
  //   contract: null,
  // });

  const web3 = new Web3(provider);

  //?

  const pay = async() => {
     await ContractInstance.getFunds({
       from: currentAccount,
       value: web3.utils.toWei({DNAmount},"ether"),
       
     });

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

  const setAccountListener = async (provider) => {
    const wait = await provider.on("accountsChanged", (accounts) => setCurrentAccount(accounts[0]));
    console.log(currentAccount);
  };
 
     
  const connectWallet = async () => {
    const provider = await detectEthereumProvider();
    // const contract = await loadContract("Funder", provider);
    if (provider) {
      setAccountListener(provider);
      provider.request({ method: "eth_requestAccounts" });
     
    } else {
      console.error("Please install MetaMask!");
    }
}





  // const disconnectWallet = () => {
  //   setCurrentAccount(null);
  // };
  useEffect(() => {
    fetchdonations();
    fetchCauses();
  }, []);

  

  return (
    <transactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        payableContractHash,
        setpayableContractHash,
        // disconnectWallet,
        causes,
        fetchCauses,
        donations,
        fetchdonations,
        payableContractAbi  ,
         setpayableContractAbi,
         Addtransaction ,
         payableContract, setpayableContract ,
         setDNamount,
         pay,
      }}
    >
      {props.children}
    </transactionContext.Provider>
  );
};

export default TransactionState;
