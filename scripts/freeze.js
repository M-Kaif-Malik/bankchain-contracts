// const { getAccountsContract, getAccountId } = require("./utils");

// async function main(accountName = "accounts_test_1", freeze = true) {
//     const { Accounts } = await getAccountsContract();
//     const accountId = getAccountId(accountName);

//     const tx = await Accounts.setFrozen(accountId, freeze);
//     await tx.wait();

//     console.log(`Account ${accountName} frozen:`, freeze);
// }

// main(process.argv[2], process.argv[3]).catch((e) => { console.error(e); process.exit(1); });

/*
// scripts/freeze.js
const { getContract, getAccountId } = require("./utils");

async function main(accountName = "accounts_test_1", freeze = "true") {
    const { contract: Accounts } = await getContract("Accounts", "ACCOUNTS_ADDRESS");
    const accountId = getAccountId(accountName);

    const tx = await Accounts.setFrozen(accountId, freeze === "true");
    await tx.wait();

    console.log(`${accountName} is now ${freeze === "true" ? "frozen" : "unfrozen"}`);
}

main(process.argv[2], process.argv[3]).catch(e => { console.error(e); process.exit(1); });

*/

const { getAccountsContract, getAccountId } = require("./utils");

async function main() {
    const Accounts = await getAccountsContract();
    const id = getAccountId("accounts_test_1");

    const tx = await Accounts.freeze(id, true);
    await tx.wait();

    console.log("Account frozen");
}

main().catch(console.error);
