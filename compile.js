const path = require('path'); //builds directory path from compile.js to inbox.sol file
const fs = require('fs');
const solc = require('solc');

const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
const source = fs.readFileSync(lotteryPath,'utf8');

 //source code and number of contracts

module.exports = solc.compile(source, 1).contracts[':Lottery'];//allows us to require the compiled file in other files


