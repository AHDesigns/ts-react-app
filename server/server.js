require('dotenv').config();
const express = require('express');
const { join }  = require('path');
const bodyParser = require('body-parser');
const request = require('request');

const port = 3001;
const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/dist', express.static(join(__dirname, '../dist/dist')));

app.set('views', join(__dirname, 'views'));

app.get('/', (req, res) => {
  return res.sendFile(join(__dirname, '../public/index.html'));
});

app.post('/git', (req, res) => {
  const options = {
    method: 'POST',
    uri: 'https://api.github.com/graphql',
    body: req.body,
    headers: {
      'User-Agent': 'Pancake',
      Authorization: `bearer ${process.env.GITHUB_TOKEN}`
    },
    json: true
  };

  request(options, (err, reqRes, body) => {
    if (err) {
      console.log(err);
    } else {
      res.json(body)
    }
  })
})

app.listen(port, () => {
      console.log('Now listening on port', port);
});