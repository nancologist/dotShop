# <span style="color: #97bf0d;">dot</span><span style="color: #004272;">Shop</span>

## 1. Install and run the project

### 1.1. Install
1. Clone project from [Github](https://github.com/nancologist/dotShop)
2. You should have already installed NodeJS on your machine. check this [link](https://nodejs.org/en/).
3. ``cd dotShop/backend``
4. ``npm install``
5. ``cd ../frontend``
6. ``npm install``

### 1.2. Run Project
1. ``cd dotShop/backend``
2. ``npm start`` (Server runs on localhost:8989)
3. Open a new Terminal window.
4. ``cd dotShop/frontend``
5. ``npm start`` (Webapp runs on localhost:3000)
6. Go to the [http://localhost:3000](http://localhost:3000)

### 1.3. How App works

1. At first there's no product in the shop and no coupon has been registered yet. 

2. As an "Admin" you should add some Coupons and Products to the database. 

3. This action is mocked through a POST request to the ``/admin``. (_See backend/controllers/admin.js_)

4. For that you can use "Admin" tab in the SPA (Single Page Application). There's a button to send this POST request. 

5. Now as a Customer you can go back to the "Shop" tab and add some Products into the cart. (For a better UX there's a sliding-in message when you add a Product to the Cart)

6. Now for the checkout you should go to the "Cart" tab and there you can increase or decrease any item you have added to the cart and/or redeem a coupon to get some offs.

7. Coupon codes will be validated by backend and database.

8. Currently there are 4 coupons, which will be added to database by Admin:
    * New Year - Code: X68SWL
    * Birthday - Code: F32TM9
    * Summer - Code: R5V9BU
    * Easter - Code: K18XQH

You can try one of these codes as a valid coupon.


___

## 2. Dependencies

### 2.1. Backend
* ``express`` : Web framework to handle route, requests and so on.
* ``body-parser`` to handle the body of requests and parse the data stream.
* imagebb.com : to host media files.

### 2.2. Frontend
* ``create-react-app`` : to bootstrap a react project with webpack
* ``axios`` : to handle ajax requests (like fetch API)
* ``react-router-dom`` : simulates having different routes in a SPA like a normal webapp.
* ``redux`` : an independent state manager.
* ``react-redux`` : integrates ``redux`` in a react app.
* ``redux-thunk`` : a middleware to handle async functions for Redux Actions.
* ``@mdi/js`` : Material Design Icons
* ``@mdi/react`` : Helper components to integrate Material Design icons.

___

## 3. Author Notes

__FakeDB vs MongoDB:__
The goal of the project is to show that models follow the OOP paradigm, so I will use a FakeDB instead of my preference (MongoDB on cloud) to present the instantiation of models every time when the server starts. So by terminating the server the FakeDB will reset. Otherwise by using a real DB by every run of the server the datasets (SQL) or documents (NoSQL) will be appended to DB.

__Admin Methods:__  
the methods in the ``Product`` class which are annotated with ``// admin`` can be seen as an extension of project. But having admin functionalities is not a main demand. The methods have been implemented for demonstration.

___

## 4. What This App is NOT.
* No real Admin functionalities (for now).
* No responsive design for small devices (for now).
* No search function for the products.

___

## 5. Possible Enhancements

* Implementing a database (MongoDB or MySQL for example)
* Admin Panel to update, delete or create ``Products``.
* Search functions for the products.

___
 