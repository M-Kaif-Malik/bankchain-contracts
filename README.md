Bankchain – Modular Banking Smart Contracts (Hardhat)

Bankchain is a modular, secure, and extensible blockchain-based banking system built using Solidity, Hardhat, and OpenZeppelin.
It includes decentralized management of:

Accounts

Deposits / Withdrawals / Transfers

Loan issuance & repayment

Debit card operations

Audit logging

🔗 Contracts Overview
1. Accounts.sol

Handles:

Account creation

Deposits (payable)

Withdrawals

Transfers between accounts

Freeze / unfreeze

Balance checks

2. Loans.sol

Features:

Loan application

Loan approval

Loan repayment (auto-deposits to account)

Integration with Accounts.sol

3. Cards.sol

Supports:

Issue card

Block card

Charge card (withdraw from account)

4. Audit.sol

Provides:

On-chain audit logs for all important actions

📁 Project Structure
bankchain-contracts/
│
├── contracts/
│   ├── Accounts.sol
│   ├── Loans.sol
│   ├── Cards.sol
│   └── Audit.sol
│
├── scripts/
│   ├── createAccount.js
│   ├── deposit.js
│   ├── withdraw.js
│   ├── transfer.js
│   ├── freeze.js
│   ├── checkBalance.js
│   ├── approveLoan.js
│   ├── repayLoan.js
│   ├── blockCard.js
│   ├── issueCard.js
│   ├── chargeCard.js
│   └── logAudit.js
│
├── test/ (optional)
│
├── hardhat.config.js
├── package.json
├── .gitignore
└── README.md

🚀 Installation & Setup
1. Install dependencies
npm install

2. Add your environment variables

Create .env:

PRIVATE_KEY=your_wallet_private_key
ACCOUNT_ADDRESS = hex code of your account after deploying contracts, will change everytime contracts are redeployed or nodes are deleted and resetup
LOAN_ADDRESS = hex code
CARDS_ADDRESS = hex code
AUDIT_ADDRESS = hex code


3. Compile contracts
npx hardhat compile

4. Deploy contracts

(Example only — adjust to your script)

npx hardhat run scripts/deploy.js --network Bankchain

📜 Usage Examples
Create an account:
npx hardhat run scripts/createAccount.js --network Bankchain

Deposit ETH:
npx hardhat run scripts/deposit.js --network Bankchain

Check balance:
npx hardhat run scripts/checkBalance.js --network Bankchain

🛡 Security

Bankchain uses:

OpenZeppelin Ownable

ReentrancyGuard

Strict account ownership checks

Freeze protections for high-risk actions

Modular contract-to-contract calls
