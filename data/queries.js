import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  cursorForObjectInConnection,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
  nodeDefinitions,
  toGlobalId,
} from 'graphql-relay';

import {
  author,
} from './database';

// write down Queries here

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: 'author detail',
    fields: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        topic: { type: GraphQLString },
    },
})

export default new GraphQLObjectType({
  name: 'Query',
  fields: {
    author: {
        type: AuthorType,
        resolve: () => author(),
    },
  },
});
