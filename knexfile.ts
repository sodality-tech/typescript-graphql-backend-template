import path from 'path'

interface ConnectionConfig {
	client: string
	connection: {
		connectionString: string | undefined
		ssl?: { rejectUnauthorized: boolean }
	}
	migrations: {
		tableName: string
		directory: string
	}
}

const connectionConfig: ConnectionConfig = {
	client: 'pg',
	connection: {
		connectionString: process.env.DATABASE_URL,
		// ssl: {
		// 	rejectUnauthorized: false,
		// },
	},
	migrations: {
		tableName: 'knex_migrations',
		directory: path.join(__dirname, 'src', 'db', 'migrations'),
	},
}

export default connectionConfig
