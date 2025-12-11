const { getContract, getAccountId } = require("./utils");

async function main(entityName = "entity_1", action = "test_action", txHash = "0x0") {
    const { contract: Audit } = await getContract("Audit", "AUDIT_ADDRESS");
    const entityId = getAccountId(entityName);

    const tx = await Audit.log(entityId, (await Audit.owner()), action, txHash);
    await tx.wait();

    console.log(`Audit logged for entity ${entityName}, action: ${action}`);
}

main(process.argv[2], process.argv[3], process.argv[4]).catch((e) => { console.error(e); process.exit(1); });

/*
// scripts/logAudit.js
const { getContract, ethers } = require("./utils");

async function main(entityId = "entity_test", actorAddress, action = "action_test") {
    const { contract: Audit } = await getContract("Audit", "AUDIT_ADDRESS");

    const tx = await Audit.log(
        ethers.formatBytes32String(entityId),
        actorAddress,
        action,
        ethers.formatBytes32String(Date.now().toString()) // just a txHash placeholder
    );
    await tx.wait();

    console.log(`Audit log created for ${entityId} by ${actorAddress}`);
}

main(process.argv[2], process.argv[3], process.argv[4]).catch(e => { console.error(e); process.exit(1); });
*/