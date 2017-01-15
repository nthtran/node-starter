// @flow

import createServer from '../createServer';
import request from 'supertest';

const server = createServer().listen(3000);

afterAll(() => {
  server.close();
});

describe('createServer', () => {
  it('GET /', async () => {
    const res = await request(server).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toBe('hello world');
  });
});
