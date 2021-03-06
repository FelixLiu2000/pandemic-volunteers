# PandemicVolunteers

A webapp that gives vulnerable individuals a platform to request help from others during a pandemic.
Created as a two-person group project for CSC309, using HTML5, CSS3, React, and MaterialUI for the front-end and ExpressJS and MongoDB for the back-end.

* Sample Deployment: guarded-ocean-44632.herokuapp.com

**How to Use the Web App**

If the rightmost tab in the navigation bar is "LOGIN" instead of "PROFILE", then user can only look at the request feed but cannot send or assist requests. 

Click the "LOGIN" tab to register an account, or to login as either a user or an admin. When registering, you will enter:
* mandatory fields including first/last name, username, password, birthday, location, and 
* optionally qualifications, as well as additional information. 

Optionally, login with the hardcoded user pre-populated with profile information. The username is "user", and the password is "user". Click "Login" to login.

After registering or logging in, user can see their profile in "PROFILE" as well as edit them. They can also logout with the "LOGOUT" button in the navigation bar.
- If the user has profile visibility on, all profile categories besides the "Basic Info" and "Preferences" will be made available for other logged in users to view.
- Otherwise, other logged in users can only view the information in the header (name, age, request counts) and their biography.

(Note: the password field can only be used to change one's password.)

A user can:
* browse requests by clicking on "get requests" button
A logged in user can:
* in "FEED":
    * add request
    * View the profile of a request creator by clicking the user's name 
    * applying to help a request by clicking on "assist request" button, and accept incoming request applications. (this part is not finished)
* in "MY REQUESTS", view your sent and accepted requests (this part is not finished)

If the user is an admin, they can delete requests posts and chat messages. Sign into the hardcoded admin account by using the username "admin" and password "admin", and clicking "Admin Login".
