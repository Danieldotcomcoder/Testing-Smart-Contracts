// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

 contract SimpleBank { 
    struct User { 
        address userAddress; uint256 balance; 
    }
    struct Transaction { 
        uint256 amount; string serviceName; string serviceType; 
    } 
    mapping(address => User) private users; 
    mapping(address => Transaction[]) private transactions; 
    function createAccount() public { 
        require(users[msg.sender].userAddress == address(0), "Account already exists"); 
        users[msg.sender] = User(msg.sender, 0); 
    } 
    function deposit() public payable { 
        require(users[msg.sender].userAddress != address(0), "Account does not exist"); 
        users[msg.sender].balance += msg.value;
     } 
    function withdraw(uint256 amount) public {
         require(users[msg.sender].userAddress != address(0), "Account does not exist"); 
         require(users[msg.sender].balance >= amount, "Insufficient balance"); 
         payable(msg.sender).transfer(amount); users[msg.sender].balance -= amount; 
    } 
    function getBalance() public view returns (uint256) {
         require(users[msg.sender].userAddress != address(0), "Account does not exist"); 
         return users[msg.sender].balance; 
    } 
    function makeTransaction(uint256 amount, string memory serviceName, string memory serviceType) public {
         require(users[msg.sender].userAddress != address(0), "Account does not exist"); 
         require(users[msg.sender].balance >= amount, "Insufficient balance"); 
         address payable hardcodedAddress = payable(0x9BfBD205Fbc6df6a36d46E76da63301648444585); 
         users[msg.sender].balance -= amount; transactions[msg.sender].push(Transaction(amount, serviceName, serviceType)); 
         hardcodedAddress.transfer(amount); 
         }
    function getTransactions() public view returns (Transaction[] memory) { 
        require(users[msg.sender].userAddress != address(0), "Account does not exist");
        return transactions[msg.sender];
      } 
    } 
   