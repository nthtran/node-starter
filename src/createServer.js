// @flow

import { createServer } from 'http';

export default () => createServer((req, res) => {
  if (req.method !== 'GET') {
    return res.end();
  }
  res.end('hello world');
})
