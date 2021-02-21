import express, { Request, Response, NextFunction} from 'express';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import compression from 'compression';
import cors from 'cors';
import lusca from 'lusca';
import * as customerController from './customer/customerController';
import * as userController from './user/userController';

const app = express();

app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));
app.disable('x-powered-by');

app.use('*', cors());
app.use(compression());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

const apiPrefix = '/api/v1';
app.get('/', (req: Request, res: Response) => res.send(
  `<html>
    <h3>Sample endpoints</h3>
    <ul>
      <li>
        <a href="${apiPrefix}/customer/generate_coupons/customer_id/test/quantity/10">
          Generate Coupons (Customer)
        </a>
      </li>
      <li>
        <a href="${apiPrefix}/user/get_coupon/user_id/test/customer_id/test">
          Get Coupon (User)
        </a>
      </li>
    </ul>
  <html>`
));

app.get(`${apiPrefix}/customer/generate_coupons/customer_id/:customer_id/quantity/:quantity`, customerController.generateCoupons);
app.get(`${apiPrefix}/user/get_coupon/user_id/:user_id/customer_id/:customer_id`, userController.fetchCoupon);

if (process.env.NODE_ENV !== 'test') {
  app.listen(8000, () => console.log('App is listening on port 8000!'));
}

// Exporting the app object so that it will be used for testing
export default app;
