// scripts/applyLoan.js
const { getContract, getAccountId, ethers } = require("./utils");

async function main(accountName = "accounts_test_1", principal = "1", interest = "0.05") {
    const { contract: Loans } = await getContract("Loans", "LOANS_ADDRESS");
    const accountId = getAccountId(accountName);

    const tx = await Loans.applyLoan(
        accountId,
        ethers.parseEther(principal),
        ethers.parseEther(interest)
    );

    const receipt = await tx.wait();

    // Event-based extraction for loanId
    const event = receipt.events.find(e => e.event === "LoanApplied");
    if (event) {
        console.log(`Loan applied for ${accountName} with principal ${principal} ETH and interest ${interest} ETH. Loan ID:`, event.args.loanId.toString());
    } else {
        console.log("Loan applied, but could not find LoanApplied event in receipt.");
    }
}

main(process.argv[2], process.argv[3], process.argv[4]).catch((e) => {
    console.error(e);
    process.exit(1);
});
