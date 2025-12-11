require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",   // Geth v1.13 compatible
  networks: {
    Bankchain: {
      url: "http://127.0.0.1:8545",
      chainId: 1221,
      accounts: [process.env.PRIVATE_KEY] // private key
    }
  }
};
