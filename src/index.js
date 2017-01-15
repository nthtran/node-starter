// @flow

import createServer from './createServer';

const port = process.env.PORT || 3000;
const server = createServer();

server.listen(port, undefined, undefined, err => {
  if (err) {
    console.error(err);
  }
  if (__DEV__) {
    // webpack flags!
    console.log('> in development');
  }
  console.log(`> listen on port ${port}`);
});
