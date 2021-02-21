import { getCoupon, generateCoupons } from './coupon_generator';

describe('get coupon', () => {
    it('it should return coupon', () => {
       const coupon = getCoupon('test', 100);
       expect(coupon.customerId).toBe('test');
    });

    it('it should return empty list when customer not passed', () => {
      const coupons = generateCoupons('test', 100);
      expect(coupons.length).toBeGreaterThan(1);
    });
  });
