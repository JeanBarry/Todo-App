# Todo App

App to track your todos, complete them and see how much time every task is taking you.

Technologies needed:

* NodeJS
* MongoDB
* NextJS
* Firebase

## Getting started:

1. Populate your .env with the credentials needed to connect to your database, in order to do this we can generate a .env file based on the example

   ```bash
   make copy-env
   ```

2. Create a database called todos with a collection called todos. (Currently only databases with mongo+srv driver work)
3. Proceed to your .env file and fill in the variables needed.

4. Run the application

   ```bash
   make start
   ```
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
