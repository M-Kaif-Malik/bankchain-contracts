const { getContract } = require("./utils");

async function main(cardId = 0) {
    const { contract: Cards } = await getContract("Cards", "CARDS_ADDRESS");

    const tx = await Cards.blockCard(cardId);
    await tx.wait();

    console.log(`Card ${cardId} blocked successfully.`);
}

main(process.argv[2]).catch((e) => { console.error(e); process.exit(1); });

/*
// scripts/blockCard.js
const { getContract } = require("./utils");

async function main(cardId) {
    const { contract: Cards } = await getContract("Cards", "CARDS_ADDRESS");

    const tx = await Cards.blockCard(cardId);
    await tx.wait();

    console.log(`Card ${cardId} blocked`);
}

main(process.argv[2]).catch(e => { console.error(e); process.exit(1); });
*/