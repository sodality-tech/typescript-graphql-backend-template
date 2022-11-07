import API from 'generated/schema-types'
import type { ResolverContext } from '../../../@types/graphql'

const currentUser = async (
	_: any,
	args: any,
	ctx: ResolverContext
): Promise<API.User> => {
	return {
		id: 'user-id',
	}
}

export default { currentUser }
