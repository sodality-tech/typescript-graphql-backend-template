import { ExpressContext } from 'apollo-server-express'

export interface ResolverContext extends ExpressContext {
	user?: any
	ipAddress: string | undefined
	clientVersion: ClientVersion
}
