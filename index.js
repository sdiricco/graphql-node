const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require('cors')

// Definisci uno schema GraphQL
const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

// Definisci un resolver
const root = {
    hello: () => 'Hello world!'
};

// Configura Express per usare GraphQL
const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => console.log('Server GraphQL in esecuzione su http://localhost:4000/graphql'));
