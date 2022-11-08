import express from 'express'
import graphqlServer from './graphql'

const app = express()
app.use(express.json())

app.use(express.urlencoded({ extended: false }))
app.disable('x-powered-by')

graphqlServer.start().then(() => {
	graphqlServer.applyMiddleware({
		app,
	})
})

export default app
