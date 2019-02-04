import express from 'express';
import graphQLHTTP from 'express-graphql';
import path from 'path';
import App from './webpack.config'
import { schema } from './data/schema';

const APP_PORT = 3000;

// Serve static resources
App.use('/', express.static(path.resolve(__dirname, 'public')));

// Setup GraphQL endpoint
App.use(
  '/graphql',
  graphQLHTTP({
    schema: schema,
    pretty: true,
  }),
);

App.listen(APP_PORT, () => {
  console.log(`App is now running on http://localhost:${APP_PORT}`);
});
