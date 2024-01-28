const Web3 = require('web3');
const ethers = require('ethers');
const web3 = new Web3('https://rpc.cosvm.net/');
const contractAddress = ' '; // Replace with your actual contract address
const contractABI = [  ];
const contract = new web3.eth.Contract(contractABI, contractAddress);
async function deployContract() {
    try {
        const VotingSystem = await ethers.getContractFactory("VotingSystem");

  
        const VotingSystem_ = await VotingSystem.deploy();
        console.log("Contract deployed at address:", VotingSystem_.address);

    
        await VotingSystem_.initialize(["Mark", "Mike", "Henry", "Rock"], 90);

    
        await vote(VotingSystem_);

    } catch (error) {
        console.error('Error during contract deployment:', error);
    }
}

// Voting function
async function vote(votingSystemContract) {
    try {
        console.log('Voting process completed successfully.');

    } catch (error) {
        console.error('Error during voting:', error);
    }
}

// Uncomment the line below to execute the deployContract function
deployContract();
