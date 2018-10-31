const { importSchema } = require('graphql-import');
const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const app = express();
const resolvers = require("./resolvers");
const typeDefs = importSchema("schemas/query.graphql");
const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
  });

app.use('/graphql', graphqlExpress(async (request) => ({
	schema: schema,
	context: {

	}
}));
