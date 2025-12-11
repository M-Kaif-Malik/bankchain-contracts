const { getContract } = require("./utils");

async function main(loanId, amount = "1.05") {
    const { contract: Loans } = await getContract("Loans", "LOANS_ADDRESS");

    const tx = await Loans.repayLoan(loanId, ethers.utils.parseEther(amount));
    await tx.wait();

    console.log(`Loan ${loanId} repaid with amount ${amount} ETH`);
}

main(process.argv[2], process.argv[3]).catch((e) => { console.error(e); process.exit(1); });

/*
// scripts/repayLoan.js
const { getContract, getAccountId, ethers } = require("./utils");

async function main(accountName = "accounts_test_1", loanId, amount = "1.05") {
    const { contract: Loans } = await getContract("Loans", "LOANS_ADDRESS");
    const accountId = getAccountId(accountName);

    const tx = await Loans.repayLoan(loanId, ethers.parseEther(amount));
    await tx.wait();

    console.log(`${accountName} repaid ${amount} ETH for loan ${loanId}`);
}

main(process.argv[2], process.argv[3], process.argv[4]).catch(e => { console.error(e); process.exit(1); });

*/
