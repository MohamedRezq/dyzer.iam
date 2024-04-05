import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { resolvers } from './graphql/resolvers'
import { typeDefs } from './graphql/schema.graphql'

// Initialize the express app
const app = express()

// Set up Apollo Server
const apolloServer = new ApolloServer({ typeDefs, resolvers })

// Apply the Apollo GraphQL middleware and set the path to /api
apolloServer.applyMiddleware({ app, path: '/api' })

// Set up other middlewares and routes...

// Start the server
const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}${apolloServer.graphqlPath}`))
