# Backend application based on Node.js and express

## Technology stack
  1. Node.js and express
  2. MongoDB and mongoose


## Initialization
1. install the node.js with npm as recommended at `https://nodejs.org/en/`
2. create a new folder for a new project
3. create a new `index.js` file in this folder  
4. in `index.js`, initialize `npm` with 
 the terminal command `npm init`
 5. install express library with the terminal command `npm i -S express`
 6. add the `express` library to `index.js` with the `require` method and use it to create an `app` server constant on whatever port

 ## Connect to MongoDB
 1. create an account and a new DB as recommended at `https://www.mongodb.com/`
 2. install `mongoose` to access your MongoDB and `body-parser` to access the JSON data from the frontend with the terminal command `npm i -S mongoose body-parser`
 3. connect MongoDB and handle JSON data in `index.js` file
 4. use `mongodb+srv://MICHVAL:<password>@cluster0.tyyycpq.mongodb.net/test` connection url in `mongoose.connect` method
 5. use body-parser in `app.use` method

 ## Create CRUD APIs
 1. create the `models` folder for APIs schemas objects
 2. create the `controllers` folder for `response/request` interaction with frontend
 3. create `routes` folder for define the all endpoints