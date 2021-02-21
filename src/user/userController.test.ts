import request from 'supertest';
import app from '../server';
import { cleanup, populateCoupons } from '../test/populateMockDb';

// TODO: It needed more tests
describe('user controller', () => {
  it('should return valid response', async(done) => {
    populateCoupons('test', 100);
    request(app)
      .get(`/api/v1/user/get_coupon/user_id/test/customer_id/test`)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) { return done(err); }
        cleanup();
        done();
      });
    });
});
