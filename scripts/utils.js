const hre = require("hardhat");
const { ethers } = hre;

// Convert string → bytes32
function getAccountId(str) {
    return ethers.encodeBytes32String(str);
}

async function getSigner() {
    const signers = await ethers.getSigners();
    return signers[0];
}

// ---------------- CONTRACT GETTERS (connected to first signer) ----------------
async function getAccountsContract() {
    const contract = await ethers.getContractAt("Accounts", process.env.ACCOUNTS_ADDRESS);
    const signer = await getSigner();
    return contract.connect(signer);
}

async function getLoansContract() {
    const contract = await ethers.getContractAt("Loans", process.env.LOANS_ADDRESS);
    const signer = await getSigner();
    return contract.connect(signer);
}

async function getCardsContract() {
    const contract = await ethers.getContractAt("Cards", process.env.CARDS_ADDRESS);
    const signer = await getSigner();
    return contract.connect(signer);
}

async function getAuditContract() {
    const contract = await ethers.getContractAt("Audit", process.env.AUDIT_ADDRESS);
    const signer = await getSigner();
    return contract.connect(signer);
}

module.exports = {
    getAccountId,
    getAccountsContract,
    getLoansContract,
    getCardsContract,
    getAuditContract,
    getSigner,
    ethers
};
