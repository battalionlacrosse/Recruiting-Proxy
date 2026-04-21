const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();
app.use(cors());
app.get('/fetch', async (req, res) => {
  try {
    const headers = { 'User-Agent': 'Mozilla/5.0' };
    if (req.query.cookie) headers['Cookie'] = req.query.cookie;
    const r = await fetch(req.query.url, { headers });
    res.send(await r.text());
  } catch (e) {
    res.status(500).send(e.message);
  }
});
app.listen(process.env.PORT || 3131, () =>
  console.log('Proxy ready')
);
