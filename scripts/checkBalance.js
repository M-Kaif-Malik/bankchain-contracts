const { getAccountsContract, getAccountId } = require("./utils");

async function main(accountName = "accounts_test_1") {
    const { Accounts } = await getAccountsContract();
    const accountId = getAccountId(accountName);

    const bal = await Accounts.balanceOf(accountId);
    console.log(`Balance for ${accountName}:`, bal.toString(), "wei");
}

main(process.argv[2]).catch((e) => { console.error(e); process.exit(1); });

/*
// scripts/checkBalance.js
const { getContract, getAccountId, ethers } = require("./utils");

async function main(accountName = "accounts_test_1") {
    const { contract: Accounts } = await getContract("Accounts", "ACCOUNTS_ADDRESS");
    const accountId = getAccountId(accountName);

    const bal = await Accounts.balanceOf(accountId);
    console.log(`${accountName} balance: ${ethers.formatEther(bal)} ETH`);
}

main(process.argv[2]).catch(e => { console.error(e); process.exit(1); });

*/