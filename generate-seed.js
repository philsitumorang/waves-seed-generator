const WavesAPI = require('@waves/waves-api');

function generateSeed(net) {
  const Waves = WavesAPI.create(net == 'testnet' ? WavesAPI.TESTNET_CONFIG : WavesAPI.MAINNET_CONFIG);
  return Waves.Seed.create();
}

module.exports = {
  generateSeed
}