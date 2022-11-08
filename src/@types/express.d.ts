type ClientVersion = Record<'major' | 'minor' | 'patch', number>

declare namespace Express {
	interface Request {
		// Ignore required because of this janky override
		// You need to import user anywhere you want access to it.

		// TODO: Use actual type assertion
		user?: any
		tokenPhoneNumber?: string
		clientVersion: ClientVersion
	}
}
