import type { ResolverContext } from '../../../@types/graphql'
import API from '../../../generated/schema-types'

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
