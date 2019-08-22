const seed = require('./generate-seed');

const net = process.argv[2];
if (net === undefined || !['testnet', 'mainnet'].includes(net)) {
  throw (`
  Error
    - You should pass one of argument: 'testnet' or 'mainnet'
  `);
}

console.log(seed.generateSeed(net));