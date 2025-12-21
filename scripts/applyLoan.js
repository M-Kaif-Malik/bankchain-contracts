const { getLoansContract, getAccountId, ethers } = require("./utils");

async function main(accountName = "accounts_test_1", principal = "1", interest = "0.05") {
    const Loans = await getLoansContract();
    const accountId = getAccountId(accountName);

    const tx = await Loans.applyLoan(
        accountId,
        ethers.parseEther(principal),
        ethers.parseEther(interest)
    );

    const receipt = await tx.wait();

    const event = receipt.events?.find(e => e.event === "LoanApplied");
    if (event && event.args) {
        console.log(`LoanApplied: loanId=${event.args.loanId.toString()}, account=${accountName}`);
    } else {
        console.log("Loan applied but LoanApplied event not found in receipt.");
    }
}

main(process.argv[2], process.argv[3], process.argv[4]).catch((e) => { console.error(e); process.exit(1); });
