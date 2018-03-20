const express = require('express');
const { join }  = require('path');
const request = require('request');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/dist', express.static(join(__dirname, '../dist/dist')));

app.set('views', join(__dirname, 'views'));

app.get('/', (req, res) => {
  return res.sendFile(join(__dirname, '../public/index.html'));
});

app.post('/git', (req, res) => {
  console.log(req.body);
  return res.json({ hi: 'hi' })

})

app.listen(port, () => {
      console.log('Now listening on port', port);
});
