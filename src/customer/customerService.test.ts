import { getCoupons, insertCoupons } from './customerService';
import testData from '../test/testData.json';
import { db } from '../shared/local_db';

describe('customer service generate coupons', () => {
  it('it should generate coupons', () => {
     const coupons = getCoupons('test', 100);
     expect(coupons.length).toBe(100);
  });

  it('it should return empty list when customer not passed', () => {
    const coupons = getCoupons('');
    expect(coupons.length).toBe(0);
  });
});

describe('customer service insert coupons', () => {
  it('it should insert coupons', () => {
     insertCoupons(testData);
     const coupons = db.getCoupons();
     expect(coupons.length).toBeGreaterThan(1);

     db.clearDb();
  });

  it('it should insert no coupons if not passed', () => {
    insertCoupons([]);
    const coupons = db.getCoupons();
    expect(coupons.length).toBe(0);

    db.clearDb();
  });
});
