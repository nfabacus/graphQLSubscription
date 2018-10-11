import { GraphQLServer, PubSub } from 'graphql-yoga'
import db from './db';
import Query from './resolvers/Query'
import Subscription from './resolvers/Subscription'
import Mutation from './resolvers/Mutation'

const pubsub = new PubSub()

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
        Query,
        Subscription,
        Mutation
    },
    context: {
        db,
        pubsub
    }
})

server.start(() => {
    console.log('The server is up on localhost:4000!')
})