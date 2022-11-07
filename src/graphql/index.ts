import { ApolloServer } from 'apollo-server-express'
import context from './context'
import schema from './schema'

const apolloServer = new ApolloServer({
	schema,
	context,
	// playground: env.development,
})

export default apolloServer
