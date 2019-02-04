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
  updateTopic,
} from './database';

// write down mutation here

const GraphQLUpdateTopicMutation =  new GraphQLObjectType({
    name: 'UpdateTopic',
    description: 'update topic',
    fields: { topic: { type: new GraphQLNonNull(GraphQLString) } },
})

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    updateTopic: {
      type: GraphQLUpdateTopicMutation,
      args: {
        topic: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (root, param) => updateTopic(param),
    },
  },
});
