import { GraphQLSchema } from 'graphql';

import Query from './queries';
import Mutation from './mutations';

// bind all queries and mutation in schema

export const schema = new GraphQLSchema({
    query: Query,
    mutation: Mutation,
});