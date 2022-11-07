import express from 'express'
import graphqlServer from './graphql'

const app = express()

graphqlServer.start().then(() => {
	graphqlServer.applyMiddleware({
		app,
	})
})

export default app
