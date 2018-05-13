const express = require('express')
const app = express();
const next = require('next')
const dev = process.env.NODE_ENV !== 'production';
const App = next({ dev });
const handle = App.getRequestHandler();
const https = require('https');
const http = require('http');

App.prepare()
.then(() => {
  const server = express()

  server.get('*', (req, res) => {
    return handle(req, res)
  });

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
});