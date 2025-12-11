const { getContract } = require("./utils");

async function main(loanId) {
    const { contract: Loans } = await getContract("Loans", "LOANS_ADDRESS");

    const tx = await Loans.approveLoan(loanId);
    await tx.wait();

    console.log(`Loan ${loanId} approved successfully.`);
}

main(process.argv[2]).catch((e) => { console.error(e); process.exit(1); });

/*
// scripts/approveLoan.js
const { getContract } = require("./utils");

async function main(loanId) {
    const { contract: Loans } = await getContract("Loans", "LOANS_ADDRESS");

    const tx = await Loans.approveLoan(loanId);
    await tx.wait();

    console.log(`Loan ${loanId} approved`);
}

main(process.argv[2]).catch(e => { console.error(e); process.exit(1); });
*/