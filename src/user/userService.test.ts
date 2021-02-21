import { getCoupon } from './userService';
import { populateCoupons, cleanup } from '../test/populateMockDb';

describe('user service', () => {
  it('should return valid response', () => {
     populateCoupons('test', 100);
     const coupon = getCoupon('abc', 'test');
     expect(coupon.customerId).toEqual(coupon.customerId);
     cleanup();
  });
});
