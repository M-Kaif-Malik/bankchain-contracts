// const { getAccountsContract, getAccountId } = require("./utils");

// async function main(accountName = "accounts_test_1", amount = "0.5") {
//     const { Accounts } = await getAccountsContract();
//     const accountId = getAccountId(accountName);

//     const tx = await Accounts.withdraw(accountId, ethers.utils.parseEther(amount));
//     await tx.wait();

//     console.log(`Withdraw of ${amount} ETH successful for ${accountName}`);
// }

// main(process.argv[2], process.argv[3]).catch((e) => { console.error(e); process.exit(1); });

// // scripts/withdraw.js
// const { getContract, getAccountId, ethers } = require("./utils");

// async function main(accountName = "accounts_test_1", amount = "0.5") {
//     const { contract: Accounts } = await getContract("Accounts", "ACCOUNTS_ADDRESS");
//     const accountId = getAccountId(accountName);

//     const tx = await Accounts.withdraw(accountId, ethers.parseEther(amount));
//     await tx.wait();

//     console.log(`Withdrew ${amount} ETH from ${accountName}`);
// }

// main(process.argv[2], process.argv[3]).catch(e => { console.error(e); process.exit(1); });

const { getAccountsContract, getAccountId, ethers } = require("./utils");

async function main() {
    const Accounts = await getAccountsContract();
    const id = getAccountId("accounts_test_1");

    const tx = await Accounts.withdraw(id, ethers.parseEther("0.005"));
    await tx.wait();

    console.log("Withdraw complete");
}

main().catch(console.error);
