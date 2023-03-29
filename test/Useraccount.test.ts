// import {expect, use} from 'chai';
// import {Contract} from 'ethers';
// import {deployContract, MockProvider, solidity} from 'ethereum-waffle';
// import BankAccount from '../build/SimpleBank.json';

// use(solidity);

// describe('UserAccount', () => {
//   const [wallet, walletTo] = new MockProvider().getWallets();
//   let token: Contract;

//   beforeEach(async () => {
//     token = await deployContract(wallet, BankAccount);
//   });
  
//   it('create account', async () => {
//     expect(await token.createAccount());
//   });

//   it('get balance', async () => {
//     expect(await token.createAccount());
//     expect(await token.getBalance()).to.equal(0);
//   });


//   it('deposit and then getbalance', async () => {
//     expect(await token.createAccount());
//     expect(await token.deposit({value: 50}))
//     expect(await token.getBalance()).to.equal(50);
//   });


//   it('deposit and withdraw then getbalance', async () => {
//     expect(await token.createAccount());
//     expect(await token.deposit({value: 50}))
//     expect(await token.withdraw(20))
//     expect(await token.getBalance()).to.equal(30);
//   });

//   it('Deposit then make a transaction then check balance', async () => {
//     expect(await token.createAccount());
//     await token.deposit({value: 150});
//     expect(await token.makeTransaction(50, {serviceName: 'Translating pdf'}, {serviceType: 'Translating'}));
//     expect(await token.getBalance()).to.equal(100);
//   });

//   it('make multiple transaction then get transactions', async () => {
//     expect(await token.createAccount());
//     await token.deposit({value: 150});
//     expect(await token.makeTransaction(50, 'Translating pdf', 'Translating'));
//     expect(await token.makeTransaction(10, 'Translating pdf', 'Translating'));
//     expect(await token.makeTransaction(10, 'Translating pdf', 'Translating'));
//     expect(await token.makeTransaction(10,  'Translating pdf','Translating'));
//     expect(await token.getBalance()).to.equal(70);
//     expect(await token.getTransactions())
//   });

//   it('Transfer emits event', async () => {
//     await expect(token.transfer(walletTo.address, 7))
//       .to.emit(token, 'Transfer')
//       .withArgs(wallet.address, walletTo.address, 7);
//   });

//   it('Can not transfer above the amount', async () => {
//     await expect(token.transfer(walletTo.address, 1007)).to.be.reverted;
//   });

//   it('Can not transfer from empty account', async () => {
//     const tokenFromOtherWallet = token.connect(walletTo);
//     await expect(tokenFromOtherWallet.transfer(wallet.address, 1))
//       .to.be.reverted;
//   });

//   it('Calls totalSupply on BasicToken contract', async () => {
//     await token.totalSupply();
//     expect('totalSupply').to.be.calledOnContract(token);
//   });

//   it('Calls balanceOf with sender address on BasicToken contract', async () => {
//     await token.balanceOf(wallet.address);
//     expect('balanceOf').to.be.calledOnContractWith(token, [wallet.address]);
//   });
// });