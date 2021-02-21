import { Coupon } from '../shared/coupon_model';
import { db } from '../shared/local_db';

/**
 * Method to generate the list of coupons to be used by customer
 * @param {string} userId - User's id who is asking for coupon
 * @param {string} customerId - Id of the customer user belongs to
 *
 * @returns {Coupon} coupon - Returns a single coupon
 */
export const getCoupon = (userId: string, customerId: string): Coupon | null => {
  try {
    let coupon: Coupon | null = db.getCoupon(userId, customerId);
    if (!coupon) {
      const coupons = db.getCoupons();
      const foundCustomerIndex = coupons.findIndex(x => x.customerId === customerId && !x.userId);
      coupon = db.assignToUser(userId, foundCustomerIndex);
    }
    return coupon;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
