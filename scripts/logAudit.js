/*
const { getAuditContract, getAccountId, ethers } = require("./utils");

async function main(accountName = "accounts_test_1", action = "test_action", amount = "0") {
    const Audit = await getAuditContract();
    const accountId = getAccountId(accountName);

    const tx = await Audit.logAction(action, accountId, ethers.parseEther(amount));
    await tx.wait();

    console.log(`Audit logged for ${accountName}, action: ${action}, amount: ${amount}`);
}

main(process.argv[2], process.argv[3], process.argv[4]).catch((e) => { console.error(e); process.exit(1); });