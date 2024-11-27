require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9", // Ensure this matches your contracts' version
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545", // Local Hardhat Node URL
    },
  },
};

