import path from 'path'
import config from './src/config'

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
		connectionString: config.databaseUrl,
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
