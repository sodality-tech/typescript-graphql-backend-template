import { ApolloServer } from '@apollo/server'
import assert from 'assert'
import schema from '../../schema'

const testServer = new ApolloServer({
	schema,
})

beforeAll((done) => {
	testServer.start().then(() => {
		done()
	})
})

afterAll((done) => {
	testServer.stop().then(() => {
		done()
	})
})

test('returns hello with the provided name', async () => {
	const response = await testServer.executeOperation({
		query: 'query CurrentUser { currentUser { id } }',
	})

	// Note the use of Node's assert rather than Jest's expect; if using
	// TypeScript, `assert`` will appropriately narrow the type of `body`
	// and `expect` will not.
	assert(response.body.kind === 'single')

	expect(response.body).not.toBeNull()
	expect(response.body.singleResult.errors).toBeUndefined()
	expect(response.body.singleResult.data?.currentUser).toEqual({
		id: 'user-id',
	})
})
