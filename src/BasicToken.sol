// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

// Example class - a mock class using delivering from ERC20
contract UserAccount { 
    mapping(address => uint256) 
    public balances; mapping(address => Transaction[]) 
    public transactions; 
    struct Transaction { address sender; address receiver; uint256 amount; uint256 timestamp; } 
    function deposit() public payable { 
        balances[msg.sender] += msg.value; 
        transactions[msg.sender].push(Transaction(msg.sender, address(this), msg.value, block.timestamp));
         } 
    function withdraw(uint256 amount) public { 
        require(balances[msg.sender] >= amount, "Insufficient balance"); balances[msg.sender] -= amount; 
        payable(msg.sender).transfer(amount); 
        transactions[msg.sender].push(Transaction(msg.sender, address(this), amount, block.timestamp)); 
        } 
    function transfer(address receiver, uint256 amount) public { 
        require(balances[msg.sender] >= amount, "Insufficient balance"); 
        balances[msg.sender] -= amount; balances[receiver] += amount; 
        transactions[msg.sender].push(Transaction(msg.sender, receiver, amount, block.timestamp)); 
        } 
    function getTransactions() public view returns (Transaction[] memory) { 
        return transactions[msg.sender]; 
        } 
}