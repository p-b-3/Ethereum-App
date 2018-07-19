const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require("./compile");
//hdwalletprovider specififes which account to unlock and use as source of ether, also specifies what outisde API/node we are going to connect to

const provider = new HDWalletProvider (
    'MY PHRASE',
    'https://rinkeby.infura.io/nDPPq6YVv6laZhoRt9A0'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
   .deploy({ data: bytecode })
   .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};

deploy();
