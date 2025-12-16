const hre = require("hardhat");
require("dotenv").config();

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying with:", deployer.address);

    // Deploy AccountRegistry (identity abstraction)
    const AccountRegistry = await hre.ethers.getContractFactory("AccountRegistry");
    const accountRegistry = await AccountRegistry.deploy();
    await accountRegistry.waitForDeployment();
    const ACCOUNT_REGISTRY_ADDRESS = await accountRegistry.getAddress();
    console.log("AccountRegistry deployed at:", ACCOUNT_REGISTRY_ADDRESS);

    // Deploy Accounts
    const Accounts = await hre.ethers.getContractFactory("Accounts");
    const accounts = await Accounts.deploy();     // ❗ no arguments
    await accounts.waitForDeployment();
    const ACCOUNTS_ADDRESS = await accounts.getAddress();
    console.log("Accounts deployed at:", ACCOUNTS_ADDRESS);

    // Deploy Loans
    const Loans = await hre.ethers.getContractFactory("Loans");
    const loans = await Loans.deploy();           // ❗ no arguments
    await loans.waitForDeployment();
    const LOANS_ADDRESS = await loans.getAddress();
    console.log("Loans deployed at:", LOANS_ADDRESS);

    // Deploy Cards
    const Cards = await hre.ethers.getContractFactory("Cards");
    const cards = await Cards.deploy();           // ❗ no arguments
    await cards.waitForDeployment();
    const CARDS_ADDRESS = await cards.getAddress();
    console.log("Cards deployed at:", CARDS_ADDRESS);

    // Deploy Audit
    const Audit = await hre.ethers.getContractFactory("Audit");
    const audit = await Audit.deploy();           // ❗ no arguments
    await audit.waitForDeployment();
    const AUDIT_ADDRESS = await audit.getAddress();
    console.log("Audit deployed at:", AUDIT_ADDRESS);

    // Linking dependencies
    const tx1 = await loans.setAccountsContract(ACCOUNTS_ADDRESS);
    await tx1.wait();

    const tx2 = await cards.setAccountsContract(ACCOUNTS_ADDRESS);
    await tx2.wait();

    console.log("Contracts linked successfully!");

    console.log("\n=== SAVE THESE IN .env ===");
    console.log(`ACCOUNT_REGISTRY_ADDRESS="${ACCOUNT_REGISTRY_ADDRESS}"`);
    console.log(`ACCOUNTS_ADDRESS="${ACCOUNTS_ADDRESS}"`);
    console.log(`LOANS_ADDRESS="${LOANS_ADDRESS}"`);
    console.log(`CARDS_ADDRESS="${CARDS_ADDRESS}"`);
    console.log(`AUDIT_ADDRESS="${AUDIT_ADDRESS}"`);
}

main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
