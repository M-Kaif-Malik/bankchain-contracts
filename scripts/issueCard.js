const { getContract, getAccountId } = require("./utils");

async function main(accountName = "accounts_test_1", limit = "100") {
    const { contract: Cards } = await getContract("Cards", "CARDS_ADDRESS");
    const accountId = getAccountId(accountName);

    const tx = await Cards.issueCard(accountId, ethers.utils.parseEther(limit));
    const receipt = await tx.wait();

    console.log(`Card issued for ${accountName} with limit ${limit} ETH. Card ID:`, receipt.events[0].args.cardId.toString());
}

main(process.argv[2], process.argv[3]).catch((e) => { console.error(e); process.exit(1); });

/*
// scripts/issueCard.js
const { getContract, getAccountId } = require("./utils");

async function main(accountName = "accounts_test_1", limit = "1.0") {
    const { contract: Cards } = await getContract("Cards", "CARDS_ADDRESS");
    const accountId = getAccountId(accountName);

    const tx = await Cards.issueCard(accountId, ethers.parseEther(limit));
    const receipt = await tx.wait();

    const event = receipt.events.find(e => e.event === "CardIssued");
    if (event) console.log(`Card ${event.args.cardId} issued for ${accountName} with limit ${limit} ETH`);
}

main(process.argv[2], process.argv[3]).catch(e => { console.error(e); process.exit(1); });
*/