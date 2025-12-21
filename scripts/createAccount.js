// // scripts/createAccount.js
// const { getContract, getAccountId } = require("./utils");

// async function main(accountName = "accounts_test_1") {
//     const { contract: Accounts, signer } = await getContract("Accounts", "ACCOUNTS_ADDRESS");
//     const accountId = getAccountId(accountName);

//     const tx = await Accounts.createAccount(accountId, signer.address);
//     await tx.wait();

//     console.log(`Account created for ${accountName}: ${signer.address}`);
// }

// main(process.argv[2]).catch((e) => {
//     console.error(e);
//     process.exit(1);
// });

const { getAccountsContract, getAccountId, getSigner } = require("./utils");

async function main(accountName = "accounts_test_1", ownerAddress) {
    const Accounts = await getAccountsContract();
    const id = getAccountId(accountName);

    const signer = await getSigner();
    const owner = ownerAddress || signer.address || (await signer.getAddress());

    const tx = await Accounts.createAccount(id, owner);
    await tx.wait();

    console.log("Account created:", id, "owner:", owner);
}

main(process.argv[2], process.argv[3]).catch((e) => { console.error(e); process.exit(1); });
