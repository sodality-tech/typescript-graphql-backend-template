import { makeExecutableSchema } from '@graphql-tools/schema'
import { readFileSync } from 'fs'
import { join } from 'path'
import resolvers from './resolvers'

const rawSchema = readFileSync(join(__dirname, './typedefs/schema.graphql'), {
	encoding: 'utf8',
})

const schema = makeExecutableSchema({
	typeDefs: rawSchema,
	resolvers,
})

export default schema
