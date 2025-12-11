// const { getContract, getAccountId, ethers } = require("./utils");

// async function main(accountName = "accounts_test_1", amount = "1.0") {
//     const { contract: Accounts } = await getContract("Accounts", "ACCOUNTS_ADDRESS");
//     const accountId = getAccountId(accountName);

//     const tx = await Accounts.deposit(accountId, { value: ethers.parseEther(amount) });
//     await tx.wait();

//     console.log(`Deposited ${amount} ETH to ${accountName}`);
// }

// main(process.argv[2], process.argv[3]).catch(e => { console.error(e); process.exit(1); });

const { getAccountsContract, getAccountId, ethers } = require("./utils");

async function main() {
    const Accounts = await getAccountsContract();
    const id = getAccountId("accounts_test_1");

    const tx = await Accounts.deposit(id, {
        value: ethers.parseEther("0.01") // deposit 0.01 ETH
    });

    await tx.wait();
    console.log("Deposit complete");
}

main().catch(console.error);
