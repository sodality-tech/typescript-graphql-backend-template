import { ResolverContext } from '../@types/graphql'

const context = (ctx: ResolverContext) => {
	const { req } = ctx

	return {
		user: req.user,
		clientVersion: req.clientVersion,
		ipAddress: req.get('X-Forwarded-For'),
	}
}

export default context
