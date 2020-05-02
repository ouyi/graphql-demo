import express from 'express';
import expressGraphQL from 'express-graphql';
import { schema } from './data/schema';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}));

app.listen(8080, () => console.log("Server running on localhost:8080/graphql"));