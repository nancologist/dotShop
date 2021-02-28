# <span style="color: #97bf0d;">dot</span><span style="color: #004272;">Shop</span>

## 0. Hosting
* Server:
    * Deployed on Heroku.com (``package.json`` moved to root directory)

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
    * New Year | Code: X68SWL | 5%
    * Summer | Code: R5V9BU | 12%
    * Birthday | Code: F32TM9 | 6€
    * Easter | Code: K18XQH | 10€

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

### 2.3. Deployment
* Securing Response Headers: ``helmet``

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
* No Authentication and Roles. So customer view and admin view render both at the same time.

___

## 5. Interfaces Between Frontend and Backend

### 5.1. Frontend
Most of the interactions with backend take place in ``forntend/src/store/thunks.js``. Thanks to the ``Redux-Thunk`` middleware it makes an async request possible.  
But there are some a few cases which the interaction with backend takes place in the component itself. Like validating the coupons in ``frontend/src/pages/Cart.js``. In these cases the result or better to say the Response of the Request has a local use in the Component so it would be an overkill to send the request through Redux and take it back from there.

### 5.2. Backend
Like all usual MVC backend apps all the interactions takes place in the controller (``backend/controllers/``).  
It should be noticed that because of CORS-Restriction on Browser, some headers should have been set to allow the CORS for HTTP Requests coming from Frontend. (_Look at ``backend/middlewares/index.js``_)
___

## 6. Design Patterns

### 6.1. Backend
MVC, one of the cleanest way to create the backend application. The View are JSON Responses. Controllers are located in ``backend/controllers/``. They extend a ``BaseController`` class located in ``backend/controllers/index.js``. And the Models are the blueprints for the Entities which we have in the application (products, coupons and orders). CRUD functionalities on the Database take place in the methods of these Model Classes.

### 6.2. Frontend
__Data Down, Action Up__ this is one of the best practices and Design Patterns for the trend frameworks like VueJS, ReactJS and AngularJS.  
For a better explanation I would first explain Stateful and Stateless Components:

* __Stateful Component__: is a component which has own states and modifies and could communicate with backend or state manager (in our case Redux). A good example for such component in our app would be ``Cart.js`` , ``Shop.js``

* __Stateless Component__: is a component which does not have any state and receives its properties from the parent component. This component is the interface and responsible for use interactions with the application and serves as only representation layer. This type of components are also called Dumb Components!  
The benefit of having stateless components is that they are more abstract and can be used throughout the application in different places (__reusability__).

One of the best example in the app is ``<SlidingMsg />`` which is located in ``frontend/src/components/SlidingMsg/SlidingMsg.js`` and I have used it in many places to notify the user about the application responses.

So the concept behind the __Data Down, Action Up__ is to have more Stateless Components
___

## 7. Possible Enhancements

* Implementing a database (MongoDB or MySQL for example)
* Admin Panel to update, delete or create ``Products``.
* Search functions for the products.
* Authentication and Roles.

___

## 8. Screen shots

__Home Page:__
![home-page](https://i.ibb.co/64pT5TP/01.png)

__Shop Page:__
![shop-page](https://i.ibb.co/ZznnkV7/02.png)

__Cart page:__
![cart-page](https://i.ibb.co/YpJF8np/03.png)
 