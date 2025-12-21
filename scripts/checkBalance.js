/*
*/
const { getAccountsContract, getAccountId, ethers } = require("./utils");

async function main(accountName = "accounts_test_1") {
    const Accounts = await getAccountsContract();
    const accountId = getAccountId(accountName);

    const bal = await Accounts.checkBalance(accountId);
    console.log(`${accountName} balance: ${ethers.formatEther(bal)} ETH`);
}

main(process.argv[2]).catch((e) => { console.error(e); process.exit(1); });