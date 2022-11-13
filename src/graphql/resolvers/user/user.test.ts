import { ApolloServer } from '@apollo/server'
import assert from 'assert'
import schema from '../../schema'

const testServer = new ApolloServer({
	schema,
})

beforeAll(async () => {
	await testServer.start()
})

afterAll(async () => {
	await testServer.stop()
})

describe('me endpoint', () => {
	const query = 'query Me { me { id } }'

	test('returns hello with the provided name', async () => {
		const response = await testServer.executeOperation({
			query,
		})

		// Note the use of Node's assert rather than Jest's expect; if using
		// TypeScript, `assert` will appropriately narrow the type of `body`
		// and `expect` will not.
		assert(response.body.kind === 'single')

		expect(response.body.singleResult.errors).toBeUndefined()
		expect(response.body.singleResult.data?.me).toEqual({
			id: 'user-id',
		})
	})
})
