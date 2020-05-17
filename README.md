
# A GraphQL demo project

A GraphQL demo project created from the LinkedIn Learning course [GraphQL Essential Training](https://www.linkedin.com/learning/graphql-essential-training/).

## Architecture

The project implements a GraphQL API for CRUD operations on data in two storage backends: friends in MongoDB and aliens in SQLite.

The project consists of the following four layers, with each layer depending on the layer below it:

- index.js: the Web layer, based on Express
- schema.js: the interface, defining data types and operations
- resolvers.js: the implementation of the operations
- connectors.js: the ORM layer, using Mongoose as the object document mapper (ODM) and Sequelize for the object-relational mapping (ORM)

## Play with the application

Start MongoDB instance and the Admin Web UI (Mongo Express):

    docker-compose -f stack.yml up

Install dependencies:

    npm install

Start the application:

    npm start

GraphiQL playground:

    http://localhost:8080/graphql

Mongo Express Web UI (user/pass in the stack.yml file):

    http://localhost:8081/

Tear down everything:

    docker-compose -f stack.yml down -v

