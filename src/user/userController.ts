import { Request, Response } from 'express';
import { getCoupon } from './userService';

/**
 * Api endpoint to return a single token to user
 * @param {Object} request - Express request object
 * @param {Object} response - Express response object
 *
 * @returns {Coupon} coupon - Returns a single coupon to user
 */

export const fetchCoupon = (req: Request, res: Response) => {
    try {
      const customerId = req.params.customer_id;
      const userId = req.params.user_id;

      if (!customerId || !userId) {
        return res.status(500).json({ msg: 'Invalid request' });
      }

      const coupon = getCoupon(userId, customerId);

      if (coupon) {
        return res.status(200).json({ coupon });
      } else {
        return res.status(404).json({ msg: 'No coupon found.' });
      }

    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
};
