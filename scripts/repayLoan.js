/*
*/
const { getLoansContract, ethers } = require("./utils");

async function main(loanId) {
    if (!loanId) {
        console.error("Usage: node repayLoan.js <loanId>");
        process.exit(1);
    }

    const Loans = await getLoansContract();

    const loan = await Loans.loans(loanId);
    const principal = loan[1];
    const interest = loan[2];
    const amountDue = principal + interest;

    const tx = await Loans.repayLoan(loanId, { value: amountDue });
    await tx.wait();

    console.log(`Loan ${loanId} repaid with ${ethers.formatEther(amountDue)} ETH`);
}

main(process.argv[2]).catch((e) => { console.error(e); process.exit(1); });
