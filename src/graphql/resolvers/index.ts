// Index file for all resolvers.

// Each type should get it's own file in the `graphql/resolvers` directory.
// If a type has a lot of business logic or field resolvers, create a folder
// and an index in the type folder's root.

// Ultimately, all resolvers are imported/exported in this index file

import { userQueries } from './user'

export default {
	Query: {
		...userQueries,
	},
}
