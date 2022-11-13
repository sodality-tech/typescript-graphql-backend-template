import { Sequelize } from 'sequelize'
import type { Options } from 'sequelize/types'
import config from '../config'
import models from './models'

const connectionConfig: Options = {
	logging: false,
	dialect: 'postgres',
	pool: {
		max: config.databaseConnectionLimit,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
	// dialectOptions: {
	// 	ssl: {
	// 		rejectUnauthorized: false,
	// 	},
	// },
}

const sequelize = new Sequelize(
	process.env.DATABASE_URL as string,
	connectionConfig
)

for (const modelDefiner of models) {
	modelDefiner(sequelize)
}

export default sequelize
