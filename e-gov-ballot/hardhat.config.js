/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.11",
  defaultNetwork: "cosvm",
  networks: {
    hardhat: {},
    cosvm: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
      gas: 210,
      gasPrice: 4779,
    },
  },
};