const express = require('express');
const path = require('path');
const app = express();
const Alpaca = require('@alpacahq/alpaca-trade-api');
const alpaca = new Alpaca({
  keyId: process.env.ALPACA_KEYID,
  secretKey: process.env.ALPACA_SECRETKEY,
  paper: process.env.ALPACA_PAPER,
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/data/ticker/:ticker', async function (req, res) {
  try {
    const barset = await alpaca.getBars(
        'minute',
        req.params.ticker,
        {
            limit: 1
        }
    );
    const price = barset[req.params.ticker] && barset[req.params.ticker][0] && barset[req.params.ticker][0].c
      ? barset[req.params.ticker][0].c
      : 0;

    const result = {
      ticker: req.params.ticker,
      price
    };
    return res.send(result);
  }
  catch (error) {
    console.log(error);
  }
});

app.listen(process.env.PORT || 8080);
