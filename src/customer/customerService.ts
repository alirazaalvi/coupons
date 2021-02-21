import { db } from './../shared/local_db';
import { generateCoupons } from '../helpers/coupon_generator';
import { Coupon } from '../shared/coupon_model';

/**
 * Method to generate the list of coupons to be used by customer
 * @param {string} customerId - Customer id to add to coupons
 * @param {number} quantity - Number of coupons to be generated
 *
 * @returns {Coupon[]} coupons - Returns list of generated coupons
 */
export const getCoupons = (customerId: string, quantiy: number = 100): Coupon[] => {
  if (!customerId) {
    return [];
  }

  return generateCoupons(customerId, quantiy);
};

/**
 * Method to insert coupons to data storage
 * @param {Coupon[]} coupons - Customer id to add to coupons
 *
 * @returns {void}
 */
export const insertCoupons = (coupons: Coupon[]) => {
  db.insertCoupons(coupons);
};
