/*
const { getCardsContract } = require("./utils");

async function main(cardId) {
    if (!cardId) {
        console.error("Usage: node blockCard.js <cardId>");
        process.exit(1);
    }

    const Cards = await getCardsContract();

    const tx = await Cards.blockCard(cardId);
    await tx.wait();

    console.log(`Card ${cardId} blocked successfully.`);
}

main(process.argv[2]).catch((e) => { console.error(e); process.exit(1); });