import { Sequelize } from 'sequelize'
import type { Options } from 'sequelize/types'

const connectionConfig: Options = {
	logging: false,
	dialect: 'postgres',
	pool: {
		max: parseInt(process.env.DATABASE_CONNECTION_COUNT || '20', 10),
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
	dialectOptions: {
		ssl: {
			rejectUnauthorized: false,
		},
	},
}

const connection = new Sequelize(
	process.env.DATABASE_URL as string,
	connectionConfig
)

export default connection
