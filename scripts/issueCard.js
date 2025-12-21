/*
const { getCardsContract, getAccountId } = require("./utils");

async function main(accountName = "accounts_test_1") {
    const Cards = await getCardsContract();
    const accountId = getAccountId(accountName);

    const tx = await Cards.issueCard(accountId);
    const receipt = await tx.wait();

    const event = receipt.events?.find(e => e.event === "CardIssued");
    if (event && event.args) {
        console.log(`Card ${event.args.cardId.toString()} issued for ${accountName}`);
    } else {
        console.log("Card issued but CardIssued event not found in receipt.");
    }
}

main(process.argv[2]).catch((e) => { console.error(e); process.exit(1); });