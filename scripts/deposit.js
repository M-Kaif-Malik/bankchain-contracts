const { getAccountsContract, getAccountId, ethers } = require("./utils");

async function main(accountName = "accounts_test_1", amount = "0.01") {
    const Accounts = await getAccountsContract();
    const id = getAccountId(accountName);

    const tx = await Accounts.deposit(id, {
        value: ethers.parseEther(amount)
    });

    await tx.wait();
    console.log(`Deposited ${amount} ETH to ${accountName}`);
}

main(process.argv[2], process.argv[3]).catch((e) => { console.error(e); process.exit(1); });
