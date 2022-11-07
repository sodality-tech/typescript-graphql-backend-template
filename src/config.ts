const config = {
	nodeEnv: process.env.NODE_ENV ?? 'development',
	port: process.env.PORT ?? 8000,
	databaseUrl: process.env.DATABASE_URL ?? 'postgres://localhost:5432/',
	databaseConnectionLimit: parseInt(
		process.env.DATABASE_CONNECTION_LIMIT ?? '20'
	),

	clientOrigins: {
		development: process.env.DEV_ORIGIN ?? '*',
		production: process.env.PROD_ORIGIN ?? 'none',
	},
}

export default config
