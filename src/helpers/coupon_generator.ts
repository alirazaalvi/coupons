import { Coupon } from '../shared/coupon_model';
import { v4 as uuid } from 'uuid';

/**
 * Method to generate the list of coupons to be used by customer
 * @param {string} customerId - Id of the customer user belongs to
 * @param {number} expiryInDays - Number of days coupons to be added to coupons expiry
 *
 * @returns {Coupon} coupon - Returns a single coupon
 */
export const getCoupon = (customerId: string, expiredInDays: number = 30): Coupon => {
  const today = new Date();
  return {
      id: uuid(),
      customerId,
      userId: '',
      couponCode: Math.random().toString(36).substring(7),
      expiry: today.setDate(today.getDate() + expiredInDays).toString(),
  }
};

/**
 * Method to generate the list of coupons to be used by customer
 * @param {string} customerId - Id of the customer user belongs to
 * @param {number} quantity - Number of coupons to be generated
 *
 * @returns {Coupon} coupon - Returns a list of coupons
 */
export const generateCoupons = (customerId: string, quantiy: number = 100) => {
    let coupons: Coupon[] = [];
    coupons = [...Array(quantiy)].map(() => getCoupon(customerId));
    return coupons;
};
