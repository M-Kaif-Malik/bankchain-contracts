/*
const { getCardsContract, ethers } = require("./utils");

async function main(cardId, amount = "1") {
    if (!cardId) {
        console.error("Usage: node chargeCard.js <cardId> <amount>");
        process.exit(1);
    }

    const Cards = await getCardsContract();

    const tx = await Cards.chargeCard(cardId, ethers.parseEther(amount));
    await tx.wait();

    console.log(`Card ${cardId} charged ${amount} ETH.`);
}

main(process.argv[2], process.argv[3]).catch((e) => { console.error(e); process.exit(1); });