const express = require('express');
const seed = require('./generate-seed');

const app = express();

app.get('/:net', (req, res) => {
  const { net } = req.params;
  if (net === undefined || !['testnet', 'mainnet'].includes(net)) {
    res.send({
      error: "You should pass one of argument: 'testnet' or 'mainnet'"
    });
  } else {
    res.send({
      seed: seed.generateSeed(net)
    });
  }
});

app.listen(3090);