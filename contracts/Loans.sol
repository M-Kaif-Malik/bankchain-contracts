// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

interface IAccounts {
    function accounts(bytes32 id) external view returns (address, uint256, bool);
    function deposit(bytes32 id) external payable;
}

contract Loans is Ownable {

    constructor() Ownable(msg.sender) {}

    IAccounts accountsContract;

    struct Loan {
        bytes32 accountId;
        uint256 principal;
        uint256 interest;
        bool approved;
        bool repaid;
    }

    mapping(uint256 => Loan) public loans;
    uint256 public loanCounter;

    event LoanApplied(uint256 indexed loanId, bytes32 accountId);
    event LoanApproved(uint256 indexed loanId);
    event LoanRepaid(uint256 indexed loanId);

    function setAccountsContract(address accountsAddr) external onlyOwner {
        accountsContract = IAccounts(accountsAddr);
    }

    function applyLoan(bytes32 id, uint256 principal, uint256 interest) external returns (uint256) {
        loanCounter++;
        loans[loanCounter] = Loan(id, principal, interest, false, false);
        emit LoanApplied(loanCounter, id);
        return loanCounter;
    }

    function approveLoan(uint256 loanId) external onlyOwner payable {
        Loan storage L = loans[loanId];
        require(!L.approved, "Already approved");
        require(msg.value == L.principal, "Principal funding required");

        L.approved = true;

        accountsContract.deposit{value: L.principal}(L.accountId);

        emit LoanApproved(loanId);
    }

    /*
    function approveLoan(uint256 loanId) external onlyOwner {
        loans[loanId].approved = true;
        emit LoanApproved(loanId);
    }
    */

    function repayLoan(uint256 loanId) external payable {
        Loan storage L = loans[loanId];

        require(L.approved, "Not approved");
        require(!L.repaid, "Already repaid");

        uint256 amountDue = L.principal + L.interest;
        require(msg.value == amountDue, "Wrong amount");

        L.repaid = true;

        emit LoanRepaid(loanId);
    }
}
