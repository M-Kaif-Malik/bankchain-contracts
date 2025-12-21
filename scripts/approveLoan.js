const { getLoansContract, ethers } = require("./utils");

async function main(loanId) {
    if (!loanId) {
        console.error("Usage: node approveLoan.js <loanId>");
        process.exit(1);
    }

    const Loans = await getLoansContract();

    // read principal from loan struct
    const loan = await Loans.loans(loanId);
    const principal = loan[1];

    const tx = await Loans.approveLoan(loanId, { value: principal });
    await tx.wait();

    console.log(`Loan ${loanId} approved and funded with principal ${ethers.formatEther(principal)} ETH.`);
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