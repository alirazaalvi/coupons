import { generateCoupons } from '../helpers/coupon_generator';
import { db } from '../shared/local_db';

export const populateCoupons = (customerId: string, quantity: number = 100) => {
    const coupons = generateCoupons(customerId, quantity);
    db.insertCoupons(coupons);
};
export const cleanup = () => db.clearDb();
