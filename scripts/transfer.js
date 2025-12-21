// const { getAccountsContract, getAccountId } = require("./utils");

// async function main(fromName = "accounts_test_1", toName = "accounts_test_2", amount = "0.25") {
//     const { Accounts, signer } = await getAccountsContract();

//     const from = getAccountId(fromName);
//     const to = getAccountId(toName);

//   // Make sure accounts exist
//     await (await Accounts.createAccount(from, signer.address)).wait().catch(()=>{});
//     await (await Accounts.createAccount(to, signer.address)).wait().catch(()=>{});

//   // Deposit funds to 'from' for testing
//     await (await Accounts.deposit(from, { value: ethers.utils.parseEther("1") })).wait();

//   // Transfer
//     await (await Accounts.transferFromTo(from, to, ethers.utils.parseEther(amount))).wait();
//     console.log(`Transferred ${amount} ETH from ${fromName} to ${toName}`);
// }

// main(process.argv[2], process.argv[3], process.argv[4]).catch((e) => { console.error(e); process.exit(1); });

// // scripts/transfer.js
// const { getContract, getAccountId, ethers } = require("./utils");

// async function main(fromName = "accounts_test_1", toName = "accounts_test_2", amount = "0.25") {
//     const { contract: Accounts } = await getContract("Accounts", "ACCOUNTS_ADDRESS");

//     const fromId = getAccountId(fromName);
//     const toId = getAccountId(toName);

//     const tx = await Accounts.transferFromTo(fromId, toId, ethers.parseEther(amount));
//     await tx.wait();

//     console.log(`Transferred ${amount} ETH from ${fromName} to ${toName}`);
// }

// main(process.argv[2], process.argv[3], process.argv[4]).catch(e => { console.error(e); process.exit(1); });

const { getAccountsContract, getAccountId, ethers } = require("./utils");

async function main(fromName = "accounts_test_1", toName = "accounts_test_2", amount = "0.002") {
    const Accounts = await getAccountsContract();

    const from = getAccountId(fromName);
    const to = getAccountId(toName);

    const tx = await Accounts.transfer(from, to, ethers.parseEther(amount));
    await tx.wait();

    console.log(`Transferred ${amount} ETH from ${fromName} to ${toName}`);
}

main(process.argv[2], process.argv[3], process.argv[4]).catch((e) => { console.error(e); process.exit(1); });
