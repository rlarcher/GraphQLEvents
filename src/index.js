const { importSchema } = require('graphql-import');
const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const { getDatabaseConnection } = require('./database');
const bodyParser = require('body-parser');

const app = express();
const resolvers = require('./resolvers');
const typeDefs = importSchema('src/schemas/schema.graphql');
const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
});

app.use(bodyParser.json());

app.use('/graphql', graphqlExpress(async (request) => console.log(request) || ({
	schema: schema,
	context: {
		db: getDatabaseConnection(),
	}
})));

app.listen({ port: 4000 }, () =>
  console.log('Server ready at http://localhost:4000')
);
