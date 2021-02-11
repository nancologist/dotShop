# dotShop

## 1. Install and run the project

### 1.1. Install
* You should have already installed the NodeJS on your machine. check this [link](https://nodejs.org/en/).

### 1.2. Run Project
1. ``cd dotshop/backend``
2. ``npm start`` (runs on localhost port=8989)
3. ...

___

## 2. Dependencies

### 2.1. Backend
* ``nodemon`` (Dev Dependency) : to hot reload the nodejs application.
* ``express`` : Web framework to handle route, requests and so on.
* ``body-parser`` to handle the body of requests and parse the data stream.

### 2.2. Frontend

___

## 3. Author Notes

__FakeDB vs MongoDB:__
The goal of the project is to show that models follow the OOP paradigm, so I will use a FakeDB instead of my preference (MongoDB on cloud) to present the instantiation of models every time when the server starts. So by terminating the server the FakeDB will reset. Otherwise by using a real DB by every run of the server the datasets (SQL) or documents (NoSQL) will be appended to DB.

__Admin Methods:__  
the methods in the ``Product`` class which are annotated with ``// admin`` can be seen as an extension of project. But having admin functionalities is not a main demand. The methods have been implemented for demonstration.

___

## 4. Possible Enhancements

* Implementing a database (MongoDB or MySQL for example)
* Admin Panel to update, delete or create ``Products``.

___
