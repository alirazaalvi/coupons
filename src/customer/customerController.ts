import { Request, Response } from 'express';
import { getCoupons, insertCoupons } from './customerService';
import { Coupon } from '../shared/coupon_model';

/**
 * Api endpoint to generate tokens for customer
 * @param {Object} request - Express request object
 * @param {Object} response - Express response object
 *
 * @returns {Coupon[]} coupons - Returns list of generated coupons
 */
export const generateCoupons = (req: Request, res: Response) => {
  try {
    const customerId = req.params.customer_id;
    const quantityParam = req.params.quantity;

    if (!customerId) {
      return res.status(500).json({ msg: 'Invalid customer id' });
    }

    const quantity = quantityParam ? Number(quantityParam) : 100;

    const coupons: Coupon[] = getCoupons(customerId, quantity);
    insertCoupons(coupons);

    return res.status(200).json({ coupons });
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
};
