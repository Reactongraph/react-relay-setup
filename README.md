# React-relay-setup
Set up sample app for integrating relay with react, fetch and mutate data in that app

### Structure
* app.js : Render view using ReactDOM.render method

* webpack.config.js : State the rules for our babel-loader and give entry point

* .babelrc : Provide the options for babel-loader

* Made data folder with these files

    database.js : Contain all methods thats return or update data on action

    mutation.js : Contain all graphql-relay mutations

    queries.js : Contain all graphql-relay queries

    schema.graphql: Contain all mutation and query types

    schema.js : Export schema by binding all queries provide by queries.js file and mutation provided by mutations.js file

* Set up express server by building server.js file and defining listening port, provide  GraphQL Schema in it by importing schema.js file from data folder

* Set up relay environment in relayEnvironment.js file

##### Set up scripts in package.json file

    "scripts": {
        "start": "babel-node ./server.js",
        "relay": "relay-compiler --src ./js/ --schema ./data/schema.graphql"
    },

* In start script, we add path of server by that, whenever we start our server.js going to start.
* In relay script, we add path of initial folder and schema.graphql file path by that all graphql used type will be define at compile time.

Now, we are ready to use relay in our app, whenever we want to use follow bellow things.

### Use of graphql relay in app

#### import { QueryRenderer, createRefetchContainer, commitMutation  } from 'react-relay'
    * QueryRenderer is the root of a Relay tree. It takes a query, fetches the data and calls the render callback with the data.
    * commitMutation is used for performing mutation it will take relay environment, mutation query and variables as an input.
    * createRefetchContainer is used for refetching query on updation of data

#### Naming Formate: FileName_propName
    mutation and query name should be in this formate

### Run on Local Machine

#### Clone or Download
    Either clone using: git clone https://github.com/Reactongraph/react-relay-setup.git
    Or download zip from clicking on download-zip button in green color giving in top right corner
    
#### Run yarn / npm install
    Install all required node modules mentioned in package.json file
    
#### Run yran relay / npm relay
    Define all specified types for query and mutations and it will create __generated__ folder for each component query and mutation
    
#### Run yarn start / npm start
    Start listening the server
