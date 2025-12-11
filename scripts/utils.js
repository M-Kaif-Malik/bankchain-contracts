const hre = require("hardhat");
const { ethers } = hre;

// Convert string → bytes32
function getAccountId(str) {
    return ethers.encodeBytes32String(str);
}

// ---------------- CONTRACT GETTERS ----------------

async function getAccountsContract() {
    return await ethers.getContractAt(
        "Accounts",
        process.env.ACCOUNTS_ADDRESS
    );
}

async function getLoansContract() {
    return await ethers.getContractAt(
        "Loans",
        process.env.LOANS_ADDRESS
    );
}

async function getCardsContract() {
    return await ethers.getContractAt(
        "Cards",
        process.env.CARDS_ADDRESS
    );
}

async function getAuditContract() {
    return await ethers.getContractAt(
        "Audit",
        process.env.AUDIT_ADDRESS
    );
}

module.exports = {
    getAccountId,
    getAccountsContract,
    getLoansContract,
    getCardsContract,
    getAuditContract,
    ethers
};
