import { useState, useEffect } from 'react';
import {ethers} from 'ethers';
import {contractAbi, contractAddress} from './Constant/constant';
import Login from "./components/Login";
import Finished from './components/Finished';
import Connected from './components/Connected';
import './App.css';

function App() {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [votingStatus, setVotingStatus] = useState(true);
  const [remainingTime, setremainingTime] = useState('');
  const [candidates, setCandidates] = useState([]);
  const [number, setNumber] = useState('');
  const [CanVote, setCanVote] = useState(true);


  useEffect( () => {
    getCandidates();
    getRemainingTime();
    getCurrentStatus();
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
    }

    return() => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      }
    }
  });
  async function verifyVoter(_voterId, _contractId, _passwordHash, _privateKey) {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
  
      // Replace 'contractAddress' with the actual contract address
      const contractAddress = "0x123";
      const contractInstance = new ethers.Contract(contractAddress, contractAbi, signer);
  
      // Get the voter details from the smart contract
      const voterDetails = await contractInstance.voterDetails(signer.getAddress());
  
      // Verify the voter details
      const isVoterVerified = await contractInstance.verifyVoter(
        voterDetails.voterId,
        voterDetails.contractId,
        voterDetails.passwordHash,
        voterDetails.privateKey
      );
  
      console.log("Is Voter Verified:", isVoterVerified);
  
    } catch (error) {
      console.error("Error verifying voter:", error);
    }
  }
  

  async function castVoteAndPay(encryptedVote) {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
  
      // Replace 'contractAddress' with the actual contract address
      const contractAddress = "0xf84ad5D854b997B1337266d5b8653211ab5ecC4b";
      const contractInstance = new ethers.Contract(contractAddress, contractAbi, signer);
  
      // Specify the amount of ether for payment
      const tokenAmount = ethers.utils.parseEther("0.5");
      const tokenContractAbi = contractAbi;
  
      // Perform token transfer
      const tokenContractAddress = "0xf84ad5D854b997B1337266d5b8653211ab5ecC4b"; // Replace with the actual token contract address
      const tokenContract = new ethers.Contract(tokenContractAddress, tokenContractAbi, signer);
      const transferTx = await tokenContract.transfer(contractAddress, tokenAmount);
      await transferTx.wait();
  
      // Cast encrypted vote
      const voteTx = await contractInstance.castVoteAndPay(encryptedVote);
      await voteTx.wait();
  
      // Check if the vote was successful
      const canVoteStatus = await contractInstance.canVote();
      console.log("Can Vote Status:", canVoteStatus);
  
    } catch (error) {
      console.error("Error casting vote and paying:", error);
    }
  }
  

  async function canVote() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract (
        contractAddress, contractAbi, signer
      );
      const voteStatus = await contractInstance.voters(await signer.getAddress());
      setCanVote(voteStatus);

  }

  async function getCandidates() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract (
        contractAddress, contractAbi, signer
      );
      const candidatesList = await contractInstance.getAllVotesOfCandiates();
      const formattedCandidates = candidatesList.map((candidate, index) => {
        return {
          index: index,
          name: candidate.name,
          voteCount: candidate.voteCount.toNumber()
        }
      });
      setCandidates(formattedCandidates);
  }


  async function getCurrentStatus() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract (
        contractAddress, contractAbi, signer
      );
      const status = await contractInstance.getVotingStatus();
      console.log(status);
      setVotingStatus(status);
  }

  async function getRemainingTime() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract (
        contractAddress, contractAbi, signer
      );
      const time = await contractInstance.getRemainingTime();
      setremainingTime(parseInt(time, 16));
  }

  function handleAccountsChanged(accounts) {
    if (accounts.length > 0 && account !== accounts[0]) {
      setAccount(accounts[0]);
      canVote();
    } else {
      setIsConnected(false);
      setAccount(null);
    }
  }

  async function connectToMetamask() {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        console.log("Metamask Connected : " + address);
        setIsConnected(true);
        canVote();
      } catch (err) {
        console.error(err);
      }
    } else {
      console.error("Metamask is not detected in the browser")
    }
  }

  async function handleNumberChange(e) {
    setNumber(e.target.value);
  }

  return (
    <div className="App">
      { votingStatus ? (isConnected ? (<Connected 
                      account = {account}
                      candidates = {candidates}
                      remainingTime = {remainingTime}
                      number= {number}
                      handleNumberChange = {handleNumberChange}
                      //voteFunction = {vote}
                      showButton = {CanVote}/>) 
                      
                      : 
                      
                      (<Login connectWallet = {connectToMetamask}/>)) : (<Finished />)}
      
    </div>
  );



}





export default App;
