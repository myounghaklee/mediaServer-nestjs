# mediaServer-nestjs

## Install nestjs and any Dependencies
using this cli, we can obtain express web server(default)
```js
npm install @nestjs/common@7.6.17 @nestjs/core@7.6.17 @nestjs/platform-express@7.6.17 reflect-metadata@0.1.13 typescript@4.3.2
```

## Server flow
request 
-> Pipe :  validate date contained in the request
-> Guard : make sure the user is authenticated 
-> Controller : route the request to a particular function
-> Service : run some business logic
-> Repository : access a database

### part of Nest
- controller : handles incoming request
- services : handles data access and business logic
- modules : groups together code
- pipe : validate incoming data
- filters : handles errors that occur during request handlings
- guards : handles authentication
- interceptors : adds extra logic to incoming request or outgoing responses
- repository : handles data stored in a DB

