import { Coupon } from './coupon_model';

interface DB {
   clearDb(): void;
   insertCoupons(coupons: Coupon[]): void;
   getCoupons(): Coupon[];
   getCoupon(userId: string, customerId: string): Coupon | undefined;
   assignToUser(userId: string, index: number): Coupon | undefined;
}

const dbInitializer = (): DB => {
  let data: Coupon[] = [];

  return {
    insertCoupons: (coupons: Coupon[]) => {
      data = [...data, ...coupons];
    },
    getCoupons: (): Coupon[] => (data),
    getCoupon: (userId: string, customerId: string): Coupon => {
      const foundIndex = data.findIndex(x => x.userId === userId && x.customerId === customerId);

      if (!foundIndex) {
        return undefined;
      }

      return data[foundIndex];
    },
    assignToUser: (userId: string, index: number) => {
      if (data[index]) {
        data[index].userId = userId;
        return data[index];
      }

      return undefined;
    },
    clearDb: () => {
      data = [];
    },
  };
};

export const db = dbInitializer();
