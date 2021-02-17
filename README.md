A Full-stack Application built using MERN Stack (MongoDB, Express, Node for the backend and React for the front end).
<br /><br />
Live URL - https://fervent-banach-514204.netlify.app/
<br /><br />
Please find the server side code- https://github.com/SarveshKadam/Relationship-Builder-Server
<br /><br />
In this App, we can create a Person Record and Relation record between two Persons and establish the degree of separation between two persons.

Here a screen shot:

![degreeof](https://user-images.githubusercontent.com/66166738/107911458-a8999080-6f82-11eb-84f7-b4c5a24b58c7.png)
<br />
### Architecture:

Source code is differentiated into two files server and client.
<br />

### Server:-
<br />
The Backend API is built using NodeJS, Express, and MongoDB as the database, and the server-side code is deployed on Heroku.
<br /><br />
Server Source Code: https://github.com/SarveshKadam/Relationship-Builder-Server
<br /><br />
The architecture is mainly divided into two folders Model for handling the database structure and Route which acts as a controller that exposes resources using REST API.
The database contains two tables "Person" and the "Relation". <br />
The data is structured using Mongoose Schema and the model acts as an interface to perform the query operations.
Using the model, the API is built using routes and HTTP actions/verbs with the help of Express.js.
<br /><br />
Person List API - https://relationship-degree-app.herokuapp.com/persons
<br />
Relations List API - https://relationship-degree-app.herokuapp.com/relations
<br /><br />
Here's a look at the relations API

![API](https://user-images.githubusercontent.com/66166738/107912535-aafcea00-6f84-11eb-885b-b8605c2fe1b2.PNG)

### Client:-
The Client-side is built using React.js. It is deployed on Netlify.
<br />
Client Source Code: https://github.com/SarveshKadam/Relationship-Builder-Client
<br /><br />
Different pages are handled using Components structure.
<br /><br />
• Person Form Component
<br /><br />
• Relationship Form Component
<br /><br />
• Degree of Separation Component
<br /><br />
The entire application is built using Functional Components and using React Hooks (useState and useEffect)
The routing and navigation are taken care of by using React Router.<br />
The APIs are fetched from the server-side using the Axios NPM Module into different components as per the requirement and the CRUD(Create, Read, Update and Delete) is performed using the Endpoints and HTTP actions with the assistance of React State Management.
<br />
Live Application:- https://fervent-banach-514204.netlify.app/
<br />
#### What AWS services you would use if it was accepting 1M requests every day?
<br />
While preparing for my CCP(Certified Cloud Practioner) Exam, I had a chance to go through an overview of some of the AWS services.<br />
In this scenario for scaling up to 1M requests Service Oriented Architecture(SOA).In SOA, we create individual services and each service can scale independently.
We can use the following AWS services to implement SOA. <br />
• AWS Lambda:-
<br />
AWS Lambda is a compute service that lets you run code without provisioning or managing servers. As it is a pay-as-you-need service it only executes only when needed and scales automatically

• Amazon Simple Notification Service (SNS):- <br />
We can message a large number of subscribers. This may not be related to this application but can be used for scalable applications.

