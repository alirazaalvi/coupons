import request from 'supertest';
import app from '../server';
import { cleanup } from '../../test/populateMockDb';

// TODO: It needed more tests
describe('customer controller', () => {
  // closing the server
  it('should return valid response', async (done) => {
    request(app)
      .get(`/api/v1/customer/generate_coupons/customer_id/1`)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) { return done(err); }
        cleanup();
        done();
      });
  });
});
