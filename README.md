# Coupons microservice api
Coupons microservice api backend manages the coupon management.

Table of Contents
-----------------

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)

Prerequisites
-------------
- [Node.js 10.0+](http://nodejs.org)

Getting Started
---------------

The easiest way to get started is to clone the repository:
```bash
# Get the latest snapshot
git clone https://github.com/alirazaalvi/coupons.git myproject

# Change directory
cd myproject

# Install NPM dependencies
npm install

# Start and watch the application for development
npm run watch-debug

# Start the application
npm start

# Access the application
http://localhost:8000

# Test
npm test

# Lint
npm run tslint

# Coverage
npm run coverage
```

Project Structure
-----------------

| Name                               | Description                                                  |
| ---------------------------------- | ------------------------------------------------------------ |
| **src/customer**/             | Contains customer module           |
| **src/user**/             | Contains user module           |
| **src/helpers**/       | Utilities methods.
| **src/shared**/         | Contains shared kernel.
| **test**/         | Collection of testing utitlities.
| .eslintrc                          | Rules for eslint linter.
| .gitignore                         | Folder and files ignored by git.
| app.js                             | The main application file.
| package.json                       | NPM dependencies.
| package-lock.json                  | Contains exact versions of NPM dependencies in package.json. |

Api Endpoints
-----------------
 **Generate coupons (Customer)**
----
  Generates a list of coupons.

* **URL**

  api/v1/customer/generate_coupons/customer_id/:customer_id/quantity/:quantity

* **Method:**

  `GET`

*  **URL Params**

   `customer_id=[string]`
   `quantity=[number]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"coupons":[{"id":"d3b1c806-de5e-45cb-ad71-c1ef4a1b7c75","customerId":"test","userId":"","couponCode":"vxh8r","expiry":"1616530368626"},{"id":"421f6d41-3627-4256-b99e-a722642c9311","customerId":"test","userId":"","couponCode":"om9oe8","expiry":"1616530368626"}]}`

* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal server error." }`

* **Sample Call:**
*
   ```postman or browser
   http://localhost:8000/api/v1/customer/generate_coupons/customer_id/test/quantity/2


 **Get coupon (Userr)**
----
  Get a coupon.

* **URL**

  /user/get_coupon/user_id/:user_id/customer_id/:customer_id/quantity/

* **Method:**

  `GET`

*  **URL Params**

   `customer_id=[string]`
   `user_id=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"coupon":{"id":"b0f5e8f6-e8ef-4da5-96a1-70ddecce4130","customerId":"test","userId":"test","couponCode":"mhchri","expiry":"1616530743981"}}`

* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "No coupon found." }`

* **Sample Call:**
*
   ```postman or browser
   http://localhost:8000/api/v1/user/get_coupon/user_id/test/customer_id/test