const { getContract, getAccountId } = require("./utils");

async function main(cardId, merchantName = "merchant_account", amount = "1") {
    const { contract: Cards } = await getContract("Cards", "CARDS_ADDRESS");
    const merchantId = getAccountId(merchantName);

    const tx = await Cards.chargeCard(cardId, merchantId, ethers.utils.parseEther(amount));
    await tx.wait();

    console.log(`Card ${cardId} charged ${amount} ETH to merchant ${merchantName}`);
}

main(process.argv[2], process.argv[3], process.argv[4]).catch((e) => { console.error(e); process.exit(1); });

/*
// scripts/chargeCard.js
const { getContract, getAccountId, ethers } = require("./utils");

async function main(cardId, merchantName = "merchant_test", amount = "0.25") {
    const { contract: Cards } = await getContract("Cards", "CARDS_ADDRESS");
    const { contract: Accounts } = await getContract("Accounts", "ACCOUNTS_ADDRESS");

    const merchantId = getAccountId(merchantName);

    const tx = await Cards.chargeCard(cardId, merchantId, ethers.parseEther(amount));
    await tx.wait();

    console.log(`Charged card ${cardId} ${amount} ETH to merchant ${merchantName}`);
}

main(process.argv[2], process.argv[3], process.argv[4]).catch(e => { console.error(e); process.exit(1); });
*/