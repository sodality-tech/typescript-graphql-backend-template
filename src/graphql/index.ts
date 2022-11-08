import { ApolloServer } from 'apollo-server-express'
import { ResolverContext } from '../@types/graphql'
import config from '../config'
import context from './context'
import schema from './schema'

const apolloServer = new ApolloServer<ResolverContext>({
	schema,
	context,
	introspection: config.nodeEnv === 'development',
	plugins: [],
})

export default apolloServer
