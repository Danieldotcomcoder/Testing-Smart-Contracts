import {expect, use} from 'chai';
import {Contract} from 'ethers';
import {deployContract, MockProvider, solidity} from 'ethereum-waffle';
import BankAccount from '../build/SimpleBank.json';

use(solidity);

describe('Bank Account', () => {
  const [wallet] = new MockProvider().getWallets();
  let token: Contract;

  beforeEach(async () => {
    token = await deployContract(wallet, BankAccount);
  });
  
  it('create account', async () => {
    expect(await token.createAccount());
  });

  it('get balance', async () => {
    expect(await token.createAccount());
    expect(await token.getBalance()).to.equal(0);
  });


  it('deposit and then getbalance', async () => {
    expect(await token.createAccount());
    expect(await token.deposit({value: 50}))
    expect(await token.getBalance()).to.equal(50);
  });


  it('deposit and withdraw then getbalance', async () => {
    expect(await token.createAccount());
    expect(await token.deposit({value: 50}))
    expect(await token.withdraw(20))
    expect(await token.getBalance()).to.equal(30);
  });

  it('Deposit then make a transaction then check balance', async () => {
    expect(await token.createAccount());
    await token.deposit({value: 150});
    expect(await token.makeTransaction(50, {serviceName: 'Translating pdf'}, {serviceType: 'Translating'}));
    expect(await token.getBalance()).to.equal(100);
  });

  it('make multiple transaction then get transactions', async () => {
    expect(await token.createAccount());
    await token.deposit({value: 150});
    expect(await token.getBalance()).to.equal(150);
    expect(await token.makeTransaction(50, 'Translating pdf', 'Translating'));
    expect(await token.makeTransaction(10, 'Translating pdf', 'Translating'));
    expect(await token.makeTransaction(10, 'Translating pdf', 'Translating'));
    expect(await token.makeTransaction(10,  'Translating pdf','Translating'));
    expect(await token.getBalance()).to.equal(70);
    expect(await token.getTransactions()).to.be.an('array')
    expect(await token.getTransactions()).to.have.lengthOf(4)
  });

  it('new account have an new address', async () => {
    expect(await token.createAccount());
    expect(token.address).to.equal('0x35dc06263b798f21C268d5aa4BEB73120413E829')
   
  });

  it('new account have an new address', async () => {
    expect(await token.createAccount());
    expect(token.address).to.equal('0x3fD56895aF1191112A4aAe106050237452F3D028')
   
  });
  
});